import {describe,it,expect} from 'vitest'
import {createGame} from './game'
import {dropPickup,updatePickups} from './pickups'
import {updateProps} from './props'
import {killEnemy} from './combat'
import {spawnEnemy,rebuildGrid} from './enemies'
import {spawnWaveBoss} from './spawner'
import {CAMPAIGNS,type RegionId} from './regions'
import {NO_RANKS} from './meta'
import {runRoster} from './replay'
import {spawnAttack} from './spawn'
import {updateAttacks} from './attacks'
import {BASE_STATS} from './stats'
import {moveStats} from './moves'
import type {Pickup} from './types'
const fresh=()=>createGame('charmander',{w:640,h:360},7)
describe('reliable ground loot',()=>{
 it('automatically collects a remote reward ball while the player runs away, even with zero magnet',()=>{
  const g=fresh();g.player.stats={...g.player.stats,magnet:0};dropPickup(g,4000,0,'pokeball')
  for(let i=0;i<125;i++){g.player.x-=10;g.player.vx=-600;updatePickups(g,1/60)}
  expect(g.pickups.some(p=>p.kind==='pokeball')).toBe(false);expect(g.events.filter(e=>e.kind==='pokeball')).toHaveLength(1)
  updatePickups(g,1);expect(g.events.filter(e=>e.kind==='pokeball')).toHaveLength(1)
 })
 it('opens nearby item-ball props without any attack and remembers they were opened',()=>{
  const g=fresh();g.props=[{id:9999,cell:9876,kind:'itemBall',x:90,y:0,hp:1,hitCooldown:0,shake:0}]
  updateProps(g,1/60);expect(g.brokenProps.has(9876)).toBe(true);expect(g.props.some(p=>p.id===9999)).toBe(false);expect(g.pickups.length).toBeGreaterThan(0)
  const before=g.pickups.length;updateProps(g,1/60);expect(g.pickups.length).toBe(before)
 })
 it('leaves distant containers and other breakable objects intact',()=>{
  const g=fresh();g.props=[{id:9000,cell:1,kind:'itemBall',x:160,y:0,hp:1,hitCooldown:0,shake:0},{id:9001,cell:2,kind:'berryTree',x:20,y:0,hp:3,hitCooldown:0,shake:0}]
  updateProps(g,1/60);expect(g.props.find(p=>p.id===9000)?.hp).toBe(1);expect(g.props.find(p=>p.id===9001)?.hp).toBe(3)
 })
 it('preserves manual choice between Mega Stones',()=>{
  const g=fresh();g.pickups=[...[-70,70].map((x,i)=>({id:i+500,x,y:0,vx:0,vy:0,attracted:false,age:0,kind:'megaStone',mega:i?'charizardY':'charizardX'} as Pickup))]
  for(let i=0;i<130;i++)updatePickups(g,1/60)
  expect(g.pickups).toHaveLength(2);expect(g.pickups.every(p=>!p.attracted)).toBe(true)
 })
 for(const region of Object.keys(CAMPAIGNS) as RegionId[]) for(const [i,id] of CAMPAIGNS[region].bosses.entries())it(region+' '+id+' guarantees an upgrade and support loot once',()=>{
  const at=[150,300,420,570,720,810,900][i]!,g=createGame('charmander',{w:640,h:360},7,NO_RANKS,runRoster(7,null,region));g.time=at
  const e=spawnWaveBoss(g,id,at,i===6);killEnemy(g,e)
  expect(g.pickups.filter(p=>p.kind==='pokeball')).toHaveLength(1);expect(g.pickups.some(p=>p.autoCollect && (p.kind==='consumable'||p.kind==='berry'))).toBe(true)
  const count=g.pickups.length;killEnemy(g,e);expect(g.pickups).toHaveLength(count)
  for(let n=0;n<125;n++)updatePickups(g,1/60)
  expect(g.pickups.some(p=>p.kind==='pokeball'||p.autoCollect)).toBe(false)
 })
 it('settles the final boss loot on the victory tick rather than freezing it on the ground',()=>{
  const g=fresh();g.phase='victory';dropPickup(g,5000,0,'pokeball');updatePickups(g,1/60);expect(g.pickups).toHaveLength(0);expect(g.events.some(e=>e.kind==='pokeball')).toBe(true)
 })
})
describe('damage fairness',()=>{
 it('overlapping fields from the same skill cannot multiply their damage on a single tick',()=>{
  const g=fresh(),e=spawnEnemy(g,'rattata',50,0);e.hp=e.maxHp=1000;rebuildGrid(g)
  for(let i=0;i<8;i++)spawnAttack(g,{move:'fireField',type:'fire',visual:'typedSkill',skillPattern:'field',sharedHitInterval:.45,x:e.x,y:e.y-e.radius,shape:{kind:'circle',r:30},motion:{kind:'static'},damage:10,ttl:3,hitInterval:.45})
  g.time=1;updateAttacks(g,1/60);const lost=1000-e.hp;expect(lost).toBeGreaterThanOrEqual(9);expect(lost).toBeLessThanOrEqual(11)
  g.time=1.2;updateAttacks(g,1/60);expect(1000-e.hp).toBe(lost)
  g.time=1.5;updateAttacks(g,1/60);expect(1000-e.hp).toBeGreaterThan(lost)
 })
 it('different field weapons retain independent damage',()=>{
  const g=fresh(),e=spawnEnemy(g,'rattata',50,0);e.hp=e.maxHp=1000;rebuildGrid(g)
  for(const move of ['fireField','fireRain'] as const)spawnAttack(g,{move,type:'fire',visual:'typedSkill',sharedHitInterval:.45,x:e.x,y:e.y-e.radius,shape:{kind:'circle',r:30},motion:{kind:'static'},damage:10,ttl:3,hitInterval:.45})
  g.time=1;updateAttacks(g,1/60);expect(1000-e.hp).toBeGreaterThanOrEqual(18)
 })
 it('keeps upgraded weapons stronger and regular mobs below a boss contact hit',()=>{
  for(const id of ['fireVolley','fireOrbit','fireRain','fireReturn','fireField','fireChain'] as const){const a=moveStats(id,1,BASE_STATS),b=moveStats(id,10,BASE_STATS);expect(b.damage).toBeGreaterThan(a.damage);expect(b.cooldown).toBeLessThan(a.cooldown)}
  const g=fresh(),early=spawnEnemy(g,'rattata',80,0);g.time=900;const late=spawnEnemy(g,'rattata',80,0);expect(late.damage).toBeGreaterThan(early.damage);expect(late.damage).toBeLessThan(36)
 })
})
