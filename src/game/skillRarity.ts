import {EVOLUTIONS} from '../data/evolutions'
import type { MegaId } from '../data/megas'
import { PLAYABLE, type PlayableId } from '../data/hatchlings'
import { MOVES, type MoveId } from './moves'
import { typesFor } from './pokemonTypes'

export const RARITIES = ['comum', 'incomum', 'raro', 'épico', 'lendário'] as const
export type Rarity = typeof RARITIES[number]
export const rarityOfDex = (dex: number, tier = 1): Rarity =>
  [144,145,146,150,151,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386].includes(dex) ? 'lendário' : RARITIES[Math.min(3, Math.floor((tier - 1) * 0.8))]!
export const skillRarity = (id: PlayableId): Rarity => {
  const def = PLAYABLE[id]
  if ('egg' in def) return ({ common: 'comum', rare: 'raro', ultra: 'épico', epic: 'épico', legendary: 'lendário', friend: 'incomum' } as Record<string, Rarity>)[String(def.egg)] ?? 'raro'
  return 'incomum'
}
/** All independent weapons of the current Pokémon types; rarity weights their draft frequency. */
export const raritySkills = (id: PlayableId, stage = 0, mega: MegaId | null = null): MoveId[] => {
  const types = typesFor(id,stage,mega)
  return (Object.keys(MOVES) as MoveId[]).filter(move => types.includes(MOVES[move].type) && !EVOLUTIONS.some(e=>e.to===move) && (!move.startsWith('signature') || move===`signature${PLAYABLE[id].line[stage]!.dex}`))
}
