/** Pokémon regions of origin; independent of the selected battle map. */
export const POKEMON_REGIONS=[{id:'kanto',name:'Kanto',max:151},{id:'johto',name:'Johto',max:251},{id:'hoenn',name:'Hoenn',max:386},{id:'sinnoh',name:'Sinnoh',max:493},{id:'unova',name:'Unova',max:649},{id:'kalos',name:'Kalos',max:721},{id:'alola',name:'Alola',max:809},{id:'galar',name:'Galar',max:905},{id:'paldea',name:'Paldea',max:1025}] as const
export const pokemonRegion=(dex:number)=>POKEMON_REGIONS.find(r=>dex<=r.max)??POKEMON_REGIONS[8]
