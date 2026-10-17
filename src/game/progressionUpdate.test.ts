import {describe,it,expect} from 'vitest'
import {createGame,step,EVOLUTION_TIME} from './game'
import {dropXp,dropPickup,updatePickups} from './pickups'
import {recomputeStats,applyOffer} from './leveling'
import {EMPTY_TRAINING,buyTraining,parseTraining,trainingPrice} from './training'
import {weaponForm,castWeapon,morphDescription} from './weaponProgression'
import {spawnEnemy} from './enemies'
import {updateMobSkills} from './mobSkills'
import {ENEMIES} from '../data/enemies'
import {NO_RANKS} from './meta'
import {buyBalls,ballPackPrice,newCaptureSave} from './capture'
import {parseReplay,startGame,startRecording} from './replay'
import {bodyOf} from '../data/bodies'
import {spawnWaveBoss} from './spawner'

const fresh=()=>createGame('charmander',{w:640,h:360},1)

describe('comfortable collection and evolution gains',()=>{
  it('collects nearby XP without walking precisely over it',()=>{
    const g=fresh();dropXp(g,80,-6,3)
    for(let i=0;i<45;i++)updatePickups(g,1/60)
    expect(g.pickups).toHaveLength(0);expect(g.player.xp).toBe(3)
  })
  it('collects a touching item immediately, even without attraction',()=>{
    const g=fresh();g.player.hp=10;dropPickup(g,15,-6,'berry');updatePickups(g,1/60)
    expect(g.pickups).toHaveLength(0);expect(g.player.hp).toBeGreaterThan(10)
  })
  it('finishing an evolution increases HP, damage, defense, area and pickup range',()=>{
    const g=fresh(),before={...g.player.stats}
    g.phase='evolving';g.evolution={from:4,to:5,t:EVOLUTION_TIME-1/120}
    step(g,{move:{x:0,y:0},special:false},1/60)
    expect(g.player.stage).toBe(1)
    for(const key of ['maxHp','might','armor','area','magnet'] as const)expect(g.player.stats[key]).toBeGreaterThan(before[key])
  })
  it('does not compound evolution stats on repeated recomputations',()=>{
    const g=fresh();g.player.stage=2;recomputeStats(g);const stats={...g.player.stats}
    recomputeStats(g);expect(g.player.stats).toEqual(stats)
  })
})

describe('per-partner persistent training',()=>{
  it('charges the shown price and raises exactly one rank',()=>{
    const result=buyTraining(200,EMPTY_TRAINING,'power')!
    expect(result.wallet).toBe(200-trainingPrice('power',0));expect(result.ranks.power).toBe(1)
    expect(result.ranks.vitality).toBe(0);expect(EMPTY_TRAINING.power).toBe(0)
  })
  it('rejects insufficient money and caps invalid stored ranks',()=>{
    expect(buyTraining(0,EMPTY_TRAINING,'power')).toBeNull()
    const ranks=parseTraining({power:999,vitality:-1,critical:NaN})
    expect(ranks.power).toBe(10);expect(ranks.vitality).toBe(0);expect(ranks.critical).toBe(0)
    expect(buyTraining(100000,ranks,'power')).toBeNull()
  })
  it('snapshots and restores training in a replay without changing another partner',()=>{
    const training={...EMPTY_TRAINING,power:3,pickup:2}
    const start={seed:1,starter:'charmander',difficulty:'normal',ranks:NO_RANKS,training,region:'kanto',shiny:false,luckyEgg:false,outbreak:null,lure:false,incense:false,view:{w:640,h:360}} as const
    const restored=startGame(parseReplay(startRecording(start).replay)!.start)
    expect(restored.player.stats.might).toBeCloseTo(fresh().player.stats.might+0.06)
    expect(restored.player.stats.magnet).toBe(fresh().player.stats.magnet+16)
    const other=createGame('squirtle',{w:640,h:360},1)
    expect(other.training).toEqual(EMPTY_TRAINING)
  })
})

