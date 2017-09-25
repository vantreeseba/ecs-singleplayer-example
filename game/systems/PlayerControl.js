const System = require('ECSEngine/systems/System');
const MessageTypes = require('ECSEngine/MessageTypes');
const Keys = require('../Keys');
const Gamepad = require('../GamepadManager');

/**
 * @type {PlayerControl}
 * @extends {System}
 */
class PlayerControl extends System {
  /**
   * constructor
   */
  constructor({tickRate}) {
    super(['position', 'rotation', 'playercontrol'], tickRate);

    this.keys = new Keys();
    this.gamepad = new Gamepad();

    this.keys.update();
    this.gamepad.update();
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
    this.keys.update();
    this.gamepad.update();

    let speed = 5;

    entities.forEach(ent => {
      if(this.keys.isDown('a')) {
        ent.position.x -= speed;
      }

      if(this.keys.isDown('d')) {
        ent.position.x += speed;
      }

      if(this.keys.isDown('w')) {
        ent.position.y -= speed;
      }

      if(this.keys.isDown('s')) {
        ent.position.y += speed;
      }
    });
  }

}

module.exports = PlayerControl;
