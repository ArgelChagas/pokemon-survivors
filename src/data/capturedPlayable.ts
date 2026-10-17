import type { PlayableDef } from './starters'
export const CAPTURE_PLAYABLE = {
  "captured1": {
    "name": "Bulbasaur",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature1",
    "learnset": [
      "signature1"
    ],
    "line": [
      {
        "dex": 1,
        "name": "Bulbasaur",
        "types": [
          "grass",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 2,
        "name": "Ivysaur",
        "types": [
          "grass",
          "poison"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "regen": 0.4,
          "might": 0.08
        }
      },
      {
        "dex": 3,
        "name": "Venusaur",
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {
          "maxHp": 45,
          "regen": 0.6,
          "might": 0.15,
          "area": 0.15
        }
      }
    ]
  },
  "captured2": {
    "name": "Ivysaur",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature2",
    "learnset": [
      "signature2"
    ],
    "line": [
      {
        "dex": 2,
        "name": "Ivysaur",
        "types": [
          "grass",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 3,
        "name": "Venusaur",
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {
          "maxHp": 45,
          "regen": 0.6,
          "might": 0.15,
          "area": 0.15
        }
      }
    ]
  },
  "captured3": {
    "name": "Venusaur",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature3",
    "learnset": [
      "signature3"
    ],
    "line": [
      {
        "dex": 3,
        "name": "Venusaur",
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured4": {
    "name": "Charmander",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature4",
    "learnset": [
      "signature4"
    ],
    "line": [
      {
        "dex": 4,
        "name": "Charmander",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 5,
        "name": "Charmeleon",
        "types": [
          "fire"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.1,
          "speed": 3
        }
      },
      {
        "dex": 6,
        "name": "Charizard",
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.2,
          "speed": 6,
          "area": 0.1
        }
      }
    ]
  },
  "captured5": {
    "name": "Charmeleon",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 2
    },
    "signature": "signature5",
    "learnset": [
      "signature5"
    ],
    "line": [
      {
        "dex": 5,
        "name": "Charmeleon",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 6,
        "name": "Charizard",
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.2,
          "speed": 6,
          "area": 0.1
        }
      }
    ]
  },
  "captured6": {
    "name": "Charizard",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature6",
    "learnset": [
      "signature6"
    ],
    "line": [
      {
        "dex": 6,
        "name": "Charizard",
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured7": {
    "name": "Squirtle",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature7",
    "learnset": [
      "signature7"
    ],
    "line": [
      {
        "dex": 7,
        "name": "Squirtle",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 8,
        "name": "Wartortle",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.05
        }
      },
      {
        "dex": 9,
        "name": "Blastoise",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 50,
          "armor": 2,
          "might": 0.15,
          "amount": 1
        }
      }
    ]
  },
  "captured8": {
    "name": "Wartortle",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature8",
    "learnset": [
      "signature8"
    ],
    "line": [
      {
        "dex": 8,
        "name": "Wartortle",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 9,
        "name": "Blastoise",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 50,
          "armor": 2,
          "might": 0.15,
          "amount": 1
        }
      }
    ]
  },
  "captured9": {
    "name": "Blastoise",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature9",
    "learnset": [
      "signature9"
    ],
    "line": [
      {
        "dex": 9,
        "name": "Blastoise",
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured10": {
    "name": "Caterpie",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 0
    },
    "signature": "signature10",
    "learnset": [
      "signature10"
    ],
    "line": [
      {
        "name": "Caterpie",
        "dex": 10,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured11": {
    "name": "Metapod",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature11",
    "learnset": [
      "signature11"
    ],
    "line": [
      {
        "name": "Metapod",
        "dex": 11,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured12": {
    "name": "Butterfree",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature12",
    "learnset": [
      "signature12"
    ],
    "line": [
      {
        "name": "Butterfree",
        "dex": 12,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured13": {
    "name": "Weedle",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature13",
    "learnset": [
      "signature13"
    ],
    "line": [
      {
        "name": "Weedle",
        "dex": 13,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured14": {
    "name": "Kakuna",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature14",
    "learnset": [
      "signature14"
    ],
    "line": [
      {
        "name": "Kakuna",
        "dex": 14,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured15": {
    "name": "Beedrill",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -2
    },
    "signature": "signature15",
    "learnset": [
      "signature15"
    ],
    "line": [
      {
        "name": "Beedrill",
        "dex": 15,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured16": {
    "name": "Pidgey",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature16",
    "learnset": [
      "signature16"
    ],
    "line": [
      {
        "name": "Pidgey",
        "dex": 16,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Pidgeotto",
        "dex": 17,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "speed": 3,
          "might": 0.08
        }
      },
      {
        "name": "Pidgeot",
        "dex": 18,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 4,
          "might": 0.18,
          "area": 0.1
        }
      }
    ]
  },
  "captured17": {
    "name": "Pidgeotto",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature17",
    "learnset": [
      "signature17"
    ],
    "line": [
      {
        "name": "Pidgeotto",
        "dex": 17,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Pidgeot",
        "dex": 18,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 4,
          "might": 0.18,
          "area": 0.1
        }
      }
    ]
  },
  "captured18": {
    "name": "Pidgeot",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature18",
    "learnset": [
      "signature18"
    ],
    "line": [
      {
        "name": "Pidgeot",
        "dex": 18,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured19": {
    "name": "Rattata",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature19",
    "learnset": [
      "signature19"
    ],
    "line": [
      {
        "name": "Rattata",
        "dex": 19,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured20": {
    "name": "Raticate",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 3
    },
    "signature": "signature20",
    "learnset": [
      "signature20"
    ],
    "line": [
      {
        "name": "Raticate",
        "dex": 20,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured21": {
    "name": "Spearow",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature21",
    "learnset": [
      "signature21"
    ],
    "line": [
      {
        "name": "Spearow",
        "dex": 21,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured22": {
    "name": "Fearow",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature22",
    "learnset": [
      "signature22"
    ],
    "line": [
      {
        "name": "Fearow",
        "dex": 22,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured23": {
    "name": "Ekans",
    "color": "#a040a0",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature23",
    "learnset": [
      "signature23"
    ],
    "line": [
      {
        "name": "Ekans",
        "dex": 23,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured24": {
    "name": "Arbok",
    "color": "#a040a0",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature24",
    "learnset": [
      "signature24"
    ],
    "line": [
      {
        "name": "Arbok",
        "dex": 24,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured25": {
    "name": "Pikachu",
    "color": "#f8d030",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 1
    },
    "signature": "signature25",
    "learnset": [
      "signature25"
    ],
    "line": [
      {
        "name": "Pikachu",
        "dex": 25,
        "types": [
          "electric"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Raichu",
        "dex": 26,
        "types": [
          "electric"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 4,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured26": {
    "name": "Raichu",
    "color": "#f8d030",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature26",
    "learnset": [
      "signature26"
    ],
    "line": [
      {
        "name": "Raichu",
        "dex": 26,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured27": {
    "name": "Sandshrew",
    "color": "#e0c068",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature27",
    "learnset": [
      "signature27"
    ],
    "line": [
      {
        "name": "Sandshrew",
        "dex": 27,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured28": {
    "name": "Sandslash",
    "color": "#e0c068",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature28",
    "learnset": [
      "signature28"
    ],
    "line": [
      {
        "name": "Sandslash",
        "dex": 28,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured29": {
    "name": "Nidoran♀",
    "color": "#a040a0",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature29",
    "learnset": [
      "signature29"
    ],
    "line": [
      {
        "name": "Nidoran♀",
        "dex": 29,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured30": {
    "name": "Nidorina",
    "color": "#a040a0",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -1
    },
    "signature": "signature30",
    "learnset": [
      "signature30"
    ],
    "line": [
      {
        "name": "Nidorina",
        "dex": 30,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured31": {
    "name": "Nidoqueen",
    "color": "#a040a0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature31",
    "learnset": [
      "signature31"
    ],
    "line": [
      {
        "name": "Nidoqueen",
        "dex": 31,
        "types": [
          "poison",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured32": {
    "name": "Nidoran♂",
    "color": "#a040a0",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature32",
    "learnset": [
      "signature32"
    ],
    "line": [
      {
        "name": "Nidoran♂",
        "dex": 32,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured33": {
    "name": "Nidorino",
    "color": "#a040a0",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature33",
    "learnset": [
      "signature33"
    ],
    "line": [
      {
        "name": "Nidorino",
        "dex": 33,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured34": {
    "name": "Nidoking",
    "color": "#a040a0",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature34",
    "learnset": [
      "signature34"
    ],
    "line": [
      {
        "name": "Nidoking",
        "dex": 34,
        "types": [
          "poison",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured35": {
    "name": "Clefairy",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": -3
    },
    "signature": "signature35",
    "learnset": [
      "signature35"
    ],
    "line": [
      {
        "name": "Clefairy",
        "dex": 35,
        "types": [
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured36": {
    "name": "Clefable",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature36",
    "learnset": [
      "signature36"
    ],
    "line": [
      {
        "name": "Clefable",
        "dex": 36,
        "types": [
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured37": {
    "name": "Vulpix",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature37",
    "learnset": [
      "signature37"
    ],
    "line": [
      {
        "name": "Vulpix",
        "dex": 37,
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Ninetales",
        "dex": 38,
        "types": [
          "fire"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.22,
          "duration": 0.1,
          "statusDamage": 0.2
        }
      }
    ]
  },
  "captured38": {
    "name": "Ninetales",
    "color": "#f08030",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature38",
    "learnset": [
      "signature38"
    ],
    "line": [
      {
        "name": "Ninetales",
        "dex": 38,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured39": {
    "name": "Jigglypuff",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature39",
    "learnset": [
      "signature39"
    ],
    "line": [
      {
        "name": "Jigglypuff",
        "dex": 39,
        "types": [
          "normal",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured40": {
    "name": "Wigglytuff",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 2
    },
    "signature": "signature40",
    "learnset": [
      "signature40"
    ],
    "line": [
      {
        "name": "Wigglytuff",
        "dex": 40,
        "types": [
          "normal",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured41": {
    "name": "Zubat",
    "color": "#a040a0",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature41",
    "learnset": [
      "signature41"
    ],
    "line": [
      {
        "name": "Zubat",
        "dex": 41,
        "types": [
          "poison",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Golbat",
        "dex": 42,
        "types": [
          "poison",
          "flying"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "speed": 3,
          "might": 0.08
        }
      },
      {
        "name": "Crobat",
        "dex": 169,
        "types": [
          "poison",
          "flying"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 6,
          "might": 0.18,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured42": {
    "name": "Golbat",
    "color": "#a040a0",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature42",
    "learnset": [
      "signature42"
    ],
    "line": [
      {
        "name": "Golbat",
        "dex": 42,
        "types": [
          "poison",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Crobat",
        "dex": 169,
        "types": [
          "poison",
          "flying"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 6,
          "might": 0.18,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured43": {
    "name": "Oddish",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature43",
    "learnset": [
      "signature43"
    ],
    "line": [
      {
        "name": "Oddish",
        "dex": 43,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured44": {
    "name": "Gloom",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature44",
    "learnset": [
      "signature44"
    ],
    "line": [
      {
        "name": "Gloom",
        "dex": 44,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured45": {
    "name": "Vileplume",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 0
    },
    "signature": "signature45",
    "learnset": [
      "signature45"
    ],
    "line": [
      {
        "name": "Vileplume",
        "dex": 45,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured46": {
    "name": "Paras",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature46",
    "learnset": [
      "signature46"
    ],
    "line": [
      {
        "name": "Paras",
        "dex": 46,
        "types": [
          "bug",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured47": {
    "name": "Parasect",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature47",
    "learnset": [
      "signature47"
    ],
    "line": [
      {
        "name": "Parasect",
        "dex": 47,
        "types": [
          "bug",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured48": {
    "name": "Venonat",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature48",
    "learnset": [
      "signature48"
    ],
    "line": [
      {
        "name": "Venonat",
        "dex": 48,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured49": {
    "name": "Venomoth",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature49",
    "learnset": [
      "signature49"
    ],
    "line": [
      {
        "name": "Venomoth",
        "dex": 49,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured50": {
    "name": "Diglett",
    "color": "#e0c068",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -2
    },
    "signature": "signature50",
    "learnset": [
      "signature50"
    ],
    "line": [
      {
        "name": "Diglett",
        "dex": 50,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured51": {
    "name": "Dugtrio",
    "color": "#e0c068",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature51",
    "learnset": [
      "signature51"
    ],
    "line": [
      {
        "name": "Dugtrio",
        "dex": 51,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured52": {
    "name": "Meowth",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature52",
    "learnset": [
      "signature52"
    ],
    "line": [
      {
        "name": "Meowth",
        "dex": 52,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured53": {
    "name": "Persian",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature53",
    "learnset": [
      "signature53"
    ],
    "line": [
      {
        "name": "Persian",
        "dex": 53,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured54": {
    "name": "Psyduck",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature54",
    "learnset": [
      "signature54"
    ],
    "line": [
      {
        "name": "Psyduck",
        "dex": 54,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured55": {
    "name": "Golduck",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 3
    },
    "signature": "signature55",
    "learnset": [
      "signature55"
    ],
    "line": [
      {
        "name": "Golduck",
        "dex": 55,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured56": {
    "name": "Mankey",
    "color": "#c03028",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature56",
    "learnset": [
      "signature56"
    ],
    "line": [
      {
        "name": "Mankey",
        "dex": 56,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured57": {
    "name": "Primeape",
    "color": "#c03028",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature57",
    "learnset": [
      "signature57"
    ],
    "line": [
      {
        "name": "Primeape",
        "dex": 57,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured58": {
    "name": "Growlithe",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature58",
    "learnset": [
      "signature58"
    ],
    "line": [
      {
        "name": "Growlithe",
        "dex": 58,
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Arcanine",
        "dex": 59,
        "types": [
          "fire"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.22,
          "speed": 6,
          "area": 0.05
        }
      }
    ]
  },
  "captured59": {
    "name": "Arcanine",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature59",
    "learnset": [
      "signature59"
    ],
    "line": [
      {
        "name": "Arcanine",
        "dex": 59,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured60": {
    "name": "Poliwag",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 1
    },
    "signature": "signature60",
    "learnset": [
      "signature60"
    ],
    "line": [
      {
        "name": "Poliwag",
        "dex": 60,
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Poliwhirl",
        "dex": 61,
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.08,
          "armor": 1
        }
      },
      {
        "name": "Poliwrath",
        "dex": 62,
        "types": [
          "water",
          "fighting"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.2,
          "armor": 1,
          "area": 0.05
        }
      }
    ]
  },
  "captured61": {
    "name": "Poliwhirl",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature61",
    "learnset": [
      "signature61"
    ],
    "line": [
      {
        "name": "Poliwhirl",
        "dex": 61,
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Poliwrath",
        "dex": 62,
        "types": [
          "water",
          "fighting"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.2,
          "armor": 1,
          "area": 0.05
        }
      }
    ]
  },
  "captured62": {
    "name": "Poliwrath",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature62",
    "learnset": [
      "signature62"
    ],
    "line": [
      {
        "name": "Poliwrath",
        "dex": 62,
        "types": [
          "water",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured63": {
    "name": "Abra",
    "color": "#f85888",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature63",
    "learnset": [
      "signature63"
    ],
    "line": [
      {
        "name": "Abra",
        "dex": 63,
        "types": [
          "psychic"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Kadabra",
        "dex": 64,
        "types": [
          "psychic"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "might": 0.1,
          "cooldown": -0.03
        }
      },
      {
        "name": "Alakazam",
        "dex": 65,
        "types": [
          "psychic"
        ],
        "bonus": {
          "maxHp": 30,
          "might": 0.22,
          "cooldown": -0.05,
          "area": 0.1
        }
      }
    ]
  },
  "captured64": {
    "name": "Kadabra",
    "color": "#f85888",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature64",
    "learnset": [
      "signature64"
    ],
    "line": [
      {
        "name": "Kadabra",
        "dex": 64,
        "types": [
          "psychic"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Alakazam",
        "dex": 65,
        "types": [
          "psychic"
        ],
        "bonus": {
          "maxHp": 30,
          "might": 0.22,
          "cooldown": -0.05,
          "area": 0.1
        }
      }
    ]
  },
  "captured65": {
    "name": "Alakazam",
    "color": "#f85888",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": -1
    },
    "signature": "signature65",
    "learnset": [
      "signature65"
    ],
    "line": [
      {
        "name": "Alakazam",
        "dex": 65,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured66": {
    "name": "Machop",
    "color": "#c03028",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature66",
    "learnset": [
      "signature66"
    ],
    "line": [
      {
        "name": "Machop",
        "dex": 66,
        "types": [
          "fighting"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Machoke",
        "dex": 67,
        "types": [
          "fighting"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.1,
          "armor": 1
        }
      },
      {
        "name": "Machamp",
        "dex": 68,
        "types": [
          "fighting"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "area": 0.1
        }
      }
    ]
  },
  "captured67": {
    "name": "Machoke",
    "color": "#c03028",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature67",
    "learnset": [
      "signature67"
    ],
    "line": [
      {
        "name": "Machoke",
        "dex": 67,
        "types": [
          "fighting"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Machamp",
        "dex": 68,
        "types": [
          "fighting"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "area": 0.1
        }
      }
    ]
  },
  "captured68": {
    "name": "Machamp",
    "color": "#c03028",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature68",
    "learnset": [
      "signature68"
    ],
    "line": [
      {
        "name": "Machamp",
        "dex": 68,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured69": {
    "name": "Bellsprout",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature69",
    "learnset": [
      "signature69"
    ],
    "line": [
      {
        "name": "Bellsprout",
        "dex": 69,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured70": {
    "name": "Weepinbell",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -3
    },
    "signature": "signature70",
    "learnset": [
      "signature70"
    ],
    "line": [
      {
        "name": "Weepinbell",
        "dex": 70,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured71": {
    "name": "Victreebel",
    "color": "#78c850",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature71",
    "learnset": [
      "signature71"
    ],
    "line": [
      {
        "name": "Victreebel",
        "dex": 71,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured72": {
    "name": "Tentacool",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature72",
    "learnset": [
      "signature72"
    ],
    "line": [
      {
        "name": "Tentacool",
        "dex": 72,
        "types": [
          "water",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured73": {
    "name": "Tentacruel",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature73",
    "learnset": [
      "signature73"
    ],
    "line": [
      {
        "name": "Tentacruel",
        "dex": 73,
        "types": [
          "water",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured74": {
    "name": "Geodude",
    "color": "#b8a038",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature74",
    "learnset": [
      "signature74"
    ],
    "line": [
      {
        "name": "Geodude",
        "dex": 74,
        "types": [
          "rock",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Graveler",
        "dex": 75,
        "types": [
          "rock",
          "ground"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "armor": 1,
          "might": 0.08
        }
      },
      {
        "name": "Golem",
        "dex": 76,
        "types": [
          "rock",
          "ground"
        ],
        "bonus": {
          "maxHp": 55,
          "armor": 1,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured75": {
    "name": "Graveler",
    "color": "#b8a038",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 2
    },
    "signature": "signature75",
    "learnset": [
      "signature75"
    ],
    "line": [
      {
        "name": "Graveler",
        "dex": 75,
        "types": [
          "rock",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Golem",
        "dex": 76,
        "types": [
          "rock",
          "ground"
        ],
        "bonus": {
          "maxHp": 55,
          "armor": 1,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured76": {
    "name": "Golem",
    "color": "#b8a038",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature76",
    "learnset": [
      "signature76"
    ],
    "line": [
      {
        "name": "Golem",
        "dex": 76,
        "types": [
          "rock",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured77": {
    "name": "Ponyta",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature77",
    "learnset": [
      "signature77"
    ],
    "line": [
      {
        "name": "Ponyta",
        "dex": 77,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured78": {
    "name": "Rapidash",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature78",
    "learnset": [
      "signature78"
    ],
    "line": [
      {
        "name": "Rapidash",
        "dex": 78,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured79": {
    "name": "Slowpoke",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature79",
    "learnset": [
      "signature79"
    ],
    "line": [
      {
        "name": "Slowpoke",
        "dex": 79,
        "types": [
          "water",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured80": {
    "name": "Slowbro",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 0
    },
    "signature": "signature80",
    "learnset": [
      "signature80"
    ],
    "line": [
      {
        "name": "Slowbro",
        "dex": 80,
        "types": [
          "water",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured81": {
    "name": "Magnemite",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature81",
    "learnset": [
      "signature81"
    ],
    "line": [
      {
        "name": "Magnemite",
        "dex": 81,
        "types": [
          "electric",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured82": {
    "name": "Magneton",
    "color": "#f8d030",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature82",
    "learnset": [
      "signature82"
    ],
    "line": [
      {
        "name": "Magneton",
        "dex": 82,
        "types": [
          "electric",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured83": {
    "name": "Farfetch’d",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature83",
    "learnset": [
      "signature83"
    ],
    "line": [
      {
        "name": "Farfetch’d",
        "dex": 83,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured84": {
    "name": "Doduo",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature84",
    "learnset": [
      "signature84"
    ],
    "line": [
      {
        "name": "Doduo",
        "dex": 84,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured85": {
    "name": "Dodrio",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -2
    },
    "signature": "signature85",
    "learnset": [
      "signature85"
    ],
    "line": [
      {
        "name": "Dodrio",
        "dex": 85,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured86": {
    "name": "Seel",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature86",
    "learnset": [
      "signature86"
    ],
    "line": [
      {
        "name": "Seel",
        "dex": 86,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured87": {
    "name": "Dewgong",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature87",
    "learnset": [
      "signature87"
    ],
    "line": [
      {
        "name": "Dewgong",
        "dex": 87,
        "types": [
          "water",
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured88": {
    "name": "Grimer",
    "color": "#a040a0",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature88",
    "learnset": [
      "signature88"
    ],
    "line": [
      {
        "name": "Grimer",
        "dex": 88,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured89": {
    "name": "Muk",
    "color": "#a040a0",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature89",
    "learnset": [
      "signature89"
    ],
    "line": [
      {
        "name": "Muk",
        "dex": 89,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured90": {
    "name": "Shellder",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 3
    },
    "signature": "signature90",
    "learnset": [
      "signature90"
    ],
    "line": [
      {
        "name": "Shellder",
        "dex": 90,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured91": {
    "name": "Cloyster",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature91",
    "learnset": [
      "signature91"
    ],
    "line": [
      {
        "name": "Cloyster",
        "dex": 91,
        "types": [
          "water",
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured92": {
    "name": "Gastly",
    "color": "#705898",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature92",
    "learnset": [
      "signature92"
    ],
    "line": [
      {
        "name": "Gastly",
        "dex": 92,
        "types": [
          "ghost",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Haunter",
        "dex": 93,
        "types": [
          "ghost",
          "poison"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "might": 0.1,
          "speed": 3
        }
      },
      {
        "name": "Gengar",
        "dex": 94,
        "types": [
          "ghost",
          "poison"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.24,
          "area": 0.1
        }
      }
    ]
  },
  "captured93": {
    "name": "Haunter",
    "color": "#705898",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature93",
    "learnset": [
      "signature93"
    ],
    "line": [
      {
        "name": "Haunter",
        "dex": 93,
        "types": [
          "ghost",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Gengar",
        "dex": 94,
        "types": [
          "ghost",
          "poison"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.24,
          "area": 0.1
        }
      }
    ]
  },
  "captured94": {
    "name": "Gengar",
    "color": "#705898",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature94",
    "learnset": [
      "signature94"
    ],
    "line": [
      {
        "name": "Gengar",
        "dex": 94,
        "types": [
          "ghost",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured95": {
    "name": "Onix",
    "color": "#b8a038",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 1
    },
    "signature": "signature95",
    "learnset": [
      "signature95"
    ],
    "line": [
      {
        "name": "Onix",
        "dex": 95,
        "types": [
          "rock",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured96": {
    "name": "Drowzee",
    "color": "#f85888",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature96",
    "learnset": [
      "signature96"
    ],
    "line": [
      {
        "name": "Drowzee",
        "dex": 96,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured97": {
    "name": "Hypno",
    "color": "#f85888",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature97",
    "learnset": [
      "signature97"
    ],
    "line": [
      {
        "name": "Hypno",
        "dex": 97,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured98": {
    "name": "Krabby",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature98",
    "learnset": [
      "signature98"
    ],
    "line": [
      {
        "name": "Krabby",
        "dex": 98,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured99": {
    "name": "Kingler",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature99",
    "learnset": [
      "signature99"
    ],
    "line": [
      {
        "name": "Kingler",
        "dex": 99,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured100": {
    "name": "Voltorb",
    "color": "#f8d030",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -1
    },
    "signature": "signature100",
    "learnset": [
      "signature100"
    ],
    "line": [
      {
        "name": "Voltorb",
        "dex": 100,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured101": {
    "name": "Electrode",
    "color": "#f8d030",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature101",
    "learnset": [
      "signature101"
    ],
    "line": [
      {
        "name": "Electrode",
        "dex": 101,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured102": {
    "name": "Exeggcute",
    "color": "#78c850",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature102",
    "learnset": [
      "signature102"
    ],
    "line": [
      {
        "name": "Exeggcute",
        "dex": 102,
        "types": [
          "grass",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured103": {
    "name": "Exeggutor",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature103",
    "learnset": [
      "signature103"
    ],
    "line": [
      {
        "name": "Exeggutor",
        "dex": 103,
        "types": [
          "grass",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured104": {
    "name": "Cubone",
    "color": "#e0c068",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature104",
    "learnset": [
      "signature104"
    ],
    "line": [
      {
        "name": "Cubone",
        "dex": 104,
        "types": [
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Marowak",
        "dex": 105,
        "types": [
          "ground"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.25,
          "armor": 1,
          "area": 0.1
        }
      }
    ]
  },
  "captured105": {
    "name": "Marowak",
    "color": "#e0c068",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -3
    },
    "signature": "signature105",
    "learnset": [
      "signature105"
    ],
    "line": [
      {
        "name": "Marowak",
        "dex": 105,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured106": {
    "name": "Hitmonlee",
    "color": "#c03028",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature106",
    "learnset": [
      "signature106"
    ],
    "line": [
      {
        "name": "Hitmonlee",
        "dex": 106,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured107": {
    "name": "Hitmonchan",
    "color": "#c03028",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature107",
    "learnset": [
      "signature107"
    ],
    "line": [
      {
        "name": "Hitmonchan",
        "dex": 107,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured108": {
    "name": "Lickitung",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature108",
    "learnset": [
      "signature108"
    ],
    "line": [
      {
        "name": "Lickitung",
        "dex": 108,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured109": {
    "name": "Koffing",
    "color": "#a040a0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature109",
    "learnset": [
      "signature109"
    ],
    "line": [
      {
        "name": "Koffing",
        "dex": 109,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured110": {
    "name": "Weezing",
    "color": "#a040a0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 2
    },
    "signature": "signature110",
    "learnset": [
      "signature110"
    ],
    "line": [
      {
        "name": "Weezing",
        "dex": 110,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured111": {
    "name": "Rhyhorn",
    "color": "#e0c068",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature111",
    "learnset": [
      "signature111"
    ],
    "line": [
      {
        "name": "Rhyhorn",
        "dex": 111,
        "types": [
          "ground",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured112": {
    "name": "Rhydon",
    "color": "#e0c068",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature112",
    "learnset": [
      "signature112"
    ],
    "line": [
      {
        "name": "Rhydon",
        "dex": 112,
        "types": [
          "ground",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured113": {
    "name": "Chansey",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature113",
    "learnset": [
      "signature113"
    ],
    "line": [
      {
        "name": "Chansey",
        "dex": 113,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured114": {
    "name": "Tangela",
    "color": "#78c850",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature114",
    "learnset": [
      "signature114"
    ],
    "line": [
      {
        "name": "Tangela",
        "dex": 114,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured115": {
    "name": "Kangaskhan",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 0
    },
    "signature": "signature115",
    "learnset": [
      "signature115"
    ],
    "line": [
      {
        "name": "Kangaskhan",
        "dex": 115,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured116": {
    "name": "Horsea",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature116",
    "learnset": [
      "signature116"
    ],
    "line": [
      {
        "name": "Horsea",
        "dex": 116,
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Seadra",
        "dex": 117,
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.1,
          "projectileSpeed": 0.05
        }
      },
      {
        "name": "Kingdra",
        "dex": 230,
        "types": [
          "water",
          "dragon"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.22,
          "area": 0.1,
          "armor": 1
        }
      }
    ]
  },
  "captured117": {
    "name": "Seadra",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature117",
    "learnset": [
      "signature117"
    ],
    "line": [
      {
        "name": "Seadra",
        "dex": 117,
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Kingdra",
        "dex": 230,
        "types": [
          "water",
          "dragon"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.22,
          "area": 0.1,
          "armor": 1
        }
      }
    ]
  },
  "captured118": {
    "name": "Goldeen",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature118",
    "learnset": [
      "signature118"
    ],
    "line": [
      {
        "name": "Goldeen",
        "dex": 118,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured119": {
    "name": "Seaking",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature119",
    "learnset": [
      "signature119"
    ],
    "line": [
      {
        "name": "Seaking",
        "dex": 119,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured120": {
    "name": "Staryu",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -2
    },
    "signature": "signature120",
    "learnset": [
      "signature120"
    ],
    "line": [
      {
        "name": "Staryu",
        "dex": 120,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured121": {
    "name": "Starmie",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature121",
    "learnset": [
      "signature121"
    ],
    "line": [
      {
        "name": "Starmie",
        "dex": 121,
        "types": [
          "water",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured122": {
    "name": "Mr. Mime",
    "color": "#f85888",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature122",
    "learnset": [
      "signature122"
    ],
    "line": [
      {
        "name": "Mr. Mime",
        "dex": 122,
        "types": [
          "psychic",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured123": {
    "name": "Scyther",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature123",
    "learnset": [
      "signature123"
    ],
    "line": [
      {
        "name": "Scyther",
        "dex": 123,
        "types": [
          "bug",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Scizor",
        "dex": 212,
        "types": [
          "bug",
          "steel"
        ],
        "bonus": {
          "maxHp": 55,
          "armor": 2,
          "might": 0.22
        }
      }
    ]
  },
  "captured124": {
    "name": "Jynx",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature124",
    "learnset": [
      "signature124"
    ],
    "line": [
      {
        "name": "Jynx",
        "dex": 124,
        "types": [
          "ice",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured125": {
    "name": "Electabuzz",
    "color": "#f8d030",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 3
    },
    "signature": "signature125",
    "learnset": [
      "signature125"
    ],
    "line": [
      {
        "name": "Electabuzz",
        "dex": 125,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured126": {
    "name": "Magmar",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature126",
    "learnset": [
      "signature126"
    ],
    "line": [
      {
        "name": "Magmar",
        "dex": 126,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured127": {
    "name": "Pinsir",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature127",
    "learnset": [
      "signature127"
    ],
    "line": [
      {
        "name": "Pinsir",
        "dex": 127,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured128": {
    "name": "Tauros",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature128",
    "learnset": [
      "signature128"
    ],
    "line": [
      {
        "name": "Tauros",
        "dex": 128,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured129": {
    "name": "Magikarp",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature129",
    "learnset": [
      "signature129"
    ],
    "line": [
      {
        "name": "Magikarp",
        "dex": 129,
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Gyarados",
        "dex": 130,
        "types": [
          "water",
          "flying"
        ],
        "bonus": {
          "maxHp": 90,
          "might": 0.6,
          "armor": 2,
          "area": 0.15
        }
      }
    ]
  },
  "captured130": {
    "name": "Gyarados",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 1
    },
    "signature": "signature130",
    "learnset": [
      "signature130"
    ],
    "line": [
      {
        "name": "Gyarados",
        "dex": 130,
        "types": [
          "water",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured131": {
    "name": "Lapras",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature131",
    "learnset": [
      "signature131"
    ],
    "line": [
      {
        "name": "Lapras",
        "dex": 131,
        "types": [
          "water",
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured132": {
    "name": "Ditto",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature132",
    "learnset": [
      "signature132"
    ],
    "line": [
      {
        "name": "Ditto",
        "dex": 132,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured133": {
    "name": "Eevee",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature133",
    "learnset": [
      "signature133"
    ],
    "line": [
      {
        "name": "Eevee",
        "dex": 133,
        "types": [
          "normal"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Umbreon",
        "dex": 197,
        "types": [
          "dark"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.2,
          "regen": 0.4
        }
      }
    ]
  },
  "captured134": {
    "name": "Vaporeon",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature134",
    "learnset": [
      "signature134"
    ],
    "line": [
      {
        "name": "Vaporeon",
        "dex": 134,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured135": {
    "name": "Jolteon",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -1
    },
    "signature": "signature135",
    "learnset": [
      "signature135"
    ],
    "line": [
      {
        "name": "Jolteon",
        "dex": 135,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured136": {
    "name": "Flareon",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature136",
    "learnset": [
      "signature136"
    ],
    "line": [
      {
        "name": "Flareon",
        "dex": 136,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured137": {
    "name": "Porygon",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature137",
    "learnset": [
      "signature137"
    ],
    "line": [
      {
        "name": "Porygon",
        "dex": 137,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured138": {
    "name": "Omanyte",
    "color": "#b8a038",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature138",
    "learnset": [
      "signature138"
    ],
    "line": [
      {
        "name": "Omanyte",
        "dex": 138,
        "types": [
          "rock",
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured139": {
    "name": "Omastar",
    "color": "#b8a038",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature139",
    "learnset": [
      "signature139"
    ],
    "line": [
      {
        "name": "Omastar",
        "dex": 139,
        "types": [
          "rock",
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured140": {
    "name": "Kabuto",
    "color": "#b8a038",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -3
    },
    "signature": "signature140",
    "learnset": [
      "signature140"
    ],
    "line": [
      {
        "name": "Kabuto",
        "dex": 140,
        "types": [
          "rock",
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Kabutops",
        "dex": 141,
        "types": [
          "rock",
          "water"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.25,
          "speed": 5,
          "armor": 1
        }
      }
    ]
  },
  "captured141": {
    "name": "Kabutops",
    "color": "#b8a038",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature141",
    "learnset": [
      "signature141"
    ],
    "line": [
      {
        "name": "Kabutops",
        "dex": 141,
        "types": [
          "rock",
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured142": {
    "name": "Aerodactyl",
    "color": "#b8a038",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature142",
    "learnset": [
      "signature142"
    ],
    "line": [
      {
        "name": "Aerodactyl",
        "dex": 142,
        "types": [
          "rock",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured143": {
    "name": "Snorlax",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature143",
    "learnset": [
      "signature143"
    ],
    "line": [
      {
        "name": "Snorlax",
        "dex": 143,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured144": {
    "name": "Articuno",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature144",
    "learnset": [
      "signature144"
    ],
    "line": [
      {
        "name": "Articuno",
        "dex": 144,
        "types": [
          "ice",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured145": {
    "name": "Zapdos",
    "color": "#f8d030",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 2
    },
    "signature": "signature145",
    "learnset": [
      "signature145"
    ],
    "line": [
      {
        "name": "Zapdos",
        "dex": 145,
        "types": [
          "electric",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured146": {
    "name": "Moltres",
    "color": "#f08030",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature146",
    "learnset": [
      "signature146"
    ],
    "line": [
      {
        "name": "Moltres",
        "dex": 146,
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured147": {
    "name": "Dratini",
    "color": "#7038f8",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature147",
    "learnset": [
      "signature147"
    ],
    "line": [
      {
        "name": "Dratini",
        "dex": 147,
        "types": [
          "dragon"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Dragonair",
        "dex": 148,
        "types": [
          "dragon"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "might": 0.1,
          "area": 0.05
        }
      },
      {
        "name": "Dragonite",
        "dex": 149,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {
          "maxHp": 60,
          "might": 0.25,
          "armor": 1,
          "speed": 4
        }
      }
    ]
  },
  "captured148": {
    "name": "Dragonair",
    "color": "#7038f8",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature148",
    "learnset": [
      "signature148"
    ],
    "line": [
      {
        "name": "Dragonair",
        "dex": 148,
        "types": [
          "dragon"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Dragonite",
        "dex": 149,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {
          "maxHp": 60,
          "might": 0.25,
          "armor": 1,
          "speed": 4
        }
      }
    ]
  },
  "captured149": {
    "name": "Dragonite",
    "color": "#7038f8",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature149",
    "learnset": [
      "signature149"
    ],
    "line": [
      {
        "name": "Dragonite",
        "dex": 149,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured150": {
    "name": "Mewtwo",
    "color": "#f85888",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 0
    },
    "signature": "signature150",
    "learnset": [
      "signature150"
    ],
    "line": [
      {
        "name": "Mewtwo",
        "dex": 150,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured151": {
    "name": "Mew",
    "color": "#f85888",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature151",
    "learnset": [
      "signature151"
    ],
    "line": [
      {
        "name": "Mew",
        "dex": 151,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured152": {
    "name": "Chikorita",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature152",
    "learnset": [
      "signature152"
    ],
    "line": [
      {
        "dex": 152,
        "name": "Chikorita",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 153,
        "name": "Bayleef",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "regen": 0.3,
          "area": 0.05
        }
      },
      {
        "dex": 154,
        "name": "Meganium",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 55,
          "regen": 0.7,
          "armor": 1,
          "area": 0.15
        }
      }
    ]
  },
  "captured153": {
    "name": "Bayleef",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature153",
    "learnset": [
      "signature153"
    ],
    "line": [
      {
        "dex": 153,
        "name": "Bayleef",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 154,
        "name": "Meganium",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 55,
          "regen": 0.7,
          "armor": 1,
          "area": 0.15
        }
      }
    ]
  },
  "captured154": {
    "name": "Meganium",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature154",
    "learnset": [
      "signature154"
    ],
    "line": [
      {
        "dex": 154,
        "name": "Meganium",
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured155": {
    "name": "Cyndaquil",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": -2
    },
    "signature": "signature155",
    "learnset": [
      "signature155"
    ],
    "line": [
      {
        "dex": 155,
        "name": "Cyndaquil",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 156,
        "name": "Quilava",
        "types": [
          "fire"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.08,
          "area": 0.1
        }
      },
      {
        "dex": 157,
        "name": "Typhlosion",
        "types": [
          "fire"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.18,
          "area": 0.15,
          "speed": 4
        }
      }
    ]
  },
  "captured156": {
    "name": "Quilava",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature156",
    "learnset": [
      "signature156"
    ],
    "line": [
      {
        "dex": 156,
        "name": "Quilava",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 157,
        "name": "Typhlosion",
        "types": [
          "fire"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.18,
          "area": 0.15,
          "speed": 4
        }
      }
    ]
  },
  "captured157": {
    "name": "Typhlosion",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature157",
    "learnset": [
      "signature157"
    ],
    "line": [
      {
        "dex": 157,
        "name": "Typhlosion",
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured158": {
    "name": "Totodile",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature158",
    "learnset": [
      "signature158"
    ],
    "line": [
      {
        "dex": 158,
        "name": "Totodile",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 159,
        "name": "Croconaw",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.1,
          "armor": 1
        }
      },
      {
        "dex": 160,
        "name": "Feraligatr",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "armor": 1,
          "speed": 3
        }
      }
    ]
  },
  "captured159": {
    "name": "Croconaw",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature159",
    "learnset": [
      "signature159"
    ],
    "line": [
      {
        "dex": 159,
        "name": "Croconaw",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 160,
        "name": "Feraligatr",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "armor": 1,
          "speed": 3
        }
      }
    ]
  },
  "captured160": {
    "name": "Feraligatr",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 3
    },
    "signature": "signature160",
    "learnset": [
      "signature160"
    ],
    "line": [
      {
        "dex": 160,
        "name": "Feraligatr",
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured161": {
    "name": "Sentret",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature161",
    "learnset": [
      "signature161"
    ],
    "line": [
      {
        "name": "Sentret",
        "dex": 161,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured162": {
    "name": "Furret",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature162",
    "learnset": [
      "signature162"
    ],
    "line": [
      {
        "name": "Furret",
        "dex": 162,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured163": {
    "name": "Hoothoot",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature163",
    "learnset": [
      "signature163"
    ],
    "line": [
      {
        "name": "Hoothoot",
        "dex": 163,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured164": {
    "name": "Noctowl",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature164",
    "learnset": [
      "signature164"
    ],
    "line": [
      {
        "name": "Noctowl",
        "dex": 164,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured165": {
    "name": "Ledyba",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 1
    },
    "signature": "signature165",
    "learnset": [
      "signature165"
    ],
    "line": [
      {
        "name": "Ledyba",
        "dex": 165,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured166": {
    "name": "Ledian",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature166",
    "learnset": [
      "signature166"
    ],
    "line": [
      {
        "name": "Ledian",
        "dex": 166,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured167": {
    "name": "Spinarak",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature167",
    "learnset": [
      "signature167"
    ],
    "line": [
      {
        "name": "Spinarak",
        "dex": 167,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured168": {
    "name": "Ariados",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature168",
    "learnset": [
      "signature168"
    ],
    "line": [
      {
        "name": "Ariados",
        "dex": 168,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured169": {
    "name": "Crobat",
    "color": "#a040a0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature169",
    "learnset": [
      "signature169"
    ],
    "line": [
      {
        "name": "Crobat",
        "dex": 169,
        "types": [
          "poison",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured170": {
    "name": "Chinchou",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -1
    },
    "signature": "signature170",
    "learnset": [
      "signature170"
    ],
    "line": [
      {
        "name": "Chinchou",
        "dex": 170,
        "types": [
          "water",
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured171": {
    "name": "Lanturn",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature171",
    "learnset": [
      "signature171"
    ],
    "line": [
      {
        "name": "Lanturn",
        "dex": 171,
        "types": [
          "water",
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured172": {
    "name": "Pichu",
    "color": "#f8d030",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature172",
    "learnset": [
      "signature172"
    ],
    "line": [
      {
        "name": "Pichu",
        "dex": 172,
        "types": [
          "electric"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Pikachu",
        "dex": 25,
        "types": [
          "electric"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "speed": 3,
          "might": 0.1
        }
      },
      {
        "name": "Raichu",
        "dex": 26,
        "types": [
          "electric"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 4,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured173": {
    "name": "Cleffa",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature173",
    "learnset": [
      "signature173"
    ],
    "line": [
      {
        "name": "Cleffa",
        "dex": 173,
        "types": [
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured174": {
    "name": "Igglybuff",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature174",
    "learnset": [
      "signature174"
    ],
    "line": [
      {
        "name": "Igglybuff",
        "dex": 174,
        "types": [
          "normal",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured175": {
    "name": "Togepi",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -3
    },
    "signature": "signature175",
    "learnset": [
      "signature175"
    ],
    "line": [
      {
        "name": "Togepi",
        "dex": 175,
        "types": [
          "fairy"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Togetic",
        "dex": 176,
        "types": [
          "fairy",
          "flying"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "regen": 0.3,
          "area": 0.05
        }
      },
      {
        "name": "Togekiss",
        "dex": 468,
        "types": [
          "fairy",
          "flying"
        ],
        "bonus": {
          "maxHp": 40,
          "regen": 0.5,
          "might": 0.16,
          "area": 0.1
        }
      }
    ]
  },
  "captured176": {
    "name": "Togetic",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature176",
    "learnset": [
      "signature176"
    ],
    "line": [
      {
        "name": "Togetic",
        "dex": 176,
        "types": [
          "fairy",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Togekiss",
        "dex": 468,
        "types": [
          "fairy",
          "flying"
        ],
        "bonus": {
          "maxHp": 40,
          "regen": 0.5,
          "might": 0.16,
          "area": 0.1
        }
      }
    ]
  },
  "captured177": {
    "name": "Natu",
    "color": "#f85888",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature177",
    "learnset": [
      "signature177"
    ],
    "line": [
      {
        "name": "Natu",
        "dex": 177,
        "types": [
          "psychic",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured178": {
    "name": "Xatu",
    "color": "#f85888",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature178",
    "learnset": [
      "signature178"
    ],
    "line": [
      {
        "name": "Xatu",
        "dex": 178,
        "types": [
          "psychic",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured179": {
    "name": "Mareep",
    "color": "#f8d030",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature179",
    "learnset": [
      "signature179"
    ],
    "line": [
      {
        "name": "Mareep",
        "dex": 179,
        "types": [
          "electric"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Flaaffy",
        "dex": 180,
        "types": [
          "electric"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.08,
          "statusChance": 0.02
        }
      },
      {
        "name": "Ampharos",
        "dex": 181,
        "types": [
          "electric"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.18,
          "area": 0.12
        }
      }
    ]
  },
  "captured180": {
    "name": "Flaaffy",
    "color": "#f8d030",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 2
    },
    "signature": "signature180",
    "learnset": [
      "signature180"
    ],
    "line": [
      {
        "name": "Flaaffy",
        "dex": 180,
        "types": [
          "electric"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Ampharos",
        "dex": 181,
        "types": [
          "electric"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.18,
          "area": 0.12
        }
      }
    ]
  },
  "captured181": {
    "name": "Ampharos",
    "color": "#f8d030",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature181",
    "learnset": [
      "signature181"
    ],
    "line": [
      {
        "name": "Ampharos",
        "dex": 181,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured182": {
    "name": "Bellossom",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature182",
    "learnset": [
      "signature182"
    ],
    "line": [
      {
        "name": "Bellossom",
        "dex": 182,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured183": {
    "name": "Marill",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature183",
    "learnset": [
      "signature183"
    ],
    "line": [
      {
        "name": "Marill",
        "dex": 183,
        "types": [
          "water",
          "fairy"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Azumarill",
        "dex": 184,
        "types": [
          "water",
          "fairy"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.3
        }
      }
    ]
  },
  "captured184": {
    "name": "Azumarill",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature184",
    "learnset": [
      "signature184"
    ],
    "line": [
      {
        "name": "Azumarill",
        "dex": 184,
        "types": [
          "water",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured185": {
    "name": "Sudowoodo",
    "color": "#b8a038",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 0
    },
    "signature": "signature185",
    "learnset": [
      "signature185"
    ],
    "line": [
      {
        "name": "Sudowoodo",
        "dex": 185,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured186": {
    "name": "Politoed",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature186",
    "learnset": [
      "signature186"
    ],
    "line": [
      {
        "name": "Politoed",
        "dex": 186,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured187": {
    "name": "Hoppip",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature187",
    "learnset": [
      "signature187"
    ],
    "line": [
      {
        "name": "Hoppip",
        "dex": 187,
        "types": [
          "grass",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured188": {
    "name": "Skiploom",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature188",
    "learnset": [
      "signature188"
    ],
    "line": [
      {
        "name": "Skiploom",
        "dex": 188,
        "types": [
          "grass",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured189": {
    "name": "Jumpluff",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature189",
    "learnset": [
      "signature189"
    ],
    "line": [
      {
        "name": "Jumpluff",
        "dex": 189,
        "types": [
          "grass",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured190": {
    "name": "Aipom",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -2
    },
    "signature": "signature190",
    "learnset": [
      "signature190"
    ],
    "line": [
      {
        "name": "Aipom",
        "dex": 190,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured191": {
    "name": "Sunkern",
    "color": "#78c850",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature191",
    "learnset": [
      "signature191"
    ],
    "line": [
      {
        "name": "Sunkern",
        "dex": 191,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured192": {
    "name": "Sunflora",
    "color": "#78c850",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature192",
    "learnset": [
      "signature192"
    ],
    "line": [
      {
        "name": "Sunflora",
        "dex": 192,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured193": {
    "name": "Yanma",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature193",
    "learnset": [
      "signature193"
    ],
    "line": [
      {
        "name": "Yanma",
        "dex": 193,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured194": {
    "name": "Wooper",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature194",
    "learnset": [
      "signature194"
    ],
    "line": [
      {
        "name": "Wooper",
        "dex": 194,
        "types": [
          "water",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured195": {
    "name": "Quagsire",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 3
    },
    "signature": "signature195",
    "learnset": [
      "signature195"
    ],
    "line": [
      {
        "name": "Quagsire",
        "dex": 195,
        "types": [
          "water",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured196": {
    "name": "Espeon",
    "color": "#f85888",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature196",
    "learnset": [
      "signature196"
    ],
    "line": [
      {
        "name": "Espeon",
        "dex": 196,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured197": {
    "name": "Umbreon",
    "color": "#705848",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature197",
    "learnset": [
      "signature197"
    ],
    "line": [
      {
        "name": "Umbreon",
        "dex": 197,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured198": {
    "name": "Murkrow",
    "color": "#705848",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature198",
    "learnset": [
      "signature198"
    ],
    "line": [
      {
        "name": "Murkrow",
        "dex": 198,
        "types": [
          "dark",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured199": {
    "name": "Slowking",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature199",
    "learnset": [
      "signature199"
    ],
    "line": [
      {
        "name": "Slowking",
        "dex": 199,
        "types": [
          "water",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured200": {
    "name": "Misdreavus",
    "color": "#705898",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 1
    },
    "signature": "signature200",
    "learnset": [
      "signature200"
    ],
    "line": [
      {
        "name": "Misdreavus",
        "dex": 200,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured202": {
    "name": "Wobbuffet",
    "color": "#f85888",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature202",
    "learnset": [
      "signature202"
    ],
    "line": [
      {
        "name": "Wobbuffet",
        "dex": 202,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured203": {
    "name": "Girafarig",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature203",
    "learnset": [
      "signature203"
    ],
    "line": [
      {
        "name": "Girafarig",
        "dex": 203,
        "types": [
          "normal",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured204": {
    "name": "Pineco",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature204",
    "learnset": [
      "signature204"
    ],
    "line": [
      {
        "name": "Pineco",
        "dex": 204,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured205": {
    "name": "Forretress",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -1
    },
    "signature": "signature205",
    "learnset": [
      "signature205"
    ],
    "line": [
      {
        "name": "Forretress",
        "dex": 205,
        "types": [
          "bug",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured206": {
    "name": "Dunsparce",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature206",
    "learnset": [
      "signature206"
    ],
    "line": [
      {
        "name": "Dunsparce",
        "dex": 206,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured207": {
    "name": "Gligar",
    "color": "#e0c068",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature207",
    "learnset": [
      "signature207"
    ],
    "line": [
      {
        "name": "Gligar",
        "dex": 207,
        "types": [
          "ground",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured208": {
    "name": "Steelix",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature208",
    "learnset": [
      "signature208"
    ],
    "line": [
      {
        "name": "Steelix",
        "dex": 208,
        "types": [
          "steel",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured209": {
    "name": "Snubbull",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature209",
    "learnset": [
      "signature209"
    ],
    "line": [
      {
        "name": "Snubbull",
        "dex": 209,
        "types": [
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured210": {
    "name": "Granbull",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -3
    },
    "signature": "signature210",
    "learnset": [
      "signature210"
    ],
    "line": [
      {
        "name": "Granbull",
        "dex": 210,
        "types": [
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured211": {
    "name": "Qwilfish",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature211",
    "learnset": [
      "signature211"
    ],
    "line": [
      {
        "name": "Qwilfish",
        "dex": 211,
        "types": [
          "water",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured212": {
    "name": "Scizor",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature212",
    "learnset": [
      "signature212"
    ],
    "line": [
      {
        "name": "Scizor",
        "dex": 212,
        "types": [
          "bug",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured213": {
    "name": "Shuckle",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature213",
    "learnset": [
      "signature213"
    ],
    "line": [
      {
        "name": "Shuckle",
        "dex": 213,
        "types": [
          "bug",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured214": {
    "name": "Heracross",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature214",
    "learnset": [
      "signature214"
    ],
    "line": [
      {
        "name": "Heracross",
        "dex": 214,
        "types": [
          "bug",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured215": {
    "name": "Sneasel",
    "color": "#705848",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 2
    },
    "signature": "signature215",
    "learnset": [
      "signature215"
    ],
    "line": [
      {
        "name": "Sneasel",
        "dex": 215,
        "types": [
          "dark",
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured216": {
    "name": "Teddiursa",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature216",
    "learnset": [
      "signature216"
    ],
    "line": [
      {
        "name": "Teddiursa",
        "dex": 216,
        "types": [
          "normal"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Ursaring",
        "dex": 217,
        "types": [
          "normal"
        ],
        "bonus": {
          "maxHp": 65,
          "might": 0.24,
          "armor": 1,
          "area": 0.05
        }
      }
    ]
  },
  "captured217": {
    "name": "Ursaring",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature217",
    "learnset": [
      "signature217"
    ],
    "line": [
      {
        "name": "Ursaring",
        "dex": 217,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured218": {
    "name": "Slugma",
    "color": "#f08030",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature218",
    "learnset": [
      "signature218"
    ],
    "line": [
      {
        "name": "Slugma",
        "dex": 218,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured219": {
    "name": "Magcargo",
    "color": "#f08030",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature219",
    "learnset": [
      "signature219"
    ],
    "line": [
      {
        "name": "Magcargo",
        "dex": 219,
        "types": [
          "fire",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured220": {
    "name": "Swinub",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 0
    },
    "signature": "signature220",
    "learnset": [
      "signature220"
    ],
    "line": [
      {
        "name": "Swinub",
        "dex": 220,
        "types": [
          "ice",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Piloswine",
        "dex": 221,
        "types": [
          "ice",
          "ground"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "armor": 1,
          "might": 0.08
        }
      },
      {
        "name": "Mamoswine",
        "dex": 473,
        "types": [
          "ice",
          "ground"
        ],
        "bonus": {
          "maxHp": 55,
          "armor": 1,
          "might": 0.22,
          "area": 0.1
        }
      }
    ]
  },
  "captured221": {
    "name": "Piloswine",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature221",
    "learnset": [
      "signature221"
    ],
    "line": [
      {
        "name": "Piloswine",
        "dex": 221,
        "types": [
          "ice",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Mamoswine",
        "dex": 473,
        "types": [
          "ice",
          "ground"
        ],
        "bonus": {
          "maxHp": 55,
          "armor": 1,
          "might": 0.22,
          "area": 0.1
        }
      }
    ]
  },
  "captured222": {
    "name": "Corsola",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature222",
    "learnset": [
      "signature222"
    ],
    "line": [
      {
        "name": "Corsola",
        "dex": 222,
        "types": [
          "water",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured223": {
    "name": "Remoraid",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature223",
    "learnset": [
      "signature223"
    ],
    "line": [
      {
        "name": "Remoraid",
        "dex": 223,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured224": {
    "name": "Octillery",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature224",
    "learnset": [
      "signature224"
    ],
    "line": [
      {
        "name": "Octillery",
        "dex": 224,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured225": {
    "name": "Delibird",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -2
    },
    "signature": "signature225",
    "learnset": [
      "signature225"
    ],
    "line": [
      {
        "name": "Delibird",
        "dex": 225,
        "types": [
          "ice",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured226": {
    "name": "Mantine",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature226",
    "learnset": [
      "signature226"
    ],
    "line": [
      {
        "name": "Mantine",
        "dex": 226,
        "types": [
          "water",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured227": {
    "name": "Skarmory",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature227",
    "learnset": [
      "signature227"
    ],
    "line": [
      {
        "name": "Skarmory",
        "dex": 227,
        "types": [
          "steel",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured228": {
    "name": "Houndour",
    "color": "#705848",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature228",
    "learnset": [
      "signature228"
    ],
    "line": [
      {
        "name": "Houndour",
        "dex": 228,
        "types": [
          "dark",
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Houndoom",
        "dex": 229,
        "types": [
          "dark",
          "fire"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.24,
          "statusDamage": 0.15,
          "speed": 3
        }
      }
    ]
  },
  "captured229": {
    "name": "Houndoom",
    "color": "#705848",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature229",
    "learnset": [
      "signature229"
    ],
    "line": [
      {
        "name": "Houndoom",
        "dex": 229,
        "types": [
          "dark",
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured230": {
    "name": "Kingdra",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 3
    },
    "signature": "signature230",
    "learnset": [
      "signature230"
    ],
    "line": [
      {
        "name": "Kingdra",
        "dex": 230,
        "types": [
          "water",
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured231": {
    "name": "Phanpy",
    "color": "#e0c068",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature231",
    "learnset": [
      "signature231"
    ],
    "line": [
      {
        "name": "Phanpy",
        "dex": 231,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured232": {
    "name": "Donphan",
    "color": "#e0c068",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature232",
    "learnset": [
      "signature232"
    ],
    "line": [
      {
        "name": "Donphan",
        "dex": 232,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured233": {
    "name": "Porygon2",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature233",
    "learnset": [
      "signature233"
    ],
    "line": [
      {
        "name": "Porygon2",
        "dex": 233,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured234": {
    "name": "Stantler",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature234",
    "learnset": [
      "signature234"
    ],
    "line": [
      {
        "name": "Stantler",
        "dex": 234,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured235": {
    "name": "Smeargle",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 1
    },
    "signature": "signature235",
    "learnset": [
      "signature235"
    ],
    "line": [
      {
        "name": "Smeargle",
        "dex": 235,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured236": {
    "name": "Tyrogue",
    "color": "#c03028",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature236",
    "learnset": [
      "signature236"
    ],
    "line": [
      {
        "name": "Tyrogue",
        "dex": 236,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured237": {
    "name": "Hitmontop",
    "color": "#c03028",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature237",
    "learnset": [
      "signature237"
    ],
    "line": [
      {
        "name": "Hitmontop",
        "dex": 237,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured238": {
    "name": "Smoochum",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature238",
    "learnset": [
      "signature238"
    ],
    "line": [
      {
        "name": "Smoochum",
        "dex": 238,
        "types": [
          "ice",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured239": {
    "name": "Elekid",
    "color": "#f8d030",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature239",
    "learnset": [
      "signature239"
    ],
    "line": [
      {
        "name": "Elekid",
        "dex": 239,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured240": {
    "name": "Magby",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -1
    },
    "signature": "signature240",
    "learnset": [
      "signature240"
    ],
    "line": [
      {
        "name": "Magby",
        "dex": 240,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured241": {
    "name": "Miltank",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature241",
    "learnset": [
      "signature241"
    ],
    "line": [
      {
        "name": "Miltank",
        "dex": 241,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured242": {
    "name": "Blissey",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature242",
    "learnset": [
      "signature242"
    ],
    "line": [
      {
        "name": "Blissey",
        "dex": 242,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured243": {
    "name": "Raikou",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature243",
    "learnset": [
      "signature243"
    ],
    "line": [
      {
        "name": "Raikou",
        "dex": 243,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured244": {
    "name": "Entei",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature244",
    "learnset": [
      "signature244"
    ],
    "line": [
      {
        "name": "Entei",
        "dex": 244,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured245": {
    "name": "Suicune",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": -3
    },
    "signature": "signature245",
    "learnset": [
      "signature245"
    ],
    "line": [
      {
        "name": "Suicune",
        "dex": 245,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured246": {
    "name": "Larvitar",
    "color": "#b8a038",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature246",
    "learnset": [
      "signature246"
    ],
    "line": [
      {
        "name": "Larvitar",
        "dex": 246,
        "types": [
          "rock",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Pupitar",
        "dex": 247,
        "types": [
          "rock",
          "ground"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 40,
          "armor": 1,
          "might": 0.08
        }
      },
      {
        "name": "Tyranitar",
        "dex": 248,
        "types": [
          "rock",
          "dark"
        ],
        "bonus": {
          "maxHp": 75,
          "armor": 2,
          "might": 0.25,
          "area": 0.1
        }
      }
    ]
  },
  "captured247": {
    "name": "Pupitar",
    "color": "#b8a038",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature247",
    "learnset": [
      "signature247"
    ],
    "line": [
      {
        "name": "Pupitar",
        "dex": 247,
        "types": [
          "rock",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Tyranitar",
        "dex": 248,
        "types": [
          "rock",
          "dark"
        ],
        "bonus": {
          "maxHp": 75,
          "armor": 2,
          "might": 0.25,
          "area": 0.1
        }
      }
    ]
  },
  "captured248": {
    "name": "Tyranitar",
    "color": "#b8a038",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature248",
    "learnset": [
      "signature248"
    ],
    "line": [
      {
        "name": "Tyranitar",
        "dex": 248,
        "types": [
          "rock",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured249": {
    "name": "Lugia",
    "color": "#f85888",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature249",
    "learnset": [
      "signature249"
    ],
    "line": [
      {
        "name": "Lugia",
        "dex": 249,
        "types": [
          "psychic",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured250": {
    "name": "Ho-Oh",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 2
    },
    "signature": "signature250",
    "learnset": [
      "signature250"
    ],
    "line": [
      {
        "name": "Ho-Oh",
        "dex": 250,
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured251": {
    "name": "Celebi",
    "color": "#f85888",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature251",
    "learnset": [
      "signature251"
    ],
    "line": [
      {
        "name": "Celebi",
        "dex": 251,
        "types": [
          "psychic",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured252": {
    "name": "Treecko",
    "color": "#78c850",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature252",
    "learnset": [
      "signature252"
    ],
    "line": [
      {
        "dex": 252,
        "name": "Treecko",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 253,
        "name": "Grovyle",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "speed": 4,
          "cooldown": -0.04
        }
      },
      {
        "dex": 254,
        "name": "Sceptile",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 6,
          "might": 0.15,
          "cooldown": -0.06
        }
      }
    ]
  },
  "captured253": {
    "name": "Grovyle",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature253",
    "learnset": [
      "signature253"
    ],
    "line": [
      {
        "dex": 253,
        "name": "Grovyle",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 254,
        "name": "Sceptile",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 6,
          "might": 0.15,
          "cooldown": -0.06
        }
      }
    ]
  },
  "captured254": {
    "name": "Sceptile",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature254",
    "learnset": [
      "signature254"
    ],
    "line": [
      {
        "dex": 254,
        "name": "Sceptile",
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured255": {
    "name": "Torchic",
    "color": "#f08030",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 0
    },
    "signature": "signature255",
    "learnset": [
      "signature255"
    ],
    "line": [
      {
        "dex": 255,
        "name": "Torchic",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 256,
        "name": "Combusken",
        "types": [
          "fire",
          "fighting"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.12,
          "speed": 3
        }
      },
      {
        "dex": 257,
        "name": "Blaziken",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.25,
          "speed": 4
        }
      }
    ]
  },
  "captured256": {
    "name": "Combusken",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature256",
    "learnset": [
      "signature256"
    ],
    "line": [
      {
        "dex": 256,
        "name": "Combusken",
        "types": [
          "fire",
          "fighting"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 257,
        "name": "Blaziken",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.25,
          "speed": 4
        }
      }
    ]
  },
  "captured257": {
    "name": "Blaziken",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature257",
    "learnset": [
      "signature257"
    ],
    "line": [
      {
        "dex": 257,
        "name": "Blaziken",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured258": {
    "name": "Mudkip",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature258",
    "learnset": [
      "signature258"
    ],
    "line": [
      {
        "dex": 258,
        "name": "Mudkip",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 259,
        "name": "Marshtomp",
        "types": [
          "water",
          "ground"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.05
        }
      },
      {
        "dex": 260,
        "name": "Swampert",
        "types": [
          "water",
          "ground"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.12,
          "area": 0.1
        }
      }
    ]
  },
  "captured259": {
    "name": "Marshtomp",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature259",
    "learnset": [
      "signature259"
    ],
    "line": [
      {
        "dex": 259,
        "name": "Marshtomp",
        "types": [
          "water",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 260,
        "name": "Swampert",
        "types": [
          "water",
          "ground"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.12,
          "area": 0.1
        }
      }
    ]
  },
  "captured260": {
    "name": "Swampert",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -2
    },
    "signature": "signature260",
    "learnset": [
      "signature260"
    ],
    "line": [
      {
        "dex": 260,
        "name": "Swampert",
        "types": [
          "water",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured261": {
    "name": "Poochyena",
    "color": "#705848",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature261",
    "learnset": [
      "signature261"
    ],
    "line": [
      {
        "name": "Poochyena",
        "dex": 261,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured262": {
    "name": "Mightyena",
    "color": "#705848",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature262",
    "learnset": [
      "signature262"
    ],
    "line": [
      {
        "name": "Mightyena",
        "dex": 262,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured263": {
    "name": "Zigzagoon",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature263",
    "learnset": [
      "signature263"
    ],
    "line": [
      {
        "name": "Zigzagoon",
        "dex": 263,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured264": {
    "name": "Linoone",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature264",
    "learnset": [
      "signature264"
    ],
    "line": [
      {
        "name": "Linoone",
        "dex": 264,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured265": {
    "name": "Wurmple",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 3
    },
    "signature": "signature265",
    "learnset": [
      "signature265"
    ],
    "line": [
      {
        "name": "Wurmple",
        "dex": 265,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured266": {
    "name": "Silcoon",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature266",
    "learnset": [
      "signature266"
    ],
    "line": [
      {
        "name": "Silcoon",
        "dex": 266,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured267": {
    "name": "Beautifly",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature267",
    "learnset": [
      "signature267"
    ],
    "line": [
      {
        "name": "Beautifly",
        "dex": 267,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured268": {
    "name": "Cascoon",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature268",
    "learnset": [
      "signature268"
    ],
    "line": [
      {
        "name": "Cascoon",
        "dex": 268,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured269": {
    "name": "Dustox",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature269",
    "learnset": [
      "signature269"
    ],
    "line": [
      {
        "name": "Dustox",
        "dex": 269,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured270": {
    "name": "Lotad",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 1
    },
    "signature": "signature270",
    "learnset": [
      "signature270"
    ],
    "line": [
      {
        "name": "Lotad",
        "dex": 270,
        "types": [
          "water",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured271": {
    "name": "Lombre",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature271",
    "learnset": [
      "signature271"
    ],
    "line": [
      {
        "name": "Lombre",
        "dex": 271,
        "types": [
          "water",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured272": {
    "name": "Ludicolo",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature272",
    "learnset": [
      "signature272"
    ],
    "line": [
      {
        "name": "Ludicolo",
        "dex": 272,
        "types": [
          "water",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured273": {
    "name": "Seedot",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature273",
    "learnset": [
      "signature273"
    ],
    "line": [
      {
        "name": "Seedot",
        "dex": 273,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured274": {
    "name": "Nuzleaf",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature274",
    "learnset": [
      "signature274"
    ],
    "line": [
      {
        "name": "Nuzleaf",
        "dex": 274,
        "types": [
          "grass",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured275": {
    "name": "Shiftry",
    "color": "#78c850",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": -1
    },
    "signature": "signature275",
    "learnset": [
      "signature275"
    ],
    "line": [
      {
        "name": "Shiftry",
        "dex": 275,
        "types": [
          "grass",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured276": {
    "name": "Taillow",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature276",
    "learnset": [
      "signature276"
    ],
    "line": [
      {
        "name": "Taillow",
        "dex": 276,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured277": {
    "name": "Swellow",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature277",
    "learnset": [
      "signature277"
    ],
    "line": [
      {
        "name": "Swellow",
        "dex": 277,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured278": {
    "name": "Wingull",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature278",
    "learnset": [
      "signature278"
    ],
    "line": [
      {
        "name": "Wingull",
        "dex": 278,
        "types": [
          "water",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured279": {
    "name": "Pelipper",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature279",
    "learnset": [
      "signature279"
    ],
    "line": [
      {
        "name": "Pelipper",
        "dex": 279,
        "types": [
          "water",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured280": {
    "name": "Ralts",
    "color": "#f85888",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -3
    },
    "signature": "signature280",
    "learnset": [
      "signature280"
    ],
    "line": [
      {
        "name": "Ralts",
        "dex": 280,
        "types": [
          "psychic",
          "fairy"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Kirlia",
        "dex": 281,
        "types": [
          "psychic",
          "fairy"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "regen": 0.15,
          "might": 0.08
        }
      },
      {
        "name": "Gardevoir",
        "dex": 282,
        "types": [
          "psychic",
          "fairy"
        ],
        "bonus": {
          "maxHp": 40,
          "regen": 0.3,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured281": {
    "name": "Kirlia",
    "color": "#f85888",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature281",
    "learnset": [
      "signature281"
    ],
    "line": [
      {
        "name": "Kirlia",
        "dex": 281,
        "types": [
          "psychic",
          "fairy"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Gardevoir",
        "dex": 282,
        "types": [
          "psychic",
          "fairy"
        ],
        "bonus": {
          "maxHp": 40,
          "regen": 0.3,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured282": {
    "name": "Gardevoir",
    "color": "#f85888",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature282",
    "learnset": [
      "signature282"
    ],
    "line": [
      {
        "name": "Gardevoir",
        "dex": 282,
        "types": [
          "psychic",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured283": {
    "name": "Surskit",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature283",
    "learnset": [
      "signature283"
    ],
    "line": [
      {
        "name": "Surskit",
        "dex": 283,
        "types": [
          "bug",
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured284": {
    "name": "Masquerain",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature284",
    "learnset": [
      "signature284"
    ],
    "line": [
      {
        "name": "Masquerain",
        "dex": 284,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured285": {
    "name": "Shroomish",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 2
    },
    "signature": "signature285",
    "learnset": [
      "signature285"
    ],
    "line": [
      {
        "name": "Shroomish",
        "dex": 285,
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Breloom",
        "dex": 286,
        "types": [
          "grass",
          "fighting"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.25,
          "speed": 5,
          "cooldown": -0.04
        }
      }
    ]
  },
  "captured286": {
    "name": "Breloom",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature286",
    "learnset": [
      "signature286"
    ],
    "line": [
      {
        "name": "Breloom",
        "dex": 286,
        "types": [
          "grass",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured287": {
    "name": "Slakoth",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature287",
    "learnset": [
      "signature287"
    ],
    "line": [
      {
        "name": "Slakoth",
        "dex": 287,
        "types": [
          "normal"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Vigoroth",
        "dex": 288,
        "types": [
          "normal"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "cooldown": -0.14,
          "speed": 7,
          "might": 0.05
        }
      },
      {
        "name": "Slaking",
        "dex": 289,
        "types": [
          "normal"
        ],
        "bonus": {
          "maxHp": 75,
          "might": 0.3,
          "cooldown": 0.1,
          "speed": -5
        }
      }
    ]
  },
  "captured288": {
    "name": "Vigoroth",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature288",
    "learnset": [
      "signature288"
    ],
    "line": [
      {
        "name": "Vigoroth",
        "dex": 288,
        "types": [
          "normal"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Slaking",
        "dex": 289,
        "types": [
          "normal"
        ],
        "bonus": {
          "maxHp": 75,
          "might": 0.3,
          "cooldown": 0.1,
          "speed": -5
        }
      }
    ]
  },
  "captured289": {
    "name": "Slaking",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature289",
    "learnset": [
      "signature289"
    ],
    "line": [
      {
        "name": "Slaking",
        "dex": 289,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured290": {
    "name": "Nincada",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 0
    },
    "signature": "signature290",
    "learnset": [
      "signature290"
    ],
    "line": [
      {
        "name": "Nincada",
        "dex": 290,
        "types": [
          "bug",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured291": {
    "name": "Ninjask",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature291",
    "learnset": [
      "signature291"
    ],
    "line": [
      {
        "name": "Ninjask",
        "dex": 291,
        "types": [
          "bug",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured292": {
    "name": "Shedinja",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature292",
    "learnset": [
      "signature292"
    ],
    "line": [
      {
        "name": "Shedinja",
        "dex": 292,
        "types": [
          "bug",
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured293": {
    "name": "Whismur",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature293",
    "learnset": [
      "signature293"
    ],
    "line": [
      {
        "name": "Whismur",
        "dex": 293,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured294": {
    "name": "Loudred",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature294",
    "learnset": [
      "signature294"
    ],
    "line": [
      {
        "name": "Loudred",
        "dex": 294,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured295": {
    "name": "Exploud",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -2
    },
    "signature": "signature295",
    "learnset": [
      "signature295"
    ],
    "line": [
      {
        "name": "Exploud",
        "dex": 295,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured296": {
    "name": "Makuhita",
    "color": "#c03028",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature296",
    "learnset": [
      "signature296"
    ],
    "line": [
      {
        "name": "Makuhita",
        "dex": 296,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured297": {
    "name": "Hariyama",
    "color": "#c03028",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature297",
    "learnset": [
      "signature297"
    ],
    "line": [
      {
        "name": "Hariyama",
        "dex": 297,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured298": {
    "name": "Azurill",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature298",
    "learnset": [
      "signature298"
    ],
    "line": [
      {
        "name": "Azurill",
        "dex": 298,
        "types": [
          "normal",
          "fairy"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Marill",
        "dex": 183,
        "types": [
          "water",
          "fairy"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.08
        }
      },
      {
        "name": "Azumarill",
        "dex": 184,
        "types": [
          "water",
          "fairy"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.3
        }
      }
    ]
  },
  "captured299": {
    "name": "Nosepass",
    "color": "#b8a038",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature299",
    "learnset": [
      "signature299"
    ],
    "line": [
      {
        "name": "Nosepass",
        "dex": 299,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured300": {
    "name": "Skitty",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 3
    },
    "signature": "signature300",
    "learnset": [
      "signature300"
    ],
    "line": [
      {
        "name": "Skitty",
        "dex": 300,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured301": {
    "name": "Delcatty",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature301",
    "learnset": [
      "signature301"
    ],
    "line": [
      {
        "name": "Delcatty",
        "dex": 301,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured302": {
    "name": "Sableye",
    "color": "#705848",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature302",
    "learnset": [
      "signature302"
    ],
    "line": [
      {
        "name": "Sableye",
        "dex": 302,
        "types": [
          "dark",
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured303": {
    "name": "Mawile",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature303",
    "learnset": [
      "signature303"
    ],
    "line": [
      {
        "name": "Mawile",
        "dex": 303,
        "types": [
          "steel",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured304": {
    "name": "Aron",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature304",
    "learnset": [
      "signature304"
    ],
    "line": [
      {
        "name": "Aron",
        "dex": 304,
        "types": [
          "steel",
          "rock"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Lairon",
        "dex": 305,
        "types": [
          "steel",
          "rock"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.08
        }
      },
      {
        "name": "Aggron",
        "dex": 306,
        "types": [
          "steel",
          "rock"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.22,
          "area": 0.05
        }
      }
    ]
  },
  "captured305": {
    "name": "Lairon",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 1
    },
    "signature": "signature305",
    "learnset": [
      "signature305"
    ],
    "line": [
      {
        "name": "Lairon",
        "dex": 305,
        "types": [
          "steel",
          "rock"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Aggron",
        "dex": 306,
        "types": [
          "steel",
          "rock"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.22,
          "area": 0.05
        }
      }
    ]
  },
  "captured306": {
    "name": "Aggron",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature306",
    "learnset": [
      "signature306"
    ],
    "line": [
      {
        "name": "Aggron",
        "dex": 306,
        "types": [
          "steel",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured307": {
    "name": "Meditite",
    "color": "#c03028",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature307",
    "learnset": [
      "signature307"
    ],
    "line": [
      {
        "name": "Meditite",
        "dex": 307,
        "types": [
          "fighting",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured308": {
    "name": "Medicham",
    "color": "#c03028",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature308",
    "learnset": [
      "signature308"
    ],
    "line": [
      {
        "name": "Medicham",
        "dex": 308,
        "types": [
          "fighting",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured309": {
    "name": "Electrike",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature309",
    "learnset": [
      "signature309"
    ],
    "line": [
      {
        "name": "Electrike",
        "dex": 309,
        "types": [
          "electric"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Manectric",
        "dex": 310,
        "types": [
          "electric"
        ],
        "bonus": {
          "maxHp": 45,
          "speed": 5,
          "might": 0.22,
          "cooldown": -0.04
        }
      }
    ]
  },
  "captured310": {
    "name": "Manectric",
    "color": "#f8d030",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -1
    },
    "signature": "signature310",
    "learnset": [
      "signature310"
    ],
    "line": [
      {
        "name": "Manectric",
        "dex": 310,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured311": {
    "name": "Plusle",
    "color": "#f8d030",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature311",
    "learnset": [
      "signature311"
    ],
    "line": [
      {
        "name": "Plusle",
        "dex": 311,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured312": {
    "name": "Minun",
    "color": "#f8d030",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature312",
    "learnset": [
      "signature312"
    ],
    "line": [
      {
        "name": "Minun",
        "dex": 312,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured313": {
    "name": "Volbeat",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature313",
    "learnset": [
      "signature313"
    ],
    "line": [
      {
        "name": "Volbeat",
        "dex": 313,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured314": {
    "name": "Illumise",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature314",
    "learnset": [
      "signature314"
    ],
    "line": [
      {
        "name": "Illumise",
        "dex": 314,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured315": {
    "name": "Roselia",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -3
    },
    "signature": "signature315",
    "learnset": [
      "signature315"
    ],
    "line": [
      {
        "name": "Roselia",
        "dex": 315,
        "types": [
          "grass",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Roserade",
        "dex": 407,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.18,
          "area": 0.1,
          "statusDamage": 0.15
        }
      }
    ]
  },
  "captured316": {
    "name": "Gulpin",
    "color": "#a040a0",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature316",
    "learnset": [
      "signature316"
    ],
    "line": [
      {
        "name": "Gulpin",
        "dex": 316,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured317": {
    "name": "Swalot",
    "color": "#a040a0",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature317",
    "learnset": [
      "signature317"
    ],
    "line": [
      {
        "name": "Swalot",
        "dex": 317,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured318": {
    "name": "Carvanha",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature318",
    "learnset": [
      "signature318"
    ],
    "line": [
      {
        "name": "Carvanha",
        "dex": 318,
        "types": [
          "water",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured319": {
    "name": "Sharpedo",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature319",
    "learnset": [
      "signature319"
    ],
    "line": [
      {
        "name": "Sharpedo",
        "dex": 319,
        "types": [
          "water",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured320": {
    "name": "Wailmer",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 2
    },
    "signature": "signature320",
    "learnset": [
      "signature320"
    ],
    "line": [
      {
        "name": "Wailmer",
        "dex": 320,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured321": {
    "name": "Wailord",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature321",
    "learnset": [
      "signature321"
    ],
    "line": [
      {
        "name": "Wailord",
        "dex": 321,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured322": {
    "name": "Numel",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature322",
    "learnset": [
      "signature322"
    ],
    "line": [
      {
        "name": "Numel",
        "dex": 322,
        "types": [
          "fire",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured323": {
    "name": "Camerupt",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature323",
    "learnset": [
      "signature323"
    ],
    "line": [
      {
        "name": "Camerupt",
        "dex": 323,
        "types": [
          "fire",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured324": {
    "name": "Torkoal",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature324",
    "learnset": [
      "signature324"
    ],
    "line": [
      {
        "name": "Torkoal",
        "dex": 324,
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured325": {
    "name": "Spoink",
    "color": "#f85888",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 0
    },
    "signature": "signature325",
    "learnset": [
      "signature325"
    ],
    "line": [
      {
        "name": "Spoink",
        "dex": 325,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured326": {
    "name": "Grumpig",
    "color": "#f85888",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature326",
    "learnset": [
      "signature326"
    ],
    "line": [
      {
        "name": "Grumpig",
        "dex": 326,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured327": {
    "name": "Spinda",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature327",
    "learnset": [
      "signature327"
    ],
    "line": [
      {
        "name": "Spinda",
        "dex": 327,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured328": {
    "name": "Trapinch",
    "color": "#e0c068",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature328",
    "learnset": [
      "signature328"
    ],
    "line": [
      {
        "name": "Trapinch",
        "dex": 328,
        "types": [
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Vibrava",
        "dex": 329,
        "types": [
          "ground",
          "dragon"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "speed": 4,
          "might": 0.08
        }
      },
      {
        "name": "Flygon",
        "dex": 330,
        "types": [
          "ground",
          "dragon"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 5,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured329": {
    "name": "Vibrava",
    "color": "#e0c068",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature329",
    "learnset": [
      "signature329"
    ],
    "line": [
      {
        "name": "Vibrava",
        "dex": 329,
        "types": [
          "ground",
          "dragon"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Flygon",
        "dex": 330,
        "types": [
          "ground",
          "dragon"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 5,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured330": {
    "name": "Flygon",
    "color": "#e0c068",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -2
    },
    "signature": "signature330",
    "learnset": [
      "signature330"
    ],
    "line": [
      {
        "name": "Flygon",
        "dex": 330,
        "types": [
          "ground",
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured331": {
    "name": "Cacnea",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature331",
    "learnset": [
      "signature331"
    ],
    "line": [
      {
        "name": "Cacnea",
        "dex": 331,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured332": {
    "name": "Cacturne",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature332",
    "learnset": [
      "signature332"
    ],
    "line": [
      {
        "name": "Cacturne",
        "dex": 332,
        "types": [
          "grass",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured333": {
    "name": "Swablu",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature333",
    "learnset": [
      "signature333"
    ],
    "line": [
      {
        "name": "Swablu",
        "dex": 333,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Altaria",
        "dex": 334,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.2,
          "regen": 0.3,
          "area": 0.1
        }
      }
    ]
  },
  "captured334": {
    "name": "Altaria",
    "color": "#7038f8",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature334",
    "learnset": [
      "signature334"
    ],
    "line": [
      {
        "name": "Altaria",
        "dex": 334,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured335": {
    "name": "Zangoose",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 3
    },
    "signature": "signature335",
    "learnset": [
      "signature335"
    ],
    "line": [
      {
        "name": "Zangoose",
        "dex": 335,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured336": {
    "name": "Seviper",
    "color": "#a040a0",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature336",
    "learnset": [
      "signature336"
    ],
    "line": [
      {
        "name": "Seviper",
        "dex": 336,
        "types": [
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured337": {
    "name": "Lunatone",
    "color": "#b8a038",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature337",
    "learnset": [
      "signature337"
    ],
    "line": [
      {
        "name": "Lunatone",
        "dex": 337,
        "types": [
          "rock",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured338": {
    "name": "Solrock",
    "color": "#b8a038",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature338",
    "learnset": [
      "signature338"
    ],
    "line": [
      {
        "name": "Solrock",
        "dex": 338,
        "types": [
          "rock",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured339": {
    "name": "Barboach",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature339",
    "learnset": [
      "signature339"
    ],
    "line": [
      {
        "name": "Barboach",
        "dex": 339,
        "types": [
          "water",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured340": {
    "name": "Whiscash",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 1
    },
    "signature": "signature340",
    "learnset": [
      "signature340"
    ],
    "line": [
      {
        "name": "Whiscash",
        "dex": 340,
        "types": [
          "water",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured341": {
    "name": "Corphish",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature341",
    "learnset": [
      "signature341"
    ],
    "line": [
      {
        "name": "Corphish",
        "dex": 341,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured342": {
    "name": "Crawdaunt",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature342",
    "learnset": [
      "signature342"
    ],
    "line": [
      {
        "name": "Crawdaunt",
        "dex": 342,
        "types": [
          "water",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured343": {
    "name": "Baltoy",
    "color": "#e0c068",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature343",
    "learnset": [
      "signature343"
    ],
    "line": [
      {
        "name": "Baltoy",
        "dex": 343,
        "types": [
          "ground",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured344": {
    "name": "Claydol",
    "color": "#e0c068",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature344",
    "learnset": [
      "signature344"
    ],
    "line": [
      {
        "name": "Claydol",
        "dex": 344,
        "types": [
          "ground",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured345": {
    "name": "Lileep",
    "color": "#b8a038",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -1
    },
    "signature": "signature345",
    "learnset": [
      "signature345"
    ],
    "line": [
      {
        "name": "Lileep",
        "dex": 345,
        "types": [
          "rock",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured346": {
    "name": "Cradily",
    "color": "#b8a038",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature346",
    "learnset": [
      "signature346"
    ],
    "line": [
      {
        "name": "Cradily",
        "dex": 346,
        "types": [
          "rock",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured347": {
    "name": "Anorith",
    "color": "#b8a038",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature347",
    "learnset": [
      "signature347"
    ],
    "line": [
      {
        "name": "Anorith",
        "dex": 347,
        "types": [
          "rock",
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured348": {
    "name": "Armaldo",
    "color": "#b8a038",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature348",
    "learnset": [
      "signature348"
    ],
    "line": [
      {
        "name": "Armaldo",
        "dex": 348,
        "types": [
          "rock",
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured349": {
    "name": "Feebas",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature349",
    "learnset": [
      "signature349"
    ],
    "line": [
      {
        "name": "Feebas",
        "dex": 349,
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Milotic",
        "dex": 350,
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 95,
          "might": 0.5,
          "regen": 0.8,
          "area": 0.2,
          "armor": 1
        }
      }
    ]
  },
  "captured350": {
    "name": "Milotic",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -3
    },
    "signature": "signature350",
    "learnset": [
      "signature350"
    ],
    "line": [
      {
        "name": "Milotic",
        "dex": 350,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured352": {
    "name": "Kecleon",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature352",
    "learnset": [
      "signature352"
    ],
    "line": [
      {
        "name": "Kecleon",
        "dex": 352,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured353": {
    "name": "Shuppet",
    "color": "#705898",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature353",
    "learnset": [
      "signature353"
    ],
    "line": [
      {
        "name": "Shuppet",
        "dex": 353,
        "types": [
          "ghost"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Banette",
        "dex": 354,
        "types": [
          "ghost"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.25,
          "statusChance": 0.04,
          "statusDamage": 0.15
        }
      }
    ]
  },
  "captured354": {
    "name": "Banette",
    "color": "#705898",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature354",
    "learnset": [
      "signature354"
    ],
    "line": [
      {
        "name": "Banette",
        "dex": 354,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured355": {
    "name": "Duskull",
    "color": "#705898",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 2
    },
    "signature": "signature355",
    "learnset": [
      "signature355"
    ],
    "line": [
      {
        "name": "Duskull",
        "dex": 355,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured356": {
    "name": "Dusclops",
    "color": "#705898",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature356",
    "learnset": [
      "signature356"
    ],
    "line": [
      {
        "name": "Dusclops",
        "dex": 356,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured357": {
    "name": "Tropius",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature357",
    "learnset": [
      "signature357"
    ],
    "line": [
      {
        "name": "Tropius",
        "dex": 357,
        "types": [
          "grass",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured358": {
    "name": "Chimecho",
    "color": "#f85888",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature358",
    "learnset": [
      "signature358"
    ],
    "line": [
      {
        "name": "Chimecho",
        "dex": 358,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured359": {
    "name": "Absol",
    "color": "#705848",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature359",
    "learnset": [
      "signature359"
    ],
    "line": [
      {
        "name": "Absol",
        "dex": 359,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured360": {
    "name": "Wynaut",
    "color": "#f85888",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 0
    },
    "signature": "signature360",
    "learnset": [
      "signature360"
    ],
    "line": [
      {
        "name": "Wynaut",
        "dex": 360,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured361": {
    "name": "Snorunt",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature361",
    "learnset": [
      "signature361"
    ],
    "line": [
      {
        "name": "Snorunt",
        "dex": 361,
        "types": [
          "ice"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Glalie",
        "dex": 362,
        "types": [
          "ice"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "area": 0.1,
          "armor": 1
        }
      }
    ]
  },
  "captured362": {
    "name": "Glalie",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature362",
    "learnset": [
      "signature362"
    ],
    "line": [
      {
        "name": "Glalie",
        "dex": 362,
        "types": [
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured363": {
    "name": "Spheal",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature363",
    "learnset": [
      "signature363"
    ],
    "line": [
      {
        "name": "Spheal",
        "dex": 363,
        "types": [
          "ice",
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Sealeo",
        "dex": 364,
        "types": [
          "ice",
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.05
        }
      },
      {
        "name": "Walrein",
        "dex": 365,
        "types": [
          "ice",
          "water"
        ],
        "bonus": {
          "maxHp": 65,
          "armor": 2,
          "might": 0.15,
          "area": 0.1
        }
      }
    ]
  },
  "captured364": {
    "name": "Sealeo",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature364",
    "learnset": [
      "signature364"
    ],
    "line": [
      {
        "name": "Sealeo",
        "dex": 364,
        "types": [
          "ice",
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Walrein",
        "dex": 365,
        "types": [
          "ice",
          "water"
        ],
        "bonus": {
          "maxHp": 65,
          "armor": 2,
          "might": 0.15,
          "area": 0.1
        }
      }
    ]
  },
  "captured365": {
    "name": "Walrein",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": -2
    },
    "signature": "signature365",
    "learnset": [
      "signature365"
    ],
    "line": [
      {
        "name": "Walrein",
        "dex": 365,
        "types": [
          "ice",
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured366": {
    "name": "Clamperl",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature366",
    "learnset": [
      "signature366"
    ],
    "line": [
      {
        "name": "Clamperl",
        "dex": 366,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured367": {
    "name": "Huntail",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature367",
    "learnset": [
      "signature367"
    ],
    "line": [
      {
        "name": "Huntail",
        "dex": 367,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured368": {
    "name": "Gorebyss",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature368",
    "learnset": [
      "signature368"
    ],
    "line": [
      {
        "name": "Gorebyss",
        "dex": 368,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured369": {
    "name": "Relicanth",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature369",
    "learnset": [
      "signature369"
    ],
    "line": [
      {
        "name": "Relicanth",
        "dex": 369,
        "types": [
          "water",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured370": {
    "name": "Luvdisc",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 3
    },
    "signature": "signature370",
    "learnset": [
      "signature370"
    ],
    "line": [
      {
        "name": "Luvdisc",
        "dex": 370,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured371": {
    "name": "Bagon",
    "color": "#7038f8",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature371",
    "learnset": [
      "signature371"
    ],
    "line": [
      {
        "name": "Bagon",
        "dex": 371,
        "types": [
          "dragon"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Shelgon",
        "dex": 372,
        "types": [
          "dragon"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 40,
          "armor": 2,
          "might": 0.08
        }
      },
      {
        "name": "Salamence",
        "dex": 373,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {
          "maxHp": 60,
          "might": 0.28,
          "speed": 7,
          "area": 0.1
        }
      }
    ]
  },
  "captured372": {
    "name": "Shelgon",
    "color": "#7038f8",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature372",
    "learnset": [
      "signature372"
    ],
    "line": [
      {
        "name": "Shelgon",
        "dex": 372,
        "types": [
          "dragon"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Salamence",
        "dex": 373,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {
          "maxHp": 60,
          "might": 0.28,
          "speed": 7,
          "area": 0.1
        }
      }
    ]
  },
  "captured373": {
    "name": "Salamence",
    "color": "#7038f8",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature373",
    "learnset": [
      "signature373"
    ],
    "line": [
      {
        "name": "Salamence",
        "dex": 373,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured374": {
    "name": "Beldum",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature374",
    "learnset": [
      "signature374"
    ],
    "line": [
      {
        "name": "Beldum",
        "dex": 374,
        "types": [
          "steel",
          "psychic"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Metang",
        "dex": 375,
        "types": [
          "steel",
          "psychic"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.1
        }
      },
      {
        "name": "Metagross",
        "dex": 376,
        "types": [
          "steel",
          "psychic"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.25,
          "area": 0.1
        }
      }
    ]
  },
  "captured375": {
    "name": "Metang",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 1
    },
    "signature": "signature375",
    "learnset": [
      "signature375"
    ],
    "line": [
      {
        "name": "Metang",
        "dex": 375,
        "types": [
          "steel",
          "psychic"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Metagross",
        "dex": 376,
        "types": [
          "steel",
          "psychic"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.25,
          "area": 0.1
        }
      }
    ]
  },
  "captured376": {
    "name": "Metagross",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature376",
    "learnset": [
      "signature376"
    ],
    "line": [
      {
        "name": "Metagross",
        "dex": 376,
        "types": [
          "steel",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured377": {
    "name": "Regirock",
    "color": "#b8a038",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature377",
    "learnset": [
      "signature377"
    ],
    "line": [
      {
        "name": "Regirock",
        "dex": 377,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured378": {
    "name": "Regice",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature378",
    "learnset": [
      "signature378"
    ],
    "line": [
      {
        "name": "Regice",
        "dex": 378,
        "types": [
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured379": {
    "name": "Registeel",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature379",
    "learnset": [
      "signature379"
    ],
    "line": [
      {
        "name": "Registeel",
        "dex": 379,
        "types": [
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured380": {
    "name": "Latias",
    "color": "#7038f8",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -1
    },
    "signature": "signature380",
    "learnset": [
      "signature380"
    ],
    "line": [
      {
        "name": "Latias",
        "dex": 380,
        "types": [
          "dragon",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured381": {
    "name": "Latios",
    "color": "#7038f8",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature381",
    "learnset": [
      "signature381"
    ],
    "line": [
      {
        "name": "Latios",
        "dex": 381,
        "types": [
          "dragon",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured382": {
    "name": "Kyogre",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature382",
    "learnset": [
      "signature382"
    ],
    "line": [
      {
        "name": "Kyogre",
        "dex": 382,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured383": {
    "name": "Groudon",
    "color": "#e0c068",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature383",
    "learnset": [
      "signature383"
    ],
    "line": [
      {
        "name": "Groudon",
        "dex": 383,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured384": {
    "name": "Rayquaza",
    "color": "#7038f8",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature384",
    "learnset": [
      "signature384"
    ],
    "line": [
      {
        "name": "Rayquaza",
        "dex": 384,
        "types": [
          "dragon",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured385": {
    "name": "Jirachi",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -3
    },
    "signature": "signature385",
    "learnset": [
      "signature385"
    ],
    "line": [
      {
        "name": "Jirachi",
        "dex": 385,
        "types": [
          "steel",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured386": {
    "name": "Deoxys",
    "color": "#f85888",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature386",
    "learnset": [
      "signature386"
    ],
    "line": [
      {
        "name": "Deoxys",
        "dex": 386,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured387": {
    "name": "Turtwig",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature387",
    "learnset": [
      "signature387"
    ],
    "line": [
      {
        "dex": 387,
        "name": "Turtwig",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 388,
        "name": "Grotle",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 40,
          "armor": 1,
          "might": 0.05
        }
      },
      {
        "dex": 389,
        "name": "Torterra",
        "types": [
          "grass",
          "ground"
        ],
        "bonus": {
          "maxHp": 70,
          "armor": 2,
          "might": 0.15,
          "area": 0.2
        }
      }
    ]
  },
  "captured388": {
    "name": "Grotle",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature388",
    "learnset": [
      "signature388"
    ],
    "line": [
      {
        "dex": 388,
        "name": "Grotle",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 389,
        "name": "Torterra",
        "types": [
          "grass",
          "ground"
        ],
        "bonus": {
          "maxHp": 70,
          "armor": 2,
          "might": 0.15,
          "area": 0.2
        }
      }
    ]
  },
  "captured389": {
    "name": "Torterra",
    "color": "#78c850",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature389",
    "learnset": [
      "signature389"
    ],
    "line": [
      {
        "dex": 389,
        "name": "Torterra",
        "types": [
          "grass",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured390": {
    "name": "Chimchar",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 2
    },
    "signature": "signature390",
    "learnset": [
      "signature390"
    ],
    "line": [
      {
        "dex": 390,
        "name": "Chimchar",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 391,
        "name": "Monferno",
        "types": [
          "fire",
          "fighting"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "speed": 3,
          "might": 0.1
        }
      },
      {
        "dex": 392,
        "name": "Infernape",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 5,
          "might": 0.2,
          "cooldown": -0.06
        }
      }
    ]
  },
  "captured391": {
    "name": "Monferno",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature391",
    "learnset": [
      "signature391"
    ],
    "line": [
      {
        "dex": 391,
        "name": "Monferno",
        "types": [
          "fire",
          "fighting"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 392,
        "name": "Infernape",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 5,
          "might": 0.2,
          "cooldown": -0.06
        }
      }
    ]
  },
  "captured392": {
    "name": "Infernape",
    "color": "#f08030",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature392",
    "learnset": [
      "signature392"
    ],
    "line": [
      {
        "dex": 392,
        "name": "Infernape",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured393": {
    "name": "Piplup",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature393",
    "learnset": [
      "signature393"
    ],
    "line": [
      {
        "dex": 393,
        "name": "Piplup",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 394,
        "name": "Prinplup",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "armor": 1,
          "might": 0.06
        }
      },
      {
        "dex": 395,
        "name": "Empoleon",
        "types": [
          "water",
          "steel"
        ],
        "bonus": {
          "maxHp": 45,
          "armor": 2,
          "might": 0.16,
          "area": 0.1
        }
      }
    ]
  },
  "captured394": {
    "name": "Prinplup",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature394",
    "learnset": [
      "signature394"
    ],
    "line": [
      {
        "dex": 394,
        "name": "Prinplup",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 395,
        "name": "Empoleon",
        "types": [
          "water",
          "steel"
        ],
        "bonus": {
          "maxHp": 45,
          "armor": 2,
          "might": 0.16,
          "area": 0.1
        }
      }
    ]
  },
  "captured395": {
    "name": "Empoleon",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 0
    },
    "signature": "signature395",
    "learnset": [
      "signature395"
    ],
    "line": [
      {
        "dex": 395,
        "name": "Empoleon",
        "types": [
          "water",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured396": {
    "name": "Starly",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature396",
    "learnset": [
      "signature396"
    ],
    "line": [
      {
        "name": "Starly",
        "dex": 396,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Staravia",
        "dex": 397,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "speed": 3,
          "might": 0.08
        }
      },
      {
        "name": "Staraptor",
        "dex": 398,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 4,
          "might": 0.2,
          "projectileSpeed": 0.1
        }
      }
    ]
  },
  "captured397": {
    "name": "Staravia",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature397",
    "learnset": [
      "signature397"
    ],
    "line": [
      {
        "name": "Staravia",
        "dex": 397,
        "types": [
          "normal",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Staraptor",
        "dex": 398,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 4,
          "might": 0.2,
          "projectileSpeed": 0.1
        }
      }
    ]
  },
  "captured398": {
    "name": "Staraptor",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature398",
    "learnset": [
      "signature398"
    ],
    "line": [
      {
        "name": "Staraptor",
        "dex": 398,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured399": {
    "name": "Bidoof",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature399",
    "learnset": [
      "signature399"
    ],
    "line": [
      {
        "name": "Bidoof",
        "dex": 399,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured400": {
    "name": "Bibarel",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -2
    },
    "signature": "signature400",
    "learnset": [
      "signature400"
    ],
    "line": [
      {
        "name": "Bibarel",
        "dex": 400,
        "types": [
          "normal",
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured403": {
    "name": "Shinx",
    "color": "#f8d030",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature403",
    "learnset": [
      "signature403"
    ],
    "line": [
      {
        "name": "Shinx",
        "dex": 403,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured404": {
    "name": "Luxio",
    "color": "#f8d030",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature404",
    "learnset": [
      "signature404"
    ],
    "line": [
      {
        "name": "Luxio",
        "dex": 404,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured405": {
    "name": "Luxray",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 3
    },
    "signature": "signature405",
    "learnset": [
      "signature405"
    ],
    "line": [
      {
        "name": "Luxray",
        "dex": 405,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured406": {
    "name": "Budew",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature406",
    "learnset": [
      "signature406"
    ],
    "line": [
      {
        "name": "Budew",
        "dex": 406,
        "types": [
          "grass",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Roselia",
        "dex": 315,
        "types": [
          "grass",
          "poison"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "might": 0.08,
          "statusChance": 0.03
        }
      },
      {
        "name": "Roserade",
        "dex": 407,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.18,
          "area": 0.1,
          "statusDamage": 0.15
        }
      }
    ]
  },
  "captured407": {
    "name": "Roserade",
    "color": "#78c850",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature407",
    "learnset": [
      "signature407"
    ],
    "line": [
      {
        "name": "Roserade",
        "dex": 407,
        "types": [
          "grass",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured425": {
    "name": "Drifloon",
    "color": "#705898",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 2
    },
    "signature": "signature425",
    "learnset": [
      "signature425"
    ],
    "line": [
      {
        "name": "Drifloon",
        "dex": 425,
        "types": [
          "ghost",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured426": {
    "name": "Drifblim",
    "color": "#705898",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature426",
    "learnset": [
      "signature426"
    ],
    "line": [
      {
        "name": "Drifblim",
        "dex": 426,
        "types": [
          "ghost",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured434": {
    "name": "Stunky",
    "color": "#a040a0",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature434",
    "learnset": [
      "signature434"
    ],
    "line": [
      {
        "name": "Stunky",
        "dex": 434,
        "types": [
          "poison",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured436": {
    "name": "Bronzor",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature436",
    "learnset": [
      "signature436"
    ],
    "line": [
      {
        "name": "Bronzor",
        "dex": 436,
        "types": [
          "steel",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured437": {
    "name": "Bronzong",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature437",
    "learnset": [
      "signature437"
    ],
    "line": [
      {
        "name": "Bronzong",
        "dex": 437,
        "types": [
          "steel",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured443": {
    "name": "Gible",
    "color": "#7038f8",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature443",
    "learnset": [
      "signature443"
    ],
    "line": [
      {
        "name": "Gible",
        "dex": 443,
        "types": [
          "dragon",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Gabite",
        "dex": 444,
        "types": [
          "dragon",
          "ground"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.1,
          "speed": 3
        }
      },
      {
        "name": "Garchomp",
        "dex": 445,
        "types": [
          "dragon",
          "ground"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.25,
          "speed": 6,
          "armor": 1
        }
      }
    ]
  },
  "captured444": {
    "name": "Gabite",
    "color": "#7038f8",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature444",
    "learnset": [
      "signature444"
    ],
    "line": [
      {
        "name": "Gabite",
        "dex": 444,
        "types": [
          "dragon",
          "ground"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Garchomp",
        "dex": 445,
        "types": [
          "dragon",
          "ground"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.25,
          "speed": 6,
          "armor": 1
        }
      }
    ]
  },
  "captured445": {
    "name": "Garchomp",
    "color": "#7038f8",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 1
    },
    "signature": "signature445",
    "learnset": [
      "signature445"
    ],
    "line": [
      {
        "name": "Garchomp",
        "dex": 445,
        "types": [
          "dragon",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured446": {
    "name": "Munchlax",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature446",
    "learnset": [
      "signature446"
    ],
    "line": [
      {
        "name": "Munchlax",
        "dex": 446,
        "types": [
          "normal"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Snorlax",
        "dex": 143,
        "types": [
          "normal"
        ],
        "bonus": {
          "maxHp": 90,
          "armor": 2,
          "might": 0.22,
          "regen": 0.4,
          "area": 0.1
        }
      }
    ]
  },
  "captured447": {
    "name": "Riolu",
    "color": "#c03028",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature447",
    "learnset": [
      "signature447"
    ],
    "line": [
      {
        "name": "Riolu",
        "dex": 447,
        "types": [
          "fighting"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Lucario",
        "dex": 448,
        "types": [
          "fighting",
          "steel"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.25,
          "speed": 5,
          "cooldown": -0.05,
          "armor": 1
        }
      }
    ]
  },
  "captured448": {
    "name": "Lucario",
    "color": "#c03028",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature448",
    "learnset": [
      "signature448"
    ],
    "line": [
      {
        "name": "Lucario",
        "dex": 448,
        "types": [
          "fighting",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured449": {
    "name": "Hippopotas",
    "color": "#e0c068",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature449",
    "learnset": [
      "signature449"
    ],
    "line": [
      {
        "name": "Hippopotas",
        "dex": 449,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured450": {
    "name": "Hippowdon",
    "color": "#e0c068",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -1
    },
    "signature": "signature450",
    "learnset": [
      "signature450"
    ],
    "line": [
      {
        "name": "Hippowdon",
        "dex": 450,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured451": {
    "name": "Skorupi",
    "color": "#a040a0",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature451",
    "learnset": [
      "signature451"
    ],
    "line": [
      {
        "name": "Skorupi",
        "dex": 451,
        "types": [
          "poison",
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured452": {
    "name": "Drapion",
    "color": "#a040a0",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature452",
    "learnset": [
      "signature452"
    ],
    "line": [
      {
        "name": "Drapion",
        "dex": 452,
        "types": [
          "poison",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured454": {
    "name": "Toxicroak",
    "color": "#a040a0",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature454",
    "learnset": [
      "signature454"
    ],
    "line": [
      {
        "name": "Toxicroak",
        "dex": 454,
        "types": [
          "poison",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured468": {
    "name": "Togekiss",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature468",
    "learnset": [
      "signature468"
    ],
    "line": [
      {
        "name": "Togekiss",
        "dex": 468,
        "types": [
          "fairy",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured473": {
    "name": "Mamoswine",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature473",
    "learnset": [
      "signature473"
    ],
    "line": [
      {
        "name": "Mamoswine",
        "dex": 473,
        "types": [
          "ice",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured483": {
    "name": "Dialga",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature483",
    "learnset": [
      "signature483"
    ],
    "line": [
      {
        "name": "Dialga",
        "dex": 483,
        "types": [
          "steel",
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured493": {
    "name": "Arceus",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature493",
    "learnset": [
      "signature493"
    ],
    "line": [
      {
        "name": "Arceus",
        "dex": 493,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured495": {
    "name": "Snivy",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 2
    },
    "signature": "signature495",
    "learnset": [
      "signature495"
    ],
    "line": [
      {
        "dex": 495,
        "name": "Snivy",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 496,
        "name": "Servine",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "speed": 3,
          "cooldown": -0.04
        }
      },
      {
        "dex": 497,
        "name": "Serperior",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 5,
          "might": 0.14,
          "area": 0.1
        }
      }
    ]
  },
  "captured496": {
    "name": "Servine",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature496",
    "learnset": [
      "signature496"
    ],
    "line": [
      {
        "dex": 496,
        "name": "Servine",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 497,
        "name": "Serperior",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 5,
          "might": 0.14,
          "area": 0.1
        }
      }
    ]
  },
  "captured497": {
    "name": "Serperior",
    "color": "#78c850",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature497",
    "learnset": [
      "signature497"
    ],
    "line": [
      {
        "dex": 497,
        "name": "Serperior",
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured498": {
    "name": "Tepig",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature498",
    "learnset": [
      "signature498"
    ],
    "line": [
      {
        "dex": 498,
        "name": "Tepig",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 499,
        "name": "Pignite",
        "types": [
          "fire",
          "fighting"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.08
        }
      },
      {
        "dex": 500,
        "name": "Emboar",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.2,
          "armor": 1
        }
      }
    ]
  },
  "captured499": {
    "name": "Pignite",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature499",
    "learnset": [
      "signature499"
    ],
    "line": [
      {
        "dex": 499,
        "name": "Pignite",
        "types": [
          "fire",
          "fighting"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 500,
        "name": "Emboar",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.2,
          "armor": 1
        }
      }
    ]
  },
  "captured500": {
    "name": "Emboar",
    "color": "#f08030",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 0
    },
    "signature": "signature500",
    "learnset": [
      "signature500"
    ],
    "line": [
      {
        "dex": 500,
        "name": "Emboar",
        "types": [
          "fire",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured501": {
    "name": "Oshawott",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature501",
    "learnset": [
      "signature501"
    ],
    "line": [
      {
        "dex": 501,
        "name": "Oshawott",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 502,
        "name": "Dewott",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.08,
          "area": 0.05
        }
      },
      {
        "dex": 503,
        "name": "Samurott",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.18,
          "armor": 1,
          "area": 0.1
        }
      }
    ]
  },
  "captured502": {
    "name": "Dewott",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature502",
    "learnset": [
      "signature502"
    ],
    "line": [
      {
        "dex": 502,
        "name": "Dewott",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 503,
        "name": "Samurott",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.18,
          "armor": 1,
          "area": 0.1
        }
      }
    ]
  },
  "captured503": {
    "name": "Samurott",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature503",
    "learnset": [
      "signature503"
    ],
    "line": [
      {
        "dex": 503,
        "name": "Samurott",
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured504": {
    "name": "Patrat",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature504",
    "learnset": [
      "signature504"
    ],
    "line": [
      {
        "name": "Patrat",
        "dex": 504,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured510": {
    "name": "Liepard",
    "color": "#705848",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 3
    },
    "signature": "signature510",
    "learnset": [
      "signature510"
    ],
    "line": [
      {
        "name": "Liepard",
        "dex": 510,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured519": {
    "name": "Pidove",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature519",
    "learnset": [
      "signature519"
    ],
    "line": [
      {
        "name": "Pidove",
        "dex": 519,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured524": {
    "name": "Roggenrola",
    "color": "#b8a038",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature524",
    "learnset": [
      "signature524"
    ],
    "line": [
      {
        "name": "Roggenrola",
        "dex": 524,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured525": {
    "name": "Boldore",
    "color": "#b8a038",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -3
    },
    "signature": "signature525",
    "learnset": [
      "signature525"
    ],
    "line": [
      {
        "name": "Boldore",
        "dex": 525,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured528": {
    "name": "Swoobat",
    "color": "#f85888",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature528",
    "learnset": [
      "signature528"
    ],
    "line": [
      {
        "name": "Swoobat",
        "dex": 528,
        "types": [
          "psychic",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured530": {
    "name": "Excadrill",
    "color": "#e0c068",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 2
    },
    "signature": "signature530",
    "learnset": [
      "signature530"
    ],
    "line": [
      {
        "name": "Excadrill",
        "dex": 530,
        "types": [
          "ground",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured532": {
    "name": "Timburr",
    "color": "#c03028",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature532",
    "learnset": [
      "signature532"
    ],
    "line": [
      {
        "name": "Timburr",
        "dex": 532,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured533": {
    "name": "Gurdurr",
    "color": "#c03028",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature533",
    "learnset": [
      "signature533"
    ],
    "line": [
      {
        "name": "Gurdurr",
        "dex": 533,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured534": {
    "name": "Conkeldurr",
    "color": "#c03028",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature534",
    "learnset": [
      "signature534"
    ],
    "line": [
      {
        "name": "Conkeldurr",
        "dex": 534,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured543": {
    "name": "Venipede",
    "color": "#a8b820",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature543",
    "learnset": [
      "signature543"
    ],
    "line": [
      {
        "name": "Venipede",
        "dex": 543,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured545": {
    "name": "Scolipede",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 3
    },
    "signature": "signature545",
    "learnset": [
      "signature545"
    ],
    "line": [
      {
        "name": "Scolipede",
        "dex": 545,
        "types": [
          "bug",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured551": {
    "name": "Sandile",
    "color": "#e0c068",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature551",
    "learnset": [
      "signature551"
    ],
    "line": [
      {
        "name": "Sandile",
        "dex": 551,
        "types": [
          "ground",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured552": {
    "name": "Krokorok",
    "color": "#e0c068",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature552",
    "learnset": [
      "signature552"
    ],
    "line": [
      {
        "name": "Krokorok",
        "dex": 552,
        "types": [
          "ground",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured553": {
    "name": "Krookodile",
    "color": "#e0c068",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature553",
    "learnset": [
      "signature553"
    ],
    "line": [
      {
        "name": "Krookodile",
        "dex": 553,
        "types": [
          "ground",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured559": {
    "name": "Scraggy",
    "color": "#705848",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature559",
    "learnset": [
      "signature559"
    ],
    "line": [
      {
        "name": "Scraggy",
        "dex": 559,
        "types": [
          "dark",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured570": {
    "name": "Zorua",
    "color": "#705848",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 0
    },
    "signature": "signature570",
    "learnset": [
      "signature570"
    ],
    "line": [
      {
        "name": "Zorua",
        "dex": 570,
        "types": [
          "dark"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Zoroark",
        "dex": 571,
        "types": [
          "dark"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.28,
          "speed": 6,
          "area": 0.05
        }
      }
    ]
  },
  "captured571": {
    "name": "Zoroark",
    "color": "#705848",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature571",
    "learnset": [
      "signature571"
    ],
    "line": [
      {
        "name": "Zoroark",
        "dex": 571,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured607": {
    "name": "Litwick",
    "color": "#705898",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature607",
    "learnset": [
      "signature607"
    ],
    "line": [
      {
        "name": "Litwick",
        "dex": 607,
        "types": [
          "ghost",
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured608": {
    "name": "Lampent",
    "color": "#705898",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature608",
    "learnset": [
      "signature608"
    ],
    "line": [
      {
        "name": "Lampent",
        "dex": 608,
        "types": [
          "ghost",
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured609": {
    "name": "Chandelure",
    "color": "#705898",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature609",
    "learnset": [
      "signature609"
    ],
    "line": [
      {
        "name": "Chandelure",
        "dex": 609,
        "types": [
          "ghost",
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured610": {
    "name": "Axew",
    "color": "#7038f8",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -2
    },
    "signature": "signature610",
    "learnset": [
      "signature610"
    ],
    "line": [
      {
        "name": "Axew",
        "dex": 610,
        "types": [
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured633": {
    "name": "Deino",
    "color": "#705848",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature633",
    "learnset": [
      "signature633"
    ],
    "line": [
      {
        "name": "Deino",
        "dex": 633,
        "types": [
          "dark",
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured636": {
    "name": "Larvesta",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature636",
    "learnset": [
      "signature636"
    ],
    "line": [
      {
        "name": "Larvesta",
        "dex": 636,
        "types": [
          "bug",
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Volcarona",
        "dex": 637,
        "types": [
          "bug",
          "fire"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.25,
          "area": 0.15,
          "regen": 0.2
        }
      }
    ]
  },
  "captured637": {
    "name": "Volcarona",
    "color": "#a8b820",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature637",
    "learnset": [
      "signature637"
    ],
    "line": [
      {
        "name": "Volcarona",
        "dex": 637,
        "types": [
          "bug",
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured650": {
    "name": "Chespin",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 3
    },
    "signature": "signature650",
    "learnset": [
      "signature650"
    ],
    "line": [
      {
        "dex": 650,
        "name": "Chespin",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 651,
        "name": "Quilladin",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.05
        }
      },
      {
        "dex": 652,
        "name": "Chesnaught",
        "types": [
          "grass",
          "fighting"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.15,
          "area": 0.1
        }
      }
    ]
  },
  "captured651": {
    "name": "Quilladin",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature651",
    "learnset": [
      "signature651"
    ],
    "line": [
      {
        "dex": 651,
        "name": "Quilladin",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 652,
        "name": "Chesnaught",
        "types": [
          "grass",
          "fighting"
        ],
        "bonus": {
          "maxHp": 60,
          "armor": 2,
          "might": 0.15,
          "area": 0.1
        }
      }
    ]
  },
  "captured652": {
    "name": "Chesnaught",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature652",
    "learnset": [
      "signature652"
    ],
    "line": [
      {
        "dex": 652,
        "name": "Chesnaught",
        "types": [
          "grass",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured653": {
    "name": "Fennekin",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature653",
    "learnset": [
      "signature653"
    ],
    "line": [
      {
        "dex": 653,
        "name": "Fennekin",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 654,
        "name": "Braixen",
        "types": [
          "fire"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "might": 0.1,
          "area": 0.05
        }
      },
      {
        "dex": 655,
        "name": "Delphox",
        "types": [
          "fire",
          "psychic"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.2,
          "area": 0.15,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured654": {
    "name": "Braixen",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature654",
    "learnset": [
      "signature654"
    ],
    "line": [
      {
        "dex": 654,
        "name": "Braixen",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 655,
        "name": "Delphox",
        "types": [
          "fire",
          "psychic"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.2,
          "area": 0.15,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured655": {
    "name": "Delphox",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 1
    },
    "signature": "signature655",
    "learnset": [
      "signature655"
    ],
    "line": [
      {
        "dex": 655,
        "name": "Delphox",
        "types": [
          "fire",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured656": {
    "name": "Froakie",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature656",
    "learnset": [
      "signature656"
    ],
    "line": [
      {
        "dex": 656,
        "name": "Froakie",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 657,
        "name": "Frogadier",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "speed": 4,
          "might": 0.08
        }
      },
      {
        "dex": 658,
        "name": "Greninja",
        "types": [
          "water",
          "dark"
        ],
        "bonus": {
          "maxHp": 30,
          "speed": 6,
          "might": 0.2,
          "amount": 1
        }
      }
    ]
  },
  "captured657": {
    "name": "Frogadier",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature657",
    "learnset": [
      "signature657"
    ],
    "line": [
      {
        "dex": 657,
        "name": "Frogadier",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 658,
        "name": "Greninja",
        "types": [
          "water",
          "dark"
        ],
        "bonus": {
          "maxHp": 30,
          "speed": 6,
          "might": 0.2,
          "amount": 1
        }
      }
    ]
  },
  "captured658": {
    "name": "Greninja",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature658",
    "learnset": [
      "signature658"
    ],
    "line": [
      {
        "dex": 658,
        "name": "Greninja",
        "types": [
          "water",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured659": {
    "name": "Bunnelby",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature659",
    "learnset": [
      "signature659"
    ],
    "line": [
      {
        "name": "Bunnelby",
        "dex": 659,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured660": {
    "name": "Diggersby",
    "color": "#a8a878",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -1
    },
    "signature": "signature660",
    "learnset": [
      "signature660"
    ],
    "line": [
      {
        "name": "Diggersby",
        "dex": 660,
        "types": [
          "normal",
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured661": {
    "name": "Fletchling",
    "color": "#a8a878",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature661",
    "learnset": [
      "signature661"
    ],
    "line": [
      {
        "name": "Fletchling",
        "dex": 661,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured662": {
    "name": "Fletchinder",
    "color": "#f08030",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature662",
    "learnset": [
      "signature662"
    ],
    "line": [
      {
        "name": "Fletchinder",
        "dex": 662,
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured663": {
    "name": "Talonflame",
    "color": "#f08030",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature663",
    "learnset": [
      "signature663"
    ],
    "line": [
      {
        "name": "Talonflame",
        "dex": 663,
        "types": [
          "fire",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured667": {
    "name": "Litleo",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature667",
    "learnset": [
      "signature667"
    ],
    "line": [
      {
        "name": "Litleo",
        "dex": 667,
        "types": [
          "fire",
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured674": {
    "name": "Pancham",
    "color": "#c03028",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature674",
    "learnset": [
      "signature674"
    ],
    "line": [
      {
        "name": "Pancham",
        "dex": 674,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured675": {
    "name": "Pangoro",
    "color": "#c03028",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 0
    },
    "signature": "signature675",
    "learnset": [
      "signature675"
    ],
    "line": [
      {
        "name": "Pangoro",
        "dex": 675,
        "types": [
          "fighting",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured677": {
    "name": "Espurr",
    "color": "#f85888",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature677",
    "learnset": [
      "signature677"
    ],
    "line": [
      {
        "name": "Espurr",
        "dex": 677,
        "types": [
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured679": {
    "name": "Honedge",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature679",
    "learnset": [
      "signature679"
    ],
    "line": [
      {
        "name": "Honedge",
        "dex": 679,
        "types": [
          "steel",
          "ghost"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Doublade",
        "dex": 680,
        "types": [
          "steel",
          "ghost"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "armor": 1,
          "might": 0.08
        }
      },
      {
        "name": "Aegislash",
        "dex": 681,
        "types": [
          "steel",
          "ghost"
        ],
        "bonus": {
          "maxHp": 45,
          "armor": 1,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured680": {
    "name": "Doublade",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": -2
    },
    "signature": "signature680",
    "learnset": [
      "signature680"
    ],
    "line": [
      {
        "name": "Doublade",
        "dex": 680,
        "types": [
          "steel",
          "ghost"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Aegislash",
        "dex": 681,
        "types": [
          "steel",
          "ghost"
        ],
        "bonus": {
          "maxHp": 45,
          "armor": 1,
          "might": 0.2,
          "area": 0.1
        }
      }
    ]
  },
  "captured681": {
    "name": "Aegislash",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature681",
    "learnset": [
      "signature681"
    ],
    "line": [
      {
        "name": "Aegislash",
        "dex": 681,
        "types": [
          "steel",
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured686": {
    "name": "Inkay",
    "color": "#705848",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature686",
    "learnset": [
      "signature686"
    ],
    "line": [
      {
        "name": "Inkay",
        "dex": 686,
        "types": [
          "dark",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured704": {
    "name": "Goomy",
    "color": "#7038f8",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature704",
    "learnset": [
      "signature704"
    ],
    "line": [
      {
        "name": "Goomy",
        "dex": 704,
        "types": [
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured707": {
    "name": "Klefki",
    "color": "#b8b8d0",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature707",
    "learnset": [
      "signature707"
    ],
    "line": [
      {
        "name": "Klefki",
        "dex": 707,
        "types": [
          "steel",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured708": {
    "name": "Phantump",
    "color": "#705898",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature708",
    "learnset": [
      "signature708"
    ],
    "line": [
      {
        "name": "Phantump",
        "dex": 708,
        "types": [
          "ghost",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured709": {
    "name": "Trevenant",
    "color": "#705898",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature709",
    "learnset": [
      "signature709"
    ],
    "line": [
      {
        "name": "Trevenant",
        "dex": 709,
        "types": [
          "ghost",
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured714": {
    "name": "Noibat",
    "color": "#a890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature714",
    "learnset": [
      "signature714"
    ],
    "line": [
      {
        "name": "Noibat",
        "dex": 714,
        "types": [
          "flying",
          "dragon"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Noivern",
        "dex": 715,
        "types": [
          "flying",
          "dragon"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.22,
          "area": 0.15,
          "speed": 4
        }
      }
    ]
  },
  "captured715": {
    "name": "Noivern",
    "color": "#a890f0",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -2
    },
    "signature": "signature715",
    "learnset": [
      "signature715"
    ],
    "line": [
      {
        "name": "Noivern",
        "dex": 715,
        "types": [
          "flying",
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured722": {
    "name": "Rowlet",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature722",
    "learnset": [
      "signature722"
    ],
    "line": [
      {
        "dex": 722,
        "name": "Rowlet",
        "types": [
          "grass",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 723,
        "name": "Dartrix",
        "types": [
          "grass",
          "flying"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.08,
          "projectileSpeed": 0.05
        }
      },
      {
        "dex": 724,
        "name": "Decidueye",
        "types": [
          "grass",
          "ghost"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.18,
          "projectileSpeed": 0.1,
          "amount": 1
        }
      }
    ]
  },
  "captured723": {
    "name": "Dartrix",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature723",
    "learnset": [
      "signature723"
    ],
    "line": [
      {
        "dex": 723,
        "name": "Dartrix",
        "types": [
          "grass",
          "flying"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 724,
        "name": "Decidueye",
        "types": [
          "grass",
          "ghost"
        ],
        "bonus": {
          "maxHp": 40,
          "might": 0.18,
          "projectileSpeed": 0.1,
          "amount": 1
        }
      }
    ]
  },
  "captured724": {
    "name": "Decidueye",
    "color": "#78c850",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature724",
    "learnset": [
      "signature724"
    ],
    "line": [
      {
        "dex": 724,
        "name": "Decidueye",
        "types": [
          "grass",
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured725": {
    "name": "Litten",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 1
    },
    "signature": "signature725",
    "learnset": [
      "signature725"
    ],
    "line": [
      {
        "dex": 725,
        "name": "Litten",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 726,
        "name": "Torracat",
        "types": [
          "fire"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.1,
          "armor": 1
        }
      },
      {
        "dex": 727,
        "name": "Incineroar",
        "types": [
          "fire",
          "dark"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.22,
          "armor": 1
        }
      }
    ]
  },
  "captured726": {
    "name": "Torracat",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature726",
    "learnset": [
      "signature726"
    ],
    "line": [
      {
        "dex": 726,
        "name": "Torracat",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 727,
        "name": "Incineroar",
        "types": [
          "fire",
          "dark"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.22,
          "armor": 1
        }
      }
    ]
  },
  "captured727": {
    "name": "Incineroar",
    "color": "#f08030",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature727",
    "learnset": [
      "signature727"
    ],
    "line": [
      {
        "dex": 727,
        "name": "Incineroar",
        "types": [
          "fire",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured728": {
    "name": "Popplio",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature728",
    "learnset": [
      "signature728"
    ],
    "line": [
      {
        "dex": 728,
        "name": "Popplio",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 729,
        "name": "Brionne",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "regen": 0.3,
          "area": 0.05
        }
      },
      {
        "dex": 730,
        "name": "Primarina",
        "types": [
          "water",
          "fairy"
        ],
        "bonus": {
          "maxHp": 40,
          "regen": 0.5,
          "might": 0.15,
          "area": 0.1
        }
      }
    ]
  },
  "captured729": {
    "name": "Brionne",
    "color": "#6890f0",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature729",
    "learnset": [
      "signature729"
    ],
    "line": [
      {
        "dex": 729,
        "name": "Brionne",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 730,
        "name": "Primarina",
        "types": [
          "water",
          "fairy"
        ],
        "bonus": {
          "maxHp": 40,
          "regen": 0.5,
          "might": 0.15,
          "area": 0.1
        }
      }
    ]
  },
  "captured730": {
    "name": "Primarina",
    "color": "#6890f0",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -1
    },
    "signature": "signature730",
    "learnset": [
      "signature730"
    ],
    "line": [
      {
        "dex": 730,
        "name": "Primarina",
        "types": [
          "water",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured731": {
    "name": "Pikipek",
    "color": "#a8a878",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature731",
    "learnset": [
      "signature731"
    ],
    "line": [
      {
        "name": "Pikipek",
        "dex": 731,
        "types": [
          "normal",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured734": {
    "name": "Yungoos",
    "color": "#a8a878",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature734",
    "learnset": [
      "signature734"
    ],
    "line": [
      {
        "name": "Yungoos",
        "dex": 734,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured736": {
    "name": "Grubbin",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature736",
    "learnset": [
      "signature736"
    ],
    "line": [
      {
        "name": "Grubbin",
        "dex": 736,
        "types": [
          "bug"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Charjabug",
        "dex": 737,
        "types": [
          "bug",
          "electric"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "armor": 1,
          "might": 0.06
        }
      },
      {
        "name": "Vikavolt",
        "dex": 738,
        "types": [
          "bug",
          "electric"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.2,
          "area": 0.15
        }
      }
    ]
  },
  "captured737": {
    "name": "Charjabug",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature737",
    "learnset": [
      "signature737"
    ],
    "line": [
      {
        "name": "Charjabug",
        "dex": 737,
        "types": [
          "bug",
          "electric"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Vikavolt",
        "dex": 738,
        "types": [
          "bug",
          "electric"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.2,
          "area": 0.15
        }
      }
    ]
  },
  "captured738": {
    "name": "Vikavolt",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature738",
    "learnset": [
      "signature738"
    ],
    "line": [
      {
        "name": "Vikavolt",
        "dex": 738,
        "types": [
          "bug",
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured739": {
    "name": "Crabrawler",
    "color": "#c03028",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature739",
    "learnset": [
      "signature739"
    ],
    "line": [
      {
        "name": "Crabrawler",
        "dex": 739,
        "types": [
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured742": {
    "name": "Cutiefly",
    "color": "#a8b820",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature742",
    "learnset": [
      "signature742"
    ],
    "line": [
      {
        "name": "Cutiefly",
        "dex": 742,
        "types": [
          "bug",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured744": {
    "name": "Rockruff",
    "color": "#b8a038",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature744",
    "learnset": [
      "signature744"
    ],
    "line": [
      {
        "name": "Rockruff",
        "dex": 744,
        "types": [
          "rock"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Lycanroc",
        "dex": 745,
        "types": [
          "rock"
        ],
        "bonus": {
          "maxHp": 55,
          "might": 0.25,
          "speed": 5,
          "armor": 1
        }
      }
    ]
  },
  "captured745": {
    "name": "Lycanroc",
    "color": "#b8a038",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": 0
    },
    "signature": "signature745",
    "learnset": [
      "signature745"
    ],
    "line": [
      {
        "name": "Lycanroc",
        "dex": 745,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured749": {
    "name": "Mudbray",
    "color": "#e0c068",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature749",
    "learnset": [
      "signature749"
    ],
    "line": [
      {
        "name": "Mudbray",
        "dex": 749,
        "types": [
          "ground"
        ],
        "bonus": {}
      }
    ]
  },
  "captured753": {
    "name": "Fomantis",
    "color": "#78c850",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature753",
    "learnset": [
      "signature753"
    ],
    "line": [
      {
        "name": "Fomantis",
        "dex": 753,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured758": {
    "name": "Salazzle",
    "color": "#a040a0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature758",
    "learnset": [
      "signature758"
    ],
    "line": [
      {
        "name": "Salazzle",
        "dex": 758,
        "types": [
          "poison",
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured759": {
    "name": "Stufful",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature759",
    "learnset": [
      "signature759"
    ],
    "line": [
      {
        "name": "Stufful",
        "dex": 759,
        "types": [
          "normal",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured760": {
    "name": "Bewear",
    "color": "#a8a878",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 1
    },
    "signature": "signature760",
    "learnset": [
      "signature760"
    ],
    "line": [
      {
        "name": "Bewear",
        "dex": 760,
        "types": [
          "normal",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured777": {
    "name": "Togedemaru",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature777",
    "learnset": [
      "signature777"
    ],
    "line": [
      {
        "name": "Togedemaru",
        "dex": 777,
        "types": [
          "electric",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured778": {
    "name": "Mimikyu",
    "color": "#705898",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature778",
    "learnset": [
      "signature778"
    ],
    "line": [
      {
        "name": "Mimikyu",
        "dex": 778,
        "types": [
          "ghost",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured782": {
    "name": "Jangmo-o",
    "color": "#7038f8",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature782",
    "learnset": [
      "signature782"
    ],
    "line": [
      {
        "name": "Jangmo-o",
        "dex": 782,
        "types": [
          "dragon"
        ],
        "bonus": {}
      }
    ]
  },
  "captured810": {
    "name": "Grookey",
    "color": "#78c850",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": 2
    },
    "signature": "signature810",
    "learnset": [
      "signature810"
    ],
    "line": [
      {
        "dex": 810,
        "name": "Grookey",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 811,
        "name": "Thwackey",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.08,
          "area": 0.05
        }
      },
      {
        "dex": 812,
        "name": "Rillaboom",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.18,
          "area": 0.15,
          "armor": 1
        }
      }
    ]
  },
  "captured811": {
    "name": "Thwackey",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.025,
      "speed": 3
    },
    "signature": "signature811",
    "learnset": [
      "signature811"
    ],
    "line": [
      {
        "dex": 811,
        "name": "Thwackey",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 812,
        "name": "Rillaboom",
        "types": [
          "grass"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.18,
          "area": 0.15,
          "armor": 1
        }
      }
    ]
  },
  "captured812": {
    "name": "Rillaboom",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature812",
    "learnset": [
      "signature812"
    ],
    "line": [
      {
        "dex": 812,
        "name": "Rillaboom",
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured813": {
    "name": "Scorbunny",
    "color": "#f08030",
    "stats": {
      "maxHp": 12,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature813",
    "learnset": [
      "signature813"
    ],
    "line": [
      {
        "dex": 813,
        "name": "Scorbunny",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 814,
        "name": "Raboot",
        "types": [
          "fire"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "speed": 3,
          "might": 0.1
        }
      },
      {
        "dex": 815,
        "name": "Cinderace",
        "types": [
          "fire"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 5,
          "might": 0.22,
          "area": 0.1
        }
      }
    ]
  },
  "captured814": {
    "name": "Raboot",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature814",
    "learnset": [
      "signature814"
    ],
    "line": [
      {
        "dex": 814,
        "name": "Raboot",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 815,
        "name": "Cinderace",
        "types": [
          "fire"
        ],
        "bonus": {
          "maxHp": 35,
          "speed": 5,
          "might": 0.22,
          "area": 0.1
        }
      }
    ]
  },
  "captured815": {
    "name": "Cinderace",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 0
    },
    "signature": "signature815",
    "learnset": [
      "signature815"
    ],
    "line": [
      {
        "dex": 815,
        "name": "Cinderace",
        "types": [
          "fire"
        ],
        "bonus": {}
      }
    ]
  },
  "captured816": {
    "name": "Sobble",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature816",
    "learnset": [
      "signature816"
    ],
    "line": [
      {
        "dex": 816,
        "name": "Sobble",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 817,
        "name": "Drizzile",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "might": 0.1,
          "projectileSpeed": 0.1
        }
      },
      {
        "dex": 818,
        "name": "Inteleon",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.22,
          "projectileSpeed": 0.15,
          "amount": 1
        }
      }
    ]
  },
  "captured817": {
    "name": "Drizzile",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature817",
    "learnset": [
      "signature817"
    ],
    "line": [
      {
        "dex": 817,
        "name": "Drizzile",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 818,
        "name": "Inteleon",
        "types": [
          "water"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.22,
          "projectileSpeed": 0.15,
          "amount": 1
        }
      }
    ]
  },
  "captured818": {
    "name": "Inteleon",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature818",
    "learnset": [
      "signature818"
    ],
    "line": [
      {
        "dex": 818,
        "name": "Inteleon",
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured819": {
    "name": "Skwovet",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature819",
    "learnset": [
      "signature819"
    ],
    "line": [
      {
        "name": "Skwovet",
        "dex": 819,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured821": {
    "name": "Rookidee",
    "color": "#a890f0",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature821",
    "learnset": [
      "signature821"
    ],
    "line": [
      {
        "name": "Rookidee",
        "dex": 821,
        "types": [
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured822": {
    "name": "Corvisquire",
    "color": "#a890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 0
    },
    "signature": "signature822",
    "learnset": [
      "signature822"
    ],
    "line": [
      {
        "name": "Corvisquire",
        "dex": 822,
        "types": [
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured823": {
    "name": "Corviknight",
    "color": "#a890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 1
    },
    "signature": "signature823",
    "learnset": [
      "signature823"
    ],
    "line": [
      {
        "name": "Corviknight",
        "dex": 823,
        "types": [
          "flying",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured827": {
    "name": "Nickit",
    "color": "#705848",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature827",
    "learnset": [
      "signature827"
    ],
    "line": [
      {
        "name": "Nickit",
        "dex": 827,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured828": {
    "name": "Thievul",
    "color": "#705848",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -1
    },
    "signature": "signature828",
    "learnset": [
      "signature828"
    ],
    "line": [
      {
        "name": "Thievul",
        "dex": 828,
        "types": [
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured833": {
    "name": "Chewtle",
    "color": "#6890f0",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": -3
    },
    "signature": "signature833",
    "learnset": [
      "signature833"
    ],
    "line": [
      {
        "name": "Chewtle",
        "dex": 833,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured834": {
    "name": "Drednaw",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature834",
    "learnset": [
      "signature834"
    ],
    "line": [
      {
        "name": "Drednaw",
        "dex": 834,
        "types": [
          "water",
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured835": {
    "name": "Yamper",
    "color": "#f8d030",
    "stats": {
      "maxHp": 4,
      "might": 0,
      "speed": -1
    },
    "signature": "signature835",
    "learnset": [
      "signature835"
    ],
    "line": [
      {
        "name": "Yamper",
        "dex": 835,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured848": {
    "name": "Toxel",
    "color": "#f8d030",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature848",
    "learnset": [
      "signature848"
    ],
    "line": [
      {
        "name": "Toxel",
        "dex": 848,
        "types": [
          "electric",
          "poison"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Toxtricity",
        "dex": 849,
        "types": [
          "electric",
          "poison"
        ],
        "bonus": {
          "maxHp": 45,
          "might": 0.24,
          "area": 0.1,
          "statusDamage": 0.2
        }
      }
    ]
  },
  "captured849": {
    "name": "Toxtricity",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -1
    },
    "signature": "signature849",
    "learnset": [
      "signature849"
    ],
    "line": [
      {
        "name": "Toxtricity",
        "dex": 849,
        "types": [
          "electric",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured850": {
    "name": "Sizzlipede",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": 0
    },
    "signature": "signature850",
    "learnset": [
      "signature850"
    ],
    "line": [
      {
        "name": "Sizzlipede",
        "dex": 850,
        "types": [
          "fire",
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured851": {
    "name": "Centiskorch",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature851",
    "learnset": [
      "signature851"
    ],
    "line": [
      {
        "name": "Centiskorch",
        "dex": 851,
        "types": [
          "fire",
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured854": {
    "name": "Sinistea",
    "color": "#705898",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature854",
    "learnset": [
      "signature854"
    ],
    "line": [
      {
        "name": "Sinistea",
        "dex": 854,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured855": {
    "name": "Polteageist",
    "color": "#705898",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": -2
    },
    "signature": "signature855",
    "learnset": [
      "signature855"
    ],
    "line": [
      {
        "name": "Polteageist",
        "dex": 855,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured859": {
    "name": "Impidimp",
    "color": "#705848",
    "stats": {
      "maxHp": 4,
      "might": 0.1,
      "speed": 2
    },
    "signature": "signature859",
    "learnset": [
      "signature859"
    ],
    "line": [
      {
        "name": "Impidimp",
        "dex": 859,
        "types": [
          "dark",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured860": {
    "name": "Morgrem",
    "color": "#705848",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 3
    },
    "signature": "signature860",
    "learnset": [
      "signature860"
    ],
    "line": [
      {
        "name": "Morgrem",
        "dex": 860,
        "types": [
          "dark",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured861": {
    "name": "Grimmsnarl",
    "color": "#705848",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": -3
    },
    "signature": "signature861",
    "learnset": [
      "signature861"
    ],
    "line": [
      {
        "name": "Grimmsnarl",
        "dex": 861,
        "types": [
          "dark",
          "fairy"
        ],
        "bonus": {}
      }
    ]
  },
  "captured885": {
    "name": "Dreepy",
    "color": "#7038f8",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 0
    },
    "signature": "signature885",
    "learnset": [
      "signature885"
    ],
    "line": [
      {
        "name": "Dreepy",
        "dex": 885,
        "types": [
          "dragon",
          "ghost"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Drakloak",
        "dex": 886,
        "types": [
          "dragon",
          "ghost"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 20,
          "might": 0.1,
          "projectileSpeed": 0.1
        }
      },
      {
        "name": "Dragapult",
        "dex": 887,
        "types": [
          "dragon",
          "ghost"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.22,
          "speed": 6,
          "amount": 1
        }
      }
    ]
  },
  "captured886": {
    "name": "Drakloak",
    "color": "#7038f8",
    "stats": {
      "maxHp": 16,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature886",
    "learnset": [
      "signature886"
    ],
    "line": [
      {
        "name": "Drakloak",
        "dex": 886,
        "types": [
          "dragon",
          "ghost"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Dragapult",
        "dex": 887,
        "types": [
          "dragon",
          "ghost"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.22,
          "speed": 6,
          "amount": 1
        }
      }
    ]
  },
  "captured887": {
    "name": "Dragapult",
    "color": "#7038f8",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature887",
    "learnset": [
      "signature887"
    ],
    "line": [
      {
        "name": "Dragapult",
        "dex": 887,
        "types": [
          "dragon",
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured906": {
    "name": "Sprigatito",
    "color": "#78c850",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature906",
    "learnset": [
      "signature906"
    ],
    "line": [
      {
        "dex": 906,
        "name": "Sprigatito",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 907,
        "name": "Floragato",
        "types": [
          "grass"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "might": 0.08,
          "cooldown": -0.03
        }
      },
      {
        "dex": 908,
        "name": "Meowscarada",
        "types": [
          "grass",
          "dark"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.2,
          "speed": 4,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured907": {
    "name": "Floragato",
    "color": "#78c850",
    "stats": {
      "maxHp": 4,
      "might": 0.05,
      "speed": 1
    },
    "signature": "signature907",
    "learnset": [
      "signature907"
    ],
    "line": [
      {
        "dex": 907,
        "name": "Floragato",
        "types": [
          "grass"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 908,
        "name": "Meowscarada",
        "types": [
          "grass",
          "dark"
        ],
        "bonus": {
          "maxHp": 35,
          "might": 0.2,
          "speed": 4,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured908": {
    "name": "Meowscarada",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.07500000000000001,
      "speed": 2
    },
    "signature": "signature908",
    "learnset": [
      "signature908"
    ],
    "line": [
      {
        "dex": 908,
        "name": "Meowscarada",
        "types": [
          "grass",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured909": {
    "name": "Fuecoco",
    "color": "#f08030",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 3
    },
    "signature": "signature909",
    "learnset": [
      "signature909"
    ],
    "line": [
      {
        "dex": 909,
        "name": "Fuecoco",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 910,
        "name": "Crocalor",
        "types": [
          "fire"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 35,
          "might": 0.08,
          "regen": 0.15
        }
      },
      {
        "dex": 911,
        "name": "Skeledirge",
        "types": [
          "fire",
          "ghost"
        ],
        "bonus": {
          "maxHp": 60,
          "might": 0.18,
          "regen": 0.3,
          "area": 0.1
        }
      }
    ]
  },
  "captured910": {
    "name": "Crocalor",
    "color": "#f08030",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -3
    },
    "signature": "signature910",
    "learnset": [
      "signature910"
    ],
    "line": [
      {
        "dex": 910,
        "name": "Crocalor",
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 911,
        "name": "Skeledirge",
        "types": [
          "fire",
          "ghost"
        ],
        "bonus": {
          "maxHp": 60,
          "might": 0.18,
          "regen": 0.3,
          "area": 0.1
        }
      }
    ]
  },
  "captured911": {
    "name": "Skeledirge",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0.025,
      "speed": -2
    },
    "signature": "signature911",
    "learnset": [
      "signature911"
    ],
    "line": [
      {
        "dex": 911,
        "name": "Skeledirge",
        "types": [
          "fire",
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured912": {
    "name": "Quaxly",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": -1
    },
    "signature": "signature912",
    "learnset": [
      "signature912"
    ],
    "line": [
      {
        "dex": 912,
        "name": "Quaxly",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 913,
        "name": "Quaxwell",
        "types": [
          "water"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 25,
          "speed": 3,
          "might": 0.08
        }
      },
      {
        "dex": 914,
        "name": "Quaquaval",
        "types": [
          "water",
          "fighting"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 5,
          "might": 0.2,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured913": {
    "name": "Quaxwell",
    "color": "#6890f0",
    "stats": {
      "maxHp": 4,
      "might": 0.07500000000000001,
      "speed": 0
    },
    "signature": "signature913",
    "learnset": [
      "signature913"
    ],
    "line": [
      {
        "dex": 913,
        "name": "Quaxwell",
        "types": [
          "water"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "dex": 914,
        "name": "Quaquaval",
        "types": [
          "water",
          "fighting"
        ],
        "bonus": {
          "maxHp": 40,
          "speed": 5,
          "might": 0.2,
          "cooldown": -0.05
        }
      }
    ]
  },
  "captured914": {
    "name": "Quaquaval",
    "color": "#6890f0",
    "stats": {
      "maxHp": 8,
      "might": 0.1,
      "speed": 1
    },
    "signature": "signature914",
    "learnset": [
      "signature914"
    ],
    "line": [
      {
        "dex": 914,
        "name": "Quaquaval",
        "types": [
          "water",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured915": {
    "name": "Lechonk",
    "color": "#a8a878",
    "stats": {
      "maxHp": 12,
      "might": 0,
      "speed": 2
    },
    "signature": "signature915",
    "learnset": [
      "signature915"
    ],
    "line": [
      {
        "name": "Lechonk",
        "dex": 915,
        "types": [
          "normal"
        ],
        "bonus": {}
      }
    ]
  },
  "captured917": {
    "name": "Tarountula",
    "color": "#a8b820",
    "stats": {
      "maxHp": 20,
      "might": 0.05,
      "speed": -3
    },
    "signature": "signature917",
    "learnset": [
      "signature917"
    ],
    "line": [
      {
        "name": "Tarountula",
        "dex": 917,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured918": {
    "name": "Spidops",
    "color": "#a8b820",
    "stats": {
      "maxHp": 0,
      "might": 0.07500000000000001,
      "speed": -2
    },
    "signature": "signature918",
    "learnset": [
      "signature918"
    ],
    "line": [
      {
        "name": "Spidops",
        "dex": 918,
        "types": [
          "bug"
        ],
        "bonus": {}
      }
    ]
  },
  "captured920": {
    "name": "Lokix",
    "color": "#a8b820",
    "stats": {
      "maxHp": 8,
      "might": 0,
      "speed": 0
    },
    "signature": "signature920",
    "learnset": [
      "signature920"
    ],
    "line": [
      {
        "name": "Lokix",
        "dex": 920,
        "types": [
          "bug",
          "dark"
        ],
        "bonus": {}
      }
    ]
  },
  "captured921": {
    "name": "Pawmi",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.025,
      "speed": 1
    },
    "signature": "signature921",
    "learnset": [
      "signature921"
    ],
    "line": [
      {
        "name": "Pawmi",
        "dex": 921,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured922": {
    "name": "Pawmo",
    "color": "#f8d030",
    "stats": {
      "maxHp": 16,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature922",
    "learnset": [
      "signature922"
    ],
    "line": [
      {
        "name": "Pawmo",
        "dex": 922,
        "types": [
          "electric",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured923": {
    "name": "Pawmot",
    "color": "#f8d030",
    "stats": {
      "maxHp": 20,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature923",
    "learnset": [
      "signature923"
    ],
    "line": [
      {
        "name": "Pawmot",
        "dex": 923,
        "types": [
          "electric",
          "fighting"
        ],
        "bonus": {}
      }
    ]
  },
  "captured932": {
    "name": "Nacli",
    "color": "#b8a038",
    "stats": {
      "maxHp": 8,
      "might": 0.05,
      "speed": -2
    },
    "signature": "signature932",
    "learnset": [
      "signature932"
    ],
    "line": [
      {
        "name": "Nacli",
        "dex": 932,
        "types": [
          "rock"
        ],
        "bonus": {}
      }
    ]
  },
  "captured935": {
    "name": "Charcadet",
    "color": "#f08030",
    "stats": {
      "maxHp": 20,
      "might": 0,
      "speed": 1
    },
    "signature": "signature935",
    "learnset": [
      "signature935"
    ],
    "line": [
      {
        "name": "Charcadet",
        "dex": 935,
        "types": [
          "fire"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Armarouge",
        "dex": 936,
        "types": [
          "fire",
          "psychic"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.25,
          "area": 0.1,
          "projectileSpeed": 0.15
        }
      }
    ]
  },
  "captured936": {
    "name": "Armarouge",
    "color": "#f08030",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": 2
    },
    "signature": "signature936",
    "learnset": [
      "signature936"
    ],
    "line": [
      {
        "name": "Armarouge",
        "dex": 936,
        "types": [
          "fire",
          "psychic"
        ],
        "bonus": {}
      }
    ]
  },
  "captured939": {
    "name": "Bellibolt",
    "color": "#f8d030",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": -2
    },
    "signature": "signature939",
    "learnset": [
      "signature939"
    ],
    "line": [
      {
        "name": "Bellibolt",
        "dex": 939,
        "types": [
          "electric"
        ],
        "bonus": {}
      }
    ]
  },
  "captured940": {
    "name": "Wattrel",
    "color": "#f8d030",
    "stats": {
      "maxHp": 16,
      "might": 0,
      "speed": -1
    },
    "signature": "signature940",
    "learnset": [
      "signature940"
    ],
    "line": [
      {
        "name": "Wattrel",
        "dex": 940,
        "types": [
          "electric",
          "flying"
        ],
        "bonus": {}
      }
    ]
  },
  "captured957": {
    "name": "Tinkatink",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 12,
      "might": 0.05,
      "speed": 2
    },
    "signature": "signature957",
    "learnset": [
      "signature957"
    ],
    "line": [
      {
        "name": "Tinkatink",
        "dex": 957,
        "types": [
          "fairy",
          "steel"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Tinkatuff",
        "dex": 958,
        "types": [
          "fairy",
          "steel"
        ],
        "evolveAt": 28,
        "bonus": {
          "maxHp": 30,
          "might": 0.1,
          "area": 0.05
        }
      },
      {
        "name": "Tinkaton",
        "dex": 959,
        "types": [
          "fairy",
          "steel"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "area": 0.15,
          "armor": 1
        }
      }
    ]
  },
  "captured958": {
    "name": "Tinkatuff",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 16,
      "might": 0.07500000000000001,
      "speed": 3
    },
    "signature": "signature958",
    "learnset": [
      "signature958"
    ],
    "line": [
      {
        "name": "Tinkatuff",
        "dex": 958,
        "types": [
          "fairy",
          "steel"
        ],
        "evolveAt": 12,
        "bonus": {}
      },
      {
        "name": "Tinkaton",
        "dex": 959,
        "types": [
          "fairy",
          "steel"
        ],
        "bonus": {
          "maxHp": 50,
          "might": 0.22,
          "area": 0.15,
          "armor": 1
        }
      }
    ]
  },
  "captured959": {
    "name": "Tinkaton",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 20,
      "might": 0.1,
      "speed": -3
    },
    "signature": "signature959",
    "learnset": [
      "signature959"
    ],
    "line": [
      {
        "name": "Tinkaton",
        "dex": 959,
        "types": [
          "fairy",
          "steel"
        ],
        "bonus": {}
      }
    ]
  },
  "captured960": {
    "name": "Wiglett",
    "color": "#6890f0",
    "stats": {
      "maxHp": 0,
      "might": 0,
      "speed": -2
    },
    "signature": "signature960",
    "learnset": [
      "signature960"
    ],
    "line": [
      {
        "name": "Wiglett",
        "dex": 960,
        "types": [
          "water"
        ],
        "bonus": {}
      }
    ]
  },
  "captured969": {
    "name": "Glimmet",
    "color": "#b8a038",
    "stats": {
      "maxHp": 12,
      "might": 0.1,
      "speed": 0
    },
    "signature": "signature969",
    "learnset": [
      "signature969"
    ],
    "line": [
      {
        "name": "Glimmet",
        "dex": 969,
        "types": [
          "rock",
          "poison"
        ],
        "bonus": {}
      }
    ]
  },
  "captured972": {
    "name": "Houndstone",
    "color": "#705898",
    "stats": {
      "maxHp": 0,
      "might": 0.05,
      "speed": 3
    },
    "signature": "signature972",
    "learnset": [
      "signature972"
    ],
    "line": [
      {
        "name": "Houndstone",
        "dex": 972,
        "types": [
          "ghost"
        ],
        "bonus": {}
      }
    ]
  },
  "captured996": {
    "name": "Frigibax",
    "color": "#7038f8",
    "stats": {
      "maxHp": 0,
      "might": 0.025,
      "speed": -1
    },
    "signature": "signature996",
    "learnset": [
      "signature996"
    ],
    "line": [
      {
        "name": "Frigibax",
        "dex": 996,
        "types": [
          "dragon",
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured470": {
    "name": "Leafeon",
    "color": "#78c850",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature470",
    "learnset": [
      "signature470"
    ],
    "line": [
      {
        "name": "Leafeon",
        "dex": 470,
        "types": [
          "grass"
        ],
        "bonus": {}
      }
    ]
  },
  "captured471": {
    "name": "Glaceon",
    "color": "#98d8d8",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature471",
    "learnset": [
      "signature471"
    ],
    "line": [
      {
        "name": "Glaceon",
        "dex": 471,
        "types": [
          "ice"
        ],
        "bonus": {}
      }
    ]
  },
  "captured700": {
    "name": "Sylveon",
    "color": "#ee99ac",
    "stats": {
      "maxHp": 8,
      "might": 0.025,
      "speed": 0
    },
    "signature": "signature700",
    "learnset": [
      "signature700"
    ],
    "line": [
      {
        "name": "Sylveon",
        "dex": 700,
        "types": [
          "fairy"
        ],
        "bonus": {}
      }
    ]
  }
} as const satisfies Record<string,PlayableDef>

export type CapturedPlayableId = keyof typeof CAPTURE_PLAYABLE
