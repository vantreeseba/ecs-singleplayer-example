const Components = require('ECSEngine/components');
const Paddle = require('./Paddle');

/**
 * An example player entity.
 * @extends {Entity}
 */
class Player extends Paddle {
  /**
   * constructor
   */
  constructor() {
    super();

    this.addComponent(new Components.playerControl());
  }
}

module.exports = Player;
