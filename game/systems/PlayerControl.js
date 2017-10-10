const System = require('ECSEngine/systems/System');
const Keys = require('ECSEngine/input/Keys');
const Gamepad = require('ECSEngine/input/GamepadManager');

/**
 * @type {PlayerControl}
 * @extends {System}
 */
class PlayerControl extends System {
  /**
   * constructor
   */
  constructor({tickRate}) {
    super(['position', 'paddle', 'playercontrol'], tickRate);

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

    entities.forEach(ent => {
      ent.paddle.movingUp = this.keys.isDown('w');
      ent.paddle.movingDown = this.keys.isDown('s');
    });
  }

}

module.exports = PlayerControl;
