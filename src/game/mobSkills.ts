import { ENEMIES, type EnemyDef } from '../data/enemies'
import type { HazardVisual } from '../data/bosses'
import { dirTo } from '../engine/math'
import { spawnHazard } from './bosses'
import { isAsleep } from './status'
import type { Enemy,Game } from './types'

const visualFor=(e:Enemy):HazardVisual=>{
  if(e.types.includes('fire')) return 'fire'
  if(e.types.includes('water')) return 'water'
  if(e.types.includes('electric')) return 'thunder'
  if(e.types.includes('ice')) return 'ice'
  if(e.types.includes('grass') || e.types.includes('bug')) return 'grass'
  if(e.types.includes('steel')) return 'steel'
  if(e.types.includes('dragon')) return 'dragon'
  if(e.types.some(t=>['psychic','ghost','dark','fairy'].includes(t))) return 'psychic'
  return 'rock'
}

/** Regular mobs get type-based, telegraphed abilities with a shared casting budget. */
export const updateMobSkills=(g:Game,dt:number)=>{
  const second=Math.floor(g.time)
  if(g.mobCastWindow?.second!==second) g.mobCastWindow={second,casts:0}
  const limit=g.time>=420 ? 5 : 3
  for(const e of g.enemies) {
    if(e.boss || e.dying>=0 || e.status.stun>0 || isAsleep(e.status)) continue
    const def:EnemyDef=ENEMIES[e.kind]
    if(def.trait || (!e.elite && e.id%3!==0)) continue
    const skill=e.ability ??= {next:e.bornAt+3+(def.dex%7),windup:0,kind:'shot',tx:0,ty:0}
    const visual=visualFor(e)
    if(skill.windup>0) {
      skill.windup=Math.max(0,skill.windup-dt)
      if(skill.windup>0) continue
      const direction=dirTo(e.x,e.y-e.radius,skill.tx,skill.ty)
      if(skill.kind==='shot') {
        const base=Math.atan2(direction.y,direction.x),count=g.time>=300 ? 3 : 1
        for(let i=0;i<count;i++) {
          const angle=base+(i-(count-1)/2)*0.22
          spawnHazard(g,{kind:'shot',visual,x:e.x,y:e.y-e.radius,r:4,
            vx:Math.cos(angle)*105,vy:Math.sin(angle)*105,damage:e.damage*0.8,ttl:3.2,vanishOnHit:true})
        }
      } else if(skill.kind==='dash') {
        // A visible windup precedes a short rush; no teleport onto the player.
        e.kx+=direction.x*210;e.ky+=direction.y*210
        spawnHazard(g,{kind:'strike',visual:'slam',x:skill.tx,y:skill.ty,r:17,
          armAt:0.3,disarmAt:0.48,ttl:0.7,damage:e.damage*0.85})
      }
      continue
    }
    if(g.time<20 || g.time<skill.next || g.mobCastWindow.casts>=limit) continue
    const dx=e.x-g.player.x,dy=e.y-g.player.y
    if(dx*dx+dy*dy>220*220 || dx*dx+dy*dy<24*24) continue
    g.mobCastWindow.casts++
    skill.next=g.time+(e.elite ? 6 : 9)+(def.dex%4)
    skill.tx=g.player.x;skill.ty=g.player.y-g.player.radius
    skill.kind=e.types.some(t=>['rock','ground','ice','psychic','ghost'].includes(t)) ? 'strike'
      : e.types.some(t=>['fighting','flying','normal'].includes(t)) ? 'dash' : 'shot'
    if(skill.kind==='strike') {
      spawnHazard(g,{kind:'strike',visual,x:skill.tx,y:skill.ty,r:e.elite ? 23 : 18,
        armAt:0.95,disarmAt:1.12,ttl:1.35,damage:e.damage})
    } else {
      skill.windup=0.9
      // A harmless warning circle marks the caster and the locked target.
      spawnHazard(g,{kind:'strike',visual,x:e.x,y:e.y-e.radius,r:e.radius+5,
        armAt:Infinity,disarmAt:Infinity,ttl:0.9,damage:0})
      if(skill.kind==='dash') spawnHazard(g,{kind:'strike',visual:'slam',x:skill.tx,y:skill.ty,r:17,
        armAt:Infinity,disarmAt:Infinity,ttl:0.9,damage:0})
    }
  }
}
