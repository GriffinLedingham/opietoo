import  DebugConfig from  '../config/debug'
const   uuid =            require('uuid')
const   att =             require('array-to-tree')

class DebuggerClient {
  public socket
  public playerId
  public flatTree = {}
  constructor(playerId) {
    const io = require('socket.io-client')
    this.socket = io.connect(`http://localhost:${DebugConfig.debuggerPort}`)
    this.playerId = playerId
  }

  wipe() {
    this.flatTree = {}
  }

  pushNode(id, parent, depth, state) {
    this.flatTree[id] = {id: id, parent: parent, depth: depth, state: state, player: this.playerId}
  }

  setNodeScore(id, score) {
    this.flatTree[id]['name'] = score
  }

  finalData(best, direction) {
    this.sendTurn(best, direction)
  }

  sendTurn(best, direction) {
    this.socket.emit('move_data', {tree:this.formatTurnData(), playerId: this.playerId, best: best, dir: direction})
  }

  formatTurnData() {
    return att(Object.keys(this.flatTree).map(i => this.flatTree[i]), {
      parentProperty: 'parent',
      customID: 'id'
    })
  }

  generateGUID() {
    return uuid.v4()
  }
}

export default DebuggerClient