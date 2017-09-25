const System = require('ECSEngine/systems/System');
const PIXI = require('pixi.js');
/**
 * @type {DebugRender}
 * @extends {System}
 */
class PixiRender extends System {
  /**
   * constructor
   */
  constructor() {
    super(['position', 'rotation', 'pixiappearance'], 60, 1);

    this.pixiApp = new PIXI.Application({
      autoStart: false,
      sharedTicker: true,
    });

    this.pixiApp.ticker.stop();

    document.body.appendChild(this.pixiApp.view);

    this.entitySprites = {};
  }

  /**
   * Load and add sprite, associate it with entity id.
   * @param {Entity} entity
   */
  addSprite(entity) {
    let sprite = PIXI.Sprite.fromImage(entity.pixiappearance.file);
    this.entitySprites[entity.id] = sprite;
    this.pixiApp.stage.addChild(sprite);
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
    let i = 0, entity, pos, rot;

    for(; i < entities.length; i += 1) {
      entity = entities[i];
      pos = entity.position;
      rot = entity.rotation.value;

      if(!this.entitySprites[entity.id]) {
        this.addSprite(entity);
      }

      this.entitySprites[entity.id].position.copy(pos);
      this.entitySprites[entity.id].rotation = rot;
    }

    this.pixiApp.ticker.update();
    this.pixiApp.renderer.render(this.pixiApp.stage);
  }

}

module.exports = PixiRender;
