import {spawnAttack} from './spawn'
import {updateAttacks} from './attacks'
import {insert} from '../engine/spatial'
import{describe,it,expect}from'vitest'
import{POKE_TYPES}from'../data/types'
import{elementZone,elementalOrbit,zoneContains}from'./elementGeometry'
import{createGame}from'./game'
import{spawnEnemy}from'./enemies'
import{MOVES,moveStats}from'./moves'
describe('elemental area and guard behavior',()=>{
 it('has distinct occupied layouts and actual trajectories for all 18 types',()=>{
  expect(new Set(POKE_TYPES.map(t=>JSON.stringify(elementZone(t,7)))).size).toBe(18)
  expect(new Set(POKE_TYPES.map(t=>JSON.stringify([.3,.7,1.2].map(a=>elementalOrbit(t,a,a,40,7))))).size).toBe(18)
 })
 it('does not hit empty gaps in fields while preserving occupied lanes and patches',()=>{
  const water=elementZone('water');expect(zoneContains(water,0,0,0)).toBe(true);expect(zoneContains(water,0,.22,0)).toBe(false)
  const grass=elementZone('grass');expect(zoneContains(grass,-.52,-.46,.01)).toBe(true);expect(zoneContains(grass,.85,-.8,0)).toBe(false)
  const psychic=elementZone('psychic');expect(zoneContains(psychic,0,0,0)).toBe(false);expect(zoneContains(psychic,.55,0,0)).toBe(true)
 })
 it('uses the caster species for shared fields and guards too',()=>{
  const layouts=[]
  for(const id of ['captured7','captured9'] as const){const g=createGame(id,{w:640,h:360},1);spawnEnemy(g,'rattata',100,0);MOVES.waterField.fire(g,moveStats('waterField',1,g.player.stats));expect(g.attacks[0]!.elementZone).toBeDefined();layouts.push(g.attacks[0]!.elementZone);MOVES.waterOrbit.fire(g,moveStats('waterOrbit',1,g.player.stats));expect(g.attacks.find(a=>a.motion.kind==='orbit')!.orbitVariant).toBe(Number(id.slice(8)))}
  expect(layouts[0]).not.toEqual(layouts[1])
 })
 it('applies collision to occupied water lanes rather than the full enclosing circle',()=>{
  const g=createGame('captured7',{w:640,h:360},1)
  const lane=spawnEnemy(g,'rattata',0,1),gap=spawnEnemy(g,'rattata',0,23)
  for(const [i,e]of [lane,gap].entries()){e.radius=1;e.hp=e.maxHp=1000;insert(g.grid,i,e.x,e.y)}
  spawnAttack(g,{move:'waterField',type:'water',visual:'typedSkill',x:0,y:0,shape:{kind:'circle',r:100},elementZone:elementZone('water'),motion:{kind:'static'},damage:10,ttl:2})
  updateAttacks(g,.016)
  expect(lane.hp).toBeLessThan(1000);expect(gap.hp).toBe(1000)
 })
 it('keeps every layout and trajectory finite and bounded for the full catalog',()=>{
  for(let dex=1;dex<=1025;dex++)for(const type of POKE_TYPES){const p=elementalOrbit(type,1.2,.8,40,dex);expect(Number.isFinite(p.x+p.y)).toBe(true);expect(Math.hypot(p.x,p.y)).toBeLessThan(80);expect(JSON.stringify(elementZone(type,dex))).not.toContain('NaN')}
 })
})
