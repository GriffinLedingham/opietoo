/// <reference path="../declarations/Types.d.ts" />
import * as Types   from 'Types'

import Battlefield   from './battlefield'
import Snake         from './snake'
import MiniMax       from './minimax'
import Heuristic     from './heuristic'
import DebugConfig   from '../config/debug'
import GameConfig    from '../config/game'
import Timings       from './timings'
import Debug        from '../debugger/debugger'

// Tile enums
const EMPTY_SPACE = 0
const SNAKE_BODY  = 1
const FOOD        = 2
const SNAKE_HEAD  = 3
const SNAKE_TAIL  = 4

class GameState {
  public board:   Array<Array<number>>
  public height:  number
  public width:   number
  public bf:      Battlefield
  public snakes:  {[key: string]: Snake}
  public food:    Array<{x: number, y: number}>
  public timeAgo: {[key: string]: number}
  public turn:    number
  public didKillSelf: boolean

  public snakeCount: number

  constructor(game : Types.GameData) {
    this.turn       = game.turn
    this.board      = []
    this.food       = []
    this.snakes     = {}
    this.timeAgo    = {}
    this.snakeCount = 0
    this.didKillSelf = false
    this.height     = game.board.height
    this.width      = game.board.width
    let foodArray   = game.board.food
    let snakeArray  = game.board.snakes

    for(let i = 0;i<this.height;i++) {
      this.board[i] = []
      for(let j = 0;j<this.width;j++) {
        this.board[i].push(0)
      }
    }

    // Add all snakes to the board and to the game state
    let keys = Object.keys(snakeArray)

    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      this.addSnake(snakeArray[i])
      this.snakeCount++
    }

    // Add all food to the board and to the game state
    for(let i = 0, foodLength = foodArray.length; i < foodLength; i++) {
      this.addFood(foodArray[i])
    }

