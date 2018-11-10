import Phaser from 'phaser'
import {Pistol} from '../weapons/Weapon'

class Mushroom extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.anchor.setTo(0.5)
    this.game = game
    this.game.physics.enable(this)
    this.body.angularDrag = 100
    this.body.maxAngular = 1000
    this.body.drag = { x: 150, y: 150 }
    this.body.collideWorldBounds = true
    this.body.bounce.setTo(1, 1)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.weapon = new Pistol(this.game, this)
  }

  update () {
    console.log(this.rotation)
    console.log(this.angle)
    this.body.angularAcceleration = 0

    if (this.cursors.up.isDown) {
      this.game.physics.arcade.velocityFromAngle(this.angle, -100, this.body.velocity);
    } else {
      this.body.acceleration.set(0)
    }

    if (this.cursors.left.isDown) {
      this.body.angularAcceleration = -200
    } else if (this.cursors.right.isDown) {
      this.body.angularAcceleration = 200
    }

    if (this.boomBoom.isDown) {
      this.game.physics.arcade.velocityFromAngle(this.angle, -1000, this.body.velocity);
    }
    if (this.spaceKey.isDown){
      this.body.velocity.x += this.weapon.recoil
      this.body.drag = 50
    }

  }
}

export default Mushroom
