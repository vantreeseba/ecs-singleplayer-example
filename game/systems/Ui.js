const System = require('ECSEngine/systems/System');
/**
 * @type {Ui}
 * @extends {System}
 */
class Ui extends System {
  /**
   * constructor
   */
  constructor({engine}) {
    super(['position', 'appearance']);

    this.ui = document.createElement('div');
    this.ui.id = 'ECSUI';
    this.ui.style.position = 'absolute';
    this.ui.style.top = '0px';
    this.ui.style.left = '0px';
    this.ui.style.height = '100%';
    this.ui.style.width = '100%';

    document.body.appendChild(this.ui);

    this.scoreboard = document.createElement('div');
    this.scoreboard.id = 'scoreboard';
    this.scoreboard.style.width = '50px';
    this.scoreboard.style.margin = '10px auto';
    this.scoreboard.style.color = 'white';

    this.leftScore = 0;
    this.rightScore = 0;

    this.ui.appendChild(this.scoreboard);

    this.drawScore();

    engine.events.on('ballHitWall', this.ballHitWall.bind(this));
  }

  drawScore() {
    this.scoreboard.innerText = `${this.leftScore} | ${this.rightScore}`;
  }

  ballHitWall(data) {
    if(data.left) {
      this.rightScore += 1;
    }
    if(data.right){
      this.leftScore += 1;
    }

    this.drawScore();
  }

  /**
   * Run the system on the entities.
   * @param {Array} entities
   */
  update(entities) {
  }

}

module.exports = Ui;
