const Component = require('ECSEngine/components/Component');

/**
 * A component representing the appearance of an entity.
 * @extends {Component}
 */
class PixiAppearance extends Component {
  /**
   * constructor
   * @param {Number} value The appearance of this entity.
   */
  constructor() {
    super({
      file: 'bunny.png'
    });
  }
}

module.exports = PixiAppearance;
