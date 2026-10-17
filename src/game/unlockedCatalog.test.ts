import {describe,it,expect} from 'vitest'
import {ENEMIES} from '../data/enemies'
import {PLAYABLE} from '../data/hatchlings'
import {unlockCatalog,capturedPartner} from './specimens'
import {pokemonRegion} from './pokemonRegions'
import {parseIVs} from './ivs'
describe('unlocked regional collection',()=>{
 it('grants the entire catalog once and preserves existing specimens and counts',()=>{
  const first=unlockCatalog({},[]),kept=first.specimens[0]!,saved={...kept,ivs:{...kept.ivs,attack:31}}
  const second=unlockCatalog({...first.caught,[kept.species]:7},[saved,...first.specimens.slice(1)])
  expect(new Set(first.specimens.map(p=>ENEMIES[p.species].dex)).size).toBe(new Set(Object.values(ENEMIES).map(p=>p.dex)).size)
  expect(second.specimens.length).toBe(first.specimens.length)
  expect(second.specimens[0]).toBe(saved)
  expect(second.caught[kept.species]).toBe(7)
  for(const p of second.specimens){expect(parseIVs(p.ivs)).not.toBeNull();expect(PLAYABLE[capturedPartner(p.species)]).toBeDefined()}
 })
 it('includes Eevee and all eight playable evolutions in their origin regions',()=>{
  const result=unlockCatalog({},[])
  for(const dex of [133,134,135,136,196,197,470,471,700])expect(result.specimens.some(p=>ENEMIES[p.species].dex===dex)).toBe(true)
  expect(pokemonRegion(470).name).toBe('Sinnoh');expect(pokemonRegion(700).name).toBe('Kalos')
 })
})
