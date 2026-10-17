import {awakeningReady} from './progressionBalance'
import { evolutionOf } from '../data/evolutions'
import { TYPE_SKILL_META } from '../data/combatExpansion'
import { TYPE_COLORS } from '../data/types'
import { MOVES,moveStats,type MoveId } from './moves'
import { spawnAttack } from './spawn'
import { burst } from './effects'
import type { Game,OwnedMove } from './types'

export const weaponForm=(id:MoveId,level:number,ready=true):MoveId=>ready && level>=7 ? evolutionOf(id)?.to ?? id : id
export const weaponName=(id:MoveId,level:number,g?:Game)=>{
  const form=weaponForm(id,level,!g || awakeningReady(g)),name=MOVES[form].name
  if(g && level>=7 && !awakeningReady(g)) return `${name} · Despertar pendente`
  return `${name}${level>=10 ? ' Supremo' : level>=7 && form===id ? ' Ascendido' : level>=4 && form===id ? ' Aprimorado' : ''}`
}
export const morphDescription=(id:MoveId,level:number)=>{
  const from=weaponForm(id,level-1),to=weaponForm(id,level)
  if(from!==to) return `TRANSFORMAÇÃO: ${MOVES[from].name} → ${MOVES[to].name}. Novo padrão de ataque, sem receita.`
  const meta=TYPE_SKILL_META[id as keyof typeof TYPE_SKILL_META]
  if(![4,7,10].includes(level)) return null
  const effects=meta ? {
    volley:['Projéteis passam a perseguir alvos.','Os impactos provocam explosões.','Rajada em 360° com explosões.'],
    orbit:['Duas órbitas com sentidos opostos.','A guarda passa a emitir ondas de choque.','Aura contínua acompanha seu Pokémon.'],
    rain:['Cada alvo recebe uma segunda chuva.','Os impactos deixam campos persistentes.','Tempestade com impactos maiores e campos duradouros.'],
    return:['Bumerangues em leque com alcance maior.','Bumerangues explodem nos impactos sem perder o retorno.','Discos em 360° com explosões.'],
    field:['Campos maiores desaceleram os inimigos.','Campos pulsam mais rápido e duram mais.','Uma aura de controle passa a acompanhar você.'],
    chain:['Saltos alcançam inimigos mais distantes.','Cada alvo atingido provoca uma explosão.','Cadeias maiores, explosões e maior força por salto.'],
  }[meta.pattern] : ['Mais projéteis e alcance.','Impactos explosivos e alcance ampliado.','Uma onda adicional acompanha cada disparo.']
  return `MUTAÇÃO Nv ${level}: ${effects[Math.floor(level/3)-1]}${id.startsWith('signature') && level===7 ? ' Libera o segundo padrão exclusivo da espécie.' : ''}`
}
export const celebrateMastery=(g:Game,id:MoveId,level:number)=>{
  if(![4,7,10].includes(level)) return
  const color=TYPE_COLORS[MOVES[id].type]
  burst(g,g.player.x,g.player.y-8,{colors:[color,'#ffffff','#ffd830'],count:35,speed:110,ttl:0.6})
  g.events.push({kind:'weaponMastery',move:id,level})
}
/** Resolves the visible form at cast time, preserving its slot and all invested levels. */
export const castWeapon=(g:Game,owned:OwnedMove)=>{
  const ready=awakeningReady(g),form=weaponForm(owned.id,owned.level,ready),s=moveStats(form,owned.level,g.player.stats)
  if(ready && owned.level>=7 && !owned.awakened){owned.awakened=true;celebrateMastery(g,owned.id,7)}
  if(!ready) s.mastery=Math.min(1,s.mastery??0)
  const start=g.attacks.length
  MOVES[form].fire(g,s)
  const mastery=s.mastery??0
  for(let i=start;i<g.attacks.length;i++) {
    const a=g.attacks[i]!
    a.mastery=mastery
    if(mastery>=2 && a.motion.kind!=='static' && a.motion.kind!=='follow' && !a.blast) a.onHitBurst={radius:18*s.area,damageFactor:0.28}
  }
  if(ready && owned.level>=10 && !(owned.id in TYPE_SKILL_META)) spawnAttack(g,{
    move:form,type:MOVES[form].type,visual:'upgradeBurst',x:g.player.x,y:g.player.y-8,
    shape:{kind:'circle',r:12},motion:{kind:'follow',ox:0,oy:-8},
    damage:s.damage*0.35,ttl:0.38,grow:110,knockback:90,mastery:3,
  })
  return s
}
