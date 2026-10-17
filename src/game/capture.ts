import { ENEMIES, type EnemyId } from '../data/enemies'
import { rarityOfDex, RARITIES } from './skillRarity'

export const BALLS = {
  poke: { name: 'Poké Ball', price: 25, power: 1 },
  great: { name: 'Great Ball', price: 90, power: 1.7 },
  ultra: { name: 'Ultra Ball', price: 240, power: 2.6 },
  master: { name: 'Master Ball', price: 12000, power: 100 },
} as const
export type BallId = keyof typeof BALLS
export type CaptureSave = { specimens?: import('./specimens').Specimen[]; selected?: string | null; region: 'kanto' | 'johto' | 'hoenn'; target: EnemyId; ball: BallId; auto: boolean; balls: Record<BallId, number>; caught: Partial<Record<EnemyId, number>>; attempts: number }
export const newCaptureSave = (): CaptureSave => ({ region: 'kanto', target: 'pidgey', ball: 'poke', auto: false, balls: { poke: 10, great: 0, ultra: 0, master: 0 }, caught: {}, attempts: 0 })
export const captureChance = (id: EnemyId, ball: BallId) => {
  if (ball === 'master') return 1
  const def = ENEMIES[id]
  const rank = RARITIES.indexOf(rarityOfDex(def.dex, 'tier' in def ? Number(def.tier) : 5))
  return Math.min(0.95, [0.62,0.42,0.24,0.13,0.025][rank]! * BALLS[ball].power)
}
export const attemptCapture = (save: CaptureSave, id: EnemyId, roll: number): { save: CaptureSave; caught: boolean } | null => {
  if (!save.auto || save.target !== id || save.balls[save.ball] <= 0) return null
  const caught = roll < captureChance(id, save.ball)
  return { caught, save: { ...save, attempts: save.attempts + 1, balls: { ...save.balls, [save.ball]: save.balls[save.ball] - 1 }, caught: caught ? { ...save.caught, [id]: (save.caught[id] ?? 0) + 1 } : save.caught } }
}

export const ballPackPrice=(ball:BallId,quantity:number)=>{
  if(!Number.isInteger(quantity) || quantity<1 || quantity>100) return Infinity
  return Math.ceil(BALLS[ball].price*quantity*(quantity>=50 ? 0.9 : quantity>=10 ? 0.95 : 1))
}
export const buyBalls=(wallet:number,save:CaptureSave,ball:BallId,quantity:number)=>{
  const cost=ballPackPrice(ball,quantity)
  if(!Number.isFinite(cost) || wallet<cost) return null
  return {wallet:wallet-cost,save:{...save,balls:{...save.balls,[ball]:save.balls[ball]+quantity}},cost}
}
