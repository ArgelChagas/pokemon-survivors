import {trainingKey} from '../ui/trainingSave'
import {describe,it,expect} from 'vitest'
import {IV_KEYS,IV_RARITIES,ivDeltas,ivQuality,ivRarity,parseIVs,rollIVs,type IVs} from './ivs'
import {migrateSpecimens,newSpecimen,parseSpecimens,capturedPartner} from './specimens'
import {ENEMIES,type EnemyId} from '../data/enemies'
import {PLAYABLE} from '../data/hatchlings'
import {MOVES,moveStats,type MoveId} from './moves'
import {createGame,playerDex} from './game'
import {recomputeStats,offerPool,loadout} from './leveling'
import {raritySkills} from './skillRarity'
import {castWeapon} from './weaponProgression'
import {spawnEnemy} from './enemies'
import {parseReplay,startRecording,startGame} from './replay'
import {NO_RANKS} from './meta'
const iv=(n:number):IVs=>Object.fromEntries(IV_KEYS.map(k=>[k,n])) as IVs
const fresh=(n=1)=>createGame('captured25',{w:640,h:360},7,NO_RANKS,undefined,{ivs:iv(n)})
describe('individual IVs and rarity',()=>{
 it('shares prior species training with captured copies without mixing different forms',()=>{expect(trainingKey('captured4')).toBe('charmander');expect(trainingKey('captured16')).toBe('pidgey');expect(trainingKey('captured25')).toBe('captured25')})
 it('rolls all six IVs inclusively from 1 to 31',()=>{expect(rollIVs(()=>0)).toEqual(iv(1));expect(rollIVs(()=>.999999)).toEqual(iv(31))})
 it('validates every IV without accepting malformed or fractional values',()=>{expect(parseIVs(iv(31))).toEqual(iv(31));for(const v of [null,{},iv(0),iv(32),{...iv(12),speed:2.5},{...iv(12),hp:'31'}])expect(parseIVs(v)).toBeNull()})
 it('uses the requested six ordered quality tiers',()=>{expect([10,15,20,25,28,31].map(n=>ivRarity(iv(n)))).toEqual(IV_RARITIES);expect(ivQuality(iv(31))).toBe(100)})
 it('preserves individual copies and their IVs across migration and reload',()=>{
  const old=migrateSpecimens({pidgey:3,abra:2},null);expect(old).toHaveLength(5);expect(new Set(old.map(p=>p.uid)).size).toBe(5)
  expect(migrateSpecimens({pidgey:3,abra:2},JSON.parse(JSON.stringify(old)))).toEqual(old)
  expect(new Set(old.slice(0,3).map(p=>JSON.stringify(p.ivs))).size).toBe(3)
 })
 it('keeps new specimens unchanged and filters corrupt records',()=>{
  const p=newSpecimen('pidgey','a',()=>.99);expect(migrateSpecimens({pidgey:1},[p])).toEqual([p]);expect(parseSpecimens([p,p,{...p,uid:'b',ivs:iv(99)},{...p,uid:'c',species:'missing'}])).toEqual([p])
 })
 it('applies IV bonuses once and keeps them through evolution',()=>{
  const low=fresh(1),high=fresh(31);for(const k of ['maxHp','might','armor','speed','area','projectileSpeed'] as const)expect(high.player.stats[k]).toBeGreaterThan(low.player.stats[k]);expect(high.player.stats.cooldown).toBeLessThan(low.player.stats.cooldown)
  const before={...high.player.stats};recomputeStats(high);expect(high.player.stats).toEqual(before)
  high.player.stage=1;recomputeStats(high);expect(playerDex(high)).toBe(26);expect(high.ivs).toEqual(iv(31));expect(high.player.stats.maxHp).toBeGreaterThan(before.maxHp)
 })
 it('snapshots IVs into replays without depending on the later collection',()=>{
  const start={seed:3,starter:'captured25' as const,ivs:iv(29),ranks:NO_RANKS,shiny:false,luckyEgg:false,lure:false,incense:false,outbreak:null,difficulty:'normal' as const,view:{w:640,h:360}}
  const parsed=parseReplay(JSON.parse(JSON.stringify(startRecording(start).replay)))!;expect(parsed.start.ivs).toEqual(iv(29));expect(startGame(parsed.start).player.stats).toEqual(startGame(start).player.stats)
 })
 it('provides explicit combat upgrades for damage, AOE, speed, size and projectiles',()=>{
  const g=fresh(),pool=offerPool(loadout(g));for(const id of ['powerTraining','areaTraining','speedTraining','projectileTraining','velocityTraining'])expect(pool.some(([o])=>o.kind==='item'&&o.id===id)).toBe(true)
  const stats=g.player.stats,a=moveStats('electricVolley',1,stats),b=moveStats('electricVolley',1,{...stats,...ivDeltas(iv(31)),might:stats.might+.12,area:stats.area+.12,amount:stats.amount+1,projectileSpeed:stats.projectileSpeed+.15,cooldown:stats.cooldown-.04})
  expect(b.damage).toBeGreaterThan(a.damage);expect(b.area).toBeGreaterThan(a.area);expect(b.amount).toBe(a.amount+1);expect(b.speed).toBeGreaterThan(a.speed);expect(b.cooldown).toBeLessThan(a.cooldown)
 })
})
describe('every captured species is playable',()=>{
 for(const id of Object.keys(ENEMIES) as EnemyId[])it(id+' starts as its exact captured form with its own type-safe signature',()=>{
  const partner=capturedPartner(id),def=PLAYABLE[partner],g=createGame(partner,{w:640,h:360},1)
  expect(playerDex(g)).toBe(ENEMIES[id].dex);expect(def.signature).toBe('signature'+ENEMIES[id].dex);expect(g.player.moves[0]!.id).toBe(def.signature)
  expect(ENEMIES[id].types).toContain(MOVES[def.signature].type)
  expect(raritySkills(partner).filter(m=>m.startsWith('signature'))).toEqual([def.signature])
  for(let i=0;i<7;i++)spawnEnemy(g,'rattata',50+i*16,0)
  castWeapon(g,{id:def.signature,level:10,cooldown:0});expect(g.attacks.length).toBeGreaterThan(0);expect(g.attacks.every(a=>def.line[0].types.includes(a.type))).toBe(true)
 })
 it('does not lend another species exclusive move to the draft',()=>{expect(raritySkills('captured25')).not.toContain('signature4' as MoveId)})
})
