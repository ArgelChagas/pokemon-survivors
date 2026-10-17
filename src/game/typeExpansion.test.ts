import { describe,it,expect } from 'vitest'
import { PLAYABLE, type PlayableId } from '../data/hatchlings'
import { MEGAS, type MegaId } from '../data/megas'
import { ENEMIES, type EnemyId } from '../data/enemies'
import { ITEMS, type ItemDef } from '../data/items'
import { POKE_TYPES } from '../data/types'
import { TYPE_SKILL_META, TYPE_BUFF_META } from '../data/combatExpansion'
import { bodyOf } from '../data/bodies'
import { createRng } from '../engine/rng'
import { createGame,step } from './game'
import { MOVES,moveStats, type MoveId } from './moves'
import { typesFor,playerTypes } from './pokemonTypes'
import { applyOffer,offerPool,recomputeStats } from './leveling'
import { raritySkills } from './skillRarity'
import { spawnEnemy } from './enemies'
import { spawnAttack } from './spawn'
import { spawnWaveBoss } from './spawner'
import { CAMPAIGNS,regionalRoster,regionContains, type RegionId } from './regions'
import { openPortal } from './riftPortal'
import { enterArena } from './riftArena'
import { continueEndless,updateEndless } from './endlessSystem'
import { resolveSpecial } from './special'
import { damageEnemy,killEnemy } from './combat'
import { updateBosses } from './bosses'
import { NO_RANKS } from './meta'

describe('strict Pokémon typing',()=>{
  for(const id of Object.keys(PLAYABLE) as PlayableId[]) {
    it(`${id}: every evolution offers only its own types and compatible buffs`,()=>{
      for(let stage=0;stage<PLAYABLE[id].line.length;stage++) {
        const types=typesFor(id,stage)
        const pool=offerPool({starter:id,stage,moves:[],items:[]})
        const skills=pool.flatMap(([o])=>o.kind==='move' ? [o.id] : [])
        expect(skills.length).toBeGreaterThanOrEqual(6)
        for(const skill of skills) expect(types).toContain(MOVES[skill].type)
        for(const [offer] of pool) if(offer.kind==='item') {
          const buff:ItemDef=ITEMS[offer.id]
          if(buff.boosts) expect(types).toContain(buff.boosts)
        }
        expect(types).toContain(resolveSpecial(id,stage).def.type)
      }
    })
  }
  for(const id of Object.keys(MEGAS) as MegaId[]) it(`${id}: Mega special and weapon pool respect its effective types`,()=>{
    const line=MEGAS[id].line,stage=PLAYABLE[line].line.length-1,types=typesFor(line,stage,id)
    expect(types).toContain(resolveSpecial(line,stage,id).def.type)
    for(const skill of raritySkills(line,stage,id)) expect(types).toContain(MOVES[skill].type)
  })
  it('rejects a foreign skill and buff even if supplied directly',()=>{
    const g=createGame('charmander',{w:480,h:270},1)
    applyOffer(g,{kind:'move',id:'waterVolley',level:1})
    applyOffer(g,{kind:'item',id:'waterFocus',level:1})
    expect(g.player.moves.some(m=>m.id==='waterVolley')).toBe(false)
    expect(g.player.items).toHaveLength(0)
    g.player.moves=[{id:'waterVolley',level:1,cooldown:0}]
    step(g,{move:{x:0,y:0},special:false},1/60)
    expect(g.attacks).toHaveLength(0)
  })
  it('preserves weapon levels when a transformation replaces an incompatible type',()=>{
    const g=createGame('charmander',{w:480,h:270},1)
    g.player.stage=2;g.player.moves=[{id:'flyingVolley',level:7,cooldown:0}]
    g.mega.stone='charizardX';g.mega.active=10
    recomputeStats(g)
    expect(g.player.moves[0]!.level).toBe(7)
    expect(playerTypes(g)).toEqual(['fire','dragon'])
    expect(playerTypes(g)).toContain(MOVES[g.player.moves[0]!.id].type)
    expect(g.player.moves[0]!.id).not.toBe('flyingVolley')
  })
})