describe('visible weapon mutations without fusion',()=>{
  it('transforms Ember into Flamethrower at Lv7 without an item or a second slot',()=>{
    const g=fresh();g.time=300;g.player.level=20;g.player.moves=[{id:'ember',level:6,cooldown:0}]
    applyOffer(g,{kind:'move',id:'ember',level:7})
    expect(g.player.items).toHaveLength(0);expect(g.player.moves).toHaveLength(1)
    expect(weaponForm('ember',6)).toBe('ember');expect(weaponForm('ember',7)).toBe('flamethrower')
    castWeapon(g,g.player.moves[0]!)
    expect(g.attacks.some(a=>a.move==='flamethrower')).toBe(true)
    expect(g.events.some(e=>e.kind==='weaponMastery')).toBe(true)
  })
  it('mutates a volley into homing projectiles and then explosive hits',()=>{
    const g=fresh();spawnEnemy(g,'rattata',80,0)
    castWeapon(g,{id:'fireVolley',level:1,cooldown:0})
    expect(g.attacks.every(a=>a.motion.kind==='linear')).toBe(true)
    g.attacks=[];castWeapon(g,{id:'fireVolley',level:4,cooldown:0})
    expect(g.attacks.every(a=>a.motion.kind==='homing')).toBe(true)
    g.time=300;g.player.level=20;g.attacks=[];castWeapon(g,{id:'fireVolley',level:7,cooldown:0})
    expect(g.attacks.every(a=>a.onHitBurst)).toBe(true)
    expect(morphDescription('fireVolley',7)).toContain('explosões')
  })
  it('adds counterrotating orbits and a follow aura at higher ranks',()=>{
    const g=fresh();castWeapon(g,{id:'fireOrbit',level:4,cooldown:0})
    const orbit=g.attacks.filter(a=>a.motion.kind==='orbit')
    expect(orbit.some(a=>a.motion.kind==='orbit' && a.motion.spin<0)).toBe(true)
    expect(orbit.some(a=>a.motion.kind==='orbit' && a.motion.spin>0)).toBe(true)
    g.time=300;g.player.level=20;g.attacks=[];castWeapon(g,{id:'fireOrbit',level:10,cooldown:0})
    expect(g.attacks.some(a=>a.motion.kind==='follow')).toBe(true)
  })
})

describe('stronger, readable mobs',()=>{
  it('uses a gentler opening contact-damage curve',()=>{
    const g=fresh(),e=spawnEnemy(g,'rattata',80,0)
    expect(e.damage).toBeCloseTo(ENEMIES.rattata.damage*1.15)
  })
  it('warns before a mob fires its locked projectile',()=>{
    const g=fresh(),e=spawnEnemy(g,'bellsprout',100,0);e.id=3
    e.ability={next:0,windup:0,kind:'shot',tx:0,ty:0};g.time=30
    updateMobSkills(g,1/60)
    expect(g.hazards.some(h=>h.damage===0)).toBe(true)
    expect(g.hazards.some(h=>h.kind==='shot')).toBe(false)
    updateMobSkills(g,1)
    expect(g.hazards.some(h=>h.kind==='shot' && h.damage>0)).toBe(true)
  })
  it('caps how many mobs can start an ability in one second',()=>{
    const g=fresh();g.time=30
    for(let i=0;i<20;i++){const e=spawnEnemy(g,'bellsprout',100+i,0);e.id=(i+1)*3;e.ability={next:0,windup:0,kind:'shot',tx:0,ty:0}}
    updateMobSkills(g,1/60)
    expect(g.mobCastWindow!.casts).toBe(3)
  })
  it('makes map minibosses visibly larger without exceeding the new cap',()=>{
    const g=fresh(),e=spawnWaveBoss(g,'onix',150),body=bodyOf(95)
    const size=Math.max(body.bodyW,body.bodyH)*e.scale!
    expect(size).toBeGreaterThan(44);expect(size).toBeLessThanOrEqual(58.001)
  })
})

describe('bulk Poké Ball shop',()=>{
  it('applies pack discounts and preserves the source inventory',()=>{
    const s=newCaptureSave(),result=buyBalls(1000,s,'great',10)!
    expect(ballPackPrice('great',10)).toBe(855)
    expect(result.wallet).toBe(145);expect(result.save.balls.great).toBe(10);expect(s.balls.great).toBe(0)
    expect(ballPackPrice('poke',50)).toBe(1125)
  })
  it('rejects negative quantities and unaffordable purchases',()=>{
    expect(buyBalls(1000,newCaptureSave(),'poke',-1)).toBeNull()
    expect(buyBalls(0,newCaptureSave(),'master',1)).toBeNull()
  })
})
