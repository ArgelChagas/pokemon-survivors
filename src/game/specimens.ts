import { ENEMIES,type EnemyId } from '../data/enemies'
import type { CapturedPlayableId } from '../data/capturedPlayable'
import { IV_KEYS,parseIVs,rollIVs,type IVs } from './ivs'
export type Specimen={uid:string;species:EnemyId;ivs:IVs}
export const capturedPartner=(id:EnemyId):CapturedPlayableId=>`captured${ENEMIES[id].dex}` as CapturedPlayableId
export const parseSpecimens=(raw:unknown):Specimen[]=>{
 if(!Array.isArray(raw)) return []
 const seen=new Set<string>()
 return raw.flatMap(s=>{
  if(!s || typeof s!=='object' || typeof s.uid!=='string' || !s.uid || seen.has(s.uid) || typeof s.species!=='string' || !Object.hasOwn(ENEMIES,s.species)) return []
  const ivs=parseIVs(s.ivs);if(!ivs) return []
  seen.add(s.uid);return [{uid:s.uid,species:s.species as EnemyId,ivs}]
 })
}
/** Old counts become individual, stable specimens once; nothing is rerolled on reload. */
export const migrateSpecimens=(caught:Partial<Record<EnemyId,number>>,raw:unknown):Specimen[]=>{
 const specimens=parseSpecimens(raw),counts=new Map<EnemyId,number>()
 for(const s of specimens) counts.set(s.species,(counts.get(s.species)??0)+1)
 for(const [id,total] of Object.entries(caught) as [EnemyId,number][]) {
  if(!Object.hasOwn(ENEMIES,id) || !Number.isFinite(total)) continue
  for(let i=counts.get(id)??0;i<Math.min(10000,Math.floor(total));i++) {
   // Deterministic migration is repeatable even if browser storage is temporarily unavailable.
   const dex=ENEMIES[id].dex
   const ivs=Object.fromEntries(IV_KEYS.map((k,n)=>[k,1+((dex*17+i*23+n*11+(i+n)*(i+n))%31)])) as IVs
   specimens.push({uid:`legacy-${id}-${i}`,species:id,ivs})
  }
 }
 return specimens
}
export const newSpecimen=(species:EnemyId,uid:string,random:()=>number=Math.random):Specimen=>({uid,species,ivs:rollIVs(random)})
/** Grant one playable specimen per species without rerolling existing captures. */
export const unlockCatalog=(caught:Partial<Record<EnemyId,number>>,existing:Specimen[])=>{
 const specimens=[...existing],owned=new Set(existing.map(s=>ENEMIES[s.species].dex)),next={...caught}
 for(const [id,def] of Object.entries(ENEMIES) as [EnemyId,(typeof ENEMIES)[EnemyId]][]) {
  if(owned.has(def.dex))continue
  const ivs=Object.fromEntries(IV_KEYS.map((key,i)=>[key,1+((def.dex*17+i*11+i*i)%31)])) as IVs
  specimens.push({uid:`unlocked-${def.dex}`,species:id,ivs});owned.add(def.dex);next[id]=Math.max(1,next[id]??0)
 }
 return {caught:next,specimens}
}
