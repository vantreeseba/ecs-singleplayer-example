const System = require('ECSEngine/systems/System');
const Utils = require('ECSEngine/utils');

/**
 * @type {PlayerControl}
 * @extends {System}
 */
class AiControl extends System {
  /**
   * constructor
   */
  constructor({engine, tickRate}) {
    super(['position', 'paddle', 'aipaddle'], tickRate);
    this.ball = Array.from(engine.entities.entities.values()).find(x => x.ball);
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
    entities.forEach(ent => {
      const diff = Math.abs(this.ball.position.y - ent.position.y);

      ent.paddle.speed = Utils.map(diff, 0, 100, 0.5, 5);
      ent.paddle.movingDown = this.ball.position.y + 5 > ent.position.y;
      ent.paddle.movingUp = this.ball.position.y - 5 < ent.position.y;
    });
  }
}

module.exports = AiControl;
