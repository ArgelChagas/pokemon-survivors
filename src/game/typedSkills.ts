import { speciesStyle } from '../data/speciesStyle'
import { TYPE_SKILL_META, type TypedSkillId } from '../data/combatExpansion'
import { SPECIES_SIGNATURES,type SignatureId } from '../data/speciesSignatures'
import { patternedSkill } from './skillPatterns'
import type { MoveDef } from './moves'
const makeSkill=(id:string,m:{name:string;type:import('../data/types').PokeType;pattern:import('./skillPatterns').SkillPattern}):MoveDef=>{
  const profile=SPECIES_SIGNATURES[id as SignatureId],dex=Number(id.replace('signature','')),identity=profile?speciesStyle(dex,m.type):null
  const base=patternedSkill(id,identity?.name??m.name,m.type,identity?.pattern??m.pattern)
  if(!profile) return base
  const secondary=patternedSkill(id,m.name,m.type,profile.secondary)
  return {...base,base:{...base.base,damage:base.base.damage*profile.power,cooldown:base.base.cooldown*profile.pace,area:profile.size,speed:base.base.speed*profile.velocity},fire:(g,s)=>{
    const first=g.attacks.length
    base.fire(g,s)
    if(identity) for(const a of g.attacks.slice(first)) {
      if(a.move!==id)continue
      const motion=a.motion
      if(motion.kind==='linear') {
        if(identity.flight==='seek')a.motion={kind:'homing',vx:motion.vx,vy:motion.vy,speed:s.speed,turn:1.1+(dex%5)*.4,target:null}
        else if(identity.flight==='brake')a.motion={kind:'drift',vx:motion.vx*1.15,vy:motion.vy*1.15,drag:1.5+(dex%4)*.4}
        else if(identity.flight==='curve')a.motion={kind:'boomerang',vx:motion.vx,vy:motion.vy,ax:-motion.vy*.65,ay:motion.vx*.65}
      } else if(motion.kind==='orbit'){motion.radius*=identity.reach;motion.spin=identity.spin*(dex%2?-1:1)}
      else if(motion.kind==='boomerang'){motion.ax*=identity.reach;motion.ay*=identity.reach}
      if(a.skillPattern==='field' && a.activeFrom!==Infinity){a.activeFrom=.12+(dex%6)*.045;a.hitInterval=.52+(dex%5)*.04;a.sharedHitInterval=a.hitInterval}
      if(a.skillPattern==='rain' && a.activeFrom!==Infinity){const delay=(dex%5)*.035;a.activeFrom+=delay;a.activeUntil+=delay;a.ttl+=delay}
    }
    if((s.mastery??0)>=2) secondary.fire(g,{...s,damage:s.damage*.35,amount:Math.min(3,s.amount),duration:Math.min(2,s.duration)})
  }}
}
export const TYPE_SKILLS = Object.fromEntries(Object.entries(TYPE_SKILL_META).map(([id,m])=>[id,makeSkill(id,m)])) as Record<TypedSkillId,MoveDef>
