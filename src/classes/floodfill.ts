import Grid         from './grid'

class FloodFill {
  public oldVal
  public spacesHit
  constructor() {
    this.oldVal = null
    this.spacesHit = []
  }

  flood(mapData: Grid, x: number, y: number, newVal: number): number {
    this.oldVal = mapData.get(x,y)
    this.floodFillRecursive(mapData, x, y, newVal)
    let area: number = 0;
    for (let i = 0; i < mapData.data.length; i++) {
      if (mapData.data[i] == newVal) {
        mapData.data[i] = this.oldVal
        area++
      }
    }
    return area
  }

  floodFillRecursive(mapData, x, y, newVal) {
    let mapWidth = mapData.width,
        mapHeight = mapData.height;

    if(mapData.get(x,y) !== this.oldVal){
        return true;
    }

    this.spacesHit.push([x,y])
    mapData.set(x,y, newVal)

    if (x > 0){ // left
        this.floodFillRecursive(mapData, x-1, y, newVal);
    }
    if(y > 0){ // up
        this.floodFillRecursive(mapData, x, y-1, newVal);
    }
    if(x < mapWidth-1){ // right
        this.floodFillRecursive(mapData, x+1, y, newVal);
    }
    if(y < mapHeight-1){ // down
        this.floodFillRecursive(mapData, x, y+1, newVal);
    }
  }
}

function floodFillQueue(mapData: Grid, x: number, y: number, newVal: number, oldVal: number) {
  let hits = new Array(mapData.height).fill(false).map(() => new Array(mapData.width).fill(false)),
      queue = new QueueJSQueue()
  queue.push([x,y])
  while(queue.getLength() > 0) {
    let p = queue.shift()
    if(floodFillDo(mapData,hits,p[0],p[1],oldVal,newVal)) {
      queue.push([x,y-1])
      queue.push([x,y+1])
      queue.push([x-1,y])
      queue.push([x+1,y])
    }
  }
}

function floodFillDo(mapData: Grid,hits: Array<Array<boolean>>,x: number,y: number,oldVal: number,newVal: number): boolean {
  if(y < 0 || x < 0) return false
  if(y > mapData.height-1 || x > mapData.width-1) return false
  if(hits[y][x]) return false
  if(mapData.get(x,y) != oldVal) return false
  mapData.set(x,y,newVal)
  hits[y][x] = true
  return true
}

class GriffinQueue {
  public inbox: Array<Array<number>>
  public outbox: Array<Array<number>>

  constructor() {
    this.inbox = []
    this.outbox = []
  }

  getLength(): number {
    return this.inbox.length || this.outbox.length
  }

  push(i: Array<number>) {
    this.inbox.push(i)
  }

  shift(): Array<number> {
    if (this.outbox.length === 0) {
    let t = this.outbox
    this.outbox = this.inbox.reverse()
    this.inbox = t
    }
    return this.outbox.pop()
  }
}

class QueueJSQueue{
  public queue: Array<Array<number>>
  public offset: number

  constructor() {
    this.offset = 0
    this.queue = []
  }

  getLength(): number {
    return (this.queue.length - this.offset)
  }

  push(item: Array<number>): void {
    this.queue.push(item)
  }

  shift(): Array<number> {
    if (this.queue.length == 0) return undefined
    let item = this.queue[this.offset]
    if (++ this.offset * 2 >= this.queue.length) {
      this.queue  = this.queue.slice(this.offset)
      this.offset = 0
    }
    return item
  }
}

export default FloodFill