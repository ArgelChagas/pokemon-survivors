import { IV_KEYS,IV_LABELS,IV_RARITIES,ivQuality,ivRarity,ivDeltas,type IVs } from '../game/ivs'
import { capturedPartner } from '../game/specimens'
import { MOVES } from '../game/moves'
import { morphDescription } from '../game/weaponProgression'
import { ENEMIES,type EnemyId } from '../data/enemies'
import { PLAYABLE,type PlayableId } from '../data/hatchlings'
import { POKE_TYPES,TYPE_COLORS } from '../data/types'
import { BALLS,buyBalls,ballPackPrice,captureChance,type BallId,type CaptureSave } from '../game/capture'
import { CAMPAIGNS,regionContains,regionArea,type RegionId } from '../game/regions'
import { RARITIES,rarityOfDex } from '../game/skillRarity'
import { TRAINING,TRAINING_IDS,buyTraining,trainingPrice } from '../game/training'
import { isUnlocked } from '../game/eggs'
import type { Game } from '../game/types'
import { portraitUrl } from '../render/sprites'
import { loadSave,updateSave } from './save'
import { loadTraining,saveTraining } from './trainingSave'
import { h } from './dom'

type Page='capture'|'shop'|'training'|'collection'
type API={getState:()=>CaptureSave;setState:(s:CaptureSave)=>void;getGame:()=>Game|null;selectRegion:(r:RegionId)=>void;onRegion:()=>void;getLast:()=>string;onPlay:(id:PlayableId,ivs:IVs)=>void}
const names={capture:'Capturar',shop:'Loja de Pokébolas',training:'Treino por Pokémon',collection:'Meus Pokémon · Jogar'} as const
const normal=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
const rarity=(id:EnemyId)=>rarityOfDex(ENEMIES[id].dex,'tier' in ENEMIES[id] ? Number(ENEMIES[id].tier) : 5)
const money=(n:number)=>`₽${n.toLocaleString('pt-BR')}`
const image=(id:EnemyId)=>h('img',{src:portraitUrl(ENEMIES[id].dex),alt:'',loading:'lazy'})
const typeTags=(id:EnemyId)=>h('span',{class:'capture-types'},...ENEMIES[id].types.map(type=>h('span',{style:`--capture-type:${TYPE_COLORS[type]}`},type.toUpperCase())))

