import {describe,it,expect} from 'vitest'
import {createGame} from './game'
import {NO_RANKS} from './meta'
import {EMPTY_TRAINING} from './training'
import {IV_KEYS,ivDeltas,ivRarity,type IVs} from './ivs'
import {moveStats} from './moves'
import {BASE_STATS} from './stats'
import {offerPool,gainXp} from './leveling'
import {castWeapon,weaponName} from './weaponProgression'
import {awakeningReady,characterGrowth} from './progressionBalance'
import {spawnEnemy} from './enemies'
import {updateSpawner} from './spawner'
import {gameSpecial} from './special'
import {PLAYABLE} from '../data/hatchlings'
import {ENEMIES,type EnemyId} from '../data/enemies'
import {capturedPartner} from './specimens'
const iv=(n:number):IVs=>Object.fromEntries(IV_KEYS.map(k=>[k,n])) as IVs
const fresh=(n=20)=>createGame('captured16',{w:640,h:360},1,NO_RANKS,undefined,{ivs:iv(n)})
describe('reference-based early progression',()=>{
 it('rare IVs give a small edge rather than a starting power tier',()=>{
  expect(ivRarity(iv(20))).toBe('raro')
  const common=moveStats('signature16',1,fresh(10).player.stats),rare=moveStats('signature16',1,fresh(20).player.stats)
  expect(rare.damage).toBeGreaterThan(common.damage);expect(rare.damage/common.damage).toBeLessThan(1.06)
  expect(ivDeltas(iv(31)).might).toBeLessThanOrEqual(.08);expect(ivDeltas(iv(31)).maxHp).toBeLessThan(11)
 })
 it('a low permanent rank cannot recreate the retired damage multiplier',()=>{
  const base=fresh(),trained=createGame('captured16',{w:640,h:360},1,{...NO_RANKS,protein:1},undefined,{ivs:iv(20),training:{...EMPTY_TRAINING,power:1}})
  expect(trained.player.stats.might-base.player.stats.might).toBeCloseTo(.07)
 })
 it('weapon levels improve individual properties without silently boosting every property',()=>{
  const a=moveStats('fireVolley',1,BASE_STATS),b=moveStats('fireVolley',2,BASE_STATS)
  expect(b.damage-a.damage).toBeCloseTo(.72);expect(b.amount).toBe(a.amount);expect(b.area).toBe(a.area);expect(b.cooldown).toBe(a.cooldown)
  const c=moveStats('fireVolley',4,BASE_STATS);expect(c.amount).toBe(2);expect(c.damage).toBe(b.damage)
 })
 it('does not draft already-evolved weapons as new level-one skills',()=>{
  const pool=offerPool({starter:'captured4',moves:[],items:[]})
  expect(pool.some(([o])=>o.kind==='move'&&o.id==='ember')).toBe(true)
  expect(pool.some(([o])=>o.kind==='move'&&['flamethrower','fireBlast'].includes(o.id))).toBe(false)
 })
 it('requires both Pokémon level 20 and five minutes before advanced patterns awaken',()=>{
  const g=fresh();g.player.level=20;g.time=299;expect(awakeningReady(g)).toBe(false)
  g.time=300;g.player.level=19;expect(awakeningReady(g)).toBe(false)
  g.player.level=20;expect(awakeningReady(g)).toBe(true)
 })
 it('keeps an overleveled early weapon in its basic form then awakens it in the same slot',()=>{
  const g=createGame('charmander',{w:640,h:360},1);spawnEnemy(g,'rattata',60,0);const owned={id:'ember' as const,level:7,cooldown:0}
  castWeapon(g,owned);expect(g.attacks.every(a=>a.move==='ember')).toBe(true);expect(weaponName('ember',7,g)).toContain('pendente')
  g.attacks=[];g.time=300;g.player.level=20;castWeapon(g,owned);expect(g.attacks.some(a=>a.move==='flamethrower')).toBe(true)
 })
 it('an evolved captured Pokémon does not start with its final special attack',()=>{
  const g=createGame('captured6',{w:640,h:360},1),r=gameSpecial(g);expect(r.final).toBe(false);expect(r.tier).toEqual(r.def.base)
  g.time=300;g.player.level=20;expect(gameSpecial(g).final).toBe(true)
 })
 it('earns discrete character bonuses through levels and applies them once',()=>{
  const g=createGame('captured6',{w:640,h:360},1),before=g.player.stats.might
  expect(characterGrowth('captured6',1).might).toBe(0);expect(characterGrowth('captured6',10).might).toBe(.05)
  gainXp(g,10000);expect(g.player.stats.might).toBeGreaterThan(before);expect(g.player.stats.might-before).toBeLessThanOrEqual(.25)
 })
 it('replenishes the opening horde toward a minimum population',()=>{
  const g=fresh();for(let i=0;i<60;i++){g.time+=1/60;updateSpawner(g,1/60)}
  expect(g.enemies.length).toBeGreaterThanOrEqual(6);expect(g.enemies.length).toBeLessThanOrEqual(15)
 })
 for(const id of Object.keys(ENEMIES) as EnemyId[])it(id+' starts with a restrained signature even with perfect IVs',()=>{
  const partner=capturedPartner(id),g=createGame(partner,{w:640,h:360},1,NO_RANKS,undefined,{ivs:iv(31)}),s=moveStats(PLAYABLE[partner].signature,1,g.player.stats)
  expect(s.amount).toBeLessThanOrEqual(2);expect(s.damage).toBeLessThan(20);expect(s.cooldown).toBeGreaterThan(.9);expect(g.player.stats.maxHp).toBeLessThan(125);expect(Number.isInteger(g.player.stats.maxHp)).toBe(true)
 })
})
