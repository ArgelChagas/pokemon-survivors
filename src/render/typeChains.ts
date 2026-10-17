import type {PokeType} from '../data/types'
import {TYPE_COLORS} from '../data/types'
import {circle,paintElement} from './skillStyle'
type Ctx=CanvasRenderingContext2D
/** A chain is a targeting rule, not an electric visual. Each element has its own connection. */
export const paintTypeChain=(c:Ctx,type:PokeType,x:number,y:number,dx:number,dy:number,time:number,seed:number,fade:number)=>{
 const length=Math.hypot(dx,dy);if(length<.01)return
 c.save();c.translate(x,y);c.rotate(Math.atan2(dy,dx));c.globalAlpha=fade;c.strokeStyle=TYPE_COLORS[type];c.fillStyle=TYPE_COLORS[type]
 const count=Math.max(3,Math.min(16,Math.ceil(length/12))),phase=time*4+seed
 const glyph=(at:number,offset:number,r:number)=>{c.save();c.translate(at,offset);paintElement(c,type,r,time,seed+at);c.restore()}
 switch(type){
 case 'electric':
  for(const [width,color]of [[4,TYPE_COLORS[type]],[1,'#fffbd7']] as const){c.lineWidth=width;c.strokeStyle=color;c.beginPath();c.moveTo(0,0);for(let i=1;i<count;i++)c.lineTo(i/count*length,Math.sin(i*2.7+seed)*6);c.lineTo(length,0);c.stroke()}break
 case 'water':
  c.lineCap='round';c.lineWidth=8;c.strokeStyle='#328cdb';c.beginPath();c.moveTo(0,0);c.bezierCurveTo(length*.3,-9,length*.65,9,length,0);c.stroke()
  c.lineWidth=3;c.strokeStyle='#a8f3ff';c.beginPath();c.moveTo(0,-1);c.bezierCurveTo(length*.3,-7,length*.65,7,length,-1);c.stroke()
  for(let i=0;i<count;i++){const f=((i/count+time*.8)%1),at=f*length,offset=Math.sin(f*Math.PI*2)*3;c.fillStyle=i%2?'#efffff':'#88dbff';circle(c,at,offset,1.5+i%2);c.fill()}break
 case 'grass':
  c.lineWidth=3;c.strokeStyle='#4c9b3e';c.beginPath();c.moveTo(0,0);c.bezierCurveTo(length*.25,-12,length*.75,12,length,0);c.stroke();for(let i=1;i<count;i++)glyph(i/count*length,Math.sin(i/count*Math.PI*2)*4,4);break
 case 'fire':for(let i=0;i<count;i++)glyph(i/count*length,Math.sin(phase+i)*3,3+(i%3));break
 case 'poison':for(let i=0;i<count;i++){glyph(i/count*length,Math.sin(phase+i*1.8)*5,3+i%3);c.fillStyle='#d7f589';circle(c,i/count*length,7*Math.sin(i+time),1);c.fill()}break
 case 'ice':for(let i=0;i<count;i++){c.save();c.translate(i/count*length,Math.sin(i*1.7)*3);c.rotate(i*.8);paintElement(c,'ice',4+i%3,time,i);c.restore()}break
 case 'psychic':for(let i=0;i<count;i++){c.lineWidth=1.5;c.beginPath();c.ellipse(i/count*length,0,2+Math.sin(phase+i),6+i%3,0,0,Math.PI*2);c.stroke()}break
 case 'fairy':for(let j=0;j<2;j++){c.lineWidth=2;c.strokeStyle=j?'#a5e9ff':'#ffc3ea';c.beginPath();c.moveTo(0,j?2:-2);c.bezierCurveTo(length*.3,j?-15:15,length*.7,j?15:-15,length,0);c.stroke()}for(let i=1;i<count;i+=3)glyph(i/count*length,Math.sin(phase+i)*6,4);break
 case 'ghost':for(let i=0;i<count;i++){c.globalAlpha=fade*(.35+.65*i/count);glyph(i/count*length,Math.sin(phase+i)*7,4)}break
 case 'dark':for(let i=0;i<count;i++){c.lineWidth=2;c.strokeStyle=i%2?'#a389cc':'#3b294c';c.beginPath();c.arc(i/count*length,-3,7,-1,1.4);c.stroke()}break
 case 'normal':for(let i=0;i<count;i++){c.lineWidth=1.5;c.beginPath();c.arc(i/count*length,0,4+i%3,-1,1);c.stroke()}break
 case 'flying':for(let i=0;i<count;i++){c.lineWidth=1;c.strokeStyle=i%2?'#f2fdff':'#b5cbed';c.beginPath();c.moveTo(i/count*length-5,Math.sin(phase+i)*6);c.quadraticCurveTo(i/count*length,Math.sin(phase+i)*6-4,i/count*length+5,Math.sin(phase+i)*6);c.stroke()}break
 case 'fighting':for(let i=0;i<count;i+=2){glyph(i/count*length,0,5);c.lineWidth=1;c.beginPath();c.moveTo(i/count*length-7,-3);c.lineTo(i/count*length-2,-3);c.stroke()}break
 case 'bug':for(let i=0;i<count;i++){c.save();c.translate(i/count*length,Math.sin(i+phase)*2);c.fillStyle='#c3db77';c.fillRect(-4,-1,8,2);c.fillStyle='#647c34';c.fillRect(-5,-3,2,6);c.restore()}break
 case 'rock':for(let i=0;i<count;i++)glyph(i/count*length,Math.sin(i*2)*5,4+i%3);break
 case 'ground':for(let i=0;i<count;i++){c.fillStyle=i%2?'#c8a16a':'#785a37';c.fillRect(i/count*length-3,Math.sin(i*2)*5,6,3);c.fillStyle='#e5c798';c.fillRect(i/count*length,Math.cos(i+phase)*7,2,2)}break
 case 'steel':for(let i=0;i<count;i+=2){c.strokeStyle='#d8e8eb';c.lineWidth=2;c.beginPath();c.ellipse(i/count*length,0,7,3,i%4?.5:-.5,0,Math.PI*2);c.stroke()}break
 case 'dragon':for(let i=0;i<count;i++){glyph(i/count*length,Math.sin(i*.8+phase)*8,4+i%3)}break
 }
 c.restore()
}
