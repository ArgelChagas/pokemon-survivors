import {scaleBonus,characterGrowth} from './progressionBalance'
import { ivDeltas } from './ivs'
import { trainingDeltas, EMPTY_TRAINING } from './training'
import { celebrateMastery } from './weaponProgression'
import { canUseType, typesFor } from './pokemonTypes'
import { TYPE_SKILL_META } from '../data/combatExpansion'
import { RARITIES, skillRarity } from './skillRarity'
import { retain } from '../engine/math'
import type { Rng } from '../engine/rng'
import { ITEM_IDS, ITEMS, type ItemDef, type ItemId } from '../data/items'
import { PLAYABLE, type PlayableId } from '../data/hatchlings'
import { MEGAS, type MegaId } from '../data/megas'
import { TYPE_COLORS, type PokeType } from '../data/types'
import { buffDeltas } from './buffs'
import { healPlayer } from './combat'
import { burst } from './effects'
import { rankDeltas } from './meta'
import { raritySkills } from './skillRarity'
import { maxMoveLevel, MOVES, type MoveId } from './moves'
import { stanceStats } from './stance'
import { applyDeltas, BASE_STATS, type StatDelta } from './stats'
import type { Game, Offer, OwnedItem, OwnedMove } from './types'

export const MAX_MOVES = 6
export const MAX_ITEMS = 6

/** EXP needed to go from `level` to `level + 1`. */
export const xpFor = (level: number) =>
  Math.floor(10 + (level - 1) * 11 + Math.max(0, level - 20) * 6 + Math.max(0, level - 40) * 10)

export const gainXp = (g: Game, amount: number) => {
  const p = g.player
  const beforeLevel=p.level
  p.xp += amount * p.stats.growth
  while (p.xp >= p.xpNext) {
    p.xp -= p.xpNext
    p.level++
    p.xpNext = xpFor(p.level)
    g.pendingLevelUps++
  }
  if(p.level!==beforeLevel)recomputeStats(g)
}

export type Loadout = { starter: PlayableId; stage?: number; mega?: MegaId | null; moves: readonly OwnedMove[]; items: readonly OwnedItem[] }

export const loadout = (g: Game): Loadout => ({ starter: g.starter, stage:g.player.stage, mega:g.mega.active > 0 ? g.mega.stone : null, moves: g.player.moves, items: g.player.items })

/** Every upgrade the player could pick right now, with selection weights. */
export const offerPool = ({ starter, stage = 0, mega = null, moves, items }: Loadout): Array<readonly [Offer, number]> => {
  const ownedMoves = new Map(moves.map((m) => [m.id, m.level]))
  const ownedItems = new Map(items.map((i) => [i.id, i.level]))
  const learnset: readonly MoveId[] = raritySkills(starter,stage,mega)
  const learnsetTypes = new Set<PokeType>(typesFor(starter,stage,mega))
  // A base move whose evolution is already owned must not come back as a new move.


  const moveOffers = learnset.flatMap((id): Array<readonly [Offer, number]> => {
    const level = ownedMoves.get(id)
    const rank = id in TYPE_SKILL_META ? TYPE_SKILL_META[id as keyof typeof TYPE_SKILL_META].rank : 0
    const weight = 1 / (1 + Math.max(0,rank-RARITIES.indexOf(skillRarity(starter))))
    if (level === undefined) return moves.length < MAX_MOVES ? [[{ kind:'move',id,level:1 },weight]] : []
    return level < maxMoveLevel(id) ? [[{ kind: 'move', id, level: level + 1 }, 2.8]] : []
  })

  const itemOffers = ITEM_IDS.flatMap((id: ItemId): Array<readonly [Offer, number]> => {
    const level = ownedItems.get(id)
    const def: ItemDef = ITEMS[id]
    if (def.boosts && !learnsetTypes.has(def.boosts)) return []
    if (level === undefined) return items.length < MAX_ITEMS ? [[{ kind: 'item', id, level: 1 }, ['powerTraining','areaTraining','speedTraining','projectileTraining','velocityTraining'].includes(id) ? 3 : 0.8]] : []
    return level < ITEMS[id].levels.length ? [[{ kind: 'item', id, level: level + 1 }, 1]] : []
  })

  return [...moveOffers, ...itemOffers]
}

/**
 * Ready move evolutions come first, then weighted sampling without replacement.
 * Falls back to a healing berry when maxed out.
 */
export const rollOffers = (loadout: Loadout, rng: Rng, count = 3): Offer[] => {
  const pool = [...offerPool(loadout)]
  const picked: Offer[] = []
  while (picked.length < count && pool.length > 0) {
    // A three-card level-up always keeps a weapon choice available despite the larger buff catalogue.
    const preferred = count>=3 ? pool.filter(([o]) => picked.length===0 ? o.kind==='move' && o.level>1 : picked.length===1 ? o.kind==='move' && o.level===1 : o.kind==='item') : []
    const candidates = preferred.length ? preferred : pool
    const total = candidates.reduce((s, [, w]) => s + w, 0)
    let roll = rng() * total
    const selected = candidates[Math.max(0,candidates.findIndex(([,w])=>(roll-=w)<=0))]!
    const index = pool.indexOf(selected)
    picked.push(pool[index]![0])
    pool.splice(index, 1)
  }
  return picked.length > 0 ? picked : [{ kind: 'berry' }]
}

