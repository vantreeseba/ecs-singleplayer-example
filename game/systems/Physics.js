const System = require('ECSEngine/systems/System');
const Vector = require('ECSEngine/utils/Vector');

/**
 * Phsyics system in ECS.
 * @extends {System}
 */
class Physics extends System {
  /**
   * constructor
   */
  constructor({engine, tickRate} = {tickRate:30}) {
    super(['position', 'physics'], tickRate);

    this.events = engine.events;
  }

  /**
   * Step a physics entity.
   * @param {Object} pys
   * @param {Object} pos
   */
  step(pys, pos) {
    Vector.add2(pys.vel, pys.acc);
    Vector.limit2(pys.vel, pys.maxSpeed * this.dt);
    Vector.add2(pos, pys.vel);
    Vector.scale2(pys.acc, 0);
  }

  /**
   * Limit position to stay within world.
   *
   * @param {Object} pos
   */
  limit(pos) {
    pos.y = pos.y < 0 ? 0 : pos.y;
    pos.y = pos.y > 500 ? 500 : pos.y;
  }

  /**
   * Checks for collisions, emit event when one occurs.
   * @param {Array} entities Array of entities to check for collisions.
   */
  checkForCollisions(entities) {
    let w = 75;

    for(let i = 0; i < entities.length; i += 1) {
      const a = entities[i];
      let apos = a.position;
      for(let j = i; j < entities.length; j += 1) {
        const b = entities[j];
        let bpos = b.position;
        if(a !== b) {
          if(apos.x <= bpos.x + w &&
            apos.x + w >= bpos.x &&
            apos.y <= bpos.y + w &&
            apos.y + w >= bpos.y) {
            this.events.emit('collision', {a, b});
          }
        }
      }
    }
  }

  checkForWallCollisions(entities) {
    for(let i = 0; i < entities.length; i++) {
      const ent = entities[i];
      if(ent.ball) {
        if(ent.position.x < 0) {
          this.events.emit('collision', {a: {wall: true}, b:ent});
        }
        if(ent.position.x > 1800) {
          this.events.emit('collision', {a: end, b: {wall:true}});
        }
      }
    }
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
    let i = 0, entity, pys, pos;

    for(; i < entities.length; i += 1) {
      entity = entities[i];
      pys = entity.physics;
      pos = entity.position;

      this.step(pys, pos);
      this.limit(pos);
    }

    this.checkForCollisions(entities);
    this.checkForWallCollisions(entities);
  }
}

module.exports = Physics;
