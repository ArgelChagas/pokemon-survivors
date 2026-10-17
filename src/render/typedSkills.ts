import { paintElementZone,paintOrbitTrail } from './elementAreas'
import { paintTypeChain } from './typeChains'
import { paintSpecies } from './speciesSkills'
import { speciesStyle } from '../data/speciesStyle'
import { TYPE_SKILL_META } from '../data/combatExpansion'
import { TYPE_COLORS } from '../data/types'
import type { Attack } from '../game/types'
import { circle,motionAngle,paintElement,star } from './skillStyle'
type Ctx=CanvasRenderingContext2D
const TAU=Math.PI*2
const paint=(c:Ctx,a:Attack,r:number,time:number,seed:number)=>{const dex=Number(a.move.replace('signature',''));if(a.move.startsWith('signature')&&Number.isFinite(dex))paintSpecies(c,dex,a.type,r,time);else paintElement(c,a.type,r,time,seed)}
const pattern=(a:Attack)=>a.skillPattern??TYPE_SKILL_META[a.move as keyof typeof TYPE_SKILL_META]?.pattern
export const typedSkillGround=(c:Ctx,a:Attack,time:number)=>{
 const kind=pattern(a)
 if(a.elementZone){paintElementZone(c,a,time);return}
 if(!kind || a.shape.kind!=='circle' || !['rain','field'].includes(kind) && a.motion.kind!=='follow') return
 const r=Math.max(1,a.shape.r),armed=a.age>=a.activeFrom,color=TYPE_COLORS[a.type],life=Math.max(0,Math.min(1,(a.ttl-a.age)/.3))
 c.save();c.strokeStyle=color;c.fillStyle=color;c.lineWidth=1
 c.globalAlpha=(armed?.13:.06)*life;circle(c,a.x,a.y,r);c.fill()
 c.globalAlpha=(armed?.65:.45)*life;c.setLineDash(armed?[]:[3,3]);circle(c,a.x,a.y,r);c.stroke();c.setLineDash([])
 const dex=Number(a.move.replace('signature','')),identity=a.move.startsWith('signature')?speciesStyle(dex,a.type):null
 c.globalAlpha=.35*life
 if(identity){c.save();c.translate(a.x,a.y);for(let i=0;i<3+dex%4;i++){const angle=i/(3+dex%4)*TAU+time*.3;c.save();c.translate(Math.cos(angle)*r*.72,Math.sin(angle)*r*.72);c.rotate(angle);paint(c,a,Math.min(10,r*.22),time,i);c.restore()}c.restore()}else{c.beginPath();c.arc(a.x,a.y,r*.7,time+a.id,time+a.id+Math.PI*1.45);c.stroke()}
 if(!armed){
  const charge=Math.min(1,a.age/Math.max(.01,a.activeFrom))
  circle(c,a.x,a.y,r*charge);c.stroke();c.beginPath();c.moveTo(a.x-4,a.y);c.lineTo(a.x+4,a.y);c.moveTo(a.x,a.y-4);c.lineTo(a.x,a.y+4);c.stroke()
 }else{
  const n=kind==='rain'?5:4,phase=time*(a.type==='ice'?.4:1.2)+a.id
  c.globalAlpha=.7*life
  for(let i=0;i<n;i++){
   const angle=i/n*TAU+phase,x=a.x+Math.cos(angle)*r*.64,y=a.y+Math.sin(angle)*r*.64
   c.save();c.translate(x,y);c.rotate(angle);paint(c,a,Math.min(5,r*.17),time,a.id+i);c.restore()
  }
  if(kind==='rain'){
   const impact=Math.max(0,1-(a.age-a.activeFrom)/.3)
   c.globalAlpha=impact*.7;circle(c,a.x,a.y,r*(1-impact*.6));c.stroke();c.translate(a.x,a.y);paint(c,a,Math.min(r*.6,16),time,a.id)
  }
 }
 c.restore()
}
export const typedSkillAir=(c:Ctx,a:Attack,time:number)=>{
 const kind=pattern(a)
 if(!kind || a.shape.kind!=='circle') return
 const color=TYPE_COLORS[a.type],r=Math.min(18,Math.max(3,a.shape.r)),fade=Math.max(0,Math.min(1,(a.ttl-a.age)/.22))
 c.save();c.globalAlpha=fade;c.strokeStyle=color;c.fillStyle=color
 if(kind==='chain' && a.motion.kind==='static' && a.activeFrom===Infinity){
  paintTypeChain(c,a.type,a.from.x,a.from.y,a.x-a.from.x,a.y-a.from.y,time,a.id,fade)
  c.translate(a.x,a.y);paint(c,a,6,time,a.id);c.restore();return
 }
 if(kind==='field' || a.motion.kind==='follow'){
  if(a.age>=a.activeFrom){c.globalAlpha=fade*.6;c.translate(a.x,a.y-5-Math.sin(time*3+a.id)*2);paint(c,a,Math.min(9,a.shape.r*.25),time,a.id)}
  c.restore();return
 }
 if(kind==='rain'){
  const before=a.activeFrom-a.age
  if(before>0 && before<.3){c.translate(a.x,a.y-before*230);c.rotate(Math.PI/2);paint(c,a,Math.min(12,r*.7),time,a.id);c.globalAlpha=fade*.3;c.fillRect(-2,-2,4,Math.max(3,before*170))}
  c.restore();return
 }
 if(a.motion.kind==='orbit')paintOrbitTrail(c,a,time)
 const angle=motionAngle(a,time)
 c.translate(a.x,a.y);c.rotate(angle)
 // Three tapered trail segments, independent of frame rate and simulation particles.
 if(a.motion.kind!=='orbit')for(let i=3;i>=1;i--){c.globalAlpha=fade*(.22-i*.045);c.beginPath();c.ellipse(-r*(.55+i*.75),Math.sin(time*8+a.id+i)*1.2,r*.75,r*(.48-i*.075),0,0,TAU);c.fill()}
 c.globalAlpha=fade
 if(kind==='return'){
  c.save();c.rotate(time*(kind==='return'?8:3)+a.id);c.globalAlpha=fade*.65;c.lineWidth=1.5
  for(let i=0;i<2;i++){c.beginPath();c.arc(0,0,r*1.2,i*Math.PI+.1,i*Math.PI+1.8);c.stroke()}c.restore()
 }
 paint(c,a,r,time,a.id)
 if((a.mastery??0)>0){c.globalAlpha=fade*.7;c.translate(r*.7,-r*.6);star(c,2+(a.mastery??0),4);c.fillStyle='#fff9e4';c.fill()}
 c.restore()
}