/** Stat deltas a playable Pokémon has at an evolution stage, before held items. */
const starterDeltas = (id: PlayableId, stage: number): StatDelta[] => {
  const starter = PLAYABLE[id]
  return [scaleBonus(starter.stats,.5), ...starter.line.slice(0, stage + 1).map((s) => scaleBonus(s.bonus,.35)),
    {maxHp:stage*12,might:stage*.04,armor:stage*.25,area:stage*.04,speed:stage*2,magnet:stage*10,cooldown:stage*-.01}]

}

/** Player stats of a playable Pokémon at an evolution stage, without items (used by the inspect panel). */
export const starterStats = (id: PlayableId, stage: number) => applyDeltas(BASE_STATS, starterDeltas(id, stage))

/** Rebuilds player stats from starter, Poké Mart ranks, evolution stage, held items, buffs, the Mega form and Aegislash's stance. */
export const recomputeStats = (g: Game) => {
  const p = g.player
  const before = p.stats.maxHp
  const allowed = raritySkills(g.starter,p.stage,g.mega.active > 0 ? g.mega.stone : null)
  const used = new Set(p.moves.filter(m => allowed.includes(m.id)).map(m=>m.id))
  for(const move of p.moves) {
    if(allowed.includes(move.id)) continue
    const replacement = allowed.find(id=>!used.has(id))
    if(replacement) {
      const old = move.id
      move.id = replacement; move.cooldown=0.2; used.add(replacement)
      retain(g.attacks,a=>a.move!==old)
    }
  }
  const deltas = applyDeltas(BASE_STATS, [
    ...starterDeltas(g.starter, p.stage),
    ivDeltas(g.ivs),
    characterGrowth(g.starter,p.level),
    ...rankDeltas(g.ranks),
    ...trainingDeltas(g.training ?? EMPTY_TRAINING),
    ...p.items.filter(i => {const def:ItemDef=ITEMS[i.id];return !def.boosts || canUseType(g,def.boosts)}).flatMap((i) => ITEMS[i.id].levels.slice(0, i.level)),
    ...buffDeltas(g.buffs),
    ...(g.mega.active > 0 && g.mega.stone ? [MEGAS[g.mega.stone].stats] : []),
  ])
  p.stats = stanceStats(deltas, g.special.stance)
  p.stats.maxHp=Math.max(1,Math.round(p.stats.maxHp))
  p.stats.cooldown = Math.max(0.22,p.stats.cooldown)
  p.stats.damageTaken = Math.max(0.25,p.stats.damageTaken)
  p.stats.criticalChance = Math.min(0.6,Math.max(0,p.stats.criticalChance))
  p.stats.lifeSteal = Math.min(0.08,Math.max(0,p.stats.lifeSteal))
  if (p.stats.maxHp > before) p.hp += p.stats.maxHp - before
  p.hp = Math.min(p.hp, p.stats.maxHp)
}

export const applyOffer = (g: Game, offer: Offer) => {
  const p = g.player
  switch (offer.kind) {
    case 'move': {
      if (!canUseType(g,MOVES[offer.id].type)) return
      const owned = p.moves.find((m) => m.id === offer.id)
      if (owned) {
        owned.level = Math.min(maxMoveLevel(offer.id), owned.level + 1)
        owned.cooldown = Math.min(owned.cooldown, 0.15)
        if([4,7,10].includes(owned.level)) {retain(g.attacks,a=>a.move!==owned.id);celebrateMastery(g,owned.id,owned.level)}
      }
      else p.moves.push({ id: offer.id, level: 1, cooldown: 0.2 })
      break
    }
    case 'item': {
      const def: ItemDef = ITEMS[offer.id]
      if(def.boosts && !canUseType(g,def.boosts)) return
      const owned = p.items.find((i) => i.id === offer.id)
      if (owned) owned.level = offer.level
      else p.items.push({ id: offer.id, level: 1 })
      recomputeStats(g)
      break
    }
    case 'berry':
      healPlayer(g, 40)
      g.events.push({ kind: 'heal' })
      break
    case 'evolution':
      if(canUseType(g,MOVES[offer.to].type)) evolveMove(g, offer.from, offer.to)
      break
  }
}

/** Swaps a move for its evolved form in the same slot, with a celebratory burst. */
const evolveMove = (g: Game, from: MoveId, to: MoveId) => {
  const p = g.player
  const owned = p.moves.find((m) => m.id === from)
  if (!owned) return
  owned.id = to
  owned.level = 1
  owned.cooldown = 0.3
  // Drop lingering hitboxes of the old move (e.g. Whirlpool's permanent aura).
  retain(g.attacks, (a) => a.move !== from)
  const colors = [TYPE_COLORS[MOVES[to].type], '#ffffff', '#ffd830']
  burst(g, p.x, p.y - 10, { colors, count: 70, speed: 170, ttl: 0.9, size: 2, drag: 3 })
  burst(g, p.x, p.y - 10, { colors: ['#ffffff', '#fff8c0'], count: 30, speed: 60, ttl: 1.2, gravity: -50 })
  g.shake = Math.max(g.shake, 5)
  g.events.push({ kind: 'moveEvolved', from, to })
}

/** The next evolution, if the player's level has reached it. */
export const pendingEvolution = (g: Game) => {
  const line = PLAYABLE[g.starter].line
  const stage = line[g.player.stage]
  const next = line[g.player.stage + 1]
  return stage && next && typeof stage.evolveAt==='number' && g.player.level >= stage.evolveAt ? { from: stage.dex, to: next.dex } : null
}
