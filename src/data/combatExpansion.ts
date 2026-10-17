import { SPECIES_SIGNATURES } from './speciesSignatures'
// Pokémon adaptations of patterns inspected in local Vampire Survivors data. No external game assets are shipped.
const BASE_TYPE_SKILL_META = {
  ...SPECIES_SIGNATURES,
  "normalVolley": {
    "name": "Eco Cortante",
    "type": "normal",
    "pattern": "volley",
    "icon": "swift",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Normal.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "normalOrbit": {
    "name": "Anel de Impacto",
    "type": "normal",
    "pattern": "orbit",
    "icon": "swift",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Normal.",
    "reference": "HOLYBOOK"
  },
  "normalRain": {
    "name": "Chuva de Estrelas",
    "type": "normal",
    "pattern": "rain",
    "icon": "swift",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Normal.",
    "reference": "LIGHTNING"
  },
  "normalReturn": {
    "name": "Disco Cinético",
    "type": "normal",
    "pattern": "return",
    "icon": "swift",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Normal.",
    "reference": "CROSS"
  },
  "normalField": {
    "name": "Campo de Pressão",
    "type": "normal",
    "pattern": "field",
    "icon": "swift",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Normal.",
    "reference": "HOLYWATER / GARLIC"
  },
  "normalChain": {
    "name": "Ressonância",
    "type": "normal",
    "pattern": "chain",
    "icon": "swift",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Normal.",
    "reference": "LIGHTNING / LOOP"
  },
  "fireVolley": {
    "name": "Brasas em Leque",
    "type": "fire",
    "pattern": "volley",
    "icon": "ember",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Fogo.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "fireOrbit": {
    "name": "Satélites de Chama",
    "type": "fire",
    "pattern": "orbit",
    "icon": "ember",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Fogo.",
    "reference": "HOLYBOOK"
  },
  "fireRain": {
    "name": "Chuva Vulcânica",
    "type": "fire",
    "pattern": "rain",
    "icon": "ember",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Fogo.",
    "reference": "LIGHTNING"
  },
  "fireReturn": {
    "name": "Disco de Magma",
    "type": "fire",
    "pattern": "return",
    "icon": "ember",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Fogo.",
    "reference": "CROSS"
  },
  "fireField": {
    "name": "Solo Incandescente",
    "type": "fire",
    "pattern": "field",
    "icon": "ember",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Fogo.",
    "reference": "HOLYWATER / GARLIC"
  },
  "fireChain": {
    "name": "Ignição em Cadeia",
    "type": "fire",
    "pattern": "chain",
    "icon": "ember",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Fogo.",
    "reference": "LIGHTNING / LOOP"
  },
  "waterVolley": {
    "name": "Rajada de Bolhas",
    "type": "water",
    "pattern": "volley",
    "icon": "waterGun",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Água.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "waterOrbit": {
    "name": "Órbita de Marés",
    "type": "water",
    "pattern": "orbit",
    "icon": "waterGun",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Água.",
    "reference": "HOLYBOOK"
  },
  "waterRain": {
    "name": "Chuva Torrencial",
    "type": "water",
    "pattern": "rain",
    "icon": "waterGun",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Água.",
    "reference": "LIGHTNING"
  },
  "waterReturn": {
    "name": "Bumerangue Aquático",
    "type": "water",
    "pattern": "return",
    "icon": "waterGun",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Água.",
    "reference": "CROSS"
  },
  "waterField": {
    "name": "Poça de Redemoinhos",
    "type": "water",
    "pattern": "field",
    "icon": "waterGun",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Água.",
    "reference": "HOLYWATER / GARLIC"
  },
  "waterChain": {
    "name": "Corrente de Maré",
    "type": "water",
    "pattern": "chain",
    "icon": "waterGun",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Água.",
    "reference": "LIGHTNING / LOOP"
  },
  "grassVolley": {
    "name": "Leque de Espinhos",
    "type": "grass",
    "pattern": "volley",
    "icon": "razorLeaf",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Planta.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "grassOrbit": {
    "name": "Coroa de Sementes",
    "type": "grass",
    "pattern": "orbit",
    "icon": "razorLeaf",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Planta.",
    "reference": "HOLYBOOK"
  },
  "grassRain": {
    "name": "Chuva de Pétalas",
    "type": "grass",
    "pattern": "rain",
    "icon": "razorLeaf",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Planta.",
    "reference": "LIGHTNING"
  },
  "grassReturn": {
    "name": "Folha Retornante",
    "type": "grass",
    "pattern": "return",
    "icon": "razorLeaf",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Planta.",
    "reference": "CROSS"
  },
  "grassField": {
    "name": "Jardim Selvagem",
    "type": "grass",
    "pattern": "field",
    "icon": "razorLeaf",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Planta.",
    "reference": "HOLYWATER / GARLIC"
  },
  "grassChain": {
    "name": "Raízes Conectadas",
    "type": "grass",
    "pattern": "chain",
    "icon": "razorLeaf",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Planta.",
    "reference": "LIGHTNING / LOOP"
  },
  "electricVolley": {
    "name": "Agulhas Voltaicas",
    "type": "electric",
    "pattern": "volley",
    "icon": "thunder",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Elétrico.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "electricOrbit": {
    "name": "Órbita Estática",
    "type": "electric",
    "pattern": "orbit",
    "icon": "thunder",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Elétrico.",
    "reference": "HOLYBOOK"
  },
  "electricRain": {
    "name": "Tempestade Iônica",
    "type": "electric",
    "pattern": "rain",
    "icon": "thunder",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Elétrico.",
    "reference": "LIGHTNING"
  },
  "electricReturn": {
    "name": "Disco de Plasma",
    "type": "electric",
    "pattern": "return",
    "icon": "thunder",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Elétrico.",
    "reference": "CROSS"
  },
  "electricField": {
    "name": "Campo Magnético",
    "type": "electric",
    "pattern": "field",
    "icon": "thunder",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Elétrico.",
    "reference": "HOLYWATER / GARLIC"
  },
  "electricChain": {
    "name": "Circuito Relâmpago",
    "type": "electric",
    "pattern": "chain",
    "icon": "thunder",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Elétrico.",
    "reference": "LIGHTNING / LOOP"
  },
  "poisonVolley": {
    "name": "Dardos Tóxicos",
    "type": "poison",
    "pattern": "volley",
    "icon": "sludgeBomb",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Veneno.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "poisonOrbit": {
    "name": "Satélites de Veneno",
    "type": "poison",
    "pattern": "orbit",
    "icon": "sludgeBomb",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Veneno.",
    "reference": "HOLYBOOK"
  },
  "poisonRain": {
    "name": "Chuva Ácida",
    "type": "poison",
    "pattern": "rain",
    "icon": "sludgeBomb",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Veneno.",
    "reference": "LIGHTNING"
  },
  "poisonReturn": {
    "name": "Presa Retornante",
    "type": "poison",
    "pattern": "return",
    "icon": "sludgeBomb",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Veneno.",
    "reference": "CROSS"
  },
  "poisonField": {
    "name": "Pântano Corrosivo",
    "type": "poison",
    "pattern": "field",
    "icon": "sludgeBomb",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Veneno.",
    "reference": "HOLYWATER / GARLIC"
  },
  "poisonChain": {
    "name": "Contágio Tóxico",
    "type": "poison",
    "pattern": "chain",
    "icon": "sludgeBomb",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Veneno.",
    "reference": "LIGHTNING / LOOP"
  },
  "flyingVolley": {
    "name": "Penas Cortantes",
    "type": "flying",
    "pattern": "volley",
    "icon": "gust",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Voador.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "flyingOrbit": {
    "name": "Coroa dos Ventos",
    "type": "flying",
    "pattern": "orbit",
    "icon": "gust",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Voador.",
    "reference": "HOLYBOOK"
  },
  "flyingRain": {
    "name": "Chuva de Vendavais",
    "type": "flying",
    "pattern": "rain",
    "icon": "gust",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Voador.",
    "reference": "LIGHTNING"
  },
  "flyingReturn": {
    "name": "Asa Retornante",
    "type": "flying",
    "pattern": "return",
    "icon": "gust",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Voador.",
    "reference": "CROSS"
  },
  "flyingField": {
    "name": "Olho do Ciclone",
    "type": "flying",
    "pattern": "field",
    "icon": "gust",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Voador.",
    "reference": "HOLYWATER / GARLIC"
  },
  "flyingChain": {
    "name": "Corrente Ascendente",
    "type": "flying",
    "pattern": "chain",
    "icon": "gust",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Voador.",
    "reference": "LIGHTNING / LOOP"
  },
  "bugVolley": {
    "name": "Enxame de Agulhas",
    "type": "bug",
    "pattern": "volley",
    "icon": "pinMissile",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Inseto.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "bugOrbit": {
    "name": "Órbita de Casulos",
    "type": "bug",
    "pattern": "orbit",
    "icon": "pinMissile",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Inseto.",
    "reference": "HOLYBOOK"
  },
  "bugRain": {
    "name": "Chuva de Ferrões",
    "type": "bug",
    "pattern": "rain",
    "icon": "pinMissile",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Inseto.",
    "reference": "LIGHTNING"
  },
  "bugReturn": {
    "name": "Quitina Retornante",
    "type": "bug",
    "pattern": "return",
    "icon": "pinMissile",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Inseto.",
    "reference": "CROSS"
  },
  "bugField": {
    "name": "Ninho de Seda",
    "type": "bug",
    "pattern": "field",
    "icon": "pinMissile",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Inseto.",
    "reference": "HOLYWATER / GARLIC"
  },
  "bugChain": {
    "name": "Enxame Encadeado",
    "type": "bug",
    "pattern": "chain",
    "icon": "pinMissile",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Inseto.",
    "reference": "LIGHTNING / LOOP"
  },
  "rockVolley": {
    "name": "Estilhaços de Granito",
    "type": "rock",
    "pattern": "volley",
    "icon": "rockTomb",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Pedra.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "rockOrbit": {
    "name": "Cinturão de Rochas",
    "type": "rock",
    "pattern": "orbit",
    "icon": "rockTomb",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Pedra.",
    "reference": "HOLYBOOK"
  },
  "rockRain": {
    "name": "Chuva de Meteoritos",
    "type": "rock",
    "pattern": "rain",
    "icon": "rockTomb",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Pedra.",
    "reference": "LIGHTNING"
  },
  "rockReturn": {
    "name": "Disco de Obsidiana",
    "type": "rock",
    "pattern": "return",
    "icon": "rockTomb",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Pedra.",
    "reference": "CROSS"
  },
  "rockField": {
    "name": "Pedreira Instável",
    "type": "rock",
    "pattern": "field",
    "icon": "rockTomb",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Pedra.",
    "reference": "HOLYWATER / GARLIC"
  },
  "rockChain": {
    "name": "Fratura em Cadeia",
    "type": "rock",
    "pattern": "chain",
    "icon": "rockTomb",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Pedra.",
    "reference": "LIGHTNING / LOOP"
  },
  "groundVolley": {
    "name": "Lanças de Areia",
    "type": "ground",
    "pattern": "volley",
    "icon": "earthquake",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Terra.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "groundOrbit": {
    "name": "Órbita de Argila",
    "type": "ground",
    "pattern": "orbit",
    "icon": "earthquake",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Terra.",
    "reference": "HOLYBOOK"
  },
  "groundRain": {
    "name": "Chuva de Sedimentos",
    "type": "ground",
    "pattern": "rain",
    "icon": "earthquake",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Terra.",
    "reference": "LIGHTNING"
  },
  "groundReturn": {
    "name": "Disco Tectônico",
    "type": "ground",
    "pattern": "return",
    "icon": "earthquake",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Terra.",
    "reference": "CROSS"
  },
  "groundField": {
    "name": "Areia Movediça",
    "type": "ground",
    "pattern": "field",
    "icon": "earthquake",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Terra.",
    "reference": "HOLYWATER / GARLIC"
  },
  "groundChain": {
    "name": "Falha Sísmica",
    "type": "ground",
    "pattern": "chain",
    "icon": "earthquake",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Terra.",
    "reference": "LIGHTNING / LOOP"
  },
  "ghostVolley": {
    "name": "Fagulhas Espectrais",
    "type": "ghost",
    "pattern": "volley",
    "icon": "hex",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Fantasma.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "ghostOrbit": {
    "name": "Almas Orbitais",
    "type": "ghost",
    "pattern": "orbit",
    "icon": "hex",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Fantasma.",
    "reference": "HOLYBOOK"
  },
  "ghostRain": {
    "name": "Chuva de Assombrações",
    "type": "ghost",
    "pattern": "rain",
    "icon": "hex",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Fantasma.",
    "reference": "LIGHTNING"
  },
  "ghostReturn": {
    "name": "Foice Espectral",
    "type": "ghost",
    "pattern": "return",
    "icon": "hex",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Fantasma.",
    "reference": "CROSS"
  },
  "ghostField": {
    "name": "Solo Assombrado",
    "type": "ghost",
    "pattern": "field",
    "icon": "hex",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Fantasma.",
    "reference": "HOLYWATER / GARLIC"
  },
  "ghostChain": {
    "name": "Elo de Almas",
    "type": "ghost",
    "pattern": "chain",
    "icon": "hex",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Fantasma.",
    "reference": "LIGHTNING / LOOP"
  },
  "fightingVolley": {
    "name": "Punhos de Aura",
    "type": "fighting",
    "pattern": "volley",
    "icon": "machPunch",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Lutador.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "fightingOrbit": {
    "name": "Guarda Circular",
    "type": "fighting",
    "pattern": "orbit",
    "icon": "machPunch",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Lutador.",
    "reference": "HOLYBOOK"
  },
  "fightingRain": {
    "name": "Chuva de Golpes",
    "type": "fighting",
    "pattern": "rain",
    "icon": "machPunch",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Lutador.",
    "reference": "LIGHTNING"
  },
  "fightingReturn": {
    "name": "Disco de Chi",
    "type": "fighting",
    "pattern": "return",
    "icon": "machPunch",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Lutador.",
    "reference": "CROSS"
  },
  "fightingField": {
    "name": "Dojo de Impacto",
    "type": "fighting",
    "pattern": "field",
    "icon": "machPunch",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Lutador.",
    "reference": "HOLYWATER / GARLIC"
  },
  "fightingChain": {
    "name": "Combo Ascendente",
    "type": "fighting",
    "pattern": "chain",
    "icon": "machPunch",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Lutador.",
    "reference": "LIGHTNING / LOOP"
  },
  "psychicVolley": {
    "name": "Agulhas Mentais",
    "type": "psychic",
    "pattern": "volley",
    "icon": "psyshock",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Psíquico.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "psychicOrbit": {
    "name": "Orbes Telecinéticos",
    "type": "psychic",
    "pattern": "orbit",
    "icon": "psyshock",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Psíquico.",
    "reference": "HOLYBOOK"
  },
  "psychicRain": {
    "name": "Chuva Psíquica",
    "type": "psychic",
    "pattern": "rain",
    "icon": "psyshock",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Psíquico.",
    "reference": "LIGHTNING"
  },
  "psychicReturn": {
    "name": "Disco Mental",
    "type": "psychic",
    "pattern": "return",
    "icon": "psyshock",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Psíquico.",
    "reference": "CROSS"
  },
  "psychicField": {
    "name": "Zona de Confusão",
    "type": "psychic",
    "pattern": "field",
    "icon": "psyshock",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Psíquico.",
    "reference": "HOLYWATER / GARLIC"
  },
  "psychicChain": {
    "name": "Sinapse em Cadeia",
    "type": "psychic",
    "pattern": "chain",
    "icon": "psyshock",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Psíquico.",
    "reference": "LIGHTNING / LOOP"
  },
  "iceVolley": {
    "name": "Leque de Cristais",
    "type": "ice",
    "pattern": "volley",
    "icon": "iceShard",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Gelo.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "iceOrbit": {
    "name": "Coroa Glacial",
    "type": "ice",
    "pattern": "orbit",
    "icon": "iceShard",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Gelo.",
    "reference": "HOLYBOOK"
  },
  "iceRain": {
    "name": "Granizo Concentrado",
    "type": "ice",
    "pattern": "rain",
    "icon": "iceShard",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Gelo.",
    "reference": "LIGHTNING"
  },
  "iceReturn": {
    "name": "Disco Polar",
    "type": "ice",
    "pattern": "return",
    "icon": "iceShard",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Gelo.",
    "reference": "CROSS"
  },
  "iceField": {
    "name": "Solo Congelante",
    "type": "ice",
    "pattern": "field",
    "icon": "iceShard",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Gelo.",
    "reference": "HOLYWATER / GARLIC"
  },
  "iceChain": {
    "name": "Fratura Glacial",
    "type": "ice",
    "pattern": "chain",
    "icon": "iceShard",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Gelo.",
    "reference": "LIGHTNING / LOOP"
  },
  "steelVolley": {
    "name": "Fragmentos de Metal",
    "type": "steel",
    "pattern": "volley",
    "icon": "flashCannon",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Aço.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "steelOrbit": {
    "name": "Guarda de Lâminas",
    "type": "steel",
    "pattern": "orbit",
    "icon": "flashCannon",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Aço.",
    "reference": "HOLYBOOK"
  },
  "steelRain": {
    "name": "Chuva de Aço",
    "type": "steel",
    "pattern": "rain",
    "icon": "flashCannon",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Aço.",
    "reference": "LIGHTNING"
  },
  "steelReturn": {
    "name": "Disco de Titânio",
    "type": "steel",
    "pattern": "return",
    "icon": "flashCannon",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Aço.",
    "reference": "CROSS"
  },
  "steelField": {
    "name": "Campo de Limalha",
    "type": "steel",
    "pattern": "field",
    "icon": "flashCannon",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Aço.",
    "reference": "HOLYWATER / GARLIC"
  },
  "steelChain": {
    "name": "Ressonância Metálica",
    "type": "steel",
    "pattern": "chain",
    "icon": "flashCannon",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Aço.",
    "reference": "LIGHTNING / LOOP"
  },
  "darkVolley": {
    "name": "Garras da Noite",
    "type": "dark",
    "pattern": "volley",
    "icon": "crunch",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Sombrio.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "darkOrbit": {
    "name": "Órbita do Eclipse",
    "type": "dark",
    "pattern": "orbit",
    "icon": "crunch",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Sombrio.",
    "reference": "HOLYBOOK"
  },
  "darkRain": {
    "name": "Chuva de Sombras",
    "type": "dark",
    "pattern": "rain",
    "icon": "crunch",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Sombrio.",
    "reference": "LIGHTNING"
  },
  "darkReturn": {
    "name": "Disco Noturno",
    "type": "dark",
    "pattern": "return",
    "icon": "crunch",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Sombrio.",
    "reference": "CROSS"
  },
  "darkField": {
    "name": "Domínio Sombrio",
    "type": "dark",
    "pattern": "field",
    "icon": "crunch",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Sombrio.",
    "reference": "HOLYWATER / GARLIC"
  },
  "darkChain": {
    "name": "Elo das Trevas",
    "type": "dark",
    "pattern": "chain",
    "icon": "crunch",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Sombrio.",
    "reference": "LIGHTNING / LOOP"
  },
  "fairyVolley": {
    "name": "Faíscas Encantadas",
    "type": "fairy",
    "pattern": "volley",
    "icon": "disarmingVoice",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Fada.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "fairyOrbit": {
    "name": "Coroa Feérica",
    "type": "fairy",
    "pattern": "orbit",
    "icon": "disarmingVoice",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Fada.",
    "reference": "HOLYBOOK"
  },
  "fairyRain": {
    "name": "Chuva de Luz",
    "type": "fairy",
    "pattern": "rain",
    "icon": "disarmingVoice",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Fada.",
    "reference": "LIGHTNING"
  },
  "fairyReturn": {
    "name": "Disco Lunar",
    "type": "fairy",
    "pattern": "return",
    "icon": "disarmingVoice",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Fada.",
    "reference": "CROSS"
  },
  "fairyField": {
    "name": "Jardim Encantado",
    "type": "fairy",
    "pattern": "field",
    "icon": "disarmingVoice",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Fada.",
    "reference": "HOLYWATER / GARLIC"
  },
  "fairyChain": {
    "name": "Vínculo Feérico",
    "type": "fairy",
    "pattern": "chain",
    "icon": "disarmingVoice",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Fada.",
    "reference": "LIGHTNING / LOOP"
  },
  "dragonVolley": {
    "name": "Escamas Dracônicas",
    "type": "dragon",
    "pattern": "volley",
    "icon": "dragonBreath",
    "rank": 0,
    "description": "Dispara um leque no inimigo mais próximo. Os projéteis atravessam alvos. Tipo Dragão.",
    "reference": "MAGIC_MISSILE / KNIFE"
  },
  "dragonOrbit": {
    "name": "Órbita do Dragão",
    "type": "dragon",
    "pattern": "orbit",
    "icon": "dragonBreath",
    "rank": 0,
    "description": "Cria uma guarda de projéteis orbitais que acerta repetidamente e afasta inimigos. Tipo Dragão.",
    "reference": "HOLYBOOK"
  },
  "dragonRain": {
    "name": "Chuva de Cometas",
    "type": "dragon",
    "pattern": "rain",
    "icon": "dragonBreath",
    "rank": 1,
    "description": "Marca os inimigos com um aviso no chão e provoca impactos em área após 0,55 s. Tipo Dragão.",
    "reference": "LIGHTNING"
  },
  "dragonReturn": {
    "name": "Disco Ancestral",
    "type": "dragon",
    "pattern": "return",
    "icon": "dragonBreath",
    "rank": 1,
    "description": "Lança um bumerangue que atravessa a horda e pode acertar novamente no retorno. Tipo Dragão.",
    "reference": "CROSS"
  },
  "dragonField": {
    "name": "Território Dracônico",
    "type": "dragon",
    "pattern": "field",
    "icon": "dragonBreath",
    "rank": 2,
    "description": "Cria zonas persistentes sob os inimigos, causando dano a cada 0,60 s. Tipo Dragão.",
    "reference": "HOLYWATER / GARLIC"
  },
  "dragonChain": {
    "name": "Rugido Encadeado",
    "type": "dragon",
    "pattern": "chain",
    "icon": "dragonBreath",
    "rank": 2,
    "description": "Salta instantaneamente entre inimigos próximos; cada salto mantém 85% do dano anterior. Tipo Dragão.",
    "reference": "LIGHTNING / LOOP"
  }
} as const
export const TYPE_SKILL_META: typeof BASE_TYPE_SKILL_META & typeof SPECIES_SIGNATURES = BASE_TYPE_SKILL_META
export type TypedSkillId = keyof typeof TYPE_SKILL_META
export const TYPE_BUFF_META = {
 powerTraining:{name:'Poder Ofensivo',levels:Array.from({length:5},()=>({might:.12})),description:'Cada nível: +12% dano em todos os golpes. Até +60%.'},
 areaTraining:{name:'Expansão de Área',levels:Array.from({length:5},()=>({area:.12})),description:'Cada nível: +12% área e tamanho dos golpes. Até +60%.'},
 speedTraining:{name:'Ritmo de Batalha',levels:Array.from({length:5},()=>({cooldown:-.04,speed:3})),description:'Cada nível: -4% recarga e +3 velocidade de movimento.'},
 projectileTraining:{name:'Multidisparo',levels:Array.from({length:3},()=>({amount:1})),description:'Cada nível: +1 projétil, alvo ou efeito por disparo. Até +3.'},
 velocityTraining:{name:'Projéteis Velozes',levels:Array.from({length:5},()=>({projectileSpeed:.15,duration:.06})),description:'Cada nível: +15% velocidade de projéteis e +6% duração.'},
  "normalFocus": {
    "name": "Foco Normal",
    "type": "normal",
    "levels": [
      {
        "typeDamage": {
          "normal": 0.08
        },
        "might": 0.06,
        "growth": 0.04
      },
      {
        "typeDamage": {
          "normal": 0.08
        },
        "might": 0.06,
        "growth": 0.04
      },
      {
        "typeDamage": {
          "normal": 0.08
        },
        "might": 0.06,
        "growth": 0.04
      },
      {
        "typeDamage": {
          "normal": 0.08
        },
        "might": 0.06,
        "growth": 0.04
      }
    ],
    "description": "Por nível: +8% dano do tipo · +6% dano · +4% XP. Acumula até Nv 4."
  },
  "normalRhythm": {
    "name": "Ritmo Normal",
    "type": "normal",
    "levels": [
      {
        "typeDamage": {
          "normal": 0.04
        },
        "cooldown": -0.035,
        "magnet": 4
      },
      {
        "typeDamage": {
          "normal": 0.04
        },
        "cooldown": -0.035,
        "magnet": 4
      },
      {
        "typeDamage": {
          "normal": 0.04
        },
        "cooldown": -0.035,
        "magnet": 4
      },
      {
        "typeDamage": {
          "normal": 0.04
        },
        "cooldown": -0.035,
        "magnet": 4
      }
    ],
    "description": "Por nível: +4% dano do tipo · -4% recarga · +4 coleta. Acumula até Nv 4."
  },
  "normalGuard": {
    "name": "Proteção Normal",
    "type": "normal",
    "levels": [
      {
        "typeDamage": {
          "normal": 0.04
        },
        "maxHp": 12,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "normal": 0.04
        },
        "maxHp": 12,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "normal": 0.04
        },
        "maxHp": 12,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "normal": 0.04
        },
        "maxHp": 12,
        "regen": 0.1
      }
    ],
    "description": "Por nível: +4% dano do tipo · +12 HP máximo · +0.1 HP/s. Acumula até Nv 4."
  },
  "fireFocus": {
    "name": "Foco Fogo",
    "type": "fire",
    "levels": [
      {
        "typeDamage": {
          "fire": 0.08
        },
        "statusDamage": 0.12,
        "might": 0.04
      },
      {
        "typeDamage": {
          "fire": 0.08
        },
        "statusDamage": 0.12,
        "might": 0.04
      },
      {
        "typeDamage": {
          "fire": 0.08
        },
        "statusDamage": 0.12,
        "might": 0.04
      },
      {
        "typeDamage": {
          "fire": 0.08
        },
        "statusDamage": 0.12,
        "might": 0.04
      }
    ],
    "description": "Por nível: +8% dano do tipo · +12% dano de status · +4% dano. Acumula até Nv 4."
  },
  "fireRhythm": {
    "name": "Ritmo Fogo",
    "type": "fire",
    "levels": [
      {
        "typeDamage": {
          "fire": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.03
      },
      {
        "typeDamage": {
          "fire": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.03
      },
      {
        "typeDamage": {
          "fire": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.03
      },
      {
        "typeDamage": {
          "fire": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.03
      }
    ],
    "description": "Por nível: +4% dano do tipo · +10% velocidade de projéteis · -3% recarga. Acumula até Nv 4."
  },
  "fireGuard": {
    "name": "Proteção Fogo",
    "type": "fire",
    "levels": [
      {
        "typeDamage": {
          "fire": 0.04
        },
        "maxHp": 10,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "fire": 0.04
        },
        "maxHp": 10,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "fire": 0.04
        },
        "maxHp": 10,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "fire": 0.04
        },
        "maxHp": 10,
        "armor": 0.4
      }
    ],
    "description": "Por nível: +4% dano do tipo · +10 HP máximo · +0.4 defesa. Acumula até Nv 4."
  },
  "waterFocus": {
    "name": "Foco Água",
    "type": "water",
    "levels": [
      {
        "typeDamage": {
          "water": 0.08
        },
        "duration": 0.08,
        "area": 0.05
      },
      {
        "typeDamage": {
          "water": 0.08
        },
        "duration": 0.08,
        "area": 0.05
      },
      {
        "typeDamage": {
          "water": 0.08
        },
        "duration": 0.08,
        "area": 0.05
      },
      {
        "typeDamage": {
          "water": 0.08
        },
        "duration": 0.08,
        "area": 0.05
      }
    ],
    "description": "Por nível: +8% dano do tipo · +8% duração · +5% área. Acumula até Nv 4."
  },
  "waterRhythm": {
    "name": "Ritmo Água",
    "type": "water",
    "levels": [
      {
        "typeDamage": {
          "water": 0.04
        },
        "cooldown": -0.035,
        "magnet": 5
      },
      {
        "typeDamage": {
          "water": 0.04
        },
        "cooldown": -0.035,
        "magnet": 5
      },
      {
        "typeDamage": {
          "water": 0.04
        },
        "cooldown": -0.035,
        "magnet": 5
      },
      {
        "typeDamage": {
          "water": 0.04
        },
        "cooldown": -0.035,
        "magnet": 5
      }
    ],
    "description": "Por nível: +4% dano do tipo · -4% recarga · +5 coleta. Acumula até Nv 4."
  },
  "waterGuard": {
    "name": "Proteção Água",
    "type": "water",
    "levels": [
      {
        "typeDamage": {
          "water": 0.04
        },
        "regen": 0.18,
        "maxHp": 10
      },
      {
        "typeDamage": {
          "water": 0.04
        },
        "regen": 0.18,
        "maxHp": 10
      },
      {
        "typeDamage": {
          "water": 0.04
        },
        "regen": 0.18,
        "maxHp": 10
      },
      {
        "typeDamage": {
          "water": 0.04
        },
        "regen": 0.18,
        "maxHp": 10
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.18 HP/s · +10 HP máximo. Acumula até Nv 4."
  },
  "grassFocus": {
    "name": "Foco Planta",
    "type": "grass",
    "levels": [
      {
        "typeDamage": {
          "grass": 0.08
        },
        "duration": 0.08,
        "statusChance": 0.025
      },
      {
        "typeDamage": {
          "grass": 0.08
        },
        "duration": 0.08,
        "statusChance": 0.025
      },
      {
        "typeDamage": {
          "grass": 0.08
        },
        "duration": 0.08,
        "statusChance": 0.025
      },
      {
        "typeDamage": {
          "grass": 0.08
        },
        "duration": 0.08,
        "statusChance": 0.025
      }
    ],
    "description": "Por nível: +8% dano do tipo · +8% duração · +3% chance de status. Acumula até Nv 4."
  },
  "grassRhythm": {
    "name": "Ritmo Planta",
    "type": "grass",
    "levels": [
      {
        "typeDamage": {
          "grass": 0.04
        },
        "area": 0.07,
        "magnet": 5
      },
      {
        "typeDamage": {
          "grass": 0.04
        },
        "area": 0.07,
        "magnet": 5
      },
      {
        "typeDamage": {
          "grass": 0.04
        },
        "area": 0.07,
        "magnet": 5
      },
      {
        "typeDamage": {
          "grass": 0.04
        },
        "area": 0.07,
        "magnet": 5
      }
    ],
    "description": "Por nível: +4% dano do tipo · +7% área · +5 coleta. Acumula até Nv 4."
  },
  "grassGuard": {
    "name": "Proteção Planta",
    "type": "grass",
    "levels": [
      {
        "typeDamage": {
          "grass": 0.04
        },
        "regen": 0.2,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "grass": 0.04
        },
        "regen": 0.2,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "grass": 0.04
        },
        "regen": 0.2,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "grass": 0.04
        },
        "regen": 0.2,
        "maxHp": 8
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.2 HP/s · +8 HP máximo. Acumula até Nv 4."
  },
  "electricFocus": {
    "name": "Foco Elétrico",
    "type": "electric",
    "levels": [
      {
        "typeDamage": {
          "electric": 0.08
        },
        "projectileSpeed": 0.12,
        "statusChance": 0.025
      },
      {
        "typeDamage": {
          "electric": 0.08
        },
        "projectileSpeed": 0.12,
        "statusChance": 0.025
      },
      {
        "typeDamage": {
          "electric": 0.08
        },
        "projectileSpeed": 0.12,
        "statusChance": 0.025
      },
      {
        "typeDamage": {
          "electric": 0.08
        },
        "projectileSpeed": 0.12,
        "statusChance": 0.025
      }
    ],
    "description": "Por nível: +8% dano do tipo · +12% velocidade de projéteis · +3% chance de status. Acumula até Nv 4."
  },
  "electricRhythm": {
    "name": "Ritmo Elétrico",
    "type": "electric",
    "levels": [
      {
        "typeDamage": {
          "electric": 0.04
        },
        "cooldown": -0.045,
        "speed": 2
      },
      {
        "typeDamage": {
          "electric": 0.04
        },
        "cooldown": -0.045,
        "speed": 2
      },
      {
        "typeDamage": {
          "electric": 0.04
        },
        "cooldown": -0.045,
        "speed": 2
      },
      {
        "typeDamage": {
          "electric": 0.04
        },
        "cooldown": -0.045,
        "speed": 2
      }
    ],
    "description": "Por nível: +4% dano do tipo · -4% recarga · +2 velocidade. Acumula até Nv 4."
  },
  "electricGuard": {
    "name": "Proteção Elétrico",
    "type": "electric",
    "levels": [
      {
        "typeDamage": {
          "electric": 0.04
        },
        "armor": 0.4,
        "maxHp": 10
      },
      {
        "typeDamage": {
          "electric": 0.04
        },
        "armor": 0.4,
        "maxHp": 10
      },
      {
        "typeDamage": {
          "electric": 0.04
        },
        "armor": 0.4,
        "maxHp": 10
      },
      {
        "typeDamage": {
          "electric": 0.04
        },
        "armor": 0.4,
        "maxHp": 10
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.4 defesa · +10 HP máximo. Acumula até Nv 4."
  },
  "poisonFocus": {
    "name": "Foco Veneno",
    "type": "poison",
    "levels": [
      {
        "typeDamage": {
          "poison": 0.08
        },
        "statusDamage": 0.15,
        "statusChance": 0.03
      },
      {
        "typeDamage": {
          "poison": 0.08
        },
        "statusDamage": 0.15,
        "statusChance": 0.03
      },
      {
        "typeDamage": {
          "poison": 0.08
        },
        "statusDamage": 0.15,
        "statusChance": 0.03
      },
      {
        "typeDamage": {
          "poison": 0.08
        },
        "statusDamage": 0.15,
        "statusChance": 0.03
      }
    ],
    "description": "Por nível: +8% dano do tipo · +15% dano de status · +3% chance de status. Acumula até Nv 4."
  },
  "poisonRhythm": {
    "name": "Ritmo Veneno",
    "type": "poison",
    "levels": [
      {
        "typeDamage": {
          "poison": 0.04
        },
        "duration": 0.1,
        "area": 0.05
      },
      {
        "typeDamage": {
          "poison": 0.04
        },
        "duration": 0.1,
        "area": 0.05
      },
      {
        "typeDamage": {
          "poison": 0.04
        },
        "duration": 0.1,
        "area": 0.05
      },
      {
        "typeDamage": {
          "poison": 0.04
        },
        "duration": 0.1,
        "area": 0.05
      }
    ],
    "description": "Por nível: +4% dano do tipo · +10% duração · +5% área. Acumula até Nv 4."
  },
  "poisonGuard": {
    "name": "Proteção Veneno",
    "type": "poison",
    "levels": [
      {
        "typeDamage": {
          "poison": 0.04
        },
        "regen": 0.12,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "poison": 0.04
        },
        "regen": 0.12,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "poison": 0.04
        },
        "regen": 0.12,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "poison": 0.04
        },
        "regen": 0.12,
        "armor": 0.4
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.12 HP/s · +0.4 defesa. Acumula até Nv 4."
  },
  "flyingFocus": {
    "name": "Foco Voador",
    "type": "flying",
    "levels": [
      {
        "typeDamage": {
          "flying": 0.08
        },
        "projectileSpeed": 0.12,
        "speed": 2
      },
      {
        "typeDamage": {
          "flying": 0.08
        },
        "projectileSpeed": 0.12,
        "speed": 2
      },
      {
        "typeDamage": {
          "flying": 0.08
        },
        "projectileSpeed": 0.12,
        "speed": 2
      },
      {
        "typeDamage": {
          "flying": 0.08
        },
        "projectileSpeed": 0.12,
        "speed": 2
      }
    ],
    "description": "Por nível: +8% dano do tipo · +12% velocidade de projéteis · +2 velocidade. Acumula até Nv 4."
  },
  "flyingRhythm": {
    "name": "Ritmo Voador",
    "type": "flying",
    "levels": [
      {
        "typeDamage": {
          "flying": 0.04
        },
        "cooldown": -0.035,
        "area": 0.06
      },
      {
        "typeDamage": {
          "flying": 0.04
        },
        "cooldown": -0.035,
        "area": 0.06
      },
      {
        "typeDamage": {
          "flying": 0.04
        },
        "cooldown": -0.035,
        "area": 0.06
      },
      {
        "typeDamage": {
          "flying": 0.04
        },
        "cooldown": -0.035,
        "area": 0.06
      }
    ],
    "description": "Por nível: +4% dano do tipo · -4% recarga · +6% área. Acumula até Nv 4."
  },
  "flyingGuard": {
    "name": "Proteção Voador",
    "type": "flying",
    "levels": [
      {
        "typeDamage": {
          "flying": 0.04
        },
        "speed": 3,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "flying": 0.04
        },
        "speed": 3,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "flying": 0.04
        },
        "speed": 3,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "flying": 0.04
        },
        "speed": 3,
        "damageTaken": -0.015
      }
    ],
    "description": "Por nível: +4% dano do tipo · +3 velocidade · -1% dano recebido. Acumula até Nv 4."
  },
  "bugFocus": {
    "name": "Foco Inseto",
    "type": "bug",
    "levels": [
      {
        "typeDamage": {
          "bug": 0.08
        },
        "statusChance": 0.04,
        "growth": 0.04
      },
      {
        "typeDamage": {
          "bug": 0.08
        },
        "statusChance": 0.04,
        "growth": 0.04
      },
      {
        "typeDamage": {
          "bug": 0.08
        },
        "statusChance": 0.04,
        "growth": 0.04
      },
      {
        "typeDamage": {
          "bug": 0.08
        },
        "statusChance": 0.04,
        "growth": 0.04
      }
    ],
    "description": "Por nível: +8% dano do tipo · +4% chance de status · +4% XP. Acumula até Nv 4."
  },
  "bugRhythm": {
    "name": "Ritmo Inseto",
    "type": "bug",
    "levels": [
      {
        "typeDamage": {
          "bug": 0.04
        },
        "duration": 0.1,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "bug": 0.04
        },
        "duration": 0.1,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "bug": 0.04
        },
        "duration": 0.1,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "bug": 0.04
        },
        "duration": 0.1,
        "cooldown": -0.025
      }
    ],
    "description": "Por nível: +4% dano do tipo · +10% duração · -2% recarga. Acumula até Nv 4."
  },
  "bugGuard": {
    "name": "Proteção Inseto",
    "type": "bug",
    "levels": [
      {
        "typeDamage": {
          "bug": 0.04
        },
        "armor": 0.5,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "bug": 0.04
        },
        "armor": 0.5,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "bug": 0.04
        },
        "armor": 0.5,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "bug": 0.04
        },
        "armor": 0.5,
        "regen": 0.1
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.5 defesa · +0.1 HP/s. Acumula até Nv 4."
  },
  "rockFocus": {
    "name": "Foco Pedra",
    "type": "rock",
    "levels": [
      {
        "typeDamage": {
          "rock": 0.08
        },
        "knockback": 0.15,
        "might": 0.04
      },
      {
        "typeDamage": {
          "rock": 0.08
        },
        "knockback": 0.15,
        "might": 0.04
      },
      {
        "typeDamage": {
          "rock": 0.08
        },
        "knockback": 0.15,
        "might": 0.04
      },
      {
        "typeDamage": {
          "rock": 0.08
        },
        "knockback": 0.15,
        "might": 0.04
      }
    ],
    "description": "Por nível: +8% dano do tipo · +15% empurrão · +4% dano. Acumula até Nv 4."
  },
  "rockRhythm": {
    "name": "Ritmo Pedra",
    "type": "rock",
    "levels": [
      {
        "typeDamage": {
          "rock": 0.04
        },
        "area": 0.09,
        "duration": 0.05
      },
      {
        "typeDamage": {
          "rock": 0.04
        },
        "area": 0.09,
        "duration": 0.05
      },
      {
        "typeDamage": {
          "rock": 0.04
        },
        "area": 0.09,
        "duration": 0.05
      },
      {
        "typeDamage": {
          "rock": 0.04
        },
        "area": 0.09,
        "duration": 0.05
      }
    ],
    "description": "Por nível: +4% dano do tipo · +9% área · +5% duração. Acumula até Nv 4."
  },
  "rockGuard": {
    "name": "Proteção Pedra",
    "type": "rock",
    "levels": [
      {
        "typeDamage": {
          "rock": 0.04
        },
        "armor": 0.8,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "rock": 0.04
        },
        "armor": 0.8,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "rock": 0.04
        },
        "armor": 0.8,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "rock": 0.04
        },
        "armor": 0.8,
        "maxHp": 8
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.8 defesa · +8 HP máximo. Acumula até Nv 4."
  },
  "groundFocus": {
    "name": "Foco Terra",
    "type": "ground",
    "levels": [
      {
        "typeDamage": {
          "ground": 0.08
        },
        "area": 0.09,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "ground": 0.08
        },
        "area": 0.09,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "ground": 0.08
        },
        "area": 0.09,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "ground": 0.08
        },
        "area": 0.09,
        "knockback": 0.1
      }
    ],
    "description": "Por nível: +8% dano do tipo · +9% área · +10% empurrão. Acumula até Nv 4."
  },
  "groundRhythm": {
    "name": "Ritmo Terra",
    "type": "ground",
    "levels": [
      {
        "typeDamage": {
          "ground": 0.04
        },
        "duration": 0.12,
        "magnet": 4
      },
      {
        "typeDamage": {
          "ground": 0.04
        },
        "duration": 0.12,
        "magnet": 4
      },
      {
        "typeDamage": {
          "ground": 0.04
        },
        "duration": 0.12,
        "magnet": 4
      },
      {
        "typeDamage": {
          "ground": 0.04
        },
        "duration": 0.12,
        "magnet": 4
      }
    ],
    "description": "Por nível: +4% dano do tipo · +12% duração · +4 coleta. Acumula até Nv 4."
  },
  "groundGuard": {
    "name": "Proteção Terra",
    "type": "ground",
    "levels": [
      {
        "typeDamage": {
          "ground": 0.04
        },
        "maxHp": 14,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "ground": 0.04
        },
        "maxHp": 14,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "ground": 0.04
        },
        "maxHp": 14,
        "armor": 0.4
      },
      {
        "typeDamage": {
          "ground": 0.04
        },
        "maxHp": 14,
        "armor": 0.4
      }
    ],
    "description": "Por nível: +4% dano do tipo · +14 HP máximo · +0.4 defesa. Acumula até Nv 4."
  },
  "ghostFocus": {
    "name": "Foco Fantasma",
    "type": "ghost",
    "levels": [
      {
        "typeDamage": {
          "ghost": 0.08
        },
        "lifeSteal": 0.004,
        "statusDamage": 0.08
      },
      {
        "typeDamage": {
          "ghost": 0.08
        },
        "lifeSteal": 0.004,
        "statusDamage": 0.08
      },
      {
        "typeDamage": {
          "ghost": 0.08
        },
        "lifeSteal": 0.004,
        "statusDamage": 0.08
      },
      {
        "typeDamage": {
          "ghost": 0.08
        },
        "lifeSteal": 0.004,
        "statusDamage": 0.08
      }
    ],
    "description": "Por nível: +8% dano do tipo · +0% roubo de vida · +8% dano de status. Acumula até Nv 4."
  },
  "ghostRhythm": {
    "name": "Ritmo Fantasma",
    "type": "ghost",
    "levels": [
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "duration": 0.09,
        "cooldown": -0.03
      },
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "duration": 0.09,
        "cooldown": -0.03
      },
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "duration": 0.09,
        "cooldown": -0.03
      },
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "duration": 0.09,
        "cooldown": -0.03
      }
    ],
    "description": "Por nível: +4% dano do tipo · +9% duração · -3% recarga. Acumula até Nv 4."
  },
  "ghostGuard": {
    "name": "Proteção Fantasma",
    "type": "ghost",
    "levels": [
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "damageTaken": -0.025,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "damageTaken": -0.025,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "damageTaken": -0.025,
        "regen": 0.1
      },
      {
        "typeDamage": {
          "ghost": 0.04
        },
        "damageTaken": -0.025,
        "regen": 0.1
      }
    ],
    "description": "Por nível: +4% dano do tipo · -2% dano recebido · +0.1 HP/s. Acumula até Nv 4."
  },
  "fightingFocus": {
    "name": "Foco Lutador",
    "type": "fighting",
    "levels": [
      {
        "typeDamage": {
          "fighting": 0.08
        },
        "criticalChance": 0.03,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "fighting": 0.08
        },
        "criticalChance": 0.03,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "fighting": 0.08
        },
        "criticalChance": 0.03,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "fighting": 0.08
        },
        "criticalChance": 0.03,
        "knockback": 0.1
      }
    ],
    "description": "Por nível: +8% dano do tipo · +3% chance crítica · +10% empurrão. Acumula até Nv 4."
  },
  "fightingRhythm": {
    "name": "Ritmo Lutador",
    "type": "fighting",
    "levels": [
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "cooldown": -0.035,
        "might": 0.04
      },
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "cooldown": -0.035,
        "might": 0.04
      },
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "cooldown": -0.035,
        "might": 0.04
      },
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "cooldown": -0.035,
        "might": 0.04
      }
    ],
    "description": "Por nível: +4% dano do tipo · -4% recarga · +4% dano. Acumula até Nv 4."
  },
  "fightingGuard": {
    "name": "Proteção Lutador",
    "type": "fighting",
    "levels": [
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      },
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      },
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      },
      {
        "typeDamage": {
          "fighting": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      }
    ],
    "description": "Por nível: +4% dano do tipo · +12 HP máximo · +0.5 defesa. Acumula até Nv 4."
  },
  "psychicFocus": {
    "name": "Foco Psíquico",
    "type": "psychic",
    "levels": [
      {
        "typeDamage": {
          "psychic": 0.08
        },
        "criticalDamage": 0.12,
        "area": 0.05
      },
      {
        "typeDamage": {
          "psychic": 0.08
        },
        "criticalDamage": 0.12,
        "area": 0.05
      },
      {
        "typeDamage": {
          "psychic": 0.08
        },
        "criticalDamage": 0.12,
        "area": 0.05
      },
      {
        "typeDamage": {
          "psychic": 0.08
        },
        "criticalDamage": 0.12,
        "area": 0.05
      }
    ],
    "description": "Por nível: +8% dano do tipo · +12% dano crítico · +5% área. Acumula até Nv 4."
  },
  "psychicRhythm": {
    "name": "Ritmo Psíquico",
    "type": "psychic",
    "levels": [
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "duration": 0.08,
        "cooldown": -0.035
      },
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "duration": 0.08,
        "cooldown": -0.035
      },
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "duration": 0.08,
        "cooldown": -0.035
      },
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "duration": 0.08,
        "cooldown": -0.035
      }
    ],
    "description": "Por nível: +4% dano do tipo · +8% duração · -4% recarga. Acumula até Nv 4."
  },
  "psychicGuard": {
    "name": "Proteção Psíquico",
    "type": "psychic",
    "levels": [
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "magnet": 7,
        "damageTaken": -0.02
      },
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "magnet": 7,
        "damageTaken": -0.02
      },
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "magnet": 7,
        "damageTaken": -0.02
      },
      {
        "typeDamage": {
          "psychic": 0.04
        },
        "magnet": 7,
        "damageTaken": -0.02
      }
    ],
    "description": "Por nível: +4% dano do tipo · +7 coleta · -2% dano recebido. Acumula até Nv 4."
  },
  "iceFocus": {
    "name": "Foco Gelo",
    "type": "ice",
    "levels": [
      {
        "typeDamage": {
          "ice": 0.08
        },
        "statusChance": 0.04,
        "area": 0.05
      },
      {
        "typeDamage": {
          "ice": 0.08
        },
        "statusChance": 0.04,
        "area": 0.05
      },
      {
        "typeDamage": {
          "ice": 0.08
        },
        "statusChance": 0.04,
        "area": 0.05
      },
      {
        "typeDamage": {
          "ice": 0.08
        },
        "statusChance": 0.04,
        "area": 0.05
      }
    ],
    "description": "Por nível: +8% dano do tipo · +4% chance de status · +5% área. Acumula até Nv 4."
  },
  "iceRhythm": {
    "name": "Ritmo Gelo",
    "type": "ice",
    "levels": [
      {
        "typeDamage": {
          "ice": 0.04
        },
        "duration": 0.12,
        "projectileSpeed": 0.07
      },
      {
        "typeDamage": {
          "ice": 0.04
        },
        "duration": 0.12,
        "projectileSpeed": 0.07
      },
      {
        "typeDamage": {
          "ice": 0.04
        },
        "duration": 0.12,
        "projectileSpeed": 0.07
      },
      {
        "typeDamage": {
          "ice": 0.04
        },
        "duration": 0.12,
        "projectileSpeed": 0.07
      }
    ],
    "description": "Por nível: +4% dano do tipo · +12% duração · +7% velocidade de projéteis. Acumula até Nv 4."
  },
  "iceGuard": {
    "name": "Proteção Gelo",
    "type": "ice",
    "levels": [
      {
        "typeDamage": {
          "ice": 0.04
        },
        "armor": 0.65,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "ice": 0.04
        },
        "armor": 0.65,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "ice": 0.04
        },
        "armor": 0.65,
        "maxHp": 8
      },
      {
        "typeDamage": {
          "ice": 0.04
        },
        "armor": 0.65,
        "maxHp": 8
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.65 defesa · +8 HP máximo. Acumula até Nv 4."
  },
  "steelFocus": {
    "name": "Foco Aço",
    "type": "steel",
    "levels": [
      {
        "typeDamage": {
          "steel": 0.08
        },
        "criticalDamage": 0.1,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "steel": 0.08
        },
        "criticalDamage": 0.1,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "steel": 0.08
        },
        "criticalDamage": 0.1,
        "knockback": 0.1
      },
      {
        "typeDamage": {
          "steel": 0.08
        },
        "criticalDamage": 0.1,
        "knockback": 0.1
      }
    ],
    "description": "Por nível: +8% dano do tipo · +10% dano crítico · +10% empurrão. Acumula até Nv 4."
  },
  "steelRhythm": {
    "name": "Ritmo Aço",
    "type": "steel",
    "levels": [
      {
        "typeDamage": {
          "steel": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "steel": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "steel": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "steel": 0.04
        },
        "projectileSpeed": 0.1,
        "cooldown": -0.025
      }
    ],
    "description": "Por nível: +4% dano do tipo · +10% velocidade de projéteis · -2% recarga. Acumula até Nv 4."
  },
  "steelGuard": {
    "name": "Proteção Aço",
    "type": "steel",
    "levels": [
      {
        "typeDamage": {
          "steel": 0.04
        },
        "armor": 1,
        "maxHp": 6
      },
      {
        "typeDamage": {
          "steel": 0.04
        },
        "armor": 1,
        "maxHp": 6
      },
      {
        "typeDamage": {
          "steel": 0.04
        },
        "armor": 1,
        "maxHp": 6
      },
      {
        "typeDamage": {
          "steel": 0.04
        },
        "armor": 1,
        "maxHp": 6
      }
    ],
    "description": "Por nível: +4% dano do tipo · +1 defesa · +6 HP máximo. Acumula até Nv 4."
  },
  "darkFocus": {
    "name": "Foco Sombrio",
    "type": "dark",
    "levels": [
      {
        "typeDamage": {
          "dark": 0.08
        },
        "criticalChance": 0.035,
        "bossDamage": 0.04
      },
      {
        "typeDamage": {
          "dark": 0.08
        },
        "criticalChance": 0.035,
        "bossDamage": 0.04
      },
      {
        "typeDamage": {
          "dark": 0.08
        },
        "criticalChance": 0.035,
        "bossDamage": 0.04
      },
      {
        "typeDamage": {
          "dark": 0.08
        },
        "criticalChance": 0.035,
        "bossDamage": 0.04
      }
    ],
    "description": "Por nível: +8% dano do tipo · +4% chance crítica · +4% dano contra chefes. Acumula até Nv 4."
  },
  "darkRhythm": {
    "name": "Ritmo Sombrio",
    "type": "dark",
    "levels": [
      {
        "typeDamage": {
          "dark": 0.04
        },
        "criticalDamage": 0.12,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "dark": 0.04
        },
        "criticalDamage": 0.12,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "dark": 0.04
        },
        "criticalDamage": 0.12,
        "cooldown": -0.025
      },
      {
        "typeDamage": {
          "dark": 0.04
        },
        "criticalDamage": 0.12,
        "cooldown": -0.025
      }
    ],
    "description": "Por nível: +4% dano do tipo · +12% dano crítico · -2% recarga. Acumula até Nv 4."
  },
  "darkGuard": {
    "name": "Proteção Sombrio",
    "type": "dark",
    "levels": [
      {
        "typeDamage": {
          "dark": 0.04
        },
        "lifeSteal": 0.005,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "dark": 0.04
        },
        "lifeSteal": 0.005,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "dark": 0.04
        },
        "lifeSteal": 0.005,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "dark": 0.04
        },
        "lifeSteal": 0.005,
        "damageTaken": -0.015
      }
    ],
    "description": "Por nível: +4% dano do tipo · +1% roubo de vida · -1% dano recebido. Acumula até Nv 4."
  },
  "fairyFocus": {
    "name": "Foco Fada",
    "type": "fairy",
    "levels": [
      {
        "typeDamage": {
          "fairy": 0.08
        },
        "area": 0.06,
        "statusChance": 0.03
      },
      {
        "typeDamage": {
          "fairy": 0.08
        },
        "area": 0.06,
        "statusChance": 0.03
      },
      {
        "typeDamage": {
          "fairy": 0.08
        },
        "area": 0.06,
        "statusChance": 0.03
      },
      {
        "typeDamage": {
          "fairy": 0.08
        },
        "area": 0.06,
        "statusChance": 0.03
      }
    ],
    "description": "Por nível: +8% dano do tipo · +6% área · +3% chance de status. Acumula até Nv 4."
  },
  "fairyRhythm": {
    "name": "Ritmo Fada",
    "type": "fairy",
    "levels": [
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "growth": 0.06,
        "duration": 0.08
      },
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "growth": 0.06,
        "duration": 0.08
      },
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "growth": 0.06,
        "duration": 0.08
      },
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "growth": 0.06,
        "duration": 0.08
      }
    ],
    "description": "Por nível: +4% dano do tipo · +6% XP · +8% duração. Acumula até Nv 4."
  },
  "fairyGuard": {
    "name": "Proteção Fada",
    "type": "fairy",
    "levels": [
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "regen": 0.2,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "regen": 0.2,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "regen": 0.2,
        "damageTaken": -0.015
      },
      {
        "typeDamage": {
          "fairy": 0.04
        },
        "regen": 0.2,
        "damageTaken": -0.015
      }
    ],
    "description": "Por nível: +4% dano do tipo · +0.2 HP/s · -1% dano recebido. Acumula até Nv 4."
  },
  "dragonFocus": {
    "name": "Foco Dragão",
    "type": "dragon",
    "levels": [
      {
        "typeDamage": {
          "dragon": 0.08
        },
        "bossDamage": 0.07,
        "might": 0.04
      },
      {
        "typeDamage": {
          "dragon": 0.08
        },
        "bossDamage": 0.07,
        "might": 0.04
      },
      {
        "typeDamage": {
          "dragon": 0.08
        },
        "bossDamage": 0.07,
        "might": 0.04
      },
      {
        "typeDamage": {
          "dragon": 0.08
        },
        "bossDamage": 0.07,
        "might": 0.04
      }
    ],
    "description": "Por nível: +8% dano do tipo · +7% dano contra chefes · +4% dano. Acumula até Nv 4."
  },
  "dragonRhythm": {
    "name": "Ritmo Dragão",
    "type": "dragon",
    "levels": [
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "area": 0.07,
        "projectileSpeed": 0.08
      },
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "area": 0.07,
        "projectileSpeed": 0.08
      },
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "area": 0.07,
        "projectileSpeed": 0.08
      },
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "area": 0.07,
        "projectileSpeed": 0.08
      }
    ],
    "description": "Por nível: +4% dano do tipo · +7% área · +8% velocidade de projéteis. Acumula até Nv 4."
  },
  "dragonGuard": {
    "name": "Proteção Dragão",
    "type": "dragon",
    "levels": [
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      },
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      },
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      },
      {
        "typeDamage": {
          "dragon": 0.04
        },
        "maxHp": 12,
        "armor": 0.5
      }
    ],
    "description": "Por nível: +4% dano do tipo · +12 HP máximo · +0.5 defesa. Acumula até Nv 4."
  },
  "scopeLens": {
    "name": "Scope Lens",
    "levels": [
      {
        "criticalChance": 0.04
      },
      {
        "criticalChance": 0.04
      },
      {
        "criticalChance": 0.04
      },
      {
        "criticalChance": 0.04
      },
      {
        "criticalChance": 0.04
      }
    ],
    "description": "Por nível: +4% chance crítica. Acumula até Nv 4."
  },
  "razorClaw": {
    "name": "Razor Claw",
    "levels": [
      {
        "criticalDamage": 0.15
      },
      {
        "criticalDamage": 0.15
      },
      {
        "criticalDamage": 0.15
      },
      {
        "criticalDamage": 0.15
      }
    ],
    "description": "Por nível: +15% dano crítico. Acumula até Nv 4."
  },
  "shellBell": {
    "name": "Shell Bell",
    "levels": [
      {
        "lifeSteal": 0.006
      },
      {
        "lifeSteal": 0.006
      },
      {
        "lifeSteal": 0.006
      },
      {
        "lifeSteal": 0.006
      }
    ],
    "description": "Por nível: +1% roubo de vida. Acumula até Nv 4."
  },
  "expertBelt": {
    "name": "Expert Belt",
    "levels": [
      {
        "bossDamage": 0.08
      },
      {
        "bossDamage": 0.08
      },
      {
        "bossDamage": 0.08
      },
      {
        "bossDamage": 0.08
      }
    ],
    "description": "Por nível: +8% dano contra chefes. Acumula até Nv 4."
  },
  "ironBall": {
    "name": "Iron Ball",
    "levels": [
      {
        "knockback": 0.15,
        "armor": 0.25
      },
      {
        "knockback": 0.15,
        "armor": 0.25
      },
      {
        "knockback": 0.15,
        "armor": 0.25
      },
      {
        "knockback": 0.15,
        "armor": 0.25
      }
    ],
    "description": "Por nível: +15% empurrão · +0.25 defesa. Acumula até Nv 4."
  },
  "vitalityBand": {
    "name": "Vitality Band",
    "levels": [
      {
        "maxHp": 15,
        "regen": 0.1
      },
      {
        "maxHp": 15,
        "regen": 0.1
      },
      {
        "maxHp": 15,
        "regen": 0.1
      },
      {
        "maxHp": 15,
        "regen": 0.1
      }
    ],
    "description": "Por nível: +15 HP máximo · +0.1 HP/s. Acumula até Nv 4."
  },
  "treasureCharm": {
    "name": "Treasure Charm",
    "levels": [
      {
        "greed": 0.12,
        "magnet": 3
      },
      {
        "greed": 0.12,
        "magnet": 3
      },
      {
        "greed": 0.12,
        "magnet": 3
      },
      {
        "greed": 0.12,
        "magnet": 3
      }
    ],
    "description": "Por nível: +12% dinheiro · +3 coleta. Acumula até Nv 4."
  },
  "focusSash": {
    "name": "Focus Sash",
    "levels": [
      {
        "damageTaken": -0.04
      },
      {
        "damageTaken": -0.04
      },
      {
        "damageTaken": -0.04
      },
      {
        "damageTaken": -0.04
      }
    ],
    "description": "Por nível: -4% dano recebido. Acumula até Nv 4."
  }
} as const
export type TypedBuffId = keyof typeof TYPE_BUFF_META
export const SKILL_TEXTS = Object.fromEntries(Object.entries(TYPE_SKILL_META).map(([id,m])=>[id,{description:m.description,upgrades:['Dano base +1.','Área +8%.','Um projétil ou alvo adicional.','Recarga -0,10 s.','Dano base +2.','Duração +0,15 s.','Um projétil ou alvo adicional.','Área +10%.','Dano base +2.']}])) as unknown as Record<TypedSkillId,{description:string;upgrades:readonly string[]}>
export const BUFF_TEXTS = Object.fromEntries(Object.entries(TYPE_BUFF_META).map(([id,m])=>[id,m.description])) as unknown as Record<TypedBuffId,string>
