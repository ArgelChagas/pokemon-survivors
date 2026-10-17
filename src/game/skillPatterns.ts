import { PLAYABLE } from '../data/hatchlings'
import { elementZone } from './elementGeometry'
import { dirTo, fromAngle, TAU } from '../engine/math'
import { chainDamage, chainTargets } from './moveRules'
import { nearestEnemy } from './queries'
import { spawnAttack } from './spawn'
import { damageEnemy } from './combat'
import type { CastStats, MoveDef, MoveId } from './moves'
import type { Game, Visual } from './types'
import type { PokeType } from '../data/types'
import type { StatusSpec } from './status'
import * as dm from '../engine/dmath'

export type SkillPattern = 'volley' | 'orbit' | 'rain' | 'return' | 'field' | 'chain'
const BASE: Record<SkillPattern, { damage: number; cooldown: number; amount: number; duration: number }> = {
  volley: { damage: 10, cooldown: 1.35, amount: 1, duration: 1.5 },
  orbit: { damage: 8, cooldown: 3.2, amount: 1, duration: 2.6 },
  rain: { damage: 18, cooldown: 3.8, amount: 1, duration: 0.7 },
  return: { damage: 16, cooldown: 2.4, amount: 1, duration: 1.5 },
  field: { damage: 7, cooldown: 4.2, amount: 1, duration: 3.3 },
  chain: { damage: 16, cooldown: 2.5, amount: 2, duration: 0.3 },
}
const typeStatus = (type: PokeType): StatusSpec | undefined => {
  if (type === 'fire') return { kind:'burn',chance:0.25,duration:2.5,power:0.25 }
  if (type === 'poison' || type === 'bug') return { kind:'poison',chance:0.3,duration:3,power:0.2 }
  if (type === 'electric') return { kind:'paralysis',chance:0.22,duration:1.5,power:0 }
  if (type === 'ice' || type === 'water' || type === 'ground') return { kind:'slow',chance:0.45,duration:2,power:0.25 }
  if (type === 'fairy' || type === 'psychic') return { kind:'sleep',chance:0.12,duration:1,power:0 }
  return undefined
}

