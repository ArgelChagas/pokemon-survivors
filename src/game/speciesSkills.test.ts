import {describe,it,expect} from 'vitest'
import {speciesStyle} from '../data/speciesStyle'
import {paintSpeciesGlyph} from '../render/speciesSkills'
import {createGame} from './game'
import {spawnEnemy} from './enemies'
import {MOVES,moveStats,type MoveId} from './moves'
const trace=(dex:number,type:Parameters<typeof speciesStyle>[1])=>{const calls:string[]=[];const c=new Proxy({},{get:(_o,k)=> (...a:unknown[])=>calls.push(String(k)+JSON.stringify(a)),set:(_o,k,v)=>{calls.push(String(k)+String(v));return true}}) as CanvasRenderingContext2D;paintSpeciesGlyph(c,dex,type,3);return calls.join('|')}
describe('species skill identities',()=>{
 it('uses distinct silhouettes for bubble, cannon, sludge, needles and ribbons',()=>{
  expect(new Set([trace(7,'water'),trace(9,'water'),trace(89,'poison'),trace(15,'bug'),trace(700,'fairy')]).size).toBe(5)
  expect(speciesStyle(7,'water').motif).toBe('bubble');expect(speciesStyle(9,'water').motif).toBe('jet');expect(speciesStyle(89,'poison').motif).toBe('sludge')
 })
 it('keeps graphics deterministic without consuming simulation randomness',()=>{expect(trace(7,'water')).toBe(trace(7,'water'));expect(trace(7,'water')).not.toBe(trace(134,'water'))})
 it('gives water partners different attack behavior at level one',()=>{
  const patterns=[]
  for(const dex of [7,8,9,134]){const g=createGame(('captured'+dex) as Parameters<typeof createGame>[0],{w:640,h:360},1);spawnEnemy(g,'rattata',100,0);const id=('signature'+dex) as MoveId;MOVES[id].fire(g,moveStats(id,1,g.player.stats));expect(g.attacks.length).toBeGreaterThan(0);patterns.push(g.attacks.map(a=>[a.skillPattern,a.motion.kind]));expect(g.attacks.every(a=>a.type==='water')).toBe(true)}
  expect(new Set(patterns.map(p=>JSON.stringify(p))).size).toBeGreaterThanOrEqual(3)
 })
})
