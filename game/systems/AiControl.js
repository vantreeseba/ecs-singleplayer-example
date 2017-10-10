const System = require('ECSEngine/systems/System');

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
      ent.paddle.movingDown = this.ball.position.y + 10> ent.position.y;
      ent.paddle.movingUp = this.ball.position.y - 10 < ent.position.y;
    });
  }

}

module.exports = AiControl;