export const mountExpeditionPanel=(api:API)=>{
  let page:Page='collection',query='',type='',rank='',owned='all',offset=0,trainingPartner:PlayableId=api.getGame()?.starter ?? 'charmander'
  let paused:Game|null=null,notice='',collectionQuery='',collectionRank='',collectionOffset=0
  const toggle=h('button',{class:'expedition-toggle',type:'button'},'◉ Meus Pokémon · Captura · Loja')
  const backdrop=h('div',{class:'central-backdrop',hidden:true})
  const panel=h('section',{class:'expedition-panel expedition-expanded',hidden:true,role:'dialog','aria-modal':'true','aria-label':'Central Pokémon'})
  const wallet=h('strong',{class:'expedition-wallet'}),content=h('div',{class:'expedition-content'})
  const nav=h('nav',{'aria-label':'Abas da central Pokémon'})
  const status=h('div',{class:'expedition-status'})
  const close=h('button',{class:'central-close',type:'button','aria-label':'Fechar central Pokémon'},'✕')
  const header=h('header',{class:'expedition-heading'},h('div',{},h('h2',{},'Central Pokémon'),wallet),close)
  panel.append(header,nav,content)
  document.body.append(toggle,backdrop,panel,status)
  const hide=()=>{panel.hidden=true;backdrop.hidden=true;if(paused===api.getGame() && paused?.phase==='paused') paused.phase='playing';paused=null}
  const show=()=>{const g=api.getGame();if(g?.phase==='playing'){g.phase='paused';paused=g}panel.hidden=false;backdrop.hidden=false;render()}
  backdrop.onclick=hide
  toggle.onclick=()=>panel.hidden ? show() : hide();close.onclick=hide
  for(const event of ['keydown','keyup']) toggle.addEventListener(event,e=>e.stopPropagation())
  for(const event of ['keydown','keyup','pointerdown','pointerup','click']) panel.addEventListener(event,e=>{if(event==='keydown' && (e as KeyboardEvent).key==='Escape') hide();e.stopPropagation()})
  const update=(next:CaptureSave)=>{api.setState(next);render()}
  const regionSelect=()=>{
    const s=api.getState(),select=h('select',{'aria-label':'Região da expedição'},...Object.entries(CAMPAIGNS).map(([id,r])=>h('option',{value:id,selected:s.region===id},r.name)))
    select.disabled=!!api.getGame()
    select.onchange=()=>{api.selectRegion(select.value as RegionId);api.onRegion();offset=0;render()}
    return h('label',{},'Região da expedição',select)
  }
  const ballSelect=()=>{
    const s=api.getState(),select=h('select',{'aria-label':'Pokébola usada'},...Object.entries(BALLS).map(([id,b])=>h('option',{value:id,selected:s.ball===id},`${b.name} · estoque ${s.balls[id as BallId]}`)))
    select.onchange=()=>update({...api.getState(),ball:select.value as BallId})
    return h('label',{},'Pokébola equipada',select)
  }
  const targetCard=()=>{
    const s=api.getState(),def=ENEMIES[s.target],chance=captureChance(s.target,s.ball)
    const auto=h('button',{class:s.auto ? 'central-action active' : 'central-action',type:'button'},s.auto ? '⏸ Parar captura automática' : '▶ Ativar captura automática')
    auto.onclick=()=>update({...api.getState(),auto:!api.getState().auto})
    const buy=h('button',{class:'central-action secondary',type:'button'},'Comprar Pokébolas')
    buy.onclick=()=>{page='shop';render()}
    return h('div',{class:'capture-target'},image(s.target),h('div',{},h('small',{},'ALVO SELECIONADO'),h('h3',{},def.name),typeTags(s.target),h('p',{},`${rarity(s.target)} · ${(chance*100).toFixed(1)}% de chance · capturados: ${s.caught[s.target] ?? 0}`),
      h('p',{class:'capture-feedback',role:'status'},s.balls[s.ball]===0 ? 'Sem bolas equipadas: compre na loja ou escolha outro modelo. A caça do menu ainda rende dinheiro.' : api.getLast()),
      h('div',{class:'capture-inline'},ballSelect(),auto,buy),
      h('small',{},rarity(s.target)==='lendário' ? 'Lendários: a tentativa acontece ao derrotar o chefe na partida.' : 'No menu: um encontro a cada 8 s com a aba visível. Na partida: tentativa ao derrotar o alvo.')))
  }
  const capturePage=()=>{
    const s=api.getState(),grid=h('div',{class:'pokemon-choice-grid'}),counter=h('p',{class:'capture-counter'}),paging=h('div',{class:'capture-paging'})
    const search=h('input',{type:'search',placeholder:'Nome ou número da Pokédex','aria-label':'Buscar Pokémon',value:query})
    const types=h('select',{'aria-label':'Filtrar por tipo'},h('option',{value:''},'Todos os tipos'),...POKE_TYPES.map(t=>h('option',{value:t,selected:type===t},t.toUpperCase())))
    const ranks=h('select',{'aria-label':'Filtrar por raridade'},h('option',{value:''},'Todas as raridades'),...RARITIES.map(r=>h('option',{value:r,selected:rank===r},r)))
    const collection=h('select',{'aria-label':'Filtrar coleção'},h('option',{value:'all',selected:owned==='all'},'Todos'),h('option',{value:'missing',selected:owned==='missing'},'Ainda não capturados'),h('option',{value:'owned',selected:owned==='owned'},'Já capturados'))
    const draw=()=>{
      const current=api.getState()
      const list=(Object.keys(ENEMIES) as EnemyId[]).filter(id=>{
        const d=ENEMIES[id],caught=(current.caught[id] ?? 0)>0
        return regionContains(current.region,d.dex) && (!query || normal(d.name).includes(normal(query)) || String(d.dex)===query.replace('#','')) && (!type || (d.types as readonly string[]).includes(type)) && (!rank || rarity(id)===rank) && (owned==='all' || owned==='owned' && caught || owned==='missing' && !caught)
      }).sort((a,b)=>ENEMIES[a].dex-ENEMIES[b].dex)
      offset=Math.max(0,Math.min(offset,Math.max(0,Math.ceil(list.length/18)-1)))
      counter.textContent=`${list.length} Pokémon em ${CAMPAIGNS[s.region].name} · página ${offset+1}/${Math.max(1,Math.ceil(list.length/18))}`
      grid.replaceChildren(...list.slice(offset*18,offset*18+18).map(id=>{
        const card=h('button',{type:'button',class:`pokemon-choice ${id===current.target ? 'chosen' : ''}`,'aria-pressed':String(id===current.target),'aria-label':`Selecionar ${ENEMIES[id].name}`},image(id),h('small',{},`#${String(ENEMIES[id].dex).padStart(3,'0')} · ${rarity(id)}`),h('b',{},ENEMIES[id].name),typeTags(id),h('span',{},`${(captureChance(id,current.ball)*100).toFixed(0)}% · ${(current.caught[id] ?? 0)>0 ? '✓ capturado' : 'não capturado'}`))
        card.onclick=()=>update({...api.getState(),target:id})
        return card
      }))
      if(!list.length) grid.append(h('p',{},'Nenhum Pokémon corresponde aos filtros.'))
      const prev=h('button',{class:'central-action secondary',type:'button',disabled:offset===0},'← Anterior'),next=h('button',{class:'central-action secondary',type:'button',disabled:(offset+1)*18>=list.length},'Próxima →')
      prev.onclick=()=>{offset--;draw()};next.onclick=()=>{offset++;draw()};paging.replaceChildren(prev,next)
    }
    search.oninput=()=>{query=search.value;offset=0;draw()}
    types.onchange=()=>{type=types.value;offset=0;draw()};ranks.onchange=()=>{rank=ranks.value;offset=0;draw()};collection.onchange=()=>{owned=collection.value;offset=0;draw()}
    draw()
    return h('div',{},h('div',{class:'capture-region'},regionSelect(),h('p',{},CAMPAIGNS[s.region].route.join(' → '))),targetCard(),h('h3',{},'Escolha seu próximo Pokémon'),h('div',{class:'capture-filters'},search,types,ranks,collection),counter,grid,paging)
  }
  const shopPage=()=>{
    const s=api.getState(),wallet=loadSave().wallet
    return h('div',{},h('h3',{},'Poké Mart · compra em quantidade'),h('p',{},`Compare a chance contra ${ENEMIES[s.target].name}. Pacotes de 10 têm 5% de desconto; de 50 têm 10%.`),h('p',{role:'status'},notice),h('div',{class:'ball-shop-grid'},...Object.entries(BALLS).map(([id,b])=>{
      const key=id as BallId,equip=h('button',{class:'central-action secondary',type:'button'},s.ball===key ? '✓ Equipada' : 'Equipar')
      equip.onclick=()=>update({...api.getState(),ball:key})
      const purchases=[1,10,50].map(quantity=>{
        const price=ballPackPrice(key,quantity),button=h('button',{class:'central-action',type:'button',disabled:wallet<price,'aria-label':`Comprar ${quantity} ${b.name}`},`${quantity} un. · ${money(price)}`)
        button.onclick=()=>{
          const result=buyBalls(loadSave().wallet,api.getState(),key,quantity)
          if(!result) {notice='Saldo insuficiente.';render();return}
          updateSave(save=>({...save,wallet:result.wallet}));notice=`Compra concluída: ${quantity} ${b.name} por ${money(result.cost)}.`;update(result.save)
        }
        return button
      })
      return h('article',{class:`ball-shop-card ball-${key}`},h('span',{class:'ball-symbol','aria-hidden':'true'},'◉'),h('h3',{},b.name),h('b',{},`Estoque: ${s.balls[key]}`),h('p',{},`${(captureChance(s.target,key)*100).toFixed(1)}% para ${ENEMIES[s.target].name}`),h('small',{},key==='master' ? 'Captura garantida em uma tentativa válida. Não consome se não houver encontro com o alvo.' : `${money(b.price)} por unidade · poder ×${b.power}`),equip,...purchases)
    })))
  }
  const trainingPage=()=>{
    const save=loadSave(),ranks=loadTraining(trainingPartner),partner=PLAYABLE[trainingPartner]
    const select=h('select',{'aria-label':'Pokémon para treinar'},...(Object.keys(PLAYABLE) as PlayableId[]).filter(id=>isUnlocked(save.hatched,id) || (api.getState().specimens??[]).some(s=>capturedPartner(s.species)===id)).map(id=>h('option',{value:id,selected:id===trainingPartner},PLAYABLE[id].name)))
    select.onchange=()=>{trainingPartner=select.value as PlayableId;render()}
    return h('div',{},h('h3',{},'Melhorias permanentes do parceiro'),h('p',{},'Cada Pokémon possui seu próprio treino. As melhorias se aplicam somente quando você joga com ele, a partir da próxima partida.'),h('label',{},'Parceiro',select),h('p',{role:'status'},notice),h('div',{class:'training-partner'},h('img',{src:portraitUrl(partner.line[0].dex),alt:''}),h('strong',{},partner.name),h('span',{},`${Object.values(ranks).reduce((a,b)=>a+b,0)} níveis de treino`)),h('div',{class:'training-grid'},...TRAINING_IDS.map(id=>{
      const def=TRAINING[id],rank=ranks[id],price=trainingPrice(id,rank),max=rank>=def.max
      const buy=h('button',{class:'central-action',type:'button',disabled:max || save.wallet<price,'aria-label':`Treinar ${def.name} de ${partner.name}`},max ? 'Concluído' : `Nv ${rank} → ${rank+1} · ${money(price)}`)
      buy.onclick=()=>{const result=buyTraining(loadSave().wallet,loadTraining(trainingPartner),id);if(!result) return;updateSave(s=>({...s,wallet:result.wallet}));saveTraining(trainingPartner,result.ranks);notice=`${partner.name}: ${def.name} agora está no nível ${result.ranks[id]}.`;render()}
      return h('article',{class:'training-card'},h('h4',{},def.name),h('p',{},def.description),h('progress',{value:rank,max:def.max,'aria-label':`${def.name}: ${rank}/${def.max}`}),h('small',{},`Nível ${rank}/${def.max}`),buy)
    })))
  }
  const collectionPage=()=>{
    const s=api.getState(),all=s.specimens??[]
    const search=h('input',{type:'search',value:collectionQuery,placeholder:'Buscar nos seus Pokémon','aria-label':'Buscar Pokémon capturados'})
    const ranks=h('select',{'aria-label':'Filtrar raridade IV'},h('option',{value:''},'Todas as raridades IV'),...IV_RARITIES.map(r=>h('option',{value:r,selected:collectionRank===r},r)))
    const detail=h('div'),grid=h('div',{class:'pokemon-choice-grid'}),counter=h('p'),paging=h('div',{class:'capture-paging'})
    const draw=()=>{
      const current=api.getState(),specimens=current.specimens??[]
      const list=specimens.filter(p=>(!collectionQuery || normal(ENEMIES[p.species].name).includes(normal(collectionQuery))) && (!collectionRank || ivRarity(p.ivs)===collectionRank)).sort((a,b)=>ivQuality(b.ivs)-ivQuality(a.ivs) || a.uid.localeCompare(b.uid))
      const selected=specimens.find(p=>p.uid===current.selected)??list[0]
      detail.replaceChildren()
      if(selected) {
        const partner=capturedPartner(selected.species),def=PLAYABLE[partner],signature=MOVES[def.signature],bonuses=ivDeltas(selected.ivs)
        const play=h('button',{class:'central-action',type:'button',disabled:!!api.getGame()},'▶ Jogar com '+def.name)
        play.onclick=()=>{const chosen=(api.getState().specimens??[]).find(p=>p.uid===selected.uid);if(!chosen || api.getGame()) return;api.setState({...api.getState(),selected:chosen.uid});hide();api.onPlay(capturedPartner(chosen.species),{...chosen.ivs})}
        const train=h('button',{class:'central-action secondary',type:'button'},'Treinar '+def.name)
        train.onclick=()=>{trainingPartner=partner;page='training';render()}
        detail.append(h('article',{class:'specimen-detail', 'data-rarity':ivRarity(selected.ivs)},h('div',{class:'capture-target'},image(selected.species),h('div',{},h('small',{},'SEU PARCEIRO · '+ivRarity(selected.ivs).toUpperCase()),h('h3',{},def.name),typeTags(selected.species),h('strong',{},'Qualidade IV: '+ivQuality(selected.ivs).toFixed(1)+'%'),h('div',{class:'capture-inline'},play,train),api.getGame() && h('small',{},'Termine a partida atual para iniciar com outro parceiro.'))),h('div',{class:'iv-grid'},...IV_KEYS.map(k=>h('div',{class:'iv-stat'},h('span',{},IV_LABELS[k]),h('strong',{},selected.ivs[k]+'/31'),h('progress',{value:selected.ivs[k],max:31,'aria-label':IV_LABELS[k]+' IV'})))),h('p',{},'Bônus deste exemplar: +'+bonuses.maxHp?.toFixed(0)+' vida · +'+((bonuses.might??0)*100).toFixed(0)+'% dano · +'+bonuses.armor?.toFixed(1)+' defesa · +'+bonuses.speed?.toFixed(1)+' velocidade.'),h('h4',{},'Golpe exclusivo: '+signature.name),h('p',{},'Cada espécie possui sua combinação de padrões, força, recarga, tamanho e velocidade. Somente golpes dos seus tipos.'),h('ul',{},...[4,7,10].map(level=>h('li',{},morphDescription(def.signature,level)??'')))))
      }
      collectionOffset=Math.min(collectionOffset,Math.max(0,Math.ceil(list.length/18)-1))
      counter.textContent=list.length+' exemplares · página '+(collectionOffset+1)+'/'+Math.max(1,Math.ceil(list.length/18))
      grid.replaceChildren(...list.slice(collectionOffset*18,collectionOffset*18+18).map(p=>{
        const card=h('button',{class:'pokemon-choice specimen-card '+(selected?.uid===p.uid?'chosen':''),type:'button','aria-label':'Escolher '+ENEMIES[p.species].name+' IV '+ivQuality(p.ivs).toFixed(1)+'%','aria-pressed':String(selected?.uid===p.uid),'data-rarity':ivRarity(p.ivs)},image(p.species),h('b',{},ENEMIES[p.species].name),h('strong',{},ivRarity(p.ivs)),h('span',{},'IV '+ivQuality(p.ivs).toFixed(1)+'%'),h('small',{},IV_KEYS.map(k=>p.ivs[k]).join(' / ')))
        card.onclick=()=>{api.setState({...api.getState(),selected:p.uid});draw()};return card
      }))
      if(!list.length) grid.append(h('p',{},all.length?'Nenhum exemplar corresponde aos filtros.':'Você ainda não capturou Pokémon. Vá em Capturar, escolha um alvo e ative a caça automática.'))
      const prev=h('button',{class:'central-action secondary',disabled:collectionOffset===0},'← Anterior'),next=h('button',{class:'central-action secondary',disabled:(collectionOffset+1)*18>=list.length},'Próxima →')
      prev.onclick=()=>{collectionOffset--;draw()};next.onclick=()=>{collectionOffset++;draw()};paging.replaceChildren(prev,next)
    }
    search.oninput=()=>{collectionQuery=search.value;collectionOffset=0;draw()};ranks.onchange=()=>{collectionRank=ranks.value;collectionOffset=0;draw()}
    draw()
    return h('div',{},h('h3',{},'Meus Pokémon · escolha e jogue'),h('details',{class:'iv-help'},h('summary',{},'IVs e raridades · como funcionam'),h('p',{},'Todos os capturados são jogáveis. Cada exemplar tem seis IVs de 1 a 31. A média define a raridade: comum <40%, incomum <55%, raro <70%, épico <85%, único <95%, místico ≥95%. Os IVs aumentam vida, dano, defesa, resistência, velocidade, área e velocidade dos projéteis.')),regionSelect(),h('div',{class:'partner-browser'},h('aside',{class:'partner-list'},h('div',{class:'capture-filters'},search,ranks),counter,grid,paging),detail))
  }
  const render=()=>{
    wallet.textContent=`${money(loadSave().wallet)} · ${Object.keys(api.getState().caught).length} espécies`
    if(panel.hidden) return
    nav.replaceChildren(...(Object.keys(names) as Page[]).map(id=>{const button=h('button',{type:'button',class:page===id ? 'selected' : '','aria-pressed':String(page===id)},names[id]);button.onclick=()=>{page=id;notice='';render()};return button}))
    const scroll=content.scrollTop
    content.replaceChildren(page==='capture' ? capturePage() : page==='shop' ? shopPage() : page==='training' ? trainingPage() : collectionPage())
    content.scrollTop=scroll
  }
  const refresh=()=>{
    const game=api.getGame()
    status.textContent=game?.roster.region ? `${CAMPAIGNS[game.roster.region].name} · ${regionArea(game.roster.region,game.time)}` : `${CAMPAIGNS[api.getState().region].name} · Expedição pronta`
    wallet.textContent=`${money(loadSave().wallet)} · ${Object.keys(api.getState().caught).length} espécies`
    if(!panel.contains(document.activeElement) || !['INPUT','SELECT'].includes(document.activeElement?.tagName ?? '')) render()
  }
  return {refresh,openCapture:()=>{page='capture';show()},openCollection:()=>{page='collection';show()},openTraining:(partner:PlayableId)=>{trainingPartner=partner;page='training';show()}}
}
