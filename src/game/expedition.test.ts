import { describe, it, expect } from 'vitest'
import { createRng } from '../engine/rng'
import { ENEMIES } from '../data/enemies'
import { CAMPAIGNS, regionalRoster, regionContains, type RegionId } from './regions'
import { attemptCapture, captureChance, newCaptureSave } from './capture'
import { createGame } from './game'
import { spawnEnemy, rebuildGrid } from './enemies'
import { spawnAttack } from './spawn'
import { updateAttacks } from './attacks'
import { killEnemy } from './combat'
import { spawnWaveBoss } from './spawner'
import { moveStats, MOVES, type MoveId } from './moves'
import { BASE_STATS } from './stats'
import { offerPool, rollOffers } from './leveling'
import { startGame, startRecording, parseReplay } from './replay'
import { NO_RANKS } from './meta'

describe('regional campaigns', () => {
  for (const region of Object.keys(CAMPAIGNS) as RegionId[]) {
    it(`${region}: every wave and scheduled boss stays in its region`, () => {
      for (let seed = 0; seed < 30; seed++) {
        const roster = regionalRoster(createRng(seed),region)
        for (const id of [...roster.stages.flatMap(s => s.map(([id]) => id)),...roster.events.filter(id => id !== null)]) expect(regionContains(region, ENEMIES[id].dex)).toBe(true)
        expect(roster.events.at(-1)).toBe(CAMPAIGNS[region].bosses.at(-1))
        expect(roster.stages[0]!.every(([id]) => 'tier' in ENEMIES[id] && Number(ENEMIES[id].tier) === 1)).toBe(true)
      }
    })
    it(`${region}: defeating the final boss wins`, () => {
      const g = createGame('charmander',{ w:640,h:360 },1,NO_RANKS,regionalRoster(createRng(1),region))
      g.time = 900
      const boss = spawnWaveBoss(g,CAMPAIGNS[region].bosses.at(-1)!,900,true)
      expect(boss.boss).toBe(true)
      expect(boss.hp).toBe(10000)
      killEnemy(g,boss)
      expect(g.phase).toBe('victory')
      killEnemy(g,boss)
      expect(g.kills).toBe(1)
    })
  }
  it('keeps the region when recording and restoring a replay', () => {
    const start = { seed:1, starter:'charmander', region:'johto', difficulty:'normal', ranks:NO_RANKS, shiny:false,luckyEgg:false,outbreak:null,lure:false,incense:false,view:{w:640,h:360} } as const
    const replay = parseReplay(startRecording(start).replay)!
    expect(replay.start.region).toBe('johto')
    expect(startGame(replay.start).roster.region).toBe('johto')
  })
})

describe('capture economy', () => {
  it('consumes only the selected ball for the selected target', () => {
    const s = { ...newCaptureSave(),auto:true }
    expect(attemptCapture(s,'rattata',0)).toBeNull()
    const caught = attemptCapture(s,'pidgey',0)!
    expect(caught.save.balls.poke).toBe(9)
    expect(caught.save.caught.pidgey).toBe(1)
    expect(s.balls.poke).toBe(10)
    const failed = attemptCapture(caught.save,'pidgey',0.999)!
    expect(failed.caught).toBe(false)
    expect(failed.save.balls.poke).toBe(8)
    expect(failed.save.caught.pidgey).toBe(1)
  })
  it('stops without balls and makes better balls useful for legendaries', () => {
    const s = { ...newCaptureSave(),auto:true,balls:{poke:0,great:0,ultra:0,master:0} }
    expect(attemptCapture(s,'pidgey',0)).toBeNull()
    expect(captureChance('mewtwo','ultra')).toBeGreaterThan(captureChance('mewtwo','poke'))
    expect(captureChance('mewtwo','master')).toBe(1)
  })
})

describe('stacked skills and reliable hits', () => {
  it('weapons keep cumulative upgrades without hidden damage and projectile multipliers', () => {
    for (const id of Object.keys(MOVES) as MoveId[]) {
      for(let level=2;level<=10;level++) {
        const before = moveStats(id,level-1,BASE_STATS), after = moveStats(id,level,BASE_STATS)
        expect(after.damage).toBeGreaterThanOrEqual(before.damage)
        expect(after.cooldown).toBeLessThanOrEqual(before.cooldown)
        expect(after.area).toBeGreaterThanOrEqual(before.area)
      }
      expect(moveStats(id,10,BASE_STATS).amount).toBeGreaterThanOrEqual(moveStats(id,1,BASE_STATS).amount)
    }
  })
  it('offers the new rarity skills without combination requirements', () => {
    const pool = offerPool({starter:'charmander',moves:[],items:[]})
    expect(pool.some(([o])=>o.kind === 'move' && o.id === 'fireVolley')).toBe(true)
    for(let seed=0;seed<100;seed++) expect(rollOffers({starter:'charmander',moves:[{id:'ember',level:10,cooldown:0}],items:[{id:'charcoal',level:1}]},createRng(seed)).every(o=>o.kind !== 'evolution')).toBe(true)
  })
  it('hits an enemy crossed by a fast projectile between ticks', () => {
    const g = createGame('charmander',{w:640,h:360},1)
    const e = spawnEnemy(g,'rattata',50,0)
    rebuildGrid(g)
    spawnAttack(g,{move:'ember',type:'fire',visual:'ember',x:0,y:-e.radius,shape:{kind:'circle',r:2},motion:{kind:'linear',vx:6000,vy:0},damage:999,ttl:1,pierce:1})
    updateAttacks(g,1/60)
    expect(e.dying).toBe(0)
    expect(g.kills).toBe(1)
  })
})
