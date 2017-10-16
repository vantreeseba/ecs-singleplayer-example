const Component = require('ECSEngine/components/Component');

/**
 * @extends {Component}
 */
module.exports = class Paddle extends Component {
  /**
   * constructor
   */
  constructor() {
    super({movingUp: false, movingDown: false, speed: 5});
  }
};
