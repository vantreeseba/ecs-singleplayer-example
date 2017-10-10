const System = require('ECSEngine/systems/System');
/**
 * @type {DebugRender}
 * @extends {System}
 */
class Collision extends System {
  /**
   * constructor
   */
  constructor({engine}) {
    super([]);

    engine.events.on('collision', this.onCollision);
  }

  /**
   * Collision Event Handler
   * @param {Object} data
   */
  onCollision(data) {
    if(data.a.ball) {
      data.a.physics.vel.x = -data.a.physics.vel.x;
      data.a.physics.vel.y = 0.5 - Math.random();
    }

    if(data.b.ball) {
      data.b.physics.vel.x = -data.b.physics.vel.x;
      data.b.physics.vel.y = 0.5 - Math.random();
    }
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
  }

}

module.exports = Collision;
