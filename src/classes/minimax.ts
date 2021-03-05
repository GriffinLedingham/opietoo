import GameConfig    from '../config/game'
import GameState    from './gamestate'
import Snake        from './snake'
import Debug        from '../debugger/debugger'
import DebugConfig   from '../config/debug'

// Tile enums
const EMPTY_SPACE = 0
const SNAKE_BODY  = 1
const FOOD        = 2
const SNAKE_HEAD  = 3
const SNAKE_TAIL  = 4

const MAX_TIME = GameConfig.maxTime

class MiniMax {
  public playerId
  public startTime
  public nodeMap
  public debug

  constructor(playerId, startTime, debug: Debug) {
    this.debug = debug
    this.playerId = playerId
    this.startTime = startTime
  }

  // Find the best outcomes for our snake
  minimax(state: GameState, depth: number, alpha: number, beta: number, parent?: string): {score: number, dir: string, complete: boolean} {
    let nodeID
    if(DebugConfig.debuggerEnabled) {
      nodeID = this.debug.generateGUID()
      if(parent == null) this.debug.pushNode(nodeID, parent, depth, state.clone())
    }
    // Exit state. Should also kill on time for iterative deepening
    let isGameOver
    if( depth == 0 || (isGameOver = state.isGameOver(this.playerId)) ) {
      let score = state.getPlayerScore( this.playerId )
      if(isGameOver && state.didSnakeWin(this.playerId)) score += depth
      else score -= depth
      if(DebugConfig.debuggerEnabled) {
        if(!isGameOver) {
          this.debug.setNodeScore(parent, score)
        } else {
          this.debug.pushNode(nodeID, parent, depth, state.clone())
          this.debug.setNodeScore(nodeID, score)
        }
      }
      let result = {score: score, dir: null, complete: null}
      return result
    }

    // Get all directions our snake can move without insta-death
    const possibleDirs = state.getValidSnakeMoves(this.playerId)

    // Set defaults for best dir
    let best = -Infinity
    let dir = possibleDirs[0]
    if(DebugConfig.debuggerEnabled) {
      if(parent != null) this.debug.pushNode(nodeID, parent, depth, state.clone())
    }
    for( let k = 0, dirCount = possibleDirs.length;k < dirCount;k++ )
    {
      let direction = possibleDirs[k]
      // Find all worst case outcomes, and see if we found a better best-case from them
      let score = this.minimize(state.clone(), direction, depth, alpha, beta, nodeID)
      if(score > best) {
        best = score
        dir = direction
      }
      alpha = Math.max(alpha, best)
      if(state.turn >= 0 && alpha >= beta) break
      if(this.isOutOfTime()) break
    }
    return {score: best, dir: dir, complete: !this.isOutOfTime()}
  }

  // Find the worst outcomes for our snake
  minimize(state: GameState, direction: string, depth: number, alpha: number, beta:number, nodeID: string): number {
    // Get all possible movements for all opponents
    let perms = this.getAllSnakeMoves(state)
    if(perms.length == 0) perms = [[]]
    let worst = Infinity
    for( let i = 0, permsLength = perms.length; i < permsLength; i++ ) {
      if(this.isOutOfTime()) return worst
      let perm = perms[i]
      // Simulate movement for all snakes
      let newState = state.clone()
      this.simSnakes(newState, direction, perm)
      let score = this.minimax(newState, depth - 1, alpha, beta, nodeID)
      worst = Math.min(worst, score['score'])
      beta = Math.min(beta, worst)
      if(state.turn >= 0 && alpha >= beta) break
    }
    return worst
  }

  // Move a snake in a direction. This modifies the passed in state
  simSnake(id: string, state: GameState, direction: string): {x:number, y:number} {
    state.startTimer('simSnake')
    let directionVector = state.getDirectionVector(direction)
    let snake = state.getSnake(id)
    let doesEatFood = state.isTileFood(snake.body[0].x + directionVector.x, snake.body[0].y + directionVector.y)

    if(snake.body.length > 2 && snake.health < 100) {
      state.bf.setTile(snake.body[snake.body.length - 2].x, snake.body[snake.body.length - 2].y, SNAKE_TAIL)
      state.bf.setTile(snake.body[snake.body.length - 1].x, snake.body[snake.body.length - 1].y, EMPTY_SPACE)
    }

    if(state.bf.getTile(snake.body[0].x + directionVector.x, snake.body[0].y + directionVector.y) != SNAKE_BODY) {
      state.bf.setTile(snake.body[0].x + directionVector.x, snake.body[0].y + directionVector.y, SNAKE_HEAD)
    }

    if(snake.health < 100) {
      snake.body.pop()
    }

    let foodToRemove = {x: -1, y: -1}
    if(doesEatFood) {
      foodToRemove = {x: snake.body[0].x + directionVector.x, y: snake.body[0].y + directionVector.y}
      snake.health = GameConfig.snakeMaxHealth
    } else {
      snake.health -= 1
    }

    snake.body.unshift({x:snake.body[0].x + directionVector.x, y: snake.body[0].y + directionVector.y})
    state.bf.setTile(snake.body[1].x, snake.body[1].y, SNAKE_BODY)

    state.stopTimer('simSnake')
    return foodToRemove
  }

  // Sim all snakes with input directions
  simSnakes(state: GameState, direction: string, perm: any): void {
    let foodsToRemove = {}
    state.startTimer('simSnakes')
    state.turn += 1
    this.simSnake(this.playerId, state, direction)
    let keys = Object.keys(state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(perm[i] == undefined) continue
      if(i == this.playerId || state.snakes[i] == null) continue
      else {
        let dirToMove = perm[i]
        let foodToRemove = this.simSnake(i, state, dirToMove)
        if(foodToRemove['x'] != -1) foodsToRemove[`x${foodToRemove['x']}y${foodToRemove['y']}`] = foodToRemove
      }
    }

    for(let j in foodsToRemove) {
      state.removeFood(foodsToRemove[j]['x'], foodsToRemove[j]['y'])
    }

    this.cleanupDeadSnakes(state)
    state.stopTimer('simSnakes')
  }

  cleanupDeadSnakes(state: GameState): void {
    state.startTimer('cleanupDeadSnakes')
    let snakesToRemove = []
    let keys = Object.keys(state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(state.snakes[i] == null) continue
      let snake = state.snakes[i]
      let snakeHead = snake.getHead()
      if(state.isTileOutOfBounds(snakeHead.x, snakeHead.y)
          || state.isTileSnake(snakeHead.x, snakeHead.y, i, true)
          || snake.health == 0) {
        snakesToRemove.push(i)
        if(i == this.playerId) {
          if(state.isTileSelf(this.playerId,snakeHead.x, snakeHead.y)) {
            state.didKillSelf = true
          }
        }
      }
    }
    for(let j = 0, snakesLength = snakesToRemove.length;j<snakesLength;j++) {
      this.removeSnake(snakesToRemove[j], state)
    }
    state.stopTimer('cleanupDeadSnakes')
  }

  removeSnake(id: string, state: GameState) : void {
    state.startTimer('removeSnake')
    let snake = state.getSnake(id)
    for(let i = 0, snakeLength = snake.body.length;i<snakeLength;i++) {
      let body = snake.body[i]
      state.bf.setTile(body.x, body.y, EMPTY_SPACE)
    }
    state.snakes[id] = null
    state.snakeCount--
    state.stopTimer('removeSnake')
  }

  isOutOfTime(): boolean {
    if((Date.now()) - this.startTime >= MAX_TIME) return true
    return false
  }

  // Get permutations of all available directions, for n snakes
  getPermutations(n: number,t: Array<string>) {
    let r,c,u=function(n,t){return[].concat.apply([],n.map(function(n){return[].concat.apply([],t.map(function(t){return[[n].concat(t)]}))}))},e=function(n,t){return t.length>0?t.slice(1).reduce(n,t[0]):[]},o=function(n,t){let r=[t],c=[];if(n<1)return c;for(;n>1;)1&n&&(c=c.concat(r)),n>>=1,r=r.concat(r);return c.concat(r)},a=function(n){return function(t){return function(r){return n(t,r)}}};return r=n,(c=t).length>0?e(a(u)(c),o(r,c)):[]
  }

