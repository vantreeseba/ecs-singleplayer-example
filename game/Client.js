const Player = require('./entities/Player');
const Npc = require('./entities/Npc');
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

    this.systems = Object.keys(Systems).map(system => new Systems[system]({
      engine: this,
      tickRate: 30,
    }));

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

      this.systems.forEach(s => {
        let n = 'debug' + s.name;
        this.html[n] = document.createElement('div');
        this.html.debugStats.appendChild(this.html[n]);
      });

      document.body.appendChild(this.html.debugStats);
    }


    for(var i = 0; i < 1000; i++) {
      this.entities.push(new Npc());
    }
    this.entities.push(new Player());
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
   * displayDebugInfo
   */
  displayDebugInfo() {
    this.html.debugFPS.innerText = `FPS: ${Math.round(this.debugStats.fps)}`;

    Object.keys(this.debugStats.systems).forEach(key => {
      let t = this.debugStats.systems[key].time.toFixed(4);
      this.html['debug' + key].innerHTML = `<br/> ${key} <br/>
        ENTITY_COUNT: ${this.debugStats.systems[key].entityCount} <br/>
        TIME: ${t} <br/>
        `;
    });
  }
}

module.exports = Client;
