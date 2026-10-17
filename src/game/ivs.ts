import type { StatDelta } from './stats'
export const IV_KEYS=['hp','attack','defense','spAttack','spDefense','speed'] as const
export type IVKey=typeof IV_KEYS[number]
export type IVs=Record<IVKey,number>
export const IV_LABELS:Record<IVKey,string>={hp:'Vida',attack:'Ataque',defense:'Defesa',spAttack:'At. especial',spDefense:'Def. especial',speed:'Velocidade'}
export const IV_RARITIES=['comum','incomum','raro','épico','único','místico'] as const
export type IVRarity=typeof IV_RARITIES[number]
export const parseIVs=(raw:unknown):IVs|null=>{
 if(!raw || typeof raw!=='object') return null
 const value=raw as Record<string,unknown>
 return IV_KEYS.every(k=>typeof value[k]==='number' && Number.isInteger(value[k]) && Number(value[k])>=1 && Number(value[k])<=31) ? Object.fromEntries(IV_KEYS.map(k=>[k,value[k]])) as IVs : null
}
export const rollIVs=(random:()=>number=Math.random):IVs=>Object.fromEntries(IV_KEYS.map(k=>[k,1+Math.min(30,Math.max(0,Math.floor(random()*31)))])) as IVs
export const ivQuality=(ivs:IVs)=>IV_KEYS.reduce((sum,k)=>sum+ivs[k],0)/186*100
export const ivRarity=(ivs:IVs):IVRarity=>{
 const q=ivQuality(ivs)
 return IV_RARITIES[q<40?0:q<55?1:q<70?2:q<85?3:q<95?4:5]!
}
/** A run snapshots its chosen specimen. Rebuilding stats never stacks IV bonuses. */
export const ivDeltas=(ivs:IVs|null|undefined):StatDelta=>ivs?{
 maxHp:ivs.hp*.35,might:(ivs.attack+ivs.spAttack)/775,armor:ivs.defense/77.5,
 damageTaken:-ivs.spDefense/1550,speed:ivs.speed*.1,cooldown:-ivs.speed/2067,
 area:ivs.spAttack/1033,projectileSpeed:ivs.speed/620,
}:{}
