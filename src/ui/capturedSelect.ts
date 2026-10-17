import { POKEMON_REGIONS,pokemonRegion } from '../game/pokemonRegions'
import { PLAYABLE,type PlayableId } from '../data/hatchlings'
import { ENEMIES } from '../data/enemies'
import { TYPE_COLORS } from '../data/types'
import type { Input } from '../engine/input'
import { capturedPartner } from '../game/specimens'
import { IV_RARITIES,IV_KEYS,IV_LABELS,ivQuality,ivRarity,type IVs } from '../game/ivs'
import { CAMPAIGNS,type RegionId } from '../game/regions'
import { starterStats } from '../game/leveling'
import { applyDeltas } from '../game/stats'
import { ivDeltas } from '../game/ivs'
import { moveStats,MOVES } from '../game/moves'
import { captureState,chooseSpecimen,openCapture,openTraining,selectedRegion,selectRegion } from './expedition'
import { difficultyPicker,bagPicker } from './starterSelect'
import { drawPokemon,loadSpecies,loadedSprites } from '../render/sprites'
import {rankDeltas} from '../game/meta'
import { trainingDeltas } from '../game/training'
import { loadTraining } from './trainingSave'
import { loadSave } from './save'
import { h } from './dom'
import type { Screen } from './screens'
type Actions={pick:(id:PlayableId,ivs:IVs)=>void;incubator:()=>void}
export const capturedSelect=(root:HTMLElement,input:Input,actions:Actions,initial:PlayableId):Screen & {selected:()=>PlayableId}=>{
 let chosen=captureState().selected,query='',fingerprint='',locked=false,page=0,origin='kanto',rarity='todas'
 let slots:Array<{canvas:HTMLCanvasElement;dex:number;large:boolean}>=[]
 const sprites=(dex:number,large=false)=>{
  const canvas=h('canvas',{width:large?128:72,height:large?112:72,role:'img','aria-label':`Sprite de ${Object.values(PLAYABLE).find(p=>p.line[0].dex===dex)?.name??'Pokémon'}`})
  slots.push({canvas,dex,large});void loadSpecies(dex).catch(()=>{});return canvas
 }
 const el=h('div',{class:'screen captured-select-screen'}),grid=h('div',{class:'caught-partner-grid'}),detail=h('article',{class:'caught-partner-detail'}),count=h('span',{class:'caught-count'}),pager=h('div',{class:'capture-paging'})
 const originSelect=h('select',{'aria-label':'Região dos Pokémon'},h('option',{value:'todas'},'Todas as regiões'),...POKEMON_REGIONS.map(r=>h('option',{value:r.id,selected:r.id===origin},r.name)))
 const raritySelect=h('select',{'aria-label':'Raridade dos Pokémon'},h('option',{value:'todas'},'Todas as raridades'),...IV_RARITIES.map(r=>h('option',{value:r},r)))
 const search=h('input',{type:'search',placeholder:'Buscar Pokémon capturado','aria-label':'Buscar parceiro capturado'})
 const region=h('select',{'aria-label':'Mapa da partida'},...Object.entries(CAMPAIGNS).map(([id,c])=>h('option',{value:id,selected:id===selectedRegion()},c.name)))
 region.onchange=()=>selectRegion(region.value as RegionId)
 const difficulty=difficultyPicker(loadSave().difficulty),bag=bagPicker(loadSave().bag)
 const selected=()=>((captureState().specimens??[]).find(p=>p.uid===chosen))
 const pick=()=>{
  const p=selected();if(!p || locked)return
  locked=true;chooseSpecimen(p.uid);actions.pick(capturedPartner(p.species),{...p.ivs})
 }
 const drawDetail=()=>{
  const p=selected();detail.replaceChildren();slots=slots.filter(s=>s.canvas.isConnected)
  if(!p){detail.append(h('h2',{},'Sua próxima aventura começa com uma captura'),h('p',{},'Escolha um alvo em Capturar e use suas Pokébolas. Assim que capturá-lo, ele aparece aqui para jogar.'),h('button',{class:'btn',onclick:openCapture},'Capturar meu primeiro Pokémon'));return}
  const id=capturedPartner(p.species),def=PLAYABLE[id],stats=applyDeltas(starterStats(id,0),[ivDeltas(p.ivs),...trainingDeltas(loadTraining(id)),...rankDeltas(loadSave().ranks)]),weapon=moveStats(def.signature,1,stats)
  detail.dataset.rarity=ivRarity(p.ivs)
  detail.append(h('div',{class:'caught-hero'},sprites(ENEMIES[p.species].dex,true),h('div',{},h('small',{},ivRarity(p.ivs).toUpperCase()+' · IV '+ivQuality(p.ivs).toFixed(1)+'%'),h('h2',{},def.name),h('div',{class:'capture-types'},...def.line[0].types.map(type=>h('span',{style:`--capture-type:${TYPE_COLORS[type]}`},type.toUpperCase()))),h('p',{},'Começa no nível 1 · uma habilidade'))),h('div',{class:'iv-grid'},...IV_KEYS.map(key=>h('div',{class:'iv-stat'},h('span',{},IV_LABELS[key]),h('strong',{},p.ivs[key]+'/31')))),h('p',{class:'caught-stats'},Math.round(stats.maxHp)+' HP · '+weapon.damage.toFixed(1)+' dano por acerto · '+weapon.cooldown.toFixed(2)+' s de recarga'),h('h3',{},MOVES[def.signature].name),h('p',{},'Ganhe experiência para fortalecer seu parceiro. Despertar de skills: nível 20 do Pokémon e 5 minutos de partida, com skill no nível 7 ou maior.'),h('div',{class:'caught-actions'},h('button',{class:'btn primary',onclick:pick,'aria-label':'Jogar com '+def.name},'▶ Jogar com '+def.name),h('button',{class:'btn',onclick:()=>openTraining(id)},'Treinar este Pokémon')))
 }
 const draw=()=>{
  const all=captureState().specimens??[]
  if(!all.some(p=>p.uid===chosen))chosen=all[0]?.uid
  const list=all.filter(p=>(origin==='todas'||pokemonRegion(ENEMIES[p.species].dex).id===origin)&&(rarity==='todas'||ivRarity(p.ivs)===rarity)&&ENEMIES[p.species].name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).sort((a,b)=>pokemonRegion(ENEMIES[a.species].dex).max-pokemonRegion(ENEMIES[b.species].dex).max||IV_RARITIES.indexOf(ivRarity(a.ivs))-IV_RARITIES.indexOf(ivRarity(b.ivs))||ENEMIES[a.species].dex-ENEMIES[b.species].dex||ivQuality(b.ivs)-ivQuality(a.ivs))
  count.textContent=new Set(all.map(p=>ENEMIES[p.species].dex)).size+' Pokémon liberados · '+all.length+' exemplares'
  for(const option of Array.from(originSelect.options)){const n=all.filter(p=>option.value==='todas'||pokemonRegion(ENEMIES[p.species].dex).id===option.value).length;option.textContent=(POKEMON_REGIONS.find(r=>r.id===option.value)?.name??'Todas as regiões')+' ('+n+')'}
  for(const option of Array.from(raritySelect.options)){const n=all.filter(p=>(origin==='todas'||pokemonRegion(ENEMIES[p.species].dex).id===origin)&&(option.value==='todas'||ivRarity(p.ivs)===option.value)).length;option.textContent=(option.value==='todas'?'Todas as raridades':option.value)+' ('+n+')'}
  page=Math.min(page,Math.max(0,Math.ceil(list.length/24)-1))
  let lastGroup=''
  grid.replaceChildren(...list.slice(page*24,page*24+24).map(p=>{
   const def=ENEMIES[p.species],button=h('button',{class:'caught-partner-card'+(chosen===p.uid?' selected':''),type:'button','data-rarity':ivRarity(p.ivs),'aria-pressed':String(chosen===p.uid),'aria-label':'Escolher '+def.name+' IV '+ivQuality(p.ivs).toFixed(1)+'%'},sprites(def.dex),h('b',{},def.name),h('small',{},ivRarity(p.ivs)+' · '+ivQuality(p.ivs).toFixed(1)+'%'))
   button.onclick=()=>{chosen=p.uid;chooseSpecimen(p.uid);draw()};const group=pokemonRegion(def.dex).name+' · '+ivRarity(p.ivs);if(group!==lastGroup){lastGroup=group;return [h('h3',{class:'caught-group-title','data-rarity':ivRarity(p.ivs)},group),button]}return [button]
  }).flat())
  if(!list.length)grid.append(h('p',{},all.length?'Nenhum Pokémon encontrado.':'Você ainda não possui capturas. Clique em Capturar Pokémon.'))
  const prev=h('button',{class:'btn',disabled:page===0},'← Anterior'),next=h('button',{class:'btn',disabled:(page+1)*24>=list.length},'Próxima →')
  prev.onclick=()=>{page--;draw()};next.onclick=()=>{page++;draw()};pager.replaceChildren(prev,h('span',{},(page+1)+' / '+Math.max(1,Math.ceil(list.length/24))),next)
  drawDetail()
 }
 search.oninput=()=>{query=search.value;if(query){origin='todas';originSelect.value=origin}page=0;draw()}
 originSelect.onchange=()=>{origin=originSelect.value;page=0;draw()}
 raritySelect.onchange=()=>{rarity=raritySelect.value;page=0;draw()}
 const toolbar=h('div',{class:'caught-toolbar'},h('label',{},'Mapa da partida',region),h('button',{class:'btn',onclick:openCapture},'Capturar Pokémon / Loja'),h('button',{class:'btn',onclick:actions.incubator},'Incubadora'))
 el.append(h('header',{class:'caught-header'},h('div',{},h('small',{},'SUA COLEÇÃO · SEU PARCEIRO'),h('h1',{},'Escolha seu Pokémon'),h('p',{},'Todos os Pokémon desta edição estão liberados. Escolha por região e raridade de IV.')),count),toolbar,h('div',{class:'captured-select-layout'},h('section',{class:'caught-roster'},h('div',{class:'caught-filters'},h('label',{},'Região dos Pokémon',originSelect),h('label',{},'Raridade de IV',raritySelect)),search,grid,pager),detail),h('footer',{class:'caught-footer'},difficulty.el,bag.el))
 root.append(el);draw()
 const off=input.onKey(key=>{
  if(document.activeElement===search || document.activeElement instanceof HTMLSelectElement)return
  if((key==='Enter'||key==='Space') && document.activeElement instanceof HTMLButtonElement)return
  if(key==='Enter'||key==='Space')pick()
  else if(key==='KeyX')difficulty.cycle()
  else if(key==='ArrowLeft'||key==='ArrowRight'){
   const list=captureState().specimens??[],index=list.findIndex(p=>p.uid===chosen),next=list[(index+(key==='ArrowLeft'?-1:1)+list.length)%list.length]
   if(next){chosen=next.uid;origin=pokemonRegion(ENEMIES[next.species].dex).id;originSelect.value=origin;rarity='todas';raritySelect.value=rarity;query='';search.value='';page=0;chooseSpecimen(next.uid);draw()}
  }else bag.onKey(key)
 })
 return {el,selected:()=>selected()?capturedPartner(selected()!.species):initial,tick:(time)=>{
  const key=(captureState().specimens??[]).map(p=>p.uid).join('|');if(key!==fingerprint){fingerprint=key;draw()}
  slots=slots.filter(s=>s.canvas.isConnected)
  for(const s of slots){const c=s.canvas.getContext('2d')!,loaded=loadedSprites(s.dex);c.clearRect(0,0,s.canvas.width,s.canvas.height);c.imageSmoothingEnabled=false
   if(loaded){const scale=Math.min(s.large?3.2:1.8,(s.canvas.width-10)/Math.max(loaded.bodyW,loaded.bodyH));drawPokemon(c,loaded,'Idle',0,time,s.canvas.width/2,s.canvas.height-8,{scale})}
   else{c.fillStyle='#94bc9c';c.font='12px sans-serif';c.fillText('Carregando',4,s.canvas.height/2)}
  }
 },dispose:()=>{off();el.remove();slots=[]}}
}
