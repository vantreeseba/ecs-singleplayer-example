const Entity = require('ECSEngine/entities/Entity');
const Components = require('ECSEngine/components');
const PixiAppearance = require('../components/PixiAppearance');
const Paddle = require('../components/Paddle');

/**
 * An example player entity.
 * @extends {Entity}
 */
class PaddleEntity extends Entity {
  /**
   * constructor
   */
  constructor() {
    super();

    this.addComponent(new Components.position());
    this.addComponent(new Components.physics());
    this.addComponent(new Paddle());
    this.addComponent(new PixiAppearance());
  }
}

module.exports = PaddleEntity;