    // Spawn a battlefield based on the grid
    this.bf = new Battlefield(this.getBoard())
  }

  // The holy grail, this is what plays the game for us
  getSnakeNextMove(playerId: string): string {
    this.cleanupTimers()
    this.startTimer('getSnakeNextMove')
    let debug
    let startTime = (Date.now())
    if(DebugConfig.debuggerEnabled) debug = new Debug(playerId)
    let bestRes = {dir: 'up', score: null}
    let i
    let besti
    for(i = 1;i<GameConfig.maxDepth + 1;i++) {
      if(DebugConfig.debuggerEnabled) debug.wipe()
      let minimax = new MiniMax(playerId, startTime, debug)
      let result = minimax.minimax(this, i, -Infinity, Infinity)
      if(result['complete'] || bestRes.score == null) {
        bestRes = result
        besti = i
      } else {
        break
      }
    }
    console.log(`Max depth of ${besti} with ${this.snakeCount} remaining. Time elapest: ${Date.now() - startTime}.`)
    let nextMove = bestRes['dir']
    this.stopTimer('getSnakeNextMove')
    this.printTimers()
    if(DebugConfig.debuggerEnabled) setTimeout(()=>debug.finalData(bestRes['score'], nextMove),0)
    return nextMove
  }

  // The second holy grail function. This is what scores every tile on the board
  getPlayerScore(id: string): number {
    const heuristic = new Heuristic(id, this)
    let score = heuristic.calculateHeuristic()
    return score
  }

  didSnakeStarve(id: string): boolean {
    return this.getSnake(id).health < this.findClosestFood(id)
  }

  isTileOutOfBounds(x: number, y: number): boolean {
    if(x < 0) return true
    if(x > this.width-1) return true
    if(y < 0) return true
    if(y > this.height-1) return true
    return false
  }

  isTileEdge(x:number, y:number): boolean {
    if(x == 0) return true
    if(x == this.width-1) return true
    if(y == 0) return true
    if(y == this.height-1) return true
    return false
  }

  isTileSelf(id: string, x :number, y: number): boolean {
    let result = false
    let selfSnake = this.snakes[id]
    for(let i = 1, l = selfSnake.getLength();i<l;i++) {
      if(selfSnake.body[i].x == x && selfSnake.body[i].y == y) {
        result = true
      }
    }
    return result
  }

  isTileSnake(x: number, y: number, snakeId: string, strictTails: boolean = false): boolean {
    if(this.turn == 0) return false
    // We should narrow this to only check body pieces, cause we are allowed to eat heads if safe
    this.startTimer('isTileSnake')
    let result = false
    let tile = this.bf.getTile(x, y)
    if(tile == SNAKE_HEAD) {
      // Iterate snakes to find which one, and if can eat
      // In the meantime, return true, and never eat
      let foundHead = false
      let keys = Object.keys(this.snakes)
      for(let j = 0, l = keys.length; j < l; j++) {
        let i = keys[j]
        if(snakeId == i || this.snakes[i] == null) continue
        let snake = this.snakes[i]
        let head = snake.getHead()
        if(snake.body[0].x == x && snake.body[0].y == y
            && snake.getLength() >= this.getSnake(snakeId).getLength()) {
          foundHead = true
          break
        }
      }
      result = foundHead
    }
    else if(tile == SNAKE_BODY) {
      result = true
    }

    // Haven't found one yet, check tails
    if(result == false) {
      // Iterate snakes to find if this snake's tail is 1 distance from a food
      // making tail unsafe. In mean time, return true ot be safe
      // Or if it's own tail, always safe
      let foundTail = false
      let keys = Object.keys(this.snakes)
      for(let j = 0, l = keys.length; j < l; j++) {
        let i = keys[j]
        if(this.snakes[i] == null) continue
        let snake = this.snakes[i]
        let tail = snake.getTail()
        if(tail.x == x && tail.y == y) {
          if(strictTails) foundTail = true
        }
      }

      result = foundTail
    }
    this.stopTimer('isTileSnake')
    return result
  }

  isTileFood(x: number, y: number): boolean {
    for(let i = 0, foodLength = this.food.length; i < foodLength; i++) {
      let food = this.food[i]
      if(food['x'] == x && food['y'] == y) return true
    }
    return false
  }

  getOwnedTiles(id: string): number {
    let score = 0
    for(let i = 0;i<this.width;i++) {
      for(let j = 0;j<this.height;j++) {
        if(id == this.findClosestSnake(i,j)) score++
      }
    }
    return score
  }

  getDisownedTiles(id: string): number {
    let score = 0
    for(let i = 0;i<this.width;i++) {
      for(let j = 0;j<this.height;j++) {
        if(id != this.findClosestSnake(i,j)) score++
      }
    }
    return score
  }

  getAverageOppArea(id) {
    let sum = 0
    if(this.snakeCount == 1) return 0
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.snakes[i] == null) continue
      let snake = this.snakes[i]
      let head = snake.getHead()
      let tail = snake.getTail()
      sum += this.bf.getTileAreaData(head.x, head.y, tail.x, tail.y,this)['area']
    }
    return sum/(this.snakeCount - 1)
  }

  findClosestSnake(x: number,y: number): string {
    let minDist = Infinity
    let closestSnake = ''
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(this.snakes[i] == null) continue
      let snake = this.snakes[i]
      let head = snake.getHead()
      let dist = Math.abs(head['x'] - x) + Math.abs(head['y'] - y)
      if(dist < minDist) {
        minDist = dist
        closestSnake = snake.getId()
      }
    }
    return closestSnake
  }

  isClosestToFood(x: number, y: number, id: string) : boolean {
    return (this.findClosestSnake(x, y) == id)
  }

  findClosestFood(id: string): number {
    this.startTimer('findClosestFood')
    let head = this.getSnake(id).getHead()
    let minDist = Infinity
    for(let i = 0, foodLength = this.food.length; i < foodLength; i++) {
      let food = this.food[i]
      let thisDist = Math.abs(head['x'] - food['x']) + Math.abs(head['y'] - food['y'])
      if(thisDist < minDist) {
        minDist = thisDist
      }
    }
    this.stopTimer('findClosestFood')
    return minDist
  }

  getDistance(x1: number,x2: number,y1: number,y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }

  isSnakeWithin(id: string, oppId: string, minDist: number): boolean {
    let snake = this.getSnake(id)
    let head = snake.getHead()
    let oppSnake = this.getSnake(oppId)
    if(this.getDistance(head.x, oppSnake.body[0].x, head.y, oppSnake.body[0].y) <= 4) return true
    if(this.getDistance(head.x, oppSnake.body[oppSnake.length - 1].x, head.y, oppSnake.body[oppSnake.length - 1].y) <= 4) return true
    return false
  }

  doesStarveOpponent(id: string): boolean {
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.snakes[i] == null) continue
      let snake = this.snakes[i]
      if(snake.health < 1) return true
    }
    return false
  }

  doesKillOpponent(id: string): boolean {
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.snakes[i] == null) continue
      let snake = this.snakes[i]
      let head = snake.getHead()
      if(this.isTileOutOfBounds(head.x, head.y)) return true
      if(this.isTileSnake(head.x, head.y, i, false)) return true
    }
    return false
  }

  doesHeadKillOpponent(id: string): boolean {
    let playerSnake = this.getSnake(id)
    let playerHead = playerSnake.getHead()
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      let snake = this.snakes[i]
      if(id != snake.getId()) {
        if(snake.getLength() < playerSnake.getLength() &&  playerHead.x == snake.getHead()['x'] && playerHead.y == snake.getHead()['y']) return true
      }
    }
    return false
  }

  doesHungerOpponent(id: string): boolean {
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.snakes[i] == null) continue
      let snake = this.snakes[i]
      if(snake.health < this.findClosestFood(i)) return true
    }
    return false
  }

  doesAreaOpponent(id: string): boolean {
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.snakes[i] == null) continue
      if(this.doesAreaSelf(id)) return true
    }
    return false
  }

  doesAreaSelf(id: string): boolean {
    let snake = this.snakes[id]
    let head = snake.getHead()
    let tail = snake.getTail()
    return snake.getLength() > this.bf.getTileAreaData(head.x, head.y, tail.x, tail.y,this)['area']
  }

  // Did this move end the game, and put us in terminal state?
  isGameOver(id: string): boolean {
    this.startTimer('isGameOver')
    if(this.snakes[id] == undefined) {
      return true
    } else if(this.snakeCount == 1) {
      return true
    }
    this.stopTimer('isGameOver')
    return false
  }

  didSnakeWin(id: string): boolean {
    if(this.snakeCount == 1
      && this.snakes[id] != undefined) {
      return true
    }
    return false
  }

  // Add snake to game state and to the board
  addSnake(data: Types.SnakeData): Snake {
    let snake = new Snake(data)
    this.board[snake.getHead()['y']][snake.getHead()['x']] = SNAKE_HEAD
    this.board[snake.getTail()['y']][snake.getTail()['x']] = SNAKE_TAIL

    let torso = snake.getTorso()
    for(let i = 0, torsoLength = torso.length;i<torsoLength;i++) {
      this.board[torso[i]['y']][torso[i]['x']] = SNAKE_BODY
    }

    this.snakes[snake.getId()] = snake
    return snake
  }

  // Add food to game state and to the board
  addFood(food: {x:number, y:number}): {x:number, y:number} {
    this.board[food['y']][food['x']] = FOOD
    this.food.push(food)
    return food
  }

  removeFood(x: number, y:number): void {
    let foods = this.food
    for (let i = 0, l = foods.length; i < l; i++) {
      if (foods[i] && foods[i].x === x
          && foods[i].y === y) {
        foods[i] = foods[foods.length - 1]
        foods.pop()
        break
      }
    }
  }

  // Get snake from game state by snake ID
  getSnake(id: string): Snake {
    return this.snakes[id]
  }

  // Get all directions the snake can move without termination
  getValidSnakeMoves(id: string): Array<string> {
    this.startTimer('getValidSnakeMoves')
    if(this.getSnake(id) == undefined) return []
    let head = this.getSnake(id).getHead()
    let dirs = ['left','up','right','down',]
    let validDirs = []
    // Iterate all directions, and confirm each is survivable before passing along
    for(let i = 0, dirsLength = dirs.length; i < dirsLength; i++) {
      let directionVector = this.getDirectionVector(dirs[i])
      if(this.getSnake(id).health == 1 && !this.isTileFood(head.x + directionVector.x, head.y + directionVector.y)) continue
      if(this.isTileOutOfBounds(head.x + directionVector.x, head.y + directionVector.y)) continue
      if(this.isTileSnake(head.x + directionVector.x, head.y + directionVector.y, id)) continue
      validDirs.push(dirs[i])
    }
    if(validDirs.length == 0) validDirs = dirs
    this.stopTimer('getValidSnakeMoves')
    return validDirs
  }

  getValidOppMoves(id: string): Array<string> {
    this.startTimer('getValidSnakeMoves')
    let snake = this.getSnake(id)
    let head = snake.getHead()
    let dirs = ['up','left','right','down']
    let validDirs = []
    // Iterate all directions, and confirm each is survivable before passing along
    for(let i = 0, dirsLength = dirs.length; i < dirsLength; i++) {
      let directionVector = this.getDirectionVector(dirs[i])
      if(this.isTileOutOfBounds(head.x + directionVector.x, head.y + directionVector.y)) continue
      if((head.x + directionVector.x) == snake.body[1].x && (head.y + directionVector.y) == snake.body[1].y) continue
      validDirs.push(dirs[i])
    }
    this.stopTimer('getValidSnakeMoves')
    return validDirs
  }

  getForwardsMoves(id: string): Array<string> {
    let head = this.getSnake(id).getHead()
    let dirs = ['up','left','right','down']
    if(this.turn == 0) return dirs
    let validDirs = []
    if(this.turn > 2) {
      let torso = this.getSnake(id).getTorso()
      for(let i = 0, dirsLength = dirs.length; i < dirsLength; i++) {
        let directionVector = this.getDirectionVector(dirs[i])
        if(head.x + directionVector.x != torso[0].x && head.y + directionVector.y != torso[0].y) {
          validDirs.push(dirs[i])
        }
      }
    } else {
      return dirs
    }
    return validDirs
  }

  getBoard(): Array<Array<number>> {
    return this.board
  }

  buildResetBoard(): void {
    for(let i = 0;i<this.height;i++) {
      this.board[i] = []
      for(let j = 0;j<this.width;j++) {
        this.board[i].push(0)
      }
    }
  }

  getDirectionVector(directionString: string): {x: number, y: number} {
    let direction = {x:0,y:0}
    switch(directionString) {
      case 'left':
        direction.x = -1
        break
      case 'right':
        direction.x = 1
        break
      case 'up':
        direction.y = -1
        break
      case 'down':
        direction.y = 1
        break
    }

    return direction
  }

  cleanupTimers(): void {
    if(DebugConfig.logging) {
      this['timeAgo'] = {}
      Timings.clear()
    }
  }

  startTimer(key: string): void {
    if(DebugConfig.logging) {
      this['timeAgo'][key] = (Date.now())
    }
  }

  stopTimer(key: string): void {
    if(DebugConfig.logging) {
      if(Timings['data'][key] != undefined) {
        Timings['data'][key] += (Date.now()) - this['timeAgo'][key]
      } else {
        Timings['data'][key] = (Date.now()) - this['timeAgo'][key]
      }
    }
  }

  printTimers(): void {
    if(DebugConfig.logging) {
      console.log('-----------------------')
      for(let i in Timings['data']) {
        console.log(`gamestate::${i} - ${Timings['data'][i]}ms`)
      }
    }
  }

  clone(): GameState {
    let game
    game = {board:{}}
    game.board.height = this.height
    game.board.width = this.width
    game.board.food = this.food
    game.board.snakes = []
    let keys = Object.keys(this.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(this.snakes[i] == null) continue
      let snake = this.snakes[i]
      game.board.snakes.push({
        body: snake.body.concat(),
        health: snake.health,
        id: snake.id
      })
    }
    return new GameState(Object.assign({}, game))
  }
}

export default GameState