/** Patterns studied in the local WEAPON_DATA, reimplemented with Pokémon visuals. */
export const patternedSkill = (id: string, name: string, type: PokeType, pattern: SkillPattern): MoveDef => {
  const base = BASE[pattern]
  const fire = (g: Game, s: CastStats) => {
    const p = g.player
    const species=Number(id.replace('signature',''))||PLAYABLE[g.starter].line[p.stage]!.dex
    const mastery=s.mastery ?? 0
    const target = nearestEnemy(g,p.x,p.y,340)
    const aim = target ? dirTo(p.x,p.y-8,target.x,target.y-target.radius) : p.facing
    const angle = dm.atan2(aim.y,aim.x)
    const look = { move:id as MoveId,type,visual:'typedSkill' as Visual,mastery,skillPattern:pattern }
    // Hard ceilings bound persistent effects even with six Lv10 weapons and duration buffs.
    const count = Math.max(1,Math.min(12,Math.floor(s.amount)))
    if (pattern === 'volley' || pattern === 'return') {
      for(let i=0;i<count;i++) {
        const d = fromAngle(mastery>=3 ? i/count*TAU+g.time : angle+(i-(count-1)/2)*0.19)
        spawnAttack(g,{
          ...look,x:p.x,y:p.y-8,shape:{kind:'circle',r:5*s.area},
          motion:pattern === 'return' ? {kind:'boomerang',vx:d.x*s.speed,vy:d.y*s.speed,ax:-d.x*s.speed*1.15,ay:-d.y*s.speed*1.15} : mastery>=1 ? {kind:'homing',vx:d.x*s.speed,vy:d.y*s.speed,speed:s.speed,turn:4,target} : {kind:'linear',vx:d.x*s.speed,vy:d.y*s.speed},
          damage:s.damage,knockback:s.knockback,status:s.status,pierce:pattern === 'return' ? Infinity : s.pierce,
          hitInterval:pattern === 'return' ? 0.55 : Infinity,ttl:Math.min(3,s.duration),
          onHitBurst:mastery>=2 ? {radius:20*s.area,damageFactor:0.3,remaining:2} : undefined,
        })
      }
      return
    }
    if (pattern === 'orbit') {
      // Refresh the constellation instead of stacking an unlimited number of orbits.
      for(const a of g.attacks) if(a.move === id && a.motion.kind==='orbit') { a.pierce=0; a.ttl=Math.min(a.ttl,a.age) }
      for(let i=0;i<count;i++) spawnAttack(g,{
        ...look,orbitVariant:species,x:p.x,y:p.y-8,shape:{kind:'circle',r:8*s.area},
        motion:{kind:'orbit',angle:i/count*TAU,spin:2.5*s.speed/210*(mastery>=1 && i%2 ? -1 : 1),radius:(mastery>=1 && i%2 ? 62 : 40)*s.area},
        damage:s.damage,knockback:s.knockback,status:s.status,hitInterval:0.5,ttl:Math.min(7,s.duration),
      })
      if(mastery>=2) spawnAttack(g,{...look,visual:'typedSkill',elementZone:elementZone(type,species),x:p.x,y:p.y-8,shape:{kind:'circle',r:16},motion:{kind:'follow',ox:0,oy:-8},damage:s.damage*0.6,knockback:70,ttl:0.45,grow:95})
      if(mastery>=3) spawnAttack(g,{...look,elementZone:elementZone(type,species),x:p.x,y:p.y-8,shape:{kind:'circle',r:32*s.area},motion:{kind:'follow',ox:0,oy:-8},damage:s.damage*0.3,hitInterval:0.5,ttl:Math.min(7,s.duration)})
      return
    }
    if (pattern === 'rain' || pattern === 'field') {
      if(!target) return
      if(pattern === 'field') {
        const existing=g.attacks.filter(a=>a.move===id && a.motion.kind==='static' && a.pierce>0)
        const excess=existing.length+Math.min(4,count)-8
        for(let i=0;i<excess;i++) { existing[i]!.pierce=0;existing[i]!.ttl=existing[i]!.age }
      }
      const taken = new Set<number>()
      const cap = pattern === 'field' ? Math.min(4,count) : count
      for(let i=0;i<cap;i++) {
        const foe = nearestEnemy(g,p.x,p.y,340,taken)
        if(!foe) break
        taken.add(foe.id)
        spawnAttack(g,{
          ...look,elementZone:pattern==='field'?elementZone(type,species):undefined,x:foe.x,y:foe.y-foe.radius,shape:{kind:'circle',r:(pattern === 'field' ? 27 : 20)*s.area},
          motion:{kind:'static'},damage:s.damage,knockback:s.knockback,
          activeFrom:pattern === 'rain' ? 0.55 : 0.18,activeUntil:pattern === 'rain' ? 0.7 : Infinity,
          sharedHitInterval:pattern==='field' ? (mastery>=2 ? 0.45 : 0.6) : undefined,
          hitInterval:pattern === 'field' ? (mastery>=2 ? 0.45 : 0.6) : Infinity,ttl:pattern === 'rain' ? 0.85 : Math.min(8,s.duration*(mastery>=2 ? 1.25 : 1)),
          status:pattern==='field' && mastery>=1 ? {kind:'slow',chance:1,duration:1.2,power:0.35} : s.status,
        })
        if(pattern==='rain' && mastery>=1) spawnAttack(g,{...look,x:foe.x+12,y:foe.y-foe.radius,shape:{kind:'circle',r:22*s.area},motion:{kind:'static'},damage:s.damage*0.65,activeFrom:0.9,activeUntil:1.05,ttl:1.2})
        if(pattern==='rain' && mastery>=2) spawnAttack(g,{...look,visual:'typedSkill',elementZone:elementZone(type,species),x:foe.x,y:foe.y-foe.radius,shape:{kind:'circle',r:25*s.area},motion:{kind:'static'},damage:s.damage*0.25,activeFrom:0.7,hitInterval:0.5,ttl:mastery>=3 ? 3 : 1.8})
      }
      if(pattern==='field' && mastery>=3) spawnAttack(g,{...look,visual:'typedSkill',elementZone:elementZone(type,species),x:p.x,y:p.y-8,shape:{kind:'circle',r:42*s.area},motion:{kind:'follow',ox:0,oy:-8},damage:s.damage*0.45,hitInterval:0.5,ttl:Math.min(4,s.duration),status:{kind:'slow',chance:1,duration:1,power:0.4}})
      return
    }
    const targets = chainTargets(g.enemies,p,count+(mastery>=3 ? 3 : 0),280,105*s.area*(mastery>=1 ? 1.4 : 1))
    let from = {x:p.x,y:p.y-8}
    for(const [hop,foe] of targets.entries()) {
      const to = {x:foe.x,y:foe.y-foe.radius}
      const a = spawnAttack(g,{
        ...look,x:to.x,y:to.y,from,shape:{kind:'circle',r:4*s.area},motion:{kind:'static'},
        damage:chainDamage(s.damage,hop,false),knockback:0,status:s.status,
        activeFrom:Infinity,ttl:0.24, // The chain deals damage directly once; its arc is cosmetic.
      })
      damageEnemy(g,foe,a)
      if(mastery>=2) spawnAttack(g,{...look,visual:'typedSkill',elementZone:elementZone(type,species),x:to.x,y:to.y,shape:{kind:'circle',r:18*s.area},motion:{kind:'static'},damage:s.damage*0.3,ttl:0.25,activeUntil:0.06})
      from = to
    }
  }
  return {
    name,type,
    base:{...base,area:1,speed:210,pierce:2,knockback:type === 'fighting' || type === 'rock' ? 65 : 30,statusChance:0,statusDamage:0},
    upgrades:[{damage:1},{area:0.08},{amount:1},{cooldown:-0.1},{damage:2},{duration:0.15},{amount:1},{area:0.1},{damage:2}],
    status:typeStatus(type),fire,
  }
}

