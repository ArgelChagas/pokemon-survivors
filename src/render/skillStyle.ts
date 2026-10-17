import { TYPE_COLORS,type PokeType } from '../data/types'
import type { Attack } from '../game/types'
type Ctx=CanvasRenderingContext2D
const TAU=Math.PI*2
export const circle=(c:Ctx,x:number,y:number,r:number)=>{c.beginPath();c.arc(x,y,Math.max(.1,r),0,TAU)}
export const star=(c:Ctx,r:number,points=4,inner=.4)=>{
 c.beginPath();for(let i=0;i<points*2;i++){const a=i*Math.PI/points-Math.PI/2,d=i%2?r*inner:r;i?c.lineTo(Math.cos(a)*d,Math.sin(a)*d):c.moveTo(Math.cos(a)*d,Math.sin(a)*d)}c.closePath()
}
const polygon=(c:Ctx,r:number,n:number,seed=0)=>{c.beginPath();for(let i=0;i<n;i++){const a=i/n*TAU+seed,d=r*(i%2?.78:1);i?c.lineTo(Math.cos(a)*d,Math.sin(a)*d):c.moveTo(Math.cos(a)*d,Math.sin(a)*d)}c.closePath()}
/** All effects use a shaded silhouette, a type-specific shape and a bright core. No simulation RNG. */
export const paintElement=(c:Ctx,type:PokeType,r:number,time:number,seed=0)=>{
 c.save();r=Math.max(2,Math.min(22,r));const color=TYPE_COLORS[type]
 c.fillStyle=color;c.strokeStyle='#152b39';c.lineWidth=1
 const fill=()=>{c.fillStyle=color;c.fill();c.strokeStyle='#152b39';c.lineWidth=1;c.stroke()}
 switch(type){
  case 'fire':
  case 'ghost':{
   c.beginPath();c.moveTo(r,0);c.bezierCurveTo(r*.2,-r*.7,-r*.3,-r*.5,-r*1.5,-r*.2);c.quadraticCurveTo(-r*.3,r*.2,-r*1.2,r*.65);c.quadraticCurveTo(r*.4,r*.95,r,0);fill()
   c.fillStyle=type==='fire'?'#ffe997':'#d5bcff';c.beginPath();c.ellipse(0,0,r*.55,r*.35,0,0,TAU);c.fill()
   if(type==='ghost'){c.fillStyle='#27163b';c.fillRect(0,-r*.24,2,2);c.fillRect(0,r*.15,2,2)}break
  }
  case 'water':
   c.beginPath();c.moveTo(r*1.25,0);c.bezierCurveTo(-r*.9,-r*1.1,-r*1.1,r*1.1,r*1.25,0);fill();c.strokeStyle='#e4ffff';c.beginPath();c.arc(-r*.12,-r*.1,r*.35,2.7,4.8);c.stroke();break
  case 'grass':
  case 'bug':
   c.beginPath();c.moveTo(r*1.3,0);c.quadraticCurveTo(-r*.2,-r*.95,-r,0);c.quadraticCurveTo(-r*.2,r*.95,r*1.3,0);fill();c.strokeStyle='#ecffd2';c.beginPath();c.moveTo(-r*.7,0);c.lineTo(r,0);for(let i=-1;i<2;i++){c.moveTo(i*r*.35,0);c.lineTo(i*r*.35-r*.2,-r*.3);if(type==='bug'){c.moveTo(i*r*.35,0);c.lineTo(i*r*.35-r*.2,r*.3)}}c.stroke();break
  case 'electric':
   c.beginPath();c.moveTo(r*1.4,-r*.3);c.lineTo(r*.1,-r*.7);c.lineTo(r*.25,-r*.1);c.lineTo(-r*1.3,r*.3);c.lineTo(0,r*.65);c.lineTo(-r*.15,r*.1);c.closePath();fill();c.strokeStyle='#fffbea';c.beginPath();c.moveTo(-r*.75,r*.25);c.lineTo(r*.2,0);c.lineTo(r*.1,-r*.3);c.lineTo(r*.95,-r*.2);c.stroke();break
  case 'ice':
   for(let i=0;i<6;i++){c.save();c.rotate(i*TAU/6);c.strokeStyle='#d3faff';c.lineWidth=2;c.beginPath();c.moveTo(0,0);c.lineTo(r,0);c.moveTo(r*.55,0);c.lineTo(r*.8,r*.25);c.moveTo(r*.55,0);c.lineTo(r*.8,-r*.25);c.stroke();c.restore()}star(c,r*.55,4);c.fillStyle=color;c.fill();break
  case 'steel':
   star(c,r,4,.23);fill();c.strokeStyle='#fff';c.beginPath();c.moveTo(-r*.7,0);c.lineTo(r*.7,0);c.moveTo(0,-r*.7);c.lineTo(0,r*.7);c.stroke();circle(c,0,0,r*.2);c.fillStyle='#ecf7ff';c.fill();break
  case 'rock':
  case 'ground':
   polygon(c,r,7,seed);fill();c.fillStyle=type==='rock'?'#ddd0a4':'#e7b06c';c.beginPath();c.moveTo(-r*.65,-r*.15);c.lineTo(-r*.1,-r*.7);c.lineTo(r*.35,-r*.1);c.lineTo(-r*.15,r*.1);c.closePath();c.fill();c.strokeStyle='#574936';c.beginPath();c.moveTo(r*.35,-r*.1);c.lineTo(0,r*.7);c.stroke();break
  case 'flying':
   for(let i=0;i<3;i++){c.strokeStyle=i===0?'#f2fbff':color;c.lineWidth=2;c.beginPath();c.arc(-i*2,0,r*(1-i*.2),-1.25,1.25);c.stroke()}break
  case 'fighting':
   c.beginPath();c.moveTo(r,0);c.lineTo(r*.55,-r*.65);c.lineTo(-r*.15,-r*.8);c.lineTo(-r*.3,-r*.35);c.lineTo(-r*.8,-r*.2);c.lineTo(-r*.8,r*.6);c.lineTo(r*.4,r*.7);c.closePath();fill();c.strokeStyle='#ffddba';c.beginPath();c.moveTo(r*.35,-r*.35);c.lineTo(-r*.1,-r*.3);c.moveTo(r*.1,r*.1);c.lineTo(-r*.45,r*.1);c.stroke();break
  case 'poison':
   for(let i=0;i<3;i++){const a=i/3*TAU+time;circle(c,Math.cos(a)*r*.35,Math.sin(a)*r*.35,r*.65);fill()}c.fillStyle='#eeadff';circle(c,-r*.25,-r*.3,r*.22);c.fill();break
  case 'psychic':
   circle(c,0,0,r*.65);fill();c.strokeStyle='#ffe5ff';c.beginPath();c.ellipse(0,0,r*1.2,r*.45,time+seed,0,TAU);c.stroke();star(c,r*.4,4);c.fillStyle='#fff4fc';c.fill();break
  case 'dark':
   c.beginPath();c.arc(0,0,r,-1.4,1.4);c.quadraticCurveTo(-r*.3,0,r*.17,-r);c.closePath();fill();c.strokeStyle='#bd93ea';c.beginPath();c.arc(0,0,r*.8,-1.3,1.3);c.stroke();break
  case 'dragon':
   c.beginPath();c.moveTo(r*1.3,0);c.lineTo(r*.1,-r*.85);c.lineTo(-r*.2,-r*.25);c.lineTo(-r,-r*.55);c.lineTo(-r*.5,0);c.lineTo(-r,r*.6);c.lineTo(r*.1,r*.5);c.closePath();fill();c.strokeStyle='#ded3ff';c.beginPath();c.moveTo(-r*.5,0);c.lineTo(r*.8,0);c.stroke();break
  case 'fairy':
  case 'normal':
   star(c,r,type==='fairy'?4:5,.42);fill();star(c,r*.5,type==='fairy'?4:5,.4);c.fillStyle=type==='fairy'?'#fff2ff':'#fff6bf';c.fill();break
 }
 c.restore()
}
export const motionAngle=(a:Attack,time:number)=>{
 const m=a.motion
 if('vx' in m && 'vy' in m) return Math.atan2(m.vy,m.vx)
 if(m.kind==='orbit') return m.angle+Math.PI/2
 return time*.8+a.id
}
/** Added to legacy, evolved, special and Mega moves while retaining their original art. */
export const skillUnderlay=(c:Ctx,a:Attack,time:number)=>{
 if(a.visual==='typedSkill' || a.age<a.activeFrom || a.age<0) return
 const color=TYPE_COLORS[a.type],m=a.motion
 c.save();c.strokeStyle=color;c.fillStyle=color
 if('vx' in m && 'vy' in m && Math.hypot(m.vx,m.vy)>8){
  const angle=motionAngle(a,time),r=a.shape.kind==='circle'?Math.min(12,a.shape.r):5
  c.translate(a.x,a.y);c.rotate(angle)
  c.globalAlpha=.2;c.beginPath();c.moveTo(4,-r*.6);c.lineTo(-r*3,0);c.lineTo(4,r*.6);c.closePath();c.fill()
  c.globalAlpha=.65;c.lineWidth=1;c.beginPath();c.moveTo(-r*2.5,0);c.lineTo(-r*.6,0);c.stroke()
 }else if(a.shape.kind==='circle' && a.shape.r>10){
  const r=Math.min(150,a.shape.r),fade=Math.min(1,(a.ttl-a.age)/.25)
  c.globalAlpha=.08*fade;circle(c,a.x,a.y,r);c.fill();c.globalAlpha=.35*fade;c.lineWidth=1
  c.beginPath();c.arc(a.x,a.y,r*.93,time+a.id,time+a.id+Math.PI*1.2);c.stroke()
 }else if(a.shape.kind==='rect'){
  c.globalAlpha=.22;c.lineWidth=1;c.strokeRect(a.x-a.shape.w/2-1,a.y-a.shape.h/2-1,a.shape.w+2,a.shape.h+2)
 }
 c.restore()
}
