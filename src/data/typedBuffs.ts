import { TYPE_BUFF_META, type TypedBuffId } from './combatExpansion'
import type { ItemDef } from './items'
export const TYPE_BUFFS = Object.fromEntries(Object.entries(TYPE_BUFF_META).map(([id,m])=>[id,{name:m.name,levels:m.levels,boosts:'type' in m ? m.type : undefined}])) as unknown as Record<TypedBuffId,ItemDef>
