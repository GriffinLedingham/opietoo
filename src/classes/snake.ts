/// <reference path="../declarations/Types.d.ts" />
import * as Types   from 'Types'

class Snake {
  public body
  public health
  public length
  public name
  public id

  constructor(data: Types.SnakeData) {
    this.body   = data.body
    if(this.body.length > 3) {
      if(this.body[this.body.length - 1].x == this.body[this.body.length - 2].x
          && this.body[this.body.length - 1].y == this.body[this.body.length - 2].y) {
        this.body.pop()
      }
    }
    this.health = data.health
    this.name   = data.name
    this.id     = data.id
    this.length = this.body.length
  }

  getId(): string {
    return this.id
  }

  getHead(): {x: number, y: number} {
    return this.body[0]
  }

  getTail(): {x: number, y: number} {
    return this.body[this.body.length - 1]
  }

  getTorso(): Array<{x: number, y: number}> {
    let torso = this.body.concat()
    torso.splice(0,1)
    torso.splice(torso.length - 1, 1)
    return torso
  }

  getLength(): number {
    return this.body.length
  }
}

export default Snake