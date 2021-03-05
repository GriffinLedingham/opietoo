import GameState            from './gamestate'
import Snake                from './snake'
import HeuristicConfig      from '../config/heuristic'
import GameConfig           from '../config/game'

class Heuristic {
  private state: GameState
  private id: string

  constructor(id: string, state: GameState) {
    this.id     = id
    this.state  = state
  }

  calculateHeuristic(): number {
    if(this.didWeLose(this.id)) {
      if(this.state.didKillSelf) return HeuristicConfig.suicideScore
      else return HeuristicConfig.snakeLose
    }
    if(this.didWeWin(this.id))  return HeuristicConfig.snakeWin

    let score = 0
    let snakeCount = this.state.snakeCount
    let snake = this.state.getSnake(this.id)
    let head = snake.getHead()

    score += this.getFoodScore(snake)
    score += Math.pow(this.getAreaScore(snake),2)
    score += 0.25 * this.getOwnedTiles(snake)
    score += 0.25 * this.getCenterScore(snake)

    let keys = Object.keys(this.state.snakes)

    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == this.id || this.state.snakes[i] == null) continue
      let oppSnake = this.state.snakes[i]
      let oppHead = oppSnake.getHead()
      let oppDist = this.state.getDistance(head.x, oppHead.x, head.y, oppHead.y)
      if(oppDist < 8) {
        score -= this.getAreaScore(oppSnake) * (1 / oppDist)
      }
    }

    if(snakeCount > 2) {
      score += this.getDistanceBigScore(this.id)

      if(this.getDistanceScore(this.id).closeProx > 1) {
        score *= 0.5
      }

      score *= this.getAvailableDirections(this.id) / 3
    }

    if(snakeCount <= 2) {
      score += this.getOpponentLengthAreaScore(this.id)
    }

    return score
  }

  didWeLose(id: string): boolean {
    return this.state.snakes[id] == undefined
  }

  didWeWin(id: string): boolean {
    return this.state.snakeCount == 1 && (this.state.snakes[id] != undefined)
  }

  getAreaScore(snake: Snake): number {
    this.state.startTimer('getTileAreaData')
    let areaScore = 0
    let head = snake.getHead()
    let tail = snake.getTail()
    let areaData = this.state.bf.getTileAreaData(head.x, head.y, tail.x, tail.y, this.state)
    areaScore += areaData['area']
    this.state.stopTimer('getTileAreaData')
    return areaScore
  }

  getOwnedTiles(snake: Snake): number {
    this.state.startTimer('getOwnedTiles')
    let ownedTiles = this.state.getOwnedTiles(snake.getId())
    this.state.stopTimer('getOwnedTiles')
    return ownedTiles
  }

  getFoodScore(snake: Snake): number {
    this.state.startTimer('getFoodScore')
    let head = snake.getHead()
    let foodScore = 0
    let hungryRange = GameConfig.hungryRange

    // Change the hungry range if food count is low
    if(this.state.food.length < GameConfig.starvingLimit || this.state.snakeCount > 2) hungryRange = GameConfig.starvingRange

    let foodWeight = 0
    // If the snake is at a good time to eat, calculate foodWeight
    if(snake.health < hungryRange || snake.getLength() < GameConfig.minSnakeLength) foodWeight = (1 - (snake.health/GameConfig.snakeMaxHealth))

    // Subtract food distance * foodWeight for each piece of food
    for(let i = 0; i < this.state.food.length; i++) {
      let food = this.state.food[i]
      let closestMult = (this.state.isClosestToFood(food.x, food.y, snake.getId()))?1:2
      foodScore -= closestMult * (foodWeight * this.state.getDistance(head.x, food.x, head.y, food.y))
    }
    this.state.stopTimer('getFoodScore')
    return foodScore
  }

  avoidEdges(snake: Snake): number {
    this.state.startTimer('avoidEdges')
    let edgeScore = 0
    let head = snake.getHead()
    if(head.x == 0 || head.x == (this.state.width - 1)) edgeScore -= HeuristicConfig.edgeScore
    if(head.y == 0 || head.y == (this.state.height - 1)) edgeScore -= HeuristicConfig.edgeScore
    this.state.stopTimer('avoidEdges')
    return edgeScore
  }

  getOpponentAreaScore(id: string): number {
    this.state.startTimer('getOpponentAreaScore')
    let areaScore = 0
    let keys = Object.keys(this.state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.state.snakes[i] == null) continue
      let snake = this.state.snakes[i]
      let head = snake.getHead()
      let tail = snake.getTail()
      let oppAreaData = this.state.bf.getTileAreaData(head.x, head.y, tail.x, tail.y, this.state)
      areaScore -= oppAreaData['area']
    }
    this.state.stopTimer('getOpponentAreaScore')
    return areaScore
  }

  getOpponentLengthAreaScore(id: string): number {
    this.state.startTimer('getOpponentAreaLengthScore')
    let areaLengthScore = 0
    let keys = Object.keys(this.state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.state.snakes[i] == null) continue
      let snake = this.state.snakes[i]
      let head = snake.getHead()
      let tail = snake.getTail()
      let oppAreaData = this.state.bf.getTileAreaData(head.x, head.y, tail.x, tail.y, this.state)
      areaLengthScore += snake.getLength() - oppAreaData['area']
    }
    this.state.stopTimer('getOpponentAreaLengthScore')
    return areaLengthScore
  }

  getDistanceScore(id: string): {score: number, closeProx: number} {
    this.state.startTimer('getDistanceScore')
    let distanceScore = {score:0,closeProx:0}
    let mainSnake = this.state.snakes[id]
    let mainHead = mainSnake.getHead()
    let keys = Object.keys(this.state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.state.snakes[i] == null) continue
      let snake = this.state.snakes[i]
      let head = snake.getHead()
      let snakeDistance = this.state.getDistance(head.x, mainHead.x, head.y, mainHead.y)
      if(snakeDistance <= 2) distanceScore['closeProx'] += 1
      distanceScore['score'] += snakeDistance
    }
    this.state.stopTimer('getDistanceScore')
    return distanceScore
  }

  getDistanceBigScore(id: string): number {
    this.state.startTimer('getDistanceBigScore')
    let distanceScore = 0
    let mainSnake = this.state.snakes[id]
    let mainHead = mainSnake.getHead()
    let keys = Object.keys(this.state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.state.snakes[i] == null) continue
      let snake = this.state.snakes[i]
      if(snake.getLength() < mainSnake.getLength()) continue
      let head = snake.getHead()
      let snakeDistance = this.state.getDistance(head.x, mainHead.x, head.y, mainHead.y)
      distanceScore += snakeDistance
    }
    this.state.stopTimer('getDistanceBigScore')
    return distanceScore
  }

  isSnakeXDistClose(id: string, minDist: number): boolean {
    this.state.startTimer('isSnakeXDistClose')
    let isClose = false
    let mainSnake = this.state.snakes[id]
    let mainHead = mainSnake.getHead()
    let keys = Object.keys(this.state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.state.snakes[i] == null) continue
      let snake = this.state.snakes[i]
      let head = snake.getHead()
      let snakeDistance = this.state.getDistance(head.x, mainHead.x, head.y, mainHead.y)
      if(snakeDistance <= minDist) {
        isClose = true
        break
      }
    }
    this.state.stopTimer('isSnakeXDistClose')
    return isClose
  }

  getAvailableDirections(id: string): number {
    this.state.startTimer('getAvailableDirectionMult(')
    let validMoves = this.state.getValidSnakeMoves(id)
    this.state.stopTimer('getAvailableDirectionMult(')
    return validMoves.length
  }

  getCenterScore(snake: Snake): number {
    let centerScore = 0
    let head = snake.getHead()
    centerScore -= this.state.getDistance(head.x, Math.floor(this.state.width/2), head.y, Math.floor(this.state.height/2))
    return centerScore
  }

  getCornerScore(snake: Snake): number {
    let cornerScore = 0
    let head = snake.getHead()
    cornerScore += this.state.getDistance(head.x, 0, head.y, 0)
    cornerScore += this.state.getDistance(head.x, this.state.width - 1, head.y, this.state.height - 1)
    cornerScore += this.state.getDistance(head.x, this.state.width - 1, head.y, 0)
    cornerScore += this.state.getDistance(head.x, 0, head.y, this.state.height - 1)
    return cornerScore
  }

  isInRNGFiesta(id: string): boolean {
    this.state.startTimer('isInRNGFiesta')
    let isClose = false
    let mainSnake = this.state.snakes[id]
    let mainHead = mainSnake.getHead()
    let keys = Object.keys(this.state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(i == id || this.state.snakes[i] == null) continue
      let snake = this.state.snakes[i]
      let head = snake.getHead()
      let snakeDistance = this.state.getDistance(head.x, mainHead.x, head.y, mainHead.y)
      if(snakeDistance <= 2 && snake.getLength() >= mainSnake.getLength()
          && (
            (head.x == mainHead.x - 1 && head.y == mainHead.y - 1)
            || (head.x == mainHead.x - 1 && head.y == mainHead.y + 1)
            || (head.x == mainHead.x + 1 && head.y == mainHead.y - 1)
            || (head.x == mainHead.x + 1 && head.y == mainHead.y + 1)
          )) {
        isClose = true
        break
      }
    }
    this.state.stopTimer('isInRNGFiesta')
    return isClose
  }
}

export default Heuristic
