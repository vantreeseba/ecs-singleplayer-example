const systems = [];
// systems.push(require('./DebugRender'));
systems.push(require('./PlayerControl'));
systems.push(require('./PixiRender'));
systems.push(require('./PaddleMovement'));
systems.push(require('./Physics'));
systems.push(require('./Collision'));
systems.push(require('./AiControl'));

module.exports = systems;
