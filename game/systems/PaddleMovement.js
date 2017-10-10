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
    let speed = 5;

    entities.forEach(ent => {
      if(ent.paddle.movingUp) {
        ent.position.y -= speed;
      }

      if(ent.paddle.movingDown) {
        ent.position.y += speed;
      }
    });
  }

}

module.exports = PaddleMovement;