describe('combat variety',()=>{
  it('provides six new patterns for all 18 types plus species signatures and 67 buffs',()=>{
    expect(Object.keys(TYPE_SKILL_META).filter(id=>!id.startsWith('signature'))).toHaveLength(108)
    expect(Object.keys(TYPE_BUFF_META)).toHaveLength(67)
    for(const type of POKE_TYPES) {
      const skills=Object.values(TYPE_SKILL_META).filter(m=>m.type===type)
      expect(new Set(skills.map(m=>m.pattern)).size).toBe(6)
      expect(Object.values(TYPE_BUFF_META).filter(m=>'type' in m && m.type===type)).toHaveLength(3)
    }
  })
  for(const [id,m] of Object.entries(TYPE_SKILL_META)) it(`${id}: creates visible, correctly typed attacks`,()=>{
    const partner=(Object.keys(PLAYABLE) as PlayableId[]).find(p=>PLAYABLE[p].line.some(s=>s.types.includes(m.type)))!
    const g=createGame(partner,{w:480,h:270},1)
    g.player.stage=PLAYABLE[partner].line.findIndex(s=>s.types.includes(m.type))
    recomputeStats(g)
    for(let i=0;i<6;i++) spawnEnemy(g,'rattata',50+i*20,0)
    const def=MOVES[id as MoveId]
    def.fire(g,moveStats(id as MoveId,1,g.player.stats))
    expect(g.attacks.length).toBeGreaterThan(0)
    expect(g.attacks.every(a=>a.type===m.type)).toBe(true)
    expect(g.attacks.every(a=>a.visual==='typedSkill')).toBe(true)
  })
  it('critical hits, healing and boss-damage passives affect actual combat',()=>{
    const g=createGame('eevee',{w:480,h:270},1)
    g.player.hp=20;g.player.stats.criticalChance=1;g.player.stats.lifeSteal=.08;g.player.stats.bossDamage=.5
    g.rng=()=>0
    const e=spawnEnemy(g,'snorlax',40,0),before=e.hp
    const a=spawnAttack(g,{move:'swift',type:'normal',visual:'star',x:e.x,y:e.y,shape:{kind:'circle',r:4},motion:{kind:'static'},damage:100,ttl:1})
    damageEnemy(g,e,a)
    expect(before-e.hp).toBeGreaterThan(150)
    expect(g.player.hp).toBeGreaterThan(20)
  })
})

describe('region enforcement at every spawn entry',()=>{
  for(const region of Object.keys(CAMPAIGNS) as RegionId[]) {
    const fresh=()=>createGame('charmander',{w:480,h:270},1,NO_RANKS,regionalRoster(createRng(1),region))
    it(`${region}: foreign mobs, summons and bosses cannot escape the regional filter`,()=>{
      const g=fresh()
      for(const id of Object.keys(ENEMIES) as EnemyId[]) {
        const enemy=spawnEnemy(g,id,100,100)
        expect(regionContains(region,ENEMIES[enemy.kind].dex)).toBe(true)
      }
    })
    it(`${region}: regional endless guardian and final boss keep a bounded size`,()=>{
      const g=fresh();g.time=900
      const boss=spawnWaveBoss(g,CAMPAIGNS[region].bosses.at(-1)!,900,true)
      const body=bodyOf(ENEMIES[boss.kind].dex)
      expect(Math.max(body.bodyW,body.bodyH)*boss.scale!).toBeLessThanOrEqual(68.001)
      killEnemy(g,boss);continueEndless(g);g.time=g.endless!.reaperAt;updateEndless(g)
      const guardian=g.enemies.find(e=>e.id===g.endless!.reaperId)!
      expect(regionContains(region,ENEMIES[guardian.kind].dex)).toBe(true)
      killEnemy(g,guardian)
      expect(g.phase).toBe('playing')
    })
    it(`${region}: foreign rifts are blocked before changing the arena`,()=>{
      const g=fresh(),foreign=region==='johto' ? 'rayquaza' : 'lugia'
      openPortal(g,foreign);expect(g.rift.portal).toBeNull()
      enterArena(g,foreign,0,0);expect(g.rift.arena).toBeNull()
    })
  }
  it('a normal Aggron does not fire miniboss attack patterns',()=>{
    const g=createGame('mudkip',{w:480,h:270},1)
    spawnEnemy(g,'aggron',30,0)
    for(let i=0;i<500;i++) updateBosses(g,1/60)
    expect(g.hazards).toHaveLength(0)
  })
})
