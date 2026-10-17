import type {PokeType} from '../data/types'
import * as dm from '../engine/dmath'
export type ZonePiece={kind:'circle';x:number;y:number;r:number}|{kind:'rect';x:number;y:number;w:number;h:number}
const C=(x:number,y:number,r:number):ZonePiece=>({kind:'circle',x,y,r}),R=(x:number,y:number,w:number,h:number):ZonePiece=>({kind:'rect',x,y,w,h})
/** Normalized occupied ground, shared by drawing and collision. Empty gaps never deal damage. */
const baseZone=(type:PokeType,variant=0):ZonePiece[]=>{
 const v=(variant%7)*.018
 switch(type){
 case 'water':return [R(0,-.36,1.8,.23+v),R(0,0,1.65,.24),R(0,.36,1.8,.23+v)]
 case 'fire':return [R(0,0,1.9,.22+v),R(0,0,.25,1.85),C(0,0,.3)]
 case 'grass':return [C(-.55,-.45,.25+v),C(.5,-.45,.23),C(0,0,.28),C(-.5,.5,.24),C(.55,.4,.27)]
 case 'poison':return [C(-.4,.05,.48),C(.25,.2,.4+v),C(.1,-.4,.32)]
 case 'electric':return [R(0,0,1.8,.12),R(0,0,.12,1.8),C(-.8,0,.18),C(.8,0,.18),C(0,-.8,.18),C(0,.8,.18)]
 case 'ice':return [R(-.55,0,.18,1.3),R(0,0,.23+v,1.8),R(.55,0,.18,1.3)]
 case 'psychic':return [C(-.58,0,.3),C(.58,0,.3),C(0,-.58,.3),C(0,.58,.3)]
 case 'ghost':return [C(-.55,-.3,.3),C(.4,-.45,.3),C(.2,.5,.35+v)]
 case 'fairy':return Array.from({length:5},(_,i)=>{const a=i/5*Math.PI*2;return C(dm.cos(a)*.5,dm.sin(a)*.5,.28+v)})
 case 'normal':return [R(0,-.55,1.2,.15),R(0,.55,1.2,.15),R(-.55,0,.15,1.2),R(.55,0,.15,1.2)]
 case 'fighting':return [R(0,0,1.95,.35+v),R(.5,0,.3,.9)]
 case 'flying':return [R(-.2,-.45,1.3,.16),R(0,0,1.9,.2),R(.2,.45,1.3,.16)]
 case 'bug':return [R(0,0,1.7,.09),R(0,0,.09,1.7),R(0,-.45,1.4,.09),R(0,.45,1.4,.09),R(-.45,0,.09,1.4),R(.45,0,.09,1.4)]
 case 'rock':return [C(-.55,-.4,.3+v),C(.55,-.4,.3),C(-.4,.5,.34),C(.45,.5,.28)]
 case 'ground':return [R(-.5,-.3,.18,1.1),R(0,0,.2,1.7),R(.5,.3,.18,1.1),R(0,0,1.2,.15)]
 case 'steel':return [R(-.5,0,.22,1.6),R(.5,0,.22,1.6),R(0,0,1.3,.2+v)]
 case 'dragon':return [R(-.6,0,.4,.3),R(-.1,0,.55,.75),R(.5,0,.6,1.35)]
 case 'dark':return [R(-.35,-.35,1.2,.18),R(0,0,1.55,.2),R(.35,.35,1.2,.18)]
 }
}
export const elementZone=(type:PokeType,variant=0):ZonePiece[]=>{
 const seed=(variant%997)/997,stretch=.94+seed*.1,compress=1.03-seed*.06
 return baseZone(type,variant).map(p=>p.kind==='circle'?{...p,x:p.x*stretch,y:p.y*compress,r:p.r*(.98+seed*.035)}:{...p,x:p.x*stretch,y:p.y*compress,w:p.w*stretch,h:p.h*compress})
}
export const zoneContains=(pieces:ZonePiece[],x:number,y:number,padding:number)=>pieces.some(p=>p.kind==='circle'?dm.hypot(x-p.x,y-p.y)<=p.r+padding:Math.abs(x-p.x)<=p.w/2+padding&&Math.abs(y-p.y)<=p.h/2+padding)
/** Elemental guards use distinct paths instead of universally circling at a fixed distance. */
export const elementalOrbit=(type:PokeType,angle:number,age:number,r:number,variant=0)=>{
 const s=dm.sin,c=dm.cos,t=angle,spread=.94+(variant%997)/997*.14
 let x=0,y=0
 switch(type){
 case 'water':x=c(t)*r*1.35;y=s(t)*r*.4;break
 case 'fire':{const pulse=.35+(age*.9%1);x=c(t)*r*pulse;y=s(t)*r*pulse;break}
 case 'grass':x=s(t)*r*1.2;y=-Math.abs(c(t))*r*.5;break
 case 'poison':x=s(t)*r*.85;y=s(t*2)*r*.5;break
 case 'electric':{const snap=Math.floor(t*4)/4;x=c(snap)*r;y=s(snap)*r*.85;break}
 case 'ice':{const snap=Math.floor(t*3)/3;x=c(snap)*r*.7;y=s(snap)*r*1.1;break}
 case 'psychic':x=c(t)*r*.55;y=s(t)*r*1.3;break
 case 'ghost':x=s(t*.7)*r;y=c(t*1.4)*r*.7;break
 case 'fairy':x=c(t)*r*(.7+.3*c(t*5));y=s(t)*r*(.7+.3*c(t*5));break
 case 'normal':x=c(t)*r*(.8+.15*s(age*3));y=s(t)*r*(.8+.15*s(age*3));break
 case 'fighting':x=s(t)*r*.9;y=-Math.abs(c(t))*r*.3;break
 case 'flying':x=c(t)*r*1.4;y=s(t*2)*r*.25;break
 case 'bug':x=c(t)*r*.8;y=s(t*3)*r*.5;break
 case 'rock':{const a=Math.floor(t*2)/2;x=c(a)*r;y=s(a)*r;break}
 case 'ground':x=s(t)*r*1.1;y=s(t*2)*r*.15;break
 case 'steel':x=s(t)*r*.7;y=c(t)*r*.45;break
 case 'dragon':{const pulse=.55+(age*.45%1)*.6;x=c(t)*r*pulse;y=s(t)*r*pulse*.8;break}
 case 'dark':x=c(t)*r*(.8+.2*s(t*3));y=s(t)*r*.65;break
 }
 return {x:x*spread,y:y*(1.04-(variant%991)/991*.1)}
}
