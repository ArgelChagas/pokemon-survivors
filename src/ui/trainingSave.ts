import { PLAYABLE,type PlayableId } from '../data/hatchlings'
import { parseTraining,TRAINING_IDS,type TrainingRanks } from '../game/training'
const KEY='ps:partner-training:v1'
const read=():Record<string,unknown>=>{try {const raw=JSON.parse(localStorage.getItem(KEY)??'{}');return raw && typeof raw==='object' && !Array.isArray(raw) ? raw : {}} catch {return {}}}
/** Captured copies of the same starting species share existing permanent training. */
export const trainingKey=(id:PlayableId):PlayableId=>{
 const dex=PLAYABLE[id].line[0].dex
 return (Object.keys(PLAYABLE) as PlayableId[]).find(key=>!key.startsWith('captured') && PLAYABLE[key].line[0].dex===dex)??id
}
export const loadTraining=(id:PlayableId)=>{
 const raw=read(),a=parseTraining(raw[trainingKey(id)]),b=parseTraining(raw[id])
 return Object.fromEntries(TRAINING_IDS.map(key=>[key,Math.max(a[key],b[key])])) as TrainingRanks
}
export const saveTraining=(id:PlayableId,ranks:TrainingRanks)=>{try {localStorage.setItem(KEY,JSON.stringify({...read(),[trainingKey(id)]:parseTraining(ranks)}))} catch {/* Session storage may be unavailable. */}}
