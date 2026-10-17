import type{Attack}from'../game/types'
import{TYPE_COLORS}from'../data/types'
import{paintElement,circle}from'./skillStyle'
import{paintSpecies}from'./speciesSkills'
import{elementalOrbit}from'../game/elementGeometry'
type Ctx=CanvasRenderingContext2D
export const paintElementZone=(c:Ctx,a:Attack,time:number)=>{
 if(!a.elementZone||a.shape.kind!=='circle')return
 const scale=a.shape.r,armed=a.age>=a.activeFrom,fade=Math.max(0,Math.min(1,(a.ttl-a.age)/.3)),dex=Number(a.move.replace('signature',''))
 c.save();c.translate(a.x,a.y)
 for(const [i,p]of a.elementZone.entries()){
  c.save();c.translate(p.x*scale,p.y*scale);c.fillStyle=TYPE_COLORS[a.type];c.strokeStyle=TYPE_COLORS[a.type];c.lineWidth=.8;c.globalAlpha=fade*(armed?.2:.05)
  if(p.kind==='circle'){circle(c,0,0,p.r*scale);c.fill();c.globalAlpha=fade*(armed?.5:.25);c.stroke()}
  else{c.fillRect(-p.w*scale/2,-p.h*scale/2,p.w*scale,p.h*scale);c.globalAlpha=fade*(armed?.45:.2);c.strokeRect(-p.w*scale/2,-p.h*scale/2,p.w*scale,p.h*scale)}
  c.globalAlpha=fade*(armed?.85:.25)
  const w=p.kind==='circle'?p.r*2:p.w,h=p.kind==='circle'?p.r*2:p.h,n=Math.max(1,Math.min(5,Math.ceil(Math.max(w,h)*scale/13)))
  for(let j=0;j<n;j++){c.save();const f=(j+.5)/n-.5;c.translate(w>h?f*w*scale:0,w>h?0:f*h*scale)
   if(a.type==='water'){c.strokeStyle='#bcf7ff';c.beginPath();c.moveTo(-5,Math.sin(time*4+j)*1.5);c.quadraticCurveTo(0,-3,5,Math.sin(time*4+j)*1.5);c.stroke()}
   else if(a.move.startsWith('signature'))paintSpecies(c,dex,a.type,Math.min(7,Math.max(w,h)*scale*.25),time+i*.2+j)
   else paintElement(c,a.type,Math.min(6,Math.max(w,h)*scale*.22),time,i+j)
   c.restore()
  }
  c.restore()
 }
 c.restore()
}
export const paintOrbitTrail=(c:Ctx,a:Attack,time:number)=>{
 if(a.motion.kind!=='orbit')return
 const m=a.motion,now=elementalOrbit(a.type,m.angle,a.age,m.radius,a.orbitVariant),cx=a.x-now.x,cy=a.y-now.y
 c.save()
 for(let i=1;i<=4;i++){
  const t=i*.06,old=elementalOrbit(a.type,m.angle-m.spin*t,Math.max(0,a.age-t),m.radius,a.orbitVariant)
  c.globalAlpha=.28-i*.045;c.save();c.translate(cx+old.x,cy+old.y);paintElement(c,a.type,Math.max(2,5-i*.6),time-t,a.id);c.restore()
 }
 c.restore()
}
