const System = require('ECSEngine/systems/System');
/**
 * @type {DebugRender}
 * @extends {System}
 */
class Ball extends System {
  /**
   * constructor
   */
  constructor({engine}) {
    super(['ball']);

    this.engine = engine;

    engine.events.on('ballHitWall', this.resetBall.bind(this));
  }

  /**
   * Ball Event Handler
   * @param {Object} data
   */
  resetBall() {
    this.entityCache.forEach(x => x.position.x = 900);
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
  }

}

module.exports = Ball;
