import{describe,it,expect}from'vitest'
import{POKE_TYPES}from'../data/types'
import{paintTypeChain}from'../render/typeChains'
const trace=(type:Parameters<typeof paintTypeChain>[1],length=100)=>{const calls:string[]=[];const c=new Proxy({},{get:(_o,k)=>(...a:unknown[])=>calls.push(String(k)+JSON.stringify(a)),set:(_o,k,v)=>{calls.push(String(k)+String(v));return true}})as CanvasRenderingContext2D;paintTypeChain(c,type,0,0,length,0,1,7,.8);return calls}
describe('element-appropriate chains',()=>{
 it('gives all 18 types distinct connection graphics',()=>{expect(new Set(POKE_TYPES.map(t=>trace(t).join('|'))).size).toBe(18)})
 it('draws water as a smooth current with foam rather than lightning segments',()=>{const water=trace('water');expect(water.some(s=>s.startsWith('bezierCurveTo'))).toBe(true);expect(water.some(s=>s.startsWith('arc'))).toBe(true);expect(water.some(s=>s.startsWith('lineTo'))).toBe(false);expect(trace('electric').some(s=>s.startsWith('lineTo'))).toBe(true)})
 it('handles coincident targets safely and uses deterministic animation',()=>{for(const t of POKE_TYPES){expect(trace(t,0)).toEqual([]);expect(trace(t)).toEqual(trace(t));expect(trace(t).join('|')).not.toContain('NaN')}})
})
