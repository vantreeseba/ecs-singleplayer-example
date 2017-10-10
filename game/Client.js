const Player = require('./entities/Player');
const Npc = require('./entities/Npc');
const Ball = require('./entities/Ball');
const Systems = require('./systems');

const Engine = require('ECSEngine/Engine.js');

/**
 * Client
 */
class Client extends Engine {
  /**
   * constructor
   */
  constructor() {
    super();

    this.debug = true;


    this.entities.addEntity(new Player());

    let npc = new Npc();
    npc.position.x = 500;
    this.entities.addEntity(npc);

    let ball = new Ball();
    ball.position.x = 200;
    ball.position.y = 250;
    ball.physics.vel.x = -2;
    this.entities.addEntity(ball);

    Object.keys(Systems).forEach(system => {
      this.systems.addSystem(new Systems[system]({
        engine: this,
        tickRate: 30,
      }));
    });

    this.initDebugHtml();
  }

  /**
   * Update loop.
   */
  update() {
    super.update();
    window.requestAnimationFrame(this.update.bind(this));

    if(this.debug) {
      this.displayDebugInfo();
    }
  }


  /**
   * initDebugHtml
   */
  initDebugHtml() {
    if(this.debug) {
      this.html = {};
      this.html.debugStats = document.createElement('div');
      let debugTitle = document.createElement('div');
      this.html.debugStats.style.position = 'absolute';
      this.html.debugStats.style.top = '100px';
      this.html.debugStats.style.right = '100px';

      debugTitle.innerText = 'STATS';
      this.html.debugStats.appendChild(debugTitle);

      this.html.debugFPS = document.createElement('div');
      this.html.debugStats.appendChild(this.html.debugFPS);

      this.systems.systems.forEach(s => {
        let n = 'debug' + s.name;
        this.html[n] = document.createElement('div');
        this.html.debugStats.appendChild(this.html[n]);
      });

      document.body.appendChild(this.html.debugStats);
    }

  }

  /**
   * displayDebugInfo
   */
  displayDebugInfo() {
    this.html.debugFPS.innerText = `FPS: ${Math.round(this.debugStats.fps)}`;

    Object.keys(this.debugStats.systems).forEach(key => {
      let t = this.debugStats.systems[key].time.toFixed(4);
      this.html['debug' + key].innerHTML = `<br/> ${key} <br/>
        ENTITY_COUNT: ${this.debugStats.systems[key].entityCount} <br/>
        TICK_RATE: ${this.debugStats.systems[key].tickRate} <br/>
        CATCHUPS: ${this.debugStats.systems[key].catchupAttempts} <br/>
        TIME: ${t} <br/>
        `;
    });
  }
}

module.exports = Client;
