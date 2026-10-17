import type { MegaId } from '../data/megas'
import { PLAYABLE, type PlayableId } from '../data/hatchlings'
import type { PokeType } from '../data/types'
import type { Game } from './types'

/** Uses the current evolutionary stage, including types gained during evolution. */
const MEGA_TYPES: Partial<Record<MegaId,readonly PokeType[]>> = {
  charizardX:['fire','dragon'],gyarados:['water','dark'],ampharos:['electric','dragon'],
  sceptile:['grass','dragon'],aggron:['steel'],altaria:['dragon','fairy'],
}
export const typesFor = (starter: PlayableId, stage = 0, mega: MegaId | null = null): readonly PokeType[] => {
  if(mega && MEGA_TYPES[mega]) return MEGA_TYPES[mega]!
  const line = PLAYABLE[starter].line
  return line[Math.min(Math.max(0,stage),line.length-1)]!.types
}
export const playerTypes = (g: Game) => typesFor(g.starter,g.player.stage,g.mega.active > 0 ? g.mega.stone : null)
export const canUseType = (g: Game, type: PokeType) => playerTypes(g).includes(type)
