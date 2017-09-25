
const Entity = require('ECSEngine/entities/Entity');
const Components = require('ECSEngine/components');
const PixiAppearance = require('../components/PixiAppearance');

/**
 * An example player entity.
 * @extends {Entity}
 */
class Npc extends Entity {
  /**
   * constructor
   */
  constructor() {
    super();

    this.addComponent(new Components.position());
    this.addComponent(new Components.rotation());
    // this.addComponent(new Components.playerControl());
    // this.addComponent(new Components.appearance());
    this.addComponent(new PixiAppearance());
  }
}

module.exports = Npc;
