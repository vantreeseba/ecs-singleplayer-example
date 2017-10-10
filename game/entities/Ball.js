const Entity = require('ECSEngine/entities/Entity');
const Components = require('ECSEngine/components');
const PixiAppearance = require('../components/PixiAppearance');

/**
 * An example player entity.
 * @extends {Entity}
 */
class Ball extends Entity {
  /**
   * constructor
   */
  constructor() {
    super();

    this.ball = true;

    this.addComponent(new Components.position());
    this.addComponent(new Components.physics());
    this.addComponent(new PixiAppearance());
  }
}

module.exports = Ball;

