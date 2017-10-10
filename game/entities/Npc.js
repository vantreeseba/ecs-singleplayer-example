const Paddle = require('./Paddle');
const AIPAddle = require('../components/AIPaddle');

/**
 * An example player entity.
 * @extends {Entity}
 */
class Npc extends Paddle {
  /**
   * constructor
   */
  constructor() {
    super();

    this.addComponent(new AIPAddle());
  }
}

module.exports = Npc;
