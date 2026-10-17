import { migrateSpecimens,newSpecimen,unlockCatalog } from '../game/specimens'
import type { PlayableId } from '../data/hatchlings'
import type { IVs } from '../game/ivs'
import { mountExpeditionPanel } from './expeditionPanel'
import { ENEMIES, type EnemyId } from '../data/enemies'
import { HATCHLING_IDS, HATCHLINGS } from '../data/hatchlings'
import { markHatch } from '../game/dex'
import { BALLS, attemptCapture, newCaptureSave, type CaptureSave } from '../game/capture'
import { isRegion, regionContains, type RegionId } from '../game/regions'
import { rarityOfDex } from '../game/skillRarity'
import type { Game } from '../game/types'
import { depositPokeDollars, updateSave } from './save'

const KEY = 'ps:expedition:v1'
let state = newCaptureSave()
let storedSpecimens:unknown=[]
try {
  const raw = JSON.parse(localStorage.getItem(KEY) ?? 'null')
  storedSpecimens=raw?.specimens
  if (raw && isRegion(raw.region) && Object.hasOwn(ENEMIES, raw.target) && Object.hasOwn(BALLS, raw.ball)) {
    state = { ...state, region: raw.region, target: raw.target, ball: raw.ball, auto: raw.auto === true,
      selected: typeof raw.selected==='string' ? raw.selected : null,
      attempts: Math.max(0, Number(raw.attempts) || 0),
      balls: Object.fromEntries(Object.keys(BALLS).map(id => [id, Math.max(0, Math.floor(Number(raw.balls?.[id]) || 0))])) as CaptureSave['balls'],
      caught: Object.fromEntries(Object.entries(raw.caught ?? {}).filter(([id,n]) => Object.hasOwn(ENEMIES,id) && typeof n === 'number' && n > 0)),
    }
  }
} catch { /* Start safely when storage is unavailable or invalid. */ }
Object.assign(state,unlockCatalog(state.caught,migrateSpecimens(state.caught,storedSpecimens)))
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(state)) } catch { /* Session-only mode. */ } }
export const captureState=()=>state
export const chooseSpecimen=(uid:string)=>{if(!(state.specimens??[]).some(p=>p.uid===uid)) return false;state={...state,selected:uid};persist();return true}
export const selectedRegion = () => state.region
export const selectRegion = (region:RegionId) => {
  state.region=region
  if(!regionContains(region,ENEMIES[state.target].dex)) state.target=(Object.keys(ENEMIES) as EnemyId[]).find(id=>regionContains(region,ENEMIES[id].dex))!
  persist(); repaint()
}
let repaint = () => {}
let last = 'Selecione um alvo e compre Pokébolas. A caça automática funciona com o jogo aberto.'

export const captureDefeat = (id: EnemyId, boss: boolean) => {
  depositPokeDollars(boss ? 100 : 2)
  const result = attemptCapture(state, id, Math.random())
  if (result) {
    state = result.save
    last = result.caught ? `${ENEMIES[id].name} capturado!` : `${ENEMIES[id].name} escapou. Tentando novamente na próxima oportunidade.`
    if (result.caught) {
      state={...state,specimens:[...(state.specimens??[]),newSpecimen(id,`catch-${Date.now()}-${state.attempts}`)]}
      const dex = ENEMIES[id].dex
      const family = HATCHLING_IDS.find(key => HATCHLINGS[key].line.some(s => s.dex === dex))
      updateSave(s => ({ ...s, dex: markHatch(s.dex, [dex], false), hatched: family ? { ...s.hatched, [family]: { shiny: s.hatched[family]?.shiny ?? false } } : s.hatched }))
    }
    persist()
  }
  repaint()
}

persist()
let showTraining:(id:import('../data/hatchlings').PlayableId)=>void=()=>{}
export const openTraining=(id:import('../data/hatchlings').PlayableId)=>showTraining(id)
let showCollection:()=>void=()=>{}
let showCapture:()=>void=()=>{}
export const openCapture=()=>showCapture()
export const openCollection=()=>showCollection()
export const mountExpedition = (getGame:()=>Game|null,onRegion:()=>void,onPlay:(id:PlayableId,ivs:IVs)=>void) => {
  const controller=mountExpeditionPanel({getState:()=>state,setState:next=>{state=next;persist()},getGame,onRegion,onPlay,selectRegion,getLast:()=>last})
  repaint=controller.refresh;showTraining=controller.openTraining;showCollection=controller.openCollection;showCapture=controller.openCapture;repaint()
  setInterval(()=>{
    const game=getGame()
    if(state.auto && !game && !document.hidden && rarityOfDex(ENEMIES[state.target].dex)!=='lendário') {depositPokeDollars(4);captureDefeat(state.target,false)}
    repaint()
  },8000)
}
