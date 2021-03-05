export default {
  'cornerDeath' : {
    "game": {
      "id": "corner-death-stub"
    },
    "turn": 4,
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 7,
          "y": 6
        }
      ],
      "snakes": [
        {
          "id": "me-snake",
          "name": "Me",
          "health": 90,
          "body": [
            {
              "x": 1,
              "y": 0
            },
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 1,
              "y": 2
            },
           {
              "x": 1,
              "y": 3
            }
          ]
        },
        {
          "id": "opponent-1",
          "name": "Enemy",
          "health": 90,
          "body": [
            {
              "x": 2,
              "y": 0
            },
            {
              "x": 3,
              "y": 0
            },
            {
              "x": 3,
              "y": 1
            }
          ]
        }
      ]
    },
    "you": {
      "id": "me-snake",
      "name": "Me",
      "health": 90,
      "body": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        }
      ]
    }
  },

  'starveDeath' : {
    "game": {
      "id": "corner-death-stub"
    },
    "turn": 4,
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 1,
          "y": 0
        }
      ],
      "snakes": [
        {
          "id": "me-snake",
          "name": "Me",
          "health": 1,
          "body": [
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 1,
              "y": 2
            },
           {
              "x": 1,
              "y": 3
            }
          ]
        },
        {
          "id": "opponent-1",
          "name": "Enemy",
          "health": 90,
          "body": [
            {
              "x": 2,
              "y": 0
            },
            {
              "x": 3,
              "y": 0
            },
            {
              "x": 3,
              "y": 1
            }
          ]
        }
      ]
    },
    "you": {
      "id": "me-snake",
      "name": "Me",
      "health": 1,
      "body": [
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        }
      ]
    }
  },

  "cutoffOpponent" : {
    "game": {
      "id": "cutoff-stub"
    },
    "turn": 381,
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 9,
          "y": 3
        },
        {
          "x": 5,
          "y": 8
        },
        {
          "x": 8,
          "y": 4
        }
      ],
      "snakes": [
        {
          "id": "me-snake",
          "name": "Me",
          "health": 30,
          "body": [
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 2,
              "y": 8
            },
           {
              "x": 2,
              "y": 7
            },
           {
              "x": 2,
              "y": 6
            },
           {
              "x": 2,
              "y": 5
            },
           {
              "x": 1,
              "y": 5
            },
           {
              "x": 1,
              "y": 4
            },
           {
              "x": 1,
              "y": 3
            },
           {
              "x": 2,
              "y": 3
            },
           {
              "x": 3,
              "y": 3
            },
           {
              "x": 3,
              "y": 4
            },
           {
              "x": 3,
              "y": 5
            },
           {
              "x": 4,
              "y": 5
            }
          ]
        },
        {
          "id": "opponent-1",
          "name": "Enemy",
          "health": 96,
          "body": [
            {"x":1,"y":9},
            {"x":1,"y":8},
            {"x":0,"y":8},
            {"x":0,"y":7},
            {"x":0,"y":6},
            {"x":0,"y":5},
            {"x":0,"y":4},
            {"x":0,"y":3},
            {"x":0,"y":2},
            {"x":0,"y":1},
            {"x":1,"y":1},
            {"x":1,"y":2},
            {"x":2,"y":2},
            {"x":2,"y":1},
            {"x":3,"y":1},
            {"x":3,"y":0},
            {"x":4,"y":0},
            {"x":5,"y":0},
            {"x":6,"y":0},
            {"x":7,"y":0},
            {"x":8,"y":0},
            {"x":9,"y":0}
          ]
        }
      ]
    },
    "you": {
      "id": "me-snake",
      "name": "Me",
      "health": 30,
      "body": [
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        }
      ]
    }
  },

  "dodgeHead" : {
    "game": {
      "id": "dodge-head-stub"
    },
    "turn": 62,
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 9,
          "y": 1
        }
      ],
      "snakes": [
        {
          "id": "me-snake",
          "name": "Me",
          "health": 67,
          "body": [
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 2,
              "y": 5
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 2,
              "y": 3
            }
          ]
        },
        {
          "id": "opponent-1",
          "name": "l|lIl|IlIIIl|lIIIllIlll||lIl 2",
          "body": [
            {
              "x": 8,
              "y": 6
            },
            {
              "x": 7,
              "y": 6
            },
            {
              "x": 7,
              "y": 5
            }
          ],
          "health": 38
        },
        {
          "id": "opponent-2",
          "name": "Takumi",
          "body": [
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 5,
              "y": 7
            },
            {
              "x": 5,
              "y": 8
            }
          ],
          "health": 60
        },
        {
          "id": "opponent-3",
          "name": "Test Snake Please Ignore",
          "body": [
            {
              "x": 8,
              "y": 4
            },
            {
              "x": 8,
              "y": 3
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 8,
              "y": 1
            }
          ],
          "health": 69
        },
        {
          "id": "opponent-4",
          "name": "d1",
          "body": [
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 7,
              "y": 7
            },
            {
              "x": 8,
              "y": 7
            },
            {
              "x": 8,
              "y": 8
            },
            {
              "x": 8,
              "y": 9
            },
            {
              "x": 9,
              "y": 9
            }
          ],
          "health": 64
        }
      ]
    },
    "you": {
      "id": "me-snake",
      "name": "Me",
      "health": 67,
      "body": [
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        }
      ]
    }
  },

  "approachHead" : {
    "game": {
      "id": "approach-head-stub"
    },
    "turn": 78,
    "you": {
      "id": "gs_vg4rxqssvwvx8tgtpx4hgrsf",
      "name": "opietoo",
      "url": "http://3.84.89.145:5001",
      "body": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 5
        },
        {
          "x": 9,
          "y": 5
        },
        {
          "x": 9,
          "y": 6
        },
        {
          "x": 8,
          "y": 6
        },
        {
          "x": 8,
          "y": 7
        }
      ],
      "health": 90,
      "death": null,
      "color": "#ff0000"
    },
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 9,
          "y": 4
        },
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 8,
          "y": 8
        }
      ],
      "snakes": [
        {
          "id": "gs_rgccy86wkpvh6j69cv3kwqfb",
          "name": "kuhgugger",
          "url": "http://klostein.woo.gl:8083",
          "body": [
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 8
            },
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 7,
              "y": 9
            },
            {
              "x": 6,
              "y": 9
            },
            {
              "x": 5,
              "y": 9
            },
            {
              "x": 5,
              "y": 8
            },
            {
              "x": 5,
              "y": 7
            },
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 2,
              "y": 9
            },
            {
              "x": 1,
              "y": 9
            },
            {
              "x": 0,
              "y": 9
            }
          ],
          "health": 99,
          "death": null,
          "color": "#ff00ff"
        },
        {
          "id": "gs_jdqbpqh9bgkhbhpg4bvpddt4",
          "name": "l|lil|iliiil|liiillilll||lil 2",
          "url": "http://3.95.20.92:8081/",
          "body": [
            {
              "x": 1,
              "y": 6
            },
            {
              "x": 1,
              "y": 5
            },
            {
              "x": 0,
              "y": 5
            },
            {
              "x": 0,
              "y": 4
            }
          ],
          "health": 100,
          "death": null,
          "color": "#92f442"
        },
        {
          "id": "gs_vg4rxqssvwvx8tgtpx4hgrsf",
          "name": "opietoo",
          "url": "http://3.84.89.145:5001",
          "body": [
            {
              "x": 7,
              "y": 3
            },
            {
              "x": 7,
              "y": 4
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 8,
              "y": 5
            },
            {
              "x": 9,
              "y": 5
            },
            {
              "x": 9,
              "y": 6
            },
            {
              "x": 8,
              "y": 6
            },
            {
              "x": 8,
              "y": 7
            }
          ],
          "health": 90,
          "death": null,
          "color": "#ff0000"
        },
        {
          "id": "gs_969yjcx8gwwgj84qw9fphrdc",
          "name": "arkantos",
          "url": "https://young-caverns-49481.herokuapp.com/",
          "body": [
            {
              "x": 9,
              "y": 2
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 6,
              "y": 2
            },
            {
              "x": 6,
              "y": 1
            }
          ],
          "health": 58,
          "death": null,
          "color": "#5f7ba8"
        },
        {
          "id": "gs_fbcgkw9whphvhbskjpckhcyt",
          "name": "jamjan",
          "url": "https://jsnek.herokuapp.com",
          "body": [
            {
              "x": 3,
              "y": 2
            },
            {
              "x": 3,
              "y": 3
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 4,
              "y": 4
            },
            {
              "x": 5,
              "y": 4
            },
            {
              "x": 5,
              "y": 5
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 3,
              "y": 4
            }
          ],
          "health": 87,
          "death": null,
          "color": "#75cedd"
        }
      ]
    }
  },

  "eatHead" : {
    "game": {
      "id": "eat-head-stub"
    },
    "turn": 78,
    "you": {
      "id": "gs_vg4rxqssvwvx8tgtpx4hgrsf",
      "name": "opietoo",
      "url": "http://3.84.89.145:5001",
      "body": [
        {
          "x": 9,
          "y": 3
        },
        {
          "x": 8,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 5
        },
        {
          "x": 9,
          "y": 5
        },
        {
          "x": 9,
          "y": 6
        },
        {
          "x": 8,
          "y": 6
        },
        {
          "x": 8,
          "y": 7
        }
      ],
      "health": 90,
      "death": null,
      "color": "#ff0000"
    },
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 9,
          "y": 4
        },
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 8,
          "y": 8
        }
      ],
      "snakes": [
        {
          "id": "gs_rgccy86wkpvh6j69cv3kwqfb",
          "name": "kuhgugger",
          "url": "http://klostein.woo.gl:8083",
          "body": [
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 8
            },
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 7,
              "y": 9
            },
            {
              "x": 6,
              "y": 9
            },
            {
              "x": 5,
              "y": 9
            },
            {
              "x": 5,
              "y": 8
            },
            {
              "x": 5,
              "y": 7
            },
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 2,
              "y": 9
            },
            {
              "x": 1,
              "y": 9
            },
            {
              "x": 0,
              "y": 9
            }
          ],
          "health": 99,
          "death": null,
          "color": "#ff00ff"
        },
        {
          "id": "gs_jdqbpqh9bgkhbhpg4bvpddt4",
          "name": "l|lil|iliiil|liiillilll||lil 2",
          "url": "http://3.95.20.92:8081/",
          "body": [
            {
              "x": 1,
              "y": 6
            },
            {
              "x": 1,
              "y": 5
            },
            {
              "x": 0,
              "y": 5
            },
            {
              "x": 0,
              "y": 4
            }
          ],
          "health": 100,
          "death": null,
          "color": "#92f442"
        },
        {
          "id": "gs_vg4rxqssvwvx8tgtpx4hgrsf",
          "name": "opietoo",
          "url": "http://3.84.89.145:5001",
          "body": [
            {
              "x": 9,
              "y": 3
            },
            {
              "x": 8,
              "y": 3
            },
            {
              "x": 7,
              "y": 3
            },
            {
              "x": 7,
              "y": 4
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 8,
              "y": 5
            },
            {
              "x": 9,
              "y": 5
            },
            {
              "x": 9,
              "y": 6
            },
            {
              "x": 8,
              "y": 6
            },
            {
              "x": 8,
              "y": 7
            }
          ],
          "health": 90,
          "death": null,
          "color": "#ff0000"
        },
        {
          "id": "gs_969yjcx8gwwgj84qw9fphrdc",
          "name": "arkantos",
          "url": "https://young-caverns-49481.herokuapp.com/",
          "body": [
            {
              "x": 9,
              "y": 2
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 6,
              "y": 2
            },
            {
              "x": 6,
              "y": 1
            }
          ],
          "health": 58,
          "death": null,
          "color": "#5f7ba8"
        },
        {
          "id": "gs_fbcgkw9whphvhbskjpckhcyt",
          "name": "jamjan",
          "url": "https://jsnek.herokuapp.com",
          "body": [
            {
              "x": 3,
              "y": 2
            },
            {
              "x": 3,
              "y": 3
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 4,
              "y": 4
            },
            {
              "x": 5,
              "y": 4
            },
            {
              "x": 5,
              "y": 5
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 3,
              "y": 4
            }
          ],
          "health": 87,
          "death": null,
          "color": "#75cedd"
        }
      ]
    }
  },

  "notApproachHead" : {
    "game": {
      "id": "not-approach-head-stub"
    },
    "turn": 84,
    "you": {
      "id": "gs_ftxqrmxf6q6sywtwps7ymgvh",
      "name": "opietoo",
      "url": "http://3.84.89.145:5001",
      "body": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "health": 50,
      "death": null,
      "color": "#ff0000"
    },
    "board": {
      "height": 10,
      "width": 10,
      "food": [
        {
          "x": 9,
          "y": 1
        },
        {
          "x": 0,
          "y": 9
        },
        {
          "x": 1,
          "y": 9
        },
        {
          "x": 9,
          "y": 9
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "snakes": [
        {
          "id": "gs_ktxys4w4kqmjxfqbv8bfyqpr",
          "name": "new go fella",
          "url": "https://dry-reaches-93267.herokuapp.com/",
          "body": [
            {
              "x": 4,
              "y": 1
            },
            {
              "x": 4,
              "y": 2
            },
            {
              "x": 3,
              "y": 2
            },
            {
              "x": 2,
              "y": 2
            },
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 0,
              "y": 0
            }
          ],
          "health": 92,
          "death": null,
          "color": "#75cedd"
        },
        {
          "id": "gs_ftxqrmxf6q6sywtwps7ymgvh",
          "name": "opietoo",
          "url": "http://3.84.89.145:5001",
          "body": [
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 7,
              "y": 3
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 3,
              "y": 3
            },
            {
              "x": 3,
              "y": 4
            }
          ],
          "health": 50,
          "death": null,
          "color": "#ff0000"
        },
        {
          "id": "gs_4crthrxy7mqf8kvcttxjyc8m",
          "name": "test snake please ignore",
          "url": "https://go-battlesnake.herokuapp.com",
          "body": [
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 2,
              "y": 5
            },
            {
              "x": 2,
              "y": 6
            },
            {
              "x": 1,
              "y": 6
            }
          ],
          "health": 97,
          "death": null,
          "color": "#75cedd"
        }
      ]
    }
  },

  "dontKillSelf" : {
    "game": {
      "id": "dont-kill-self-stub"
    },
    "you": {
      "id": "gs_94pxjvypdmp6fckdxj8b7skq",
      "name": "opietoo",
      "url": "http://3.84.89.145:5001",
      "body": [
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 9,
          "y": 8
        }
      ],
      "health": 100,
      "death": null,
      "color": "#ff0000"
    },
    "turn": 0,
    "board": {
      "width": 10,
      "height": 10,
      "food": [
        {
          "x": 8,
          "y": 5
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 9,
          "y": 9
        }
      ],
      "snakes": [
        {
          "id": "gs_c7hrvyprgtvkbxdtxbp49dt7",
          "name": "new go fella",
          "url": "https://dry-reaches-93267.herokuapp.com/",
          "body": [
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 7,
              "y": 2
            }
          ],
          "health": 100,
          "death": null,
          "color": "#75cedd"
        },
        {
          "id": "gs_pfgmrdvk3rxc7rpfbjhmjv6v",
          "name": "l|lil|iliiil|liiillilll||lil 2",
          "url": "http://3.95.20.92:8081/",
          "body": [
            {
              "x": 6,
              "y": 0
            },
            {
              "x": 6,
              "y": 0
            },
            {
              "x": 6,
              "y": 0
            }
          ],
          "health": 100,
          "death": null,
          "color": "#92f442"
        },
        {
          "id": "gs_94pxjvypdmp6fckdxj8b7skq",
          "name": "opietoo",
          "url": "http://3.84.89.145:5001",
          "body": [
            {
              "x": 9,
              "y": 8
            },
            {
              "x": 9,
              "y": 8
            },
            {
              "x": 9,
              "y": 8
            }
          ],
          "health": 100,
          "death": null,
          "color": "#ff0000"
        },
        {
          "id": "gs_hh8kvc6kxmhjkqq6sr87ycph",
          "name": "crystal serpent",
          "url": "http://159.69.240.161:1234/",
          "body": [
            {
              "x": 1,
              "y": 3
            },
            {
              "x": 1,
              "y": 3
            },
            {
              "x": 1,
              "y": 3
            }
          ],
          "health": 100,
          "death": null,
          "color": "ffffff"
        },
        {
          "id": "gs_mqgs88vkr36f6bp9vsgvvcgb",
          "name": "dsnek",
          "url": "https://dsnek.herokuapp.com/",
          "body": [
            {
              "x": 2,
              "y": 3
            },
            {
              "x": 2,
              "y": 3
            },
            {
              "x": 2,
              "y": 3
            }
          ],
          "health": 100,
          "death": null,
          "color": "#ad5302"
        },
        {
          "id": "gs_kdtkktdyvvhkqw4xghsqkftp",
          "name": "snake name",
          "url": "https://battle-snek.appspot.com",
          "body": [
            {
              "x": 8,
              "y": 8
            },
            {
              "x": 8,
              "y": 8
            },
            {
              "x": 8,
              "y": 8
            }
          ],
          "health": 100,
          "death": null,
          "color": "#1ecd3f"
        },
        {
          "id": "gs_rjdhcqcqjbcwmw8mvhj8xhmj",
          "name": "snakerdoodle",
          "url": "https://snakerdoodle.herokuapp.com",
          "body": [
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 7,
              "y": 5
            }
          ],
          "health": 100,
          "death": null,
          "color": "#cdcb1e"
        }
      ]
    }
  },

  "encloseSelf" : {
    "game": {
      "id": "not-enclose-self-stub"
    },
    "turn": 202,
    "you": {
      "id": "gs_fskb8c8gf8fytg4ckdd4cfbv",
      "name": "opietoo",
      "url": "http://3.84.89.145:5001",
      "body": [
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "health": 77,
      "death": null,
      "color": "#ff0000"
    },
    "board": {
      "width": 10,
      "height": 10,
      "food": [
        {
          "x": 9,
          "y": 7
        },
        {
          "x": 9,
          "y": 0
        },
        {
          "x": 9,
          "y": 5
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "snakes": [
        {
          "id": "gs_fskb8c8gf8fytg4ckdd4cfbv",
          "name": "opietoo",
          "url": "http://3.84.89.145:5001",
          "body": [
            {
              "x": 4,
              "y": 4
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 3,
              "y": 4
            }
          ],
          "health": 77,
          "death": null,
          "color": "#ff0000"
        },
        {
          "id": "gs_4tdsmp8gcqgd6gghyvkrxrtb",
          "name": "test snake please ignore",
          "url": "https://go-battlesnake.herokuapp.com",
          "body": [
            {
              "x": 3,
              "y": 6
            },
            {
              "x": 2,
              "y": 6
            },
            {
              "x": 2,
              "y": 5
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 1,
              "y": 4
            },
            {
              "x": 1,
              "y": 3
            },
            {
              "x": 1,
              "y": 2
            }
          ],
          "health": 75,
          "death": null,
          "color": "#75cedd"
        }
      ]
    }
  },
  "optimizeHeadToHead" : {
    "game": {
      "id": "optimize-1v1"
    },
    "turn": 153,
    "you": {
      "id": "gs_cbh8y9gvbfdkwmv87kpcpv98",
      "name": "opietoo",
      "url": "",
      "body": [
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        }
      ],
      "health": 81,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "height": 11,
      "width": 11,
      "food": [
        {
          "x": 1,
          "y": 9
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 10,
          "y": 8
        },
        {
          "x": 2,
          "y": 10
        },
        {
          "x": 6,
          "y": 10
        }
      ],
      "snakes": [
        {
          "id": "gs_cbh8y9gvbfdkwmv87kpcpv98",
          "name": "opietoo",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 4,
              "y": 4
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 4,
              "y": 2
            },
            {
              "x": 3,
              "y": 2
            },
            {
              "x": 2,
              "y": 2
            },
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 1,
              "y": 3
            }
          ],
          "health": 81,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_mxp7fyg96yjvk73d8vwvf9yv",
          "name": "danger nudel",
          "url": "",
          "body": [
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 5,
              "y": 4
            }
          ],
          "health": 56,
          "death": null,
          "color": "#f5de60",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "trapSelf":{
    "game": {
      "id": "trap-self"
    },
    "turn": 309,
    "you": {
      "body": [
        {
          "x": 5,
          "y": 10
        },
        {
          "x": 5,
          "y": 9
        },
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 3,
          "y": 9
        },
        {
          "x": 2,
          "y": 9
        },
        {
          "x": 1,
          "y": 9
        },
        {
          "x": 0,
          "y": 9
        },
        {
          "x": 0,
          "y": 8
        },
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 1,
          "y": 8
        },
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 5,
          "y": 8
        },
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 7,
          "y": 8
        },
        {
          "x": 8,
          "y": 8
        },
        {
          "x": 9,
          "y": 8
        }
      ],
      "color": "#ff0000",
      "death": null,
      "headtype": "",
      "health": 65,
      "id": "gs_d3cmwyfrfgp6pvbvw4dtfxrm",
      "name": "opietoo",
      "tailtype": "",
      "url": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 2,
          "y": 10
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "snakes": [
        {
          "body": [
            {
              "x": 5,
              "y": 10
            },
            {
              "x": 5,
              "y": 9
            },
            {
              "x": 4,
              "y": 9
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 2,
              "y": 9
            },
            {
              "x": 1,
              "y": 9
            },
            {
              "x": 0,
              "y": 9
            },
            {
              "x": 0,
              "y": 8
            },
            {
              "x": 0,
              "y": 7
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 1,
              "y": 8
            },
            {
              "x": 2,
              "y": 8
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 5,
              "y": 8
            },
            {
              "x": 6,
              "y": 8
            },
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 8,
              "y": 8
            },
            {
              "x": 9,
              "y": 8
            }
          ],
          "color": "#ff0000",
          "death": null,
          "headtype": "",
          "health": 65,
          "id": "gs_d3cmwyfrfgp6pvbvw4dtfxrm",
          "name": "opietoo",
          "tailtype": "",
          "url": ""
        },
        {
          "body": [
            {
              "x": 8,
              "y": 7
            },
            {
              "x": 7,
              "y": 7
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 4,
              "y": 2
            },
            {
              "x": 4,
              "y": 1
            },
            {
              "x": 3,
              "y": 1
            },
            {
              "x": 2,
              "y": 1
            },
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 2,
              "y": 2
            },
            {
              "x": 2,
              "y": 3
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 2,
              "y": 5
            }
          ],
          "color": "#bbb088",
          "death": null,
          "headtype": "",
          "health": 94,
          "id": "gs_dmjg9cfkbgcmdbwdgvkpg6bj",
          "name": "secret snake",
          "tailtype": "",
          "url": ""
        }
      ]
    }
  },
  "avoidDangeCenter" : {
    "game": {
      "id": "avoid-danger-center"
    },
    "turn": 36,
    "you": {
      "id": "gs_x7cbdhwqkqm4tc8hpvd3ftrx",
      "name": "opietoo",
      "url": "",
      "body": [
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 3,
          "y": 9
        },
        {
          "x": 2,
          "y": 9
        },
        {
          "x": 1,
          "y": 9
        }
      ],
      "health": 89,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "snakes": [
        {
          "id": "gs_mchmwg3ggmqxxpwvyqwgmkqp",
          "name": "d.va",
          "url": "",
          "body": [
            {
              "x": 2,
              "y": 8
            },
            {
              "x": 1,
              "y": 8
            },
            {
              "x": 0,
              "y": 8
            },
            {
              "x": 0,
              "y": 7
            },
            {
              "x": 0,
              "y": 6
            },
            {
              "x": 1,
              "y": 6
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 2,
              "y": 7
            },
            {
              "x": 3,
              "y": 7
            }
          ],
          "health": 94,
          "death": null,
          "color": "#ee4bb5",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_ykgbdjkjgwc9t6tcsfbdj7sj",
          "name": "mollusk v0",
          "url": "",
          "body": [
            {
              "x": 4,
              "y": 0
            },
            {
              "x": 5,
              "y": 0
            },
            {
              "x": 6,
              "y": 0
            },
            {
              "x": 6,
              "y": 1
            },
            {
              "x": 6,
              "y": 2
            }
          ],
          "health": 87,
          "death": null,
          "color": "#dfff00",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_cqqbyvq8wswggqhrpf9hfhpv",
          "name": "zero cool",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 5
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 3,
              "y": 4
            },
            {
              "x": 2,
              "y": 4
            }
          ],
          "health": 86,
          "death": null,
          "color": "#9557e0",
          "headtype": "beluga",
          "tailtype": "bolt"
        },
        {
          "id": "gs_bqbyjhdmp9xphv3crw86yfhw",
          "name": "snek1",
          "url": "",
          "body": [
            {
              "x": 9,
              "y": 1
            },
            {
              "x": 8,
              "y": 1
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 8,
              "y": 3
            },
            {
              "x": 8,
              "y": 4
            }
          ],
          "health": 99,
          "death": null,
          "color": "#6aa81f",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_x7cbdhwqkqm4tc8hpvd3ftrx",
          "name": "opietoo",
          "url": "",
          "body": [
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 4,
              "y": 9
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 2,
              "y": 9
            },
            {
              "x": 1,
              "y": 9
            }
          ],
          "health": 89,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_qs8tytpssxvpt97prxmrp3k4",
          "name": "cdr mike \"viper\" metcalf",
          "url": "",
          "body": [
            {
              "x": 10,
              "y": 8
            },
            {
              "x": 10,
              "y": 9
            },
            {
              "x": 10,
              "y": 10
            },
            {
              "x": 9,
              "y": 10
            },
            {
              "x": 9,
              "y": 9
            }
          ],
          "health": 98,
          "death": null,
          "color": "#fff701",
          "headtype": "bendr",
          "tailtype": "freckled"
        }
      ]
    }
  },
  "avoidLongSnake":{
    "game": {
      "id": "avoid-long-snake"
    },
    "turn": 158,
    "you": {
      "id": "gs_fkkcf4fktrdcvcpfvsvftwkf",
      "name": "opietoo",
      "url": "",
      "body": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 6,
          "y": 9
        },
        {
          "x": 5,
          "y": 9
        },
        {
          "x": 5,
          "y": 8
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "health": 100,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 0,
          "y": 1
        }
      ],
      "snakes": [
        {
          "id": "gs_8pjm7gt86rb3b8m7hspmjf4b",
          "name": "d.va",
          "url": "",
          "body": [
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 0,
              "y": 3
            },
            {
              "x": 1,
              "y": 3
            },
            {
              "x": 2,
              "y": 3
            },
            {
              "x": 2,
              "y": 2
            },
            {
              "x": 3,
              "y": 2
            },
            {
              "x": 3,
              "y": 1
            },
            {
              "x": 2,
              "y": 1
            },
            {
              "x": 2,
              "y": 0
            },
            {
              "x": 1,
              "y": 0
            }
          ],
          "health": 65,
          "death": null,
          "color": "#ee4bb5",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_fkkcf4fktrdcvcpfvsvftwkf",
          "name": "opietoo",
          "url": "",
          "body": [
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 8
            },
            {
              "x": 6,
              "y": 9
            },
            {
              "x": 5,
              "y": 9
            },
            {
              "x": 5,
              "y": 8
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 4,
              "y": 7
            }
          ],
          "health": 100,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_yhfmvrcwr8jgg3fmhrhs46xb",
          "name": "github snek",
          "url": "",
          "body": [
            {
              "x": 3,
              "y": 7
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 3,
              "y": 10
            },
            {
              "x": 2,
              "y": 10
            },
            {
              "x": 1,
              "y": 10
            },
            {
              "x": 0,
              "y": 10
            },
            {
              "x": 0,
              "y": 9
            },
            {
              "x": 0,
              "y": 8
            },
            {
              "x": 0,
              "y": 7
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 2,
              "y": 7
            },
            {
              "x": 2,
              "y": 6
            },
            {
              "x": 1,
              "y": 6
            },
            {
              "x": 1,
              "y": 5
            },
            {
              "x": 0,
              "y": 5
            }
          ],
          "health": 92,
          "death": null,
          "color": "#cd681e",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_jtbcgcdjghjxxrtpfphpvqh6",
          "name": "hunterq",
          "url": "",
          "body": [
            {
              "x": 9,
              "y": 3
            },
            {
              "x": 10,
              "y": 3
            },
            {
              "x": 10,
              "y": 2
            },
            {
              "x": 10,
              "y": 1
            },
            {
              "x": 9,
              "y": 1
            },
            {
              "x": 9,
              "y": 0
            },
            {
              "x": 8,
              "y": 0
            },
            {
              "x": 8,
              "y": 1
            },
            {
              "x": 7,
              "y": 1
            },
            {
              "x": 6,
              "y": 1
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 7,
              "y": 3
            }
          ],
          "health": 95,
          "death": null,
          "color": "#d6e100",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "randomHeadOn":{
    "game": {
      "id": "random-head-on"
    },
    "turn": 163,
    "you": {
      "id": "gs_grfr7mqyyggdxvk7tcvdpbpv",
      "name": "opietoo",
      "url": "",
      "body": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "health": 96,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "snakes": [
        {
          "id": "gs_xhbgkwcv3f4bg6dvwmftkdkq",
          "name": "alpha snake eyi",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 4
            },
            {
              "x": 5,
              "y": 5
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 7,
              "y": 6
            },
            {
              "x": 8,
              "y": 6
            },
            {
              "x": 8,
              "y": 5
            },
            {
              "x": 8,
              "y": 4
            },
            {
              "x": 8,
              "y": 3
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 8,
              "y": 1
            }
          ],
          "health": 81,
          "death": null,
          "color": "#66ccff",
          "headtype": "bendr",
          "tailtype": "pixel"
        },
        {
          "id": "gs_grfr7mqyyggdxvk7tcvdpbpv",
          "name": "opietoo",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 4,
              "y": 1
            },
            {
              "x": 3,
              "y": 1
            },
            {
              "x": 2,
              "y": 1
            },
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 1,
              "y": 3
            },
            {
              "x": 2,
              "y": 3
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 3,
              "y": 4
            }
          ],
          "health": 96,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_qwdfv3ffdyy44tmgc4cc7pk3",
          "name": "sekhnetsnek2018",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 8
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 2,
              "y": 8
            },
            {
              "x": 2,
              "y": 7
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 1,
              "y": 8
            },
            {
              "x": 0,
              "y": 8
            },
            {
              "x": 0,
              "y": 9
            },
            {
              "x": 0,
              "y": 10
            },
            {
              "x": 1,
              "y": 10
            },
            {
              "x": 2,
              "y": 10
            },
            {
              "x": 3,
              "y": 10
            },
            {
              "x": 3,
              "y": 9
            }
          ],
          "health": 92,
          "death": null,
          "color": "#f74700",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "areaSelfKill": {
    "game": {
      "id": "area-self-kill"
    },
    "turn": 249,
    "you": {
      "id": "gs_xg77xsbdxbkbwdfssg4f3r8f",
      "name": "opietoo",
      "url": "",
      "body": [
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 3,
          "y": 9
        },
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 2,
          "y": 7
        }
      ],
      "health": 38,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 8,
          "y": 4
        }
      ],
      "snakes": [
        {
          "id": "gs_xg77xsbdxbkbwdfssg4f3r8f",
          "name": "opietoo",
          "url": "",
          "body": [
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 3,
              "y": 3
            },
            {
              "x": 3,
              "y": 4
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 4,
              "y": 9
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 2,
              "y": 8
            },
            {
              "x": 2,
              "y": 7
            }
          ],
          "health": 38,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_bhbmc8dktycthgjfg4ktgtbx",
          "name": "github snek",
          "url": "",
          "body": [
            {
              "x": 2,
              "y": 5
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 1,
              "y": 4
            },
            {
              "x": 0,
              "y": 4
            },
            {
              "x": 0,
              "y": 3
            },
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 1,
              "y": 0
            },
            {
              "x": 2,
              "y": 0
            },
            {
              "x": 3,
              "y": 0
            },
            {
              "x": 4,
              "y": 0
            },
            {
              "x": 5,
              "y": 0
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 6,
              "y": 2
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 7,
              "y": 7
            },
            {
              "x": 8,
              "y": 7
            },
            {
              "x": 9,
              "y": 7
            },
            {
              "x": 10,
              "y": 7
            },
            {
              "x": 10,
              "y": 8
            },
            {
              "x": 9,
              "y": 8
            },
            {
              "x": 8,
              "y": 8
            },
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 6,
              "y": 8
            },
            {
              "x": 6,
              "y": 9
            },
            {
              "x": 7,
              "y": 9
            },
            {
              "x": 8,
              "y": 9
            }
          ],
          "health": 93,
          "death": null,
          "color": "#164910",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "followTailInSmallArea": {
    "game": {
      "id": "follow-tail-in-small-area"
    },
    "turn": 633,
    "you": {
      "id": "gs_b6hjtmqrvbbg7tvf6bvtqj3p",
      "name": "opietoo",
      "url": "",
      "body": [
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 3,
          "y": 9
        },
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 5,
          "y": 9
        },
        {
          "x": 6,
          "y": 9
        },
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 5,
          "y": 8
        }
      ],
      "health": 82,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 8,
          "y": 10
        },
        {
          "x": 2,
          "y": 10
        },
        {
          "x": 10,
          "y": 10
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 9
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 9,
          "y": 10
        }
      ],
      "snakes": [
        {
          "id": "gs_b6hjtmqrvbbg7tvf6bvtqj3p",
          "name": "opietoo",
          "url": "",
          "body": [
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 5,
              "y": 7
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 4,
              "y": 4
            },
            {
              "x": 3,
              "y": 4
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 2,
              "y": 3
            },
            {
              "x": 2,
              "y": 2
            },
            {
              "x": 2,
              "y": 1
            },
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 1,
              "y": 3
            },
            {
              "x": 1,
              "y": 4
            },
            {
              "x": 1,
              "y": 5
            },
            {
              "x": 1,
              "y": 6
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 2,
              "y": 7
            },
            {
              "x": 2,
              "y": 8
            },
            {
              "x": 3,
              "y": 8
            },
            {
              "x": 3,
              "y": 9
            },
            {
              "x": 4,
              "y": 9
            },
            {
              "x": 5,
              "y": 9
            },
            {
              "x": 6,
              "y": 9
            },
            {
              "x": 6,
              "y": 8
            },
            {
              "x": 5,
              "y": 8
            }
          ],
          "health": 82,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_xgqhqgbbp8kxjbcvmdvq7rpc",
          "name": "d.va",
          "url": "",
          "body": [
            {
              "x": 9,
              "y": 8
            },
            {
              "x": 9,
              "y": 9
            },
            {
              "x": 10,
              "y": 9
            },
            {
              "x": 10,
              "y": 8
            },
            {
              "x": 10,
              "y": 7
            },
            {
              "x": 10,
              "y": 6
            },
            {
              "x": 10,
              "y": 5
            },
            {
              "x": 10,
              "y": 4
            },
            {
              "x": 10,
              "y": 3
            },
            {
              "x": 10,
              "y": 2
            },
            {
              "x": 10,
              "y": 1
            },
            {
              "x": 10,
              "y": 0
            },
            {
              "x": 9,
              "y": 0
            },
            {
              "x": 9,
              "y": 1
            },
            {
              "x": 9,
              "y": 2
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 8,
              "y": 1
            },
            {
              "x": 8,
              "y": 0
            },
            {
              "x": 7,
              "y": 0
            },
            {
              "x": 6,
              "y": 0
            },
            {
              "x": 5,
              "y": 0
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 4,
              "y": 2
            },
            {
              "x": 4,
              "y": 3
            },
            {
              "x": 5,
              "y": 3
            },
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 7,
              "y": 3
            },
            {
              "x": 7,
              "y": 4
            },
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 8,
              "y": 5
            },
            {
              "x": 8,
              "y": 6
            },
            {
              "x": 8,
              "y": 7
            }
          ],
          "health": 99,
          "death": null,
          "color": "#ee4bb5",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "upIntoClusterfuck":{
    "game": {
      "id": "up-into-clusterfuck"
    },
    "turn": 11,
    "you": {
      "id": "gs_hdccggfykwc3fww3hcd48pbd",
      "name": "griffinledingham/opietoo",
      "url": "",
      "body": [
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "health": 89,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 3,
          "y": 8
        }
      ],
      "snakes": [
        {
          "id": "gs_gy3c36srddqd6tqdgcp7qc4y",
          "name": "mnursey/_123abc",
          "url": "",
          "body": [
            {
              "x": 1,
              "y": 2
            },
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 1,
              "y": 1
            }
          ],
          "health": 92,
          "death": null,
          "color": "#3e1049",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_3dby6xdxwcxpck7tbh9mdpyq",
          "name": "a-bishop/samuel",
          "url": "",
          "body": [
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 7,
              "y": 9
            },
            {
              "x": 8,
              "y": 9
            }
          ],
          "health": 89,
          "death": null,
          "color": "#143306",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_hdccggfykwc3fww3hcd48pbd",
          "name": "griffinledingham/opietoo",
          "url": "",
          "body": [
            {
              "x": 3,
              "y": 4
            },
            {
              "x": 2,
              "y": 4
            },
            {
              "x": 2,
              "y": 5
            }
          ],
          "health": 89,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_vv9b4rxbgsmd8q6qyg3ggjmr",
          "name": "niclaswue/danger nudel",
          "url": "",
          "body": [
            {
              "x": 4,
              "y": 1
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 6,
              "y": 1
            },
            {
              "x": 7,
              "y": 1
            }
          ],
          "health": 91,
          "death": null,
          "color": "#fade89",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_f9chfqcqs7pthgwrj6thrydv",
          "name": "ntmk/lt pete \"maverick\" mitchell",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 6,
              "y": 2
            },
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 8,
              "y": 2
            },
            {
              "x": 8,
              "y": 3
            }
          ],
          "health": 93,
          "death": null,
          "color": "#fff701",
          "headtype": "bendr",
          "tailtype": "freckled"
        },
        {
          "id": "gs_h9xh47jkxthkmkmw7kqbjprx",
          "name": "jhawthorn/git adder",
          "url": "",
          "body": [
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 6,
              "y": 8
            }
          ],
          "health": 91,
          "death": null,
          "color": "#6aec87",
          "headtype": "silly",
          "tailtype": "bolt"
        },
        {
          "id": "gs_gxqxywcpbdx3dxp6b3mfkxx7",
          "name": "smartahn/quadruple-j",
          "url": "",
          "body": [
            {
              "x": 0,
              "y": 9
            },
            {
              "x": 1,
              "y": 9
            },
            {
              "x": 2,
              "y": 9
            },
            {
              "x": 2,
              "y": 9
            }
          ],
          "health": 100,
          "death": null,
          "color": "#f032e6",
          "headtype": "smile",
          "tailtype": "freckled"
        },
        {
          "id": "gs_mdtgvmm3yrwfqkfmdkhc7cwc",
          "name": "putc/danger nudel ⚠️🍜",
          "url": "",
          "body": [
            {
              "x": 3,
              "y": 6
            },
            {
              "x": 2,
              "y": 6
            },
            {
              "x": 2,
              "y": 7
            },
            {
              "x": 3,
              "y": 7
            }
          ],
          "health": 98,
          "death": null,
          "color": "#fade89",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "cornerAreaSelf":{
    "game": {
      "id": "corner-area-self"
    },
    "turn": 131,
    "you": {
      "id": "gs_qgd3jmmmbyccfwhhgdg996vf",
      "name": "griffinledingham/opietoo",
      "url": "",
      "body": [
        {
          "x": 10,
          "y": 9
        },
        {
          "x": 9,
          "y": 9
        },
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 9,
          "y": 7
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 10,
          "y": 6
        },
        {
          "x": 10,
          "y": 5
        },
        {
          "x": 9,
          "y": 5
        },
        {
          "x": 8,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 8,
          "y": 4
        }
      ],
      "health": 98,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [],
      "snakes": [
        {
          "id": "gs_qgd3jmmmbyccfwhhgdg996vf",
          "name": "griffinledingham/opietoo",
          "url": "",
          "body": [
            {
              "x": 10,
              "y": 9
            },
            {
              "x": 9,
              "y": 9
            },
            {
              "x": 9,
              "y": 8
            },
            {
              "x": 9,
              "y": 7
            },
            {
              "x": 10,
              "y": 7
            },
            {
              "x": 10,
              "y": 6
            },
            {
              "x": 10,
              "y": 5
            },
            {
              "x": 9,
              "y": 5
            },
            {
              "x": 8,
              "y": 5
            },
            {
              "x": 7,
              "y": 5
            },
            {
              "x": 7,
              "y": 4
            },
            {
              "x": 8,
              "y": 4
            }
          ],
          "health": 98,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_yhvgkbvjpswt3c8wttmtmmhg",
          "name": "tyrelh/zero cool",
          "url": "",
          "body": [
            {
              "x": 1,
              "y": 8
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 0,
              "y": 7
            },
            {
              "x": 0,
              "y": 6
            },
            {
              "x": 0,
              "y": 5
            },
            {
              "x": 0,
              "y": 4
            },
            {
              "x": 0,
              "y": 3
            },
            {
              "x": 0,
              "y": 2
            },
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 0,
              "y": 0
            },
            {
              "x": 1,
              "y": 0
            },
            {
              "x": 2,
              "y": 0
            }
          ],
          "health": 80,
          "death": null,
          "color": "#9557e0",
          "headtype": "beluga",
          "tailtype": "bolt"
        },
        {
          "id": "gs_d6wgjd3qwm6ky89yq3prcckd",
          "name": "jhawthorn/git adder",
          "url": "",
          "body": [
            {
              "x": 6,
              "y": 3
            },
            {
              "x": 6,
              "y": 4
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 6,
              "y": 6
            },
            {
              "x": 5,
              "y": 6
            },
            {
              "x": 4,
              "y": 6
            },
            {
              "x": 3,
              "y": 6
            },
            {
              "x": 2,
              "y": 6
            },
            {
              "x": 1,
              "y": 6
            },
            {
              "x": 1,
              "y": 5
            },
            {
              "x": 1,
              "y": 4
            },
            {
              "x": 1,
              "y": 3
            }
          ],
          "health": 93,
          "death": null,
          "color": "#6aec87",
          "headtype": "silly",
          "tailtype": "bolt"
        },
        {
          "id": "gs_cvfkjtwmwff9twmrfd6jgtqh",
          "name": "arthurfirmino/palpatine",
          "url": "",
          "body": [
            {
              "x": 7,
              "y": 10
            },
            {
              "x": 7,
              "y": 9
            },
            {
              "x": 7,
              "y": 8
            },
            {
              "x": 7,
              "y": 7
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 5,
              "y": 7
            },
            {
              "x": 4,
              "y": 7
            },
            {
              "x": 4,
              "y": 8
            }
          ],
          "health": 73,
          "death": null,
          "color": "#800000",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "encloseSelfWideOpen":{
    "game": {
      "id": "enclose-self-wide-open"
    },
    "turn": 105,
    "you": {
      "id": "gs_xdkvgwhhf4qs4jgtckms8t9j",
      "name": "griffinledingham/opietoo",
      "url": "",
      "body": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "health": 98,
      "death": null,
      "color": "#ff0000",
      "headtype": "",
      "tailtype": ""
    },
    "board": {
      "width": 11,
      "height": 11,
      "food": [
        {
          "x": 4,
          "y": 9
        },
        {
          "x": 8,
          "y": 8
        }
      ],
      "snakes": [
        {
          "id": "gs_b4vqvbfpjpdm4dtyyvwwqct3",
          "name": "x-lem/team rocket",
          "url": "",
          "body": [
            {
              "x": 7,
              "y": 4
            },
            {
              "x": 7,
              "y": 3
            },
            {
              "x": 7,
              "y": 2
            },
            {
              "x": 7,
              "y": 1
            },
            {
              "x": 6,
              "y": 1
            },
            {
              "x": 6,
              "y": 0
            },
            {
              "x": 5,
              "y": 0
            },
            {
              "x": 5,
              "y": 1
            },
            {
              "x": 5,
              "y": 2
            },
            {
              "x": 6,
              "y": 2
            },
            {
              "x": 6,
              "y": 3
            }
          ],
          "health": 80,
          "death": null,
          "color": "#bb3322",
          "headtype": "evil",
          "tailtype": "bolt"
        },
        {
          "id": "gs_xdkvgwhhf4qs4jgtckms8t9j",
          "name": "griffinledingham/opietoo",
          "url": "",
          "body": [
            {
              "x": 0,
              "y": 5
            },
            {
              "x": 1,
              "y": 5
            },
            {
              "x": 2,
              "y": 5
            },
            {
              "x": 2,
              "y": 6
            },
            {
              "x": 3,
              "y": 6
            },
            {
              "x": 3,
              "y": 5
            },
            {
              "x": 3,
              "y": 4
            }
          ],
          "health": 98,
          "death": null,
          "color": "#ff0000",
          "headtype": "",
          "tailtype": ""
        },
        {
          "id": "gs_vjxym9mdffrhsqrhdswgkydm",
          "name": "d12/github snek",
          "url": "",
          "body": [
            {
              "x": 5,
              "y": 10
            },
            {
              "x": 4,
              "y": 10
            },
            {
              "x": 3,
              "y": 10
            },
            {
              "x": 2,
              "y": 10
            },
            {
              "x": 1,
              "y": 10
            },
            {
              "x": 1,
              "y": 9
            },
            {
              "x": 0,
              "y": 9
            },
            {
              "x": 0,
              "y": 8
            },
            {
              "x": 0,
              "y": 7
            },
            {
              "x": 1,
              "y": 7
            },
            {
              "x": 2,
              "y": 7
            },
            {
              "x": 2,
              "y": 7
            }
          ],
          "health": 100,
          "death": null,
          "color": "#49628f",
          "headtype": "",
          "tailtype": ""
        }
      ]
    }
  },
  "encloseSelfSelfless":{"game":{"id":"cdffd77f-181a-4ba1-a524-054a1cca8ef3"},"turn":241,"board":{"width":11,"height":11,"snakes":[{"id":"gs_Tw7fD3jYFSP4Y83XGv9WfgqW","name":"GriffinLedingham / LongBoi","body":[{"x":0,"y":3},{"x":1,"y":3},{"x":1,"y":2},{"x":1,"y":1},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":5,"y":1},{"x":6,"y":1},{"x":6,"y":0},{"x":7,"y":0},{"x":7,"y":1},{"x":7,"y":2},{"x":6,"y":2},{"x":5,"y":2},{"x":4,"y":2},{"x":3,"y":2},{"x":2,"y":2},{"x":2,"y":3},{"x":2,"y":4},{"x":3,"y":4}],"health":88},{"id":"gs_t7JWBb8vkjKcwyRB88vmCxRR","name":"SynthesizedSoul / D.Va Staging","body":[{"x":2,"y":9},{"x":3,"y":9},{"x":4,"y":9},{"x":5,"y":9},{"x":5,"y":10},{"x":6,"y":10},{"x":7,"y":10},{"x":8,"y":10},{"x":9,"y":10},{"x":10,"y":10},{"x":10,"y":9},{"x":9,"y":9},{"x":8,"y":9},{"x":7,"y":9},{"x":7,"y":8},{"x":8,"y":8},{"x":9,"y":8},{"x":9,"y":7},{"x":9,"y":6},{"x":8,"y":6},{"x":7,"y":6},{"x":7,"y":7},{"x":7,"y":7}],"health":100},{"id":"gs_KrpQF677dkC467q7gqvFwKG6","name":"yokelpole / Spot","body":[{"x":6,"y":5},{"x":6,"y":4},{"x":5,"y":4},{"x":5,"y":5},{"x":5,"y":6},{"x":4,"y":6},{"x":3,"y":6},{"x":2,"y":6},{"x":1,"y":6},{"x":0,"y":6}],"health":91}],"food":[{"x":4,"y":8},{"x":4,"y":5}]},"you":{"id":"gs_Tw7fD3jYFSP4Y83XGv9WfgqW","name":"GriffinLedingham / LongBoi","body":[{"x":0,"y":3},{"x":1,"y":3},{"x":1,"y":2},{"x":1,"y":1},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":5,"y":1},{"x":6,"y":1},{"x":6,"y":0},{"x":7,"y":0},{"x":7,"y":1},{"x":7,"y":2},{"x":6,"y":2},{"x":5,"y":2},{"x":4,"y":2},{"x":3,"y":2},{"x":2,"y":2},{"x":2,"y":3},{"x":2,"y":4},{"x":3,"y":4}],"health":88}},
  "expectOpponentKill":{"game":{"id":"8ac89a41-6aad-46fc-a5fd-ce63d8e81bda"},"turn":118,"board":{"width":11,"height":11,"snakes":[{"id":"gs_6C4ryF7YyhBRhMWPdKBrvM7J","name":"yokelpole / Spot","body":[{"x":1,"y":1},{"x":2,"y":1},{"x":2,"y":0},{"x":3,"y":0},{"x":3,"y":1},{"x":4,"y":1},{"x":4,"y":0},{"x":5,"y":0}],"health":63},{"id":"gs_y8KF6hcyvwyYw3pbwXFqjg7B","name":"duncmac16 / ProtoFeist","body":[{"x":10,"y":6},{"x":10,"y":7},{"x":10,"y":8},{"x":10,"y":9},{"x":10,"y":10},{"x":9,"y":10},{"x":8,"y":10},{"x":7,"y":10},{"x":6,"y":10},{"x":6,"y":9},{"x":6,"y":8},{"x":6,"y":7},{"x":6,"y":6}],"health":96},{"id":"gs_4XPXHTd8kppWkPKBqPX9XthV","name":"andrewsmith / Decent Snake","body":[{"x":4,"y":2},{"x":4,"y":3},{"x":4,"y":4},{"x":4,"y":5},{"x":4,"y":6},{"x":3,"y":6},{"x":3,"y":5},{"x":3,"y":4},{"x":3,"y":3},{"x":3,"y":2},{"x":2,"y":2},{"x":1,"y":2},{"x":1,"y":3},{"x":1,"y":4},{"x":1,"y":5}],"health":95},{"id":"gs_Rhr7JCqqfcpJyPh4gkQjDFM9","name":"GriffinLedingham / LongBoi","body":[{"x":8,"y":0},{"x":8,"y":1},{"x":9,"y":1},{"x":9,"y":2},{"x":9,"y":3},{"x":10,"y":3},{"x":10,"y":2},{"x":10,"y":1}],"health":51}],"food":[{"x":1,"y":0},{"x":8,"y":3}]},"you":{"id":"gs_Rhr7JCqqfcpJyPh4gkQjDFM9","name":"GriffinLedingham / LongBoi","body":[{"x":8,"y":0},{"x":8,"y":1},{"x":9,"y":1},{"x":9,"y":2},{"x":9,"y":3},{"x":10,"y":3},{"x":10,"y":2},{"x":10,"y":1}],"health":51}},
  "followTail":{"game":{"id":"c12cdf86-2126-4382-930e-c1faeff957f7"},"turn":45,"board":{"width":11,"height":11,"snakes":[{"id":"gs_xBWB774xmdkBGWVWMQh7t6qC","name":"MikeShi42 / Boba Addict","body":[{"x":2,"y":1},{"x":2,"y":0},{"x":1,"y":0},{"x":1,"y":1}],"health":57},{"id":"gs_QDxtkhYdYDpBCwF7Gv3fk48b","name":"SynthesizedSoul / D.Va Staging","body":[{"x":8,"y":7},{"x":9,"y":7},{"x":9,"y":6},{"x":8,"y":6},{"x":7,"y":6},{"x":6,"y":6},{"x":6,"y":7}],"health":96},{"id":"gs_tRMKYJHRjJHK3FW7FyvWw63K","name":"blakmajk / Medusa","body":[{"x":1,"y":2},{"x":1,"y":3},{"x":1,"y":4},{"x":1,"y":5},{"x":1,"y":5}],"health":100},{"id":"gs_jPG8FDcmpqpMTXPjMwSQwXYQ","name":"a-bishop / Snax","body":[{"x":4,"y":5},{"x":5,"y":5},{"x":6,"y":5},{"x":6,"y":4},{"x":5,"y":4},{"x":5,"y":3},{"x":5,"y":2},{"x":4,"y":2},{"x":3,"y":2},{"x":3,"y":1}],"health":97},{"id":"gs_khHJbqPkfbQrgCgVFMpHKRTR","name":"jhawthorn / Git Adder 3","body":[{"x":9,"y":4},{"x":9,"y":5},{"x":8,"y":5},{"x":7,"y":5},{"x":7,"y":4},{"x":7,"y":3},{"x":7,"y":2},{"x":8,"y":2},{"x":9,"y":2}],"health":99},{"id":"gs_YwDHRfMwcdTDVRdxVvVKSTf9","name":"GriffinLedingham / OpieToo","body":[{"x":1,"y":10},{"x":1,"y":9},{"x":2,"y":9},{"x":3,"y":9},{"x":4,"y":9}],"health":90},{"id":"gs_SywfvHGydvbYXgP9yBPDHvkC","name":"GriffinLedingham / LongBoi","body":[{"x":3,"y":4},{"x":4,"y":4},{"x":4,"y":3},{"x":3,"y":3}],"health":92}],"food":[{"x":8,"y":0},{"x":10,"y":3}]},"you":{"id":"gs_SywfvHGydvbYXgP9yBPDHvkC","name":"GriffinLedingham / LongBoi","body":[{"x":3,"y":4},{"x":4,"y":4},{"x":4,"y":3},{"x":3,"y":3}],"health":92}},
  "upToAreaNotDown":{"game":{"id":"f1f706a5-2786-477a-8fce-de34957a592e"},"turn":185,"board":{"width":11,"height":11,"snakes":[{"id":"gs_cFVFdjwBDtMWcBXX8GDDgKvW","name":"GriffinLedingham / LongBoi","body":[{"x":0,"y":7},{"x":1,"y":7},{"x":1,"y":8},{"x":1,"y":9},{"x":2,"y":9},{"x":3,"y":9},{"x":4,"y":9},{"x":5,"y":9},{"x":5,"y":8},{"x":4,"y":8},{"x":4,"y":7},{"x":5,"y":7},{"x":6,"y":7},{"x":6,"y":8},{"x":7,"y":8}],"health":87},{"id":"gs_g3Xj4WM8DyKbKyDS8PKxr7TQ","name":"putc / Lindwurm 🍻","body":[{"x":10,"y":5},{"x":10,"y":4},{"x":9,"y":4},{"x":9,"y":5},{"x":9,"y":6},{"x":9,"y":7},{"x":8,"y":7},{"x":7,"y":7},{"x":7,"y":6},{"x":8,"y":6},{"x":8,"y":5},{"x":8,"y":4},{"x":8,"y":3},{"x":9,"y":3},{"x":9,"y":2},{"x":9,"y":1},{"x":9,"y":1}],"health":100},{"id":"gs_3pVwWrMQ9vqGkJxDGg7wGYVG","name":"smartahn / Taekwon V","body":[{"x":2,"y":3},{"x":2,"y":2},{"x":3,"y":2},{"x":3,"y":1},{"x":4,"y":1},{"x":4,"y":0},{"x":3,"y":0},{"x":2,"y":0},{"x":1,"y":0}],"health":77}],"food":[{"x":9,"y":10},{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":2},{"x":0,"y":1}]},"you":{"id":"gs_cFVFdjwBDtMWcBXX8GDDgKvW","name":"GriffinLedingham / LongBoi","body":[{"x":0,"y":7},{"x":1,"y":7},{"x":1,"y":8},{"x":1,"y":9},{"x":2,"y":9},{"x":3,"y":9},{"x":4,"y":9},{"x":5,"y":9},{"x":5,"y":8},{"x":4,"y":8},{"x":4,"y":7},{"x":5,"y":7},{"x":6,"y":7},{"x":6,"y":8},{"x":7,"y":8}],"health":87}},
  "areaSelfBottomRight":{"game":{"id":"1db57aad-c2d4-469a-bc96-18165e019cf9"},"turn":219,"board":{"width":11,"height":11,"snakes":[{"id":"gs_cp93gcxMTM99ydpgStJtv7qX","name":"GriffinLedingham / LongBoi","body":[{"x":9,"y":10},{"x":9,"y":9},{"x":10,"y":9},{"x":10,"y":8},{"x":9,"y":8},{"x":8,"y":8},{"x":7,"y":8},{"x":7,"y":7},{"x":6,"y":7},{"x":5,"y":7},{"x":5,"y":8},{"x":6,"y":8},{"x":6,"y":9},{"x":7,"y":9},{"x":7,"y":10},{"x":7,"y":10}],"health":100},{"id":"gs_kfh8pSJYjyRbr6XgxrQDGjtX","name":"xtagon / Nagini","body":[{"x":9,"y":6},{"x":8,"y":6},{"x":7,"y":6},{"x":6,"y":6},{"x":5,"y":6},{"x":5,"y":5},{"x":4,"y":5},{"x":3,"y":5},{"x":3,"y":4},{"x":3,"y":3},{"x":3,"y":2},{"x":4,"y":2},{"x":5,"y":2},{"x":5,"y":1},{"x":4,"y":1},{"x":3,"y":1},{"x":2,"y":1},{"x":2,"y":0},{"x":3,"y":0},{"x":4,"y":0},{"x":5,"y":0},{"x":6,"y":0},{"x":7,"y":0},{"x":8,"y":0},{"x":8,"y":1}],"health":97}],"food":[{"x":4,"y":3},{"x":1,"y":10}]},"you":{"id":"gs_cp93gcxMTM99ydpgStJtv7qX","name":"GriffinLedingham / LongBoi","body":[{"x":9,"y":10},{"x":9,"y":9},{"x":10,"y":9},{"x":10,"y":8},{"x":9,"y":8},{"x":8,"y":8},{"x":7,"y":8},{"x":7,"y":7},{"x":6,"y":7},{"x":5,"y":7},{"x":5,"y":8},{"x":6,"y":8},{"x":6,"y":9},{"x":7,"y":9},{"x":7,"y":10},{"x":7,"y":10}],"health":100}},
  "turnInOnSelf": {"game":{"id":"745b4d17-3977-499e-b6c1-42df0988fdcc"},"turn":1,"board":{"width":11,"height":11,"snakes":[{"id":"gs_RGdYFrYxyPYt6c8W38887Br4","name":"GriffinLedingham / LongBoi","body":[{"x":1,"y":0},{"x":1,"y":1},{"x":1,"y":1}],"health":99},{"id":"gs_9vrStbMchSWbQtd9gCCY399V","name":"robinsax / snacker","body":[{"x":8,"y":9},{"x":9,"y":9},{"x":9,"y":9}],"health":99},{"id":"gs_GFkmHcgrQvhQQMRDK88YfxkW","name":"danielberndt / naive","body":[{"x":1,"y":8},{"x":1,"y":9},{"x":1,"y":9}],"health":99},{"id":"gs_wQSrgMvcHKhQf73FwbcYFG6K","name":"SynthesizedSoul / D.Va Staging","body":[{"x":9,"y":2},{"x":9,"y":1},{"x":9,"y":1}],"health":99},{"id":"gs_D6F6k3PRXcq3pPvhRDTt64qJ","name":"eyilee / Alpha Snake","body":[{"x":5,"y":0},{"x":5,"y":1},{"x":5,"y":1}],"health":99}],"food":[{"x":5,"y":8},{"x":5,"y":2},{"x":6,"y":8},{"x":7,"y":5},{"x":5,"y":7}]},"you":{"id":"gs_RGdYFrYxyPYt6c8W38887Br4","name":"GriffinLedingham / LongBoi","body":[{"x":1,"y":0},{"x":1,"y":1},{"x":1,"y":1}],"health":99}},
  "avoidTailWhenEatComing": {"game":{"id":"bd723159-e260-44a9-87d2-622140265515"},"turn":58,"board":{"width":11,"height":11,"snakes":[{"id":"gs_XKyHJ3xbpMSqFwR6Gd6HpDBP","name":"cbinners / -☠-","body":[{"x":0,"y":10},{"x":0,"y":9},{"x":0,"y":8},{"x":0,"y":7},{"x":0,"y":6}],"health":69},{"id":"gs_cyQxHVYMBqHfFDrRQggJXDWC","name":"adambard / KobraKhan","body":[{"x":7,"y":5},{"x":6,"y":5},{"x":6,"y":6},{"x":6,"y":7},{"x":7,"y":7},{"x":7,"y":6},{"x":8,"y":6}],"health":81},{"id":"gs_3mhHdp4ybhFBcDTC6PF9wdqD","name":"cbinners / ☠Serpent ☠","body":[{"x":1,"y":5},{"x":1,"y":4},{"x":1,"y":3},{"x":2,"y":3},{"x":2,"y":2},{"x":2,"y":1},{"x":2,"y":0}],"health":84},{"id":"gs_yYJGgQbjfKqW4M7jxbqG4gyT","name":"GriffinLedingham / FreeBoi","body":[{"x":8,"y":4},{"x":7,"y":4},{"x":7,"y":3},{"x":6,"y":3},{"x":6,"y":2},{"x":6,"y":1}],"health":90},{"id":"gs_469D46PmdDfRQQGvXfpVS3Dd","name":"putc / Lindhydra 🍻","body":[{"x":8,"y":8},{"x":7,"y":8},{"x":7,"y":9},{"x":6,"y":9}],"health":47},{"id":"gs_tgKDb7kc8h4FRgB9dhBXvgrc","name":"smartahn / Taekwon V","body":[{"x":7,"y":1},{"x":8,"y":1},{"x":9,"y":1},{"x":10,"y":1},{"x":10,"y":2},{"x":9,"y":2},{"x":9,"y":3},{"x":8,"y":3}],"health":85},{"id":"gs_wY3w44w4yG7khwS4VXqmMdj7","name":"mnursey / #doSnakesDreamOfElectricApples","body":[{"x":3,"y":7},{"x":3,"y":6},{"x":3,"y":5},{"x":3,"y":4},{"x":4,"y":4},{"x":5,"y":4},{"x":5,"y":5}],"health":89},{"id":"gs_wfjFmP8CQpSkMD7V8bgmYKq8","name":"jhawthorn / Git Adder 2","body":[{"x":5,"y":9},{"x":4,"y":9},{"x":3,"y":9}],"health":42}],"food":[{"x":4,"y":0},{"x":2,"y":5},{"x":3,"y":0},{"x":7,"y":2},{"x":7,"y":10}]},"you":{"id":"gs_yYJGgQbjfKqW4M7jxbqG4gyT","name":"GriffinLedingham / FreeBoi","body":[{"x":8,"y":4},{"x":7,"y":4},{"x":7,"y":3},{"x":6,"y":3},{"x":6,"y":2},{"x":6,"y":1}],"health":90}}
}