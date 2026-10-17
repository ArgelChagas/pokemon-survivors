import type { StatDelta } from './stats'

export const TRAINING = {
  power:{name:'Poder',description:'+2% de dano por nível',base:70,max:10,stat:{might:0.02}},
  vitality:{name:'Vitalidade',description:'+4 HP por nível',base:55,max:10,stat:{maxHp:4}},
  defense:{name:'Resistência',description:'+0,1 de defesa por nível',base:80,max:10,stat:{armor:0.1}},
  haste:{name:'Agilidade',description:'-0,5% de recarga por nível',base:100,max:10,stat:{cooldown:-0.005}},
  pickup:{name:'Coleta',description:'+8 de alcance de coleta por nível',base:45,max:10,stat:{magnet:8}},
  wisdom:{name:'Aprendizado',description:'+2% de experiência por nível',base:75,max:10,stat:{growth:0.02}},
  critical:{name:'Precisão',description:'+0,5% de chance crítica por nível',base:110,max:8,stat:{criticalChance:0.005}},
  recovery:{name:'Recuperação',description:'+0,03 HP/s por nível',base:90,max:8,stat:{regen:0.03}},
} as const satisfies Record<string,{name:string;description:string;base:number;max:number;stat:StatDelta}>
export type TrainingId = keyof typeof TRAINING
export type TrainingRanks = Record<TrainingId,number>
export const TRAINING_IDS=Object.keys(TRAINING) as TrainingId[]
export const EMPTY_TRAINING:TrainingRanks={power:0,vitality:0,defense:0,haste:0,pickup:0,wisdom:0,critical:0,recovery:0}
export const parseTraining=(raw:unknown):TrainingRanks=>{
  const value=raw && typeof raw==='object' ? raw as Record<string,unknown> : {}
  return Object.fromEntries(TRAINING_IDS.map(id=>[id,typeof value[id]==='number' && Number.isFinite(value[id]) ? Math.max(0,Math.min(TRAINING[id].max,Math.floor(value[id]))) : 0])) as TrainingRanks
}
export const trainingPrice=(id:TrainingId,rank:number)=>Math.round(TRAINING[id].base*Math.pow(1.42,Math.max(0,rank))/5)*5
export const trainingDeltas=(raw:TrainingRanks):StatDelta[]=>TRAINING_IDS.flatMap(id=>Array.from({length:parseTraining(raw)[id]},()=>TRAINING[id].stat))
export const buyTraining=(wallet:number,ranks:TrainingRanks,id:TrainingId)=>{
  const safe=parseTraining(ranks),price=trainingPrice(id,safe[id])
  if(safe[id]>=TRAINING[id].max || wallet<price) return null
  return {wallet:wallet-price,ranks:{...safe,[id]:safe[id]+1},price}
}
