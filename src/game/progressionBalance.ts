import type {StatDelta} from './stats'
import type {PlayableId} from '../data/hatchlings'
import {PLAYABLE} from '../data/hatchlings'
/** Local adaptation of gradual character perks and discrete weapon upgrades in the Steam reference. */
export const scaleBonus=(delta:StatDelta,factor:number):StatDelta=>{
 const out:StatDelta={}
 for(const [key,value] of Object.entries(delta)) {
  if(key==='typeDamage') out.typeDamage=Object.fromEntries(Object.entries(value as Record<string,number>).map(([type,n])=>[type,n*factor]))
  else (out as Record<string,number>)[key]=key==='amount'?Math.trunc(Number(value)*factor):Number(value)*factor
 }
 return out
}
export const characterGrowth=(id:PlayableId,level:number):StatDelta=>{
 const tier=Math.min(5,Math.floor(Math.max(0,level)/10)),role=PLAYABLE[id].line[0].dex%6
 return role===0?{might:tier*.05}:role===1?{maxHp:tier*5}:role===2?{projectileSpeed:tier*.04}:role===3?{area:tier*.035}:role===4?{cooldown:-tier*.01}:{armor:tier*.15}
}
export const AWAKEN_LEVEL=20
export const AWAKEN_TIME=300
export const awakeningReady=(g:{time:number;player:{level:number}})=>g.time>=AWAKEN_TIME && g.player.level>=AWAKEN_LEVEL
