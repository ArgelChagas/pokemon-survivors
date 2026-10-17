import { ENEMIES, type EnemyId } from '../data/enemies'
import type { BiomeId } from '../data/biomes'
import { EVENTS, STAGES } from '../data/waves'
import type { Rng } from '../engine/rng'
import { pick } from '../engine/rng'
import type { Roster, StagePool } from './roster'

export const CAMPAIGNS = {
  kanto: { name: 'Kanto', min: 1, max: 151, route: ['Rota 1', 'Floresta de Viridian', 'Monte Lua', 'Ilhas Seafoam', 'Caverna Cerulean'], biomes: ['meadow', 'forest', 'cave', 'snow', 'tower'], bosses: ['onix', 'snorlax', 'articuno', 'zapdos', 'moltres', 'mew', 'mewtwo'] },
  johto: { name: 'Johto', min: 152, max: 251, route: ['Rota 29', 'Floresta Ilex', 'Union Cave', 'Ice Path', 'Torre do Sino'], biomes: ['meadow', 'forest', 'cave', 'snow', 'tower'], bosses: ['sudowoodo', 'steelix', 'raikou', 'entei', 'suicune', 'celebi', 'hoOh'] },
  hoenn: { name: 'Hoenn', min: 252, max: 386, route: ['Rota 101', 'Bosque Petalburg', 'Monte Chimney', 'Caverna de Origem', 'Pilar Celeste'], biomes: ['meadow', 'forest', 'cave', 'cave', 'tower'], bosses: ['aggron', 'slaking', 'regirock', 'regice', 'registeel', 'jirachi', 'rayquaza'] },
} as const satisfies Record<string, { name: string; min: number; max: number; route: readonly string[]; biomes: readonly BiomeId[]; bosses: readonly EnemyId[] }>
export type RegionId = keyof typeof CAMPAIGNS
export const isRegion = (v: unknown): v is RegionId => typeof v === 'string' && Object.hasOwn(CAMPAIGNS, v)
export const regionContains = (region: RegionId, dex: number) => dex >= CAMPAIGNS[region].min && dex <= CAMPAIGNS[region].max
export const regionBiome = (region: RegionId, time: number) => CAMPAIGNS[region].biomes[Math.min(4, Math.floor(time / 180))]!
export const regionArea = (region: RegionId, time: number) => CAMPAIGNS[region].route[Math.min(4, Math.floor(time / 180))]!

/** Strict regional pools, weak basics first. No fallback to another generation. */
export const regionalRoster = (rng: Rng, region: RegionId): Roster => {
  const wild = (Object.keys(ENEMIES) as EnemyId[]).filter(id => regionContains(region, ENEMIES[id].dex) && !('boss' in ENEMIES[id] && ENEMIES[id].boss))
  const stages: StagePool[] = STAGES.map(stage => stage.cast.map(tier => {
    const candidates = wild.filter(id => ('tier' in ENEMIES[id] ? ENEMIES[id].tier : 2) === tier)
    const nearest = candidates.length ? candidates : wild.filter(id => Math.abs(('tier' in ENEMIES[id] ? Number(ENEMIES[id].tier) : 2) - tier) <= 1)
    return [pick(rng, nearest.length ? nearest : wild), 4] as const
  }))
  let boss = 0
  const events = EVENTS.map((e): EnemyId | null => {
    if (e.kind === 'boss') return CAMPAIGNS[region].bosses[boss++] ?? null
    const pool = stages[Math.min(stages.length - 1, STAGES.findIndex(s => e.at < s.until))]!
    return pick(rng, pool)[0]
  })
  return { stages, events, runners: stages.map((s, i) => i >= 3 ? s[0]![0] : null), trio: region === 'kanto' ? 'birds' : region === 'johto' ? 'beasts' : 'regis', region }
}

/** Last line of defense for summons, event ambushes, debug spawns and endless mode. */
export const regionalEnemy = (region:RegionId | undefined, requested:EnemyId):EnemyId => {
  if(!region || regionContains(region,ENEMIES[requested].dex)) return requested
  const def = ENEMIES[requested]
  if('boss' in def && def.boss) return CAMPAIGNS[region].bosses.at(-1)!
  const tier = 'tier' in def ? Number(def.tier) : 2
  const wild = (Object.keys(ENEMIES) as EnemyId[]).filter(id => regionContains(region,ENEMIES[id].dex) && !('boss' in ENEMIES[id] && ENEMIES[id].boss))
  const same = wild.filter(id => ('tier' in ENEMIES[id] ? Number(ENEMIES[id].tier) : 2) === tier)
  const pool = same.length ? same : wild
  return pool[def.dex % pool.length]!
}
