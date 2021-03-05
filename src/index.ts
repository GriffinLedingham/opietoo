/// <reference path="./declarations/Types.d.ts" />
import * as Types   from 'Types'

import GameState    from './classes/gamestate'
import * as http    from 'http'

function start(game) : any {
  return {
    color: '#FF0000'
  }
}

function move(reqData) : any {
  let data = handleAPIData(reqData)
  let playerId = data.you.id
  let gameState = new GameState(data)
  return {
    move: gameState.getSnakeNextMove(playerId)
  }
}

// Format input data to the 2019 API standard
function handleAPIData(data) : Types.GameData {
  if(!data.hasOwnProperty('board')) {
    data.board = {}
    data.board['height'] = data.height
    data.board['width']  = data.width
    data.board['food']   = data.food.data
    data.board['snakes'] = data.snakes.data
    for(let i = 0; i<data.board.snakes.length; i++) {
      data.board.snakes[i]['body'] = data.board.snakes[i]['body']['data']
    }
    delete data['height']
    delete data['width']
    delete data['food']
    delete data['snakes']
  }
  return data
}

/**
* Boilerplate HTTP from 2017 sample project
*/
http.createServer((req, res) => {
  if (req.method !== 'POST') return respond()
  let body = []
  let message = {}
  req.on('data', chunk => body.push(chunk))
  req.on('end', () => {
    try{
      if (req.url === '/end') message = ''
      if (req.url === '/ping') message = ''
      body = JSON.parse(Buffer.concat(body).toString())
      if (req.url === '/start') message = start(body)
      if (req.url === '/move') message = move(body)
    } catch(e) {
      console.log(e)
    }
    return respond(message)
  });

  function respond(message?) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(message))
  }
}).listen(process.env.PORT || 5001, console.error)

