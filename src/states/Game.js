import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.physics.arcade.gravity.y = 200
  }

  preload () {
    this.game.time.advancedTiming = true
  }

  create () {
    this.game.add.sprite(0, 0, 'background')
    this.mushroom = new Mushroom({
      game: this.game,
      x: 300,
      y: 399,
      asset: 'mushroom'
    })

    this.game.physics.enable(this.mushroom)
    this.game.add.existing(this.mushroom)
  }

  update () {
  }

  render () {
    this.game.debug.text(this.game.time.fps || '--', 2, 14, '#00ff00')
  }
}