  getAllSnakeMoves(state): Array<Array<string>> {
    state.startTimer('getAllSnakeMoves')
    let perms = []
    const playerHead = state.getSnake(this.playerId).getHead()
    let playerId = this.playerId
    let snakeCount = state.snakeCount
    let snakeArray = Object.keys(state.snakes).filter(function(key){
      if(key == playerId) return false
      if(snakeCount > 2) {
        if(state.isSnakeWithin(playerId, key, 4)) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    }).map(function(key){
      return {id: key, snake: state.snakes[key]};
    });

    switch(snakeArray.length) {
      case 7:
        perms = this.sevenOppPerms(state, snakeArray)
        break
      case 6:
        perms = this.sixOppPerms(state, snakeArray)
        break
      case 5:
        perms = this.fiveOppPerms(state, snakeArray)
        break
      case 4:
        perms = this.fourOppPerms(state, snakeArray)
        break
      case 3:
        perms = this.threeOppPerms(state, snakeArray)
        break
      case 2:
        perms = this.twoOppPerms(state, snakeArray)
        break
      case 1:
        perms = this.oneOppPerms(state, snakeArray)
        break
    }
    state.stopTimer('getAllSnakeMoves')
    return perms
  }

  sevenOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    let jSnakeMoves = state.getValidOppMoves(snakeArray[1]['id'])
    let kSnakeMoves = state.getValidOppMoves(snakeArray[2]['id'])
    let lSnakeMoves = state.getValidOppMoves(snakeArray[3]['id'])
    let mSnakeMoves = state.getValidOppMoves(snakeArray[4]['id'])
    let nSnakeMoves = state.getValidOppMoves(snakeArray[5]['id'])
    let oSnakeMoves = state.getValidOppMoves(snakeArray[6]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      for(let j = 0, jLength = jSnakeMoves.length; j < jLength ; j++) {
        for(let k = 0, kLength = kSnakeMoves.length; k < kLength ; k++) {
          for(let l = 0, lLength = lSnakeMoves.length; l < lLength ; l++) {
            for(let m = 0, mLength = mSnakeMoves.length; m < mLength ; m++) {
              for(let n = 0, nLength = nSnakeMoves.length; n < nLength ; n++) {
                for(let o = 0, oLength = oSnakeMoves.length; o < oLength ; o++) {
                  let perm = {}
                  perm[snakeArray[0]['id']] = iSnakeMoves[i]
                  perm[snakeArray[1]['id']] = jSnakeMoves[j]
                  perm[snakeArray[2]['id']] = kSnakeMoves[k]
                  perm[snakeArray[3]['id']] = lSnakeMoves[l]
                  perm[snakeArray[4]['id']] = mSnakeMoves[m]
                  perm[snakeArray[5]['id']] = nSnakeMoves[n]
                  perm[snakeArray[6]['id']] = oSnakeMoves[o]
                  perms.push(perm)
                }
              }
            }
          }
        }
      }
    }
    return perms
  }

  sixOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    let jSnakeMoves = state.getValidOppMoves(snakeArray[1]['id'])
    let kSnakeMoves = state.getValidOppMoves(snakeArray[2]['id'])
    let lSnakeMoves = state.getValidOppMoves(snakeArray[3]['id'])
    let mSnakeMoves = state.getValidOppMoves(snakeArray[4]['id'])
    let nSnakeMoves = state.getValidOppMoves(snakeArray[5]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      for(let j = 0, jLength = jSnakeMoves.length; j < jLength ; j++) {
        for(let k = 0, kLength = kSnakeMoves.length; k < kLength ; k++) {
          for(let l = 0, lLength = lSnakeMoves.length; l < lLength ; l++) {
            for(let m = 0, mLength = mSnakeMoves.length; m < mLength ; m++) {
              for(let n = 0, nLength = nSnakeMoves.length; n < nLength ; n++) {
                let perm = {}
                perm[snakeArray[0]['id']] = iSnakeMoves[i]
                perm[snakeArray[1]['id']] = jSnakeMoves[j]
                perm[snakeArray[2]['id']] = kSnakeMoves[k]
                perm[snakeArray[3]['id']] = lSnakeMoves[l]
                perm[snakeArray[4]['id']] = mSnakeMoves[m]
                perm[snakeArray[5]['id']] = nSnakeMoves[n]
                perms.push(perm)
              }
            }
          }
        }
      }
    }
    return perms
  }

  fiveOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    let jSnakeMoves = state.getValidOppMoves(snakeArray[1]['id'])
    let kSnakeMoves = state.getValidOppMoves(snakeArray[2]['id'])
    let lSnakeMoves = state.getValidOppMoves(snakeArray[3]['id'])
    let mSnakeMoves = state.getValidOppMoves(snakeArray[4]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      for(let j = 0, jLength = jSnakeMoves.length; j < jLength ; j++) {
        for(let k = 0, kLength = kSnakeMoves.length; k < kLength ; k++) {
          for(let l = 0, lLength = lSnakeMoves.length; l < lLength ; l++) {
            for(let m = 0, mLength = mSnakeMoves.length; m < mLength ; m++) {
              let perm = {}
              perm[snakeArray[0]['id']] = iSnakeMoves[i]
              perm[snakeArray[1]['id']] = jSnakeMoves[j]
              perm[snakeArray[2]['id']] = kSnakeMoves[k]
              perm[snakeArray[3]['id']] = lSnakeMoves[l]
              perm[snakeArray[4]['id']] = mSnakeMoves[m]
              perms.push(perm)
            }
          }
        }
      }
    }
    return perms
  }

  fourOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    let jSnakeMoves = state.getValidOppMoves(snakeArray[1]['id'])
    let kSnakeMoves = state.getValidOppMoves(snakeArray[2]['id'])
    let lSnakeMoves = state.getValidOppMoves(snakeArray[3]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      for(let j = 0, jLength = jSnakeMoves.length; j < jLength ; j++) {
        for(let k = 0, kLength = kSnakeMoves.length; k < kLength ; k++) {
          for(let l = 0, lLength = lSnakeMoves.length; l < lLength ; l++) {
            let perm = {}
            perm[snakeArray[0]['id']] = iSnakeMoves[i]
            perm[snakeArray[1]['id']] = jSnakeMoves[j]
            perm[snakeArray[2]['id']] = kSnakeMoves[k]
            perm[snakeArray[3]['id']] = lSnakeMoves[l]
            perms.push(perm)
          }
        }
      }
    }
    return perms
  }

  threeOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    let jSnakeMoves = state.getValidOppMoves(snakeArray[1]['id'])
    let kSnakeMoves = state.getValidOppMoves(snakeArray[2]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      for(let j = 0, jLength = jSnakeMoves.length; j < jLength ; j++) {
        for(let k = 0, kLength = kSnakeMoves.length; k < kLength ; k++) {
          let perm = {}
          perm[snakeArray[0]['id']] = iSnakeMoves[i]
          perm[snakeArray[1]['id']] = jSnakeMoves[j]
          perm[snakeArray[2]['id']] = kSnakeMoves[k]
          perms.push(perm)
        }
      }
    }
    return perms
  }

  twoOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    let jSnakeMoves = state.getValidOppMoves(snakeArray[1]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      for(let j = 0, jLength = jSnakeMoves.length; j < jLength ; j++) {
        let perm = {}
        perm[snakeArray[0]['id']] = iSnakeMoves[i]
        perm[snakeArray[1]['id']] = jSnakeMoves[j]
        perms.push(perm)
      }
    }
    return perms
  }

  oneOppPerms(state: GameState, snakeArray: Array<{id: string, snake: Snake}>) {
    let perms = []
    let iSnakeMoves = state.getValidOppMoves(snakeArray[0]['id'])
    for(let i = 0, iLength = iSnakeMoves.length; i < iLength ; i++) {
      let perm = {}
      perm[snakeArray[0]['id']] = iSnakeMoves[i]
      perms.push(perm)
    }
    return perms
  }
}

export default MiniMax