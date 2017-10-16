const System = require('ECSEngine/systems/System');

/**
 * @type {PlayerControl}
 * @extends {System}
 */
class PaddleMovement extends System {
  /**
   * constructor
   */
  constructor({tickRate}) {
    super(['position', 'paddle'], tickRate);
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
    entities.forEach(ent => {
      if(ent.paddle.movingUp) {
        ent.position.y -= ent.paddle.speed;
      }

      if(ent.paddle.movingDown) {
        ent.position.y += ent.paddle.speed;
      }
    });
  }

}

module.exports = PaddleMovement;
