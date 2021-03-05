import DebugConfig  from '../config/debug'
import TilesConfig  from '../config/tiles'

class Grid {
  // Reference to the 1d data array
  public data: Array<number>

  // Dimensions of the map
  public height: number
  public width: number

  constructor(map: Array<Array<number>>) {
    // The height and width of the map
    this.height   = map.length
    this.width    = map[0].length
    this.data     = [].concat.apply([], map)
  }

  set(x: number,y: number,value: number): number {
    return this.data[(y * this.width) + x] = value
  }

  // Stub for ndarray get call
  get(x: number,y: number): number {
    return this.data[(y * this.width) + x]
  }

  // Find all occurrences of a tile
  findTile(tile:number): Array<Array<number>> {
    let result = []
    for(let i = 0, width = this.width;i < width;i++) {
      for(let j = 0, height = this.height;j < height;j++) {
        if(this.get(i,j) == tile) {
          result.push([i,j])
        }
      }
    }
    return result
  }

  // Print the battlefield
  print(): void {
    let array = this.data
    let rowIterator = 0
    let lineString = '[ '

    for(let i = 0;i < array.length;i++) {
      lineString = lineString + '\'' + this.formatTile(this.get(i % this.width, rowIterator)) + '\''
      if(((i+1) % this.width) != 0) lineString += ', '
      if(((i+1) % this.width) == 0 && i != 0) {
        lineString = lineString + ' ]'
        console.log(lineString)
        rowIterator++
        lineString = '[ '
      }
    }
  }

  formatTile(tile: number) {
    if(DebugConfig.outputChar) {
      tile = TilesConfig[tile]['symbol']
    }
    return tile
  }
}

export default Grid