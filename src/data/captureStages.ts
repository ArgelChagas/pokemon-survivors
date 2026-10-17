import type { EnemyDef } from './enemies'
export const CAPTURE_STAGES = {
  "dex2": {
    "dex": 2,
    "name": "Ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex3": {
    "dex": 3,
    "name": "Venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex5": {
    "dex": 5,
    "name": "Charmeleon",
    "types": [
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex6": {
    "dex": 6,
    "name": "Charizard",
    "types": [
      "fire",
      "flying"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex8": {
    "dex": 8,
    "name": "Wartortle",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex9": {
    "dex": 9,
    "name": "Blastoise",
    "types": [
      "water"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex153": {
    "dex": 153,
    "name": "Bayleef",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex154": {
    "dex": 154,
    "name": "Meganium",
    "types": [
      "grass"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex156": {
    "dex": 156,
    "name": "Quilava",
    "types": [
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex157": {
    "dex": 157,
    "name": "Typhlosion",
    "types": [
      "fire"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex159": {
    "dex": 159,
    "name": "Croconaw",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex160": {
    "dex": 160,
    "name": "Feraligatr",
    "types": [
      "water"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex253": {
    "dex": 253,
    "name": "Grovyle",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex254": {
    "dex": 254,
    "name": "Sceptile",
    "types": [
      "grass"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex256": {
    "dex": 256,
    "name": "Combusken",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex257": {
    "dex": 257,
    "name": "Blaziken",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex259": {
    "dex": 259,
    "name": "Marshtomp",
    "types": [
      "water",
      "ground"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex260": {
    "dex": 260,
    "name": "Swampert",
    "types": [
      "water",
      "ground"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex388": {
    "dex": 388,
    "name": "Grotle",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex389": {
    "dex": 389,
    "name": "Torterra",
    "types": [
      "grass",
      "ground"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex391": {
    "dex": 391,
    "name": "Monferno",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex392": {
    "dex": 392,
    "name": "Infernape",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex394": {
    "dex": 394,
    "name": "Prinplup",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex395": {
    "dex": 395,
    "name": "Empoleon",
    "types": [
      "water",
      "steel"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex496": {
    "dex": 496,
    "name": "Servine",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex497": {
    "dex": 497,
    "name": "Serperior",
    "types": [
      "grass"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex499": {
    "dex": 499,
    "name": "Pignite",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex500": {
    "dex": 500,
    "name": "Emboar",
    "types": [
      "fire",
      "fighting"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex502": {
    "dex": 502,
    "name": "Dewott",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex503": {
    "dex": 503,
    "name": "Samurott",
    "types": [
      "water"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex651": {
    "dex": 651,
    "name": "Quilladin",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex652": {
    "dex": 652,
    "name": "Chesnaught",
    "types": [
      "grass",
      "fighting"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex654": {
    "dex": 654,
    "name": "Braixen",
    "types": [
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex655": {
    "dex": 655,
    "name": "Delphox",
    "types": [
      "fire",
      "psychic"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex657": {
    "dex": 657,
    "name": "Frogadier",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex658": {
    "dex": 658,
    "name": "Greninja",
    "types": [
      "water",
      "dark"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex723": {
    "dex": 723,
    "name": "Dartrix",
    "types": [
      "grass",
      "flying"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex724": {
    "dex": 724,
    "name": "Decidueye",
    "types": [
      "grass",
      "ghost"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex726": {
    "dex": 726,
    "name": "Torracat",
    "types": [
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex727": {
    "dex": 727,
    "name": "Incineroar",
    "types": [
      "fire",
      "dark"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex729": {
    "dex": 729,
    "name": "Brionne",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex730": {
    "dex": 730,
    "name": "Primarina",
    "types": [
      "water",
      "fairy"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex811": {
    "dex": 811,
    "name": "Thwackey",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex812": {
    "dex": 812,
    "name": "Rillaboom",
    "types": [
      "grass"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex814": {
    "dex": 814,
    "name": "Raboot",
    "types": [
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex815": {
    "dex": 815,
    "name": "Cinderace",
    "types": [
      "fire"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex817": {
    "dex": 817,
    "name": "Drizzile",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex818": {
    "dex": 818,
    "name": "Inteleon",
    "types": [
      "water"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex907": {
    "dex": 907,
    "name": "Floragato",
    "types": [
      "grass"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex908": {
    "dex": 908,
    "name": "Meowscarada",
    "types": [
      "grass",
      "dark"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex910": {
    "dex": 910,
    "name": "Crocalor",
    "types": [
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex911": {
    "dex": 911,
    "name": "Skeledirge",
    "types": [
      "fire",
      "ghost"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex913": {
    "dex": 913,
    "name": "Quaxwell",
    "types": [
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex914": {
    "dex": 914,
    "name": "Quaquaval",
    "types": [
      "water",
      "fighting"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex25": {
    "dex": 25,
    "name": "Pikachu",
    "types": [
      "electric"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex26": {
    "dex": 26,
    "name": "Raichu",
    "types": [
      "electric"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex197": {
    "dex": 197,
    "name": "Umbreon",
    "types": [
      "dark"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex176": {
    "dex": 176,
    "name": "Togetic",
    "types": [
      "fairy",
      "flying"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex468": {
    "dex": 468,
    "name": "Togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex364": {
    "dex": 364,
    "name": "Sealeo",
    "types": [
      "ice",
      "water"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex365": {
    "dex": 365,
    "name": "Walrein",
    "types": [
      "ice",
      "water"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex315": {
    "dex": 315,
    "name": "Roselia",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex407": {
    "dex": 407,
    "name": "Roserade",
    "types": [
      "grass",
      "poison"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex745": {
    "dex": 745,
    "name": "Lycanroc",
    "types": [
      "rock"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex473": {
    "dex": 473,
    "name": "Mamoswine",
    "types": [
      "ice",
      "ground"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex64": {
    "dex": 64,
    "name": "Kadabra",
    "types": [
      "psychic"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex65": {
    "dex": 65,
    "name": "Alakazam",
    "types": [
      "psychic"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex281": {
    "dex": 281,
    "name": "Kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex282": {
    "dex": 282,
    "name": "Gardevoir",
    "types": [
      "psychic",
      "fairy"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex448": {
    "dex": 448,
    "name": "Lucario",
    "types": [
      "fighting",
      "steel"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex571": {
    "dex": 571,
    "name": "Zoroark",
    "types": [
      "dark"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex637": {
    "dex": 637,
    "name": "Volcarona",
    "types": [
      "bug",
      "fire"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex715": {
    "dex": 715,
    "name": "Noivern",
    "types": [
      "flying",
      "dragon"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex681": {
    "dex": 681,
    "name": "Aegislash",
    "types": [
      "steel",
      "ghost"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex849": {
    "dex": 849,
    "name": "Toxtricity",
    "types": [
      "electric",
      "poison"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex958": {
    "dex": 958,
    "name": "Tinkatuff",
    "types": [
      "fairy",
      "steel"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex936": {
    "dex": 936,
    "name": "Armarouge",
    "types": [
      "fire",
      "psychic"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex149": {
    "dex": 149,
    "name": "Dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex247": {
    "dex": 247,
    "name": "Pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex248": {
    "dex": 248,
    "name": "Tyranitar",
    "types": [
      "rock",
      "dark"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex375": {
    "dex": 375,
    "name": "Metang",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex376": {
    "dex": 376,
    "name": "Metagross",
    "types": [
      "steel",
      "psychic"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex445": {
    "dex": 445,
    "name": "Garchomp",
    "types": [
      "dragon",
      "ground"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "dex886": {
    "dex": 886,
    "name": "Drakloak",
    "types": [
      "dragon",
      "ghost"
    ],
    "hp": 40,
    "speed": 38,
    "damage": 9,
    "xp": 4,
    "mass": 1.5,
    "tier": 3,
    "regionalOnly": true
  },
  "dex887": {
    "dex": 887,
    "name": "Dragapult",
    "types": [
      "dragon",
      "ghost"
    ],
    "hp": 78,
    "speed": 42,
    "damage": 13,
    "xp": 6,
    "mass": 2,
    "tier": 5,
    "regionalOnly": true
  },
  "meowth": {
    "dex": 52,
    "name": "Meowth",
    "types": [
      "normal"
    ],
    "hp": 16,
    "speed": 39,
    "damage": 5,
    "xp": 2,
    "mass": 1,
    "tier": 2,
    "regionalOnly": true
  },
  "dex470": {
    "dex": 470,
    "name": "Leafeon",
    "types": [
      "grass"
    ],
    "hp": 65,
    "speed": 44,
    "damage": 12,
    "xp": 6,
    "mass": 1.5,
    "tier": 5,
    "regionalOnly": true
  },
  "dex471": {
    "dex": 471,
    "name": "Glaceon",
    "types": [
      "ice"
    ],
    "hp": 65,
    "speed": 44,
    "damage": 12,
    "xp": 6,
    "mass": 1.5,
    "tier": 5,
    "regionalOnly": true
  },
  "dex700": {
    "dex": 700,
    "name": "Sylveon",
    "types": [
      "fairy"
    ],
    "hp": 65,
    "speed": 44,
    "damage": 12,
    "xp": 6,
    "mass": 1.5,
    "tier": 5,
    "regionalOnly": true
  }
} as const satisfies Record<string,EnemyDef>
