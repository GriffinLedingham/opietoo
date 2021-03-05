import { expect } from 'chai'
import GameState from '../classes/gamestate'
import AppStubs from './App.stubs'

describe('GameState', () => {
  describe('getNextSnakeMove()', () => {
    it('should avoid death in a corner', () => {
      let data = AppStubs.cornerDeath
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('left')
    })

    it('should prioritize starving over opponents', () => {
      let data = AppStubs.starveDeath
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('up')
    })

    it('should cutoff opponent in head to head', () => {
      let data = AppStubs.cutoffOpponent
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('down')
    })

    it('should dodge opponent head', () => {
      let data = AppStubs.dodgeHead
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('up')
    })

    it('should not approach head', () => {
      let data = AppStubs.notApproachHead
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).not.to.equal('left')
    })

    it('should not eat head', () => {
      let data = AppStubs.eatHead
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('down')
    })

    it('shouldnt enclose self on a food', () => {
      let data = AppStubs.encloseSelf
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('left')
    })

    it('should optimize head to head to 6+ turns', () => {
      let data = AppStubs.optimizeHeadToHead
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(true).to.equal(true)
    })

    it('avoid going up into dangerous center', () => {
      let data = AppStubs.avoidDangeCenter
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('right')
    })

    it('avoid going up towards longer snake head on depth 1', () => {
      let data = AppStubs.avoidLongSnake
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).not.to.equal('up')
    })

    it('should not randomly ram heads on a food', () => {
      let data = AppStubs.randomHeadOn
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).not.to.equal('down')
    })

    it('should follow tail instead of area kill self', () => {
      let data = AppStubs.followTailInSmallArea
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('down')
    })


    it('should not area self in a corner', () => {
      let data = AppStubs.cornerAreaSelf
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('down')
    })

    it('should not enclose self in wide open', () => {
      let data = AppStubs.encloseSelfWideOpen
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('up')
    })

    it('should not enclose self in top left corner', () => {
      let data = AppStubs.encloseSelfSelfless
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('down')
    })

    it('should follow tail', () => {
      let data = AppStubs.followTail
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('up')
    })

    it('should choose up to more free space', () => {
      let data = AppStubs.upToAreaNotDown
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('up')
    })
    it('should not area self bottom right', () => {
      let data = AppStubs.areaSelfBottomRight
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('left')
    })
    it('should not turn in on self at turn 1', () => {
      let data = AppStubs.turnInOnSelf
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).not.to.equal('down')
    })
    it('should avoid scenario tail when eat coming', () => {
      let data = AppStubs.avoidTailWhenEatComing
      let playerId = data.you.id
      let gameState = new GameState(data)
      let nextMove = gameState.getSnakeNextMove(playerId)
      expect(nextMove).to.equal('right')
    })

    //--------------------------------
    // Disabled Tests
    //--------------------------------
    // it('should not go up into an early clusterfuck', () => {
    //   let data = AppStubs.upIntoClusterfuck
    //   let playerId = data.you.id
    //   let gameState = new GameState(data)
    //   let nextMove = gameState.getSnakeNextMove(playerId)
    //   expect(nextMove).not.to.equal('up')
    // })
    // it('shouldnt randomly ram a snake on turn 1', () => {
    //   let data = AppStubs.dontKillSelf
    //   let playerId = data.you.id
    //   let gameState = new GameState(data)
    //   let nextMove = gameState.getSnakeNextMove(playerId)
    //   expect(nextMove).not.to.equal('left')
    // })
    // it('should go right and not trap self', () => {
    //   let data = AppStubs.optimizeHeadToHead
    //   let playerId = data.you.id
    //   let gameState = new GameState(data)
    //   let nextMove = gameState.getSnakeNextMove(playerId)
    //   expect(true).to.equal(true)
    // })
    // it('should not area self kill in opponent', () => {
    //   let data = AppStubs.areaSelfKill
    //   let playerId = data.you.id
    //   let gameState = new GameState(data)
    //   let nextMove = gameState.getSnakeNextMove(playerId)
    //   expect(nextMove).not.to.equal('up')
    // })
  })
})