import FloodFill         from './floodfill'
import Grid         from './grid'

// Tile enums
const FLOOD = 99

class Battlefield {
  // Reference to the raw grid map
  public map: Array<Array<number>>
  public grid: Grid

  constructor(map: Array<Array<number>>) {
    this.map = map
    this.grid = new Grid(map)
  }

  print() : void {
    this.grid.print()
  }

  setTile(x:number, y:number, value:number) : void {
    this.grid.set(x, y, value)
  }

  getTile(x:number, y:number) : number {
    return this.grid.get(x, y)
  }

  // Paint bucket flood from point x,y
  flood(grid: Grid, x: number, y: number, floodChar: number) : number {
    let floodFill = new FloodFill()
    let fillResult = floodFill.flood(grid, x, y, floodChar)
    return fillResult
  }

  // Flood from a given point, and return all food, snakes, etc. within it
  getTileAreaData(x: number, y: number, taily: number, tailx: number, state) : {area: number} {
    let foodPos = this.grid.findTile(2)
    let tailPos = this.grid.findTile(4)
    let revertPositions = []

    for(let i = 0; i < foodPos.length; i++) {
      this.grid.set(foodPos[i][0],foodPos[i][1],0)
      revertPositions.push([foodPos[i][0],foodPos[i][1],2])
    }

    for(let j = 0; j < tailPos.length; j++) {
      this.grid.set(tailPos[j][0],tailPos[j][1],0)
      revertPositions.push([tailPos[j][0],tailPos[j][1],4])
    }

    let keys = Object.keys(state.snakes)
    for(let j = 0, l = keys.length; j < l; j++) {
      let i = keys[j]
      if(state.snakes[i] == null) continue
      if(state.snakes[i].health == 100) {
        this.grid.set(state.snakes[i].body[state.snakes[i].getLength() - 1].x, state.snakes[i].body[state.snakes[i].getLength() - 1].y, 4)
      }
    }

    if(x < 0 || x > this.grid.width - 1 || y > this.grid.height - 1 || y < 0) {
      return {
        area: 0
      }
    }

    this.grid.set(x,y,0)
    this.grid.set(tailx,taily,0)
    let floodArea = this.flood(this.grid,x,y,FLOOD)

    for(let i = 0, l = revertPositions.length;i<l;i++) {
      this.grid.set(revertPositions[i][0],revertPositions[i][1],revertPositions[i][2])
    }
    this.grid.set(x,y,3)
    this.grid.set(tailx,taily,4)

    return {
      area: floodArea
    }
  }
}

export default Battlefield