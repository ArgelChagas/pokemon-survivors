import {speciesStyle} from '../data/speciesStyle'
import {TYPE_COLORS,type PokeType} from '../data/types'
import {circle,star,paintElement} from './skillStyle'
type Ctx=CanvasRenderingContext2D
const TAU=Math.PI*2,cache=new Map<string,HTMLCanvasElement>()
/** Pixel sprites are built once per species and animation frame, never per attack tick. */
export const paintSpeciesGlyph=(c:Ctx,dex:number,type:PokeType,frame:number)=>{
 const s=speciesStyle(dex,type),r=8,t=frame/8*TAU
 c.fillStyle=TYPE_COLORS[type];c.strokeStyle='#e9fff1';c.lineWidth=1.5
 const stroke=()=>c.stroke(),fill=()=>{c.fill();c.strokeStyle='#112330';c.stroke();c.strokeStyle='#e9fff1'}
 const line=(pts:number[][])=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x!,y!):c.moveTo(x!,y!));stroke()}
 const oval=(x:number,y:number,w:number,h:number)=>{c.beginPath();c.ellipse(x,y,w,h,0,0,TAU);fill()}
 switch(s.motif){
 case 'bubble':for(let i=0;i<3;i++){const x=i===0?2:-6,y=i===0?0:(i===1?-5:5);c.strokeStyle='#b5fbff';circle(c,x,y,i===0?7:3);c.stroke();c.fillStyle='#e9ffff';c.fillRect(x-2,y-3,2,2)}break
 case 'jet':c.fillStyle='#429dff';c.fillRect(-11,-4,20,8);c.fillStyle='#c9ffff';c.fillRect(-9,-2,21,3);for(let i=0;i<3;i++){c.strokeStyle='#88dfff';line([[-11+i*3,-7],[-6+i*3,-5]]);line([[-11+i*3,7],[-6+i*3,5]])}break
 case 'wave':for(let i=0;i<3;i++){c.strokeStyle=i===0?'#efffff':TYPE_COLORS[type];c.lineWidth=3-i*.6;c.beginPath();c.arc(-i*4,0,9-i,-1.3,1.3);stroke()}break
 case 'shell':star(c,11,3,.27);fill();circle(c,0,0,3);c.fillStyle='#f8fbff';c.fill();break
 case 'sludge':for(let i=0;i<5;i++){const a=i/5*TAU;oval(Math.cos(a)*5,Math.sin(a)*4,4,3)}c.fillStyle='#c5ff58';c.fillRect(-4,-2,3,2);c.fillRect(2,-2,2,2);break
 case 'spore':for(let i=0;i<6;i++){const a=i/6*TAU+t;oval(Math.cos(a)*7,Math.sin(a)*7,2,2)}oval(0,0,4,4);break
 case 'fang':for(const y of [-1,1]){c.beginPath();c.moveTo(-8,y*7);c.lineTo(9,0);c.lineTo(-3,y*2);c.closePath();fill()}break
 case 'needle':for(let i=-1;i<=1;i++){c.beginPath();c.moveTo(12,i*4);c.lineTo(-7,i*4-1);c.lineTo(-10,i*4-3);c.closePath();fill();c.strokeStyle='#fff4b8';line([[-7,i*4],[10,i*4]]);}break
 case 'vine':c.strokeStyle='#54a346';c.lineWidth=3;c.beginPath();c.moveTo(-12,0);c.bezierCurveTo(-5,-12,5,12,12,0);stroke();for(let i=-1;i<=1;i++){c.fillStyle='#b5ef6b';c.fillRect(i*6,-3+i*2,3,2)}break
 case 'seed':oval(0,2,6,7);c.strokeStyle='#93ec8c';line([[0,-3],[-4,-9],[-8,-8]]);line([[0,-3],[4,-9],[8,-8]]);break
 case 'flower':for(let i=0;i<6;i++){const a=i/6*TAU+t*.2;c.fillStyle=i%2?'#ea85ad':TYPE_COLORS[type];oval(Math.cos(a)*6,Math.sin(a)*6,4,4)}c.fillStyle='#fff28a';oval(0,0,3,3);break
 case 'leaf':c.beginPath();c.moveTo(12,0);c.quadraticCurveTo(-2,-12,-10,0);c.quadraticCurveTo(-2,12,12,0);fill();line([[-9,0],[10,0]]);break
 case 'ribbon':for(const sign of [-1,1]){c.strokeStyle=sign===1?'#ffd6f4':'#9cdbff';c.lineWidth=3;c.beginPath();c.moveTo(-12,sign*6);c.bezierCurveTo(-4,-sign*12,3,sign*12,12,0);stroke()}star(c,4,4);c.fillStyle='#fff3ed';c.fill();break
 case 'heart':c.fillStyle='#ffb5de';c.beginPath();c.moveTo(0,9);c.bezierCurveTo(-18,-2,-6,-14,0,-5);c.bezierCurveTo(6,-14,18,-2,0,9);fill();break
 case 'eye':oval(0,0,12,6);c.fillStyle='#201c3c';oval(Math.sin(t)*2,0,3,5);c.fillStyle='#fff';c.fillRect(1,-2,2,2);break
 case 'ring':for(let i=0;i<2;i++){c.strokeStyle=i?'#fff1b0':TYPE_COLORS[type];c.lineWidth=2;c.beginPath();c.ellipse(0,0,11-i*3,5-i,Math.sin(t)*.6,0,TAU);stroke()}break
 case 'claw':for(let i=-1;i<=1;i++){c.lineWidth=2;c.beginPath();c.moveTo(-10,i*5+4);c.quadraticCurveTo(1,i*5-6,10,i*5-2);stroke()}break
 case 'blade':case 'kick':c.beginPath();c.moveTo(12,-7);c.quadraticCurveTo(9,8,-10,9);c.lineTo(-4,3);c.closePath();fill();break
 case 'fist':c.fillRect(-5,-4,12,11);for(let i=0;i<4;i++)c.fillRect(-6+i*4,-8,3,6);c.strokeRect(-5,-4,12,11);break
 case 'palm':circle(c,0,0,7);fill();for(let i=0;i<5;i++){const a=-Math.PI+i*.6;line([[Math.cos(a)*6,Math.sin(a)*6],[Math.cos(a)*12,Math.sin(a)*12]])}break
 case 'sound':for(let i=0;i<3;i++){c.beginPath();c.arc(-7+i*5,0,4+i*2,-1.2,1.2);stroke()}break
 case 'gear':star(c,11,10,.72);fill();circle(c,0,0,4);c.fillStyle='#14283c';c.fill();break
 case 'web':for(let i=0;i<6;i++){const a=i*TAU/6;line([[0,0],[Math.cos(a)*11,Math.sin(a)*11]])}for(const r of [5,9]){circle(c,0,0,r);stroke()}break
 case 'wing':case 'feather':for(const sign of [-1,1]){c.beginPath();c.moveTo(0,0);c.lineTo(-9,sign*10);c.lineTo(6,sign*6);c.lineTo(10,sign*2);c.closePath();fill()}break
 case 'ghost':c.beginPath();c.arc(0,-2,8,Math.PI,0);c.lineTo(8,9);c.lineTo(3,5);c.lineTo(0,9);c.lineTo(-3,5);c.lineTo(-8,9);c.closePath();fill();c.fillStyle='#171630';c.fillRect(-4,-3,3,4);c.fillRect(2,-3,3,4);break
 case 'dragon':c.beginPath();c.moveTo(12,0);c.lineTo(1,-7);c.lineTo(-3,-11);c.lineTo(-2,-3);c.lineTo(-11,-5);c.lineTo(-7,0);c.lineTo(-11,6);c.lineTo(1,7);c.closePath();fill();c.fillStyle='#ffffc8';c.fillRect(5,-2,3,2);break
 case 'snow':case 'crystal':for(let i=0;i<(s.motif==='snow'?6:3);i++){c.save();c.rotate(i*TAU/(s.motif==='snow'?6:3));line([[0,0],[10,0],[6,-3],[10,0],[6,3]]);c.restore()}break
 case 'sand':for(let i=0;i<14;i++){const a=i*2.4+t,d=3+i%8;c.fillRect(Math.cos(a)*d,Math.sin(a)*d,2,2)}break
 case 'rock':case 'meteor':c.beginPath();for(let i=0;i<7;i++){const a=i/7*TAU,d=8+(i*dex%4);i?c.lineTo(Math.cos(a)*d,Math.sin(a)*d):c.moveTo(Math.cos(a)*d,Math.sin(a)*d)}c.closePath();fill();line([[-5,-3],[0,-6],[4,1],[-2,4]]);break
 case 'orb':oval(0,0,8,8);c.strokeStyle='#fff9ec';c.beginPath();c.arc(-1,-1,5,3,4.8);stroke();break
 case 'star':star(c,11,5,.38);fill();break
 default:paintElement(c,type,r,frame/8,dex)
 }
 // Distinct species silhouette: orbiting pixels and asymmetric crests, not a color swap.
 c.fillStyle='#fff4d2';for(let i=0;i<1+dex%3;i++){const a=t+i*TAU/(1+dex%3)+s.variant;c.fillRect(Math.round(Math.cos(a)*13),Math.round(Math.sin(a)*12),1+dex%2,2)}
}
export const paintSpecies=(c:Ctx,dex:number,type:PokeType,r:number,time:number)=>{
 const frame=Math.floor(time*(5+dex%5))%8,key=dex+':'+type+':'+frame
 let sprite=cache.get(key)
 if(!sprite){sprite=document.createElement('canvas');sprite.width=sprite.height=32;const ctx=sprite.getContext('2d')!;ctx.translate(16,16);paintSpeciesGlyph(ctx,dex,type,frame);if(cache.size>=256)cache.delete(cache.keys().next().value!);cache.set(key,sprite)}
 c.save();c.imageSmoothingEnabled=false;const size=Math.max(12,Math.min(48,r*3.2));c.drawImage(sprite,-size/2,-size/2,size,size);c.restore()
}
