const systems = [];
// systems.push(require('./DebugRender'));
systems.push(require('./PlayerControl'));
systems.push(require('./PixiRender'));
systems.push(require('./PaddleMovement'));
systems.push(require('./Physics'));
systems.push(require('./Collision'));
systems.push(require('./AiControl'));
systems.push(require('./Ui'));
systems.push(require('./Ball'));

module.exports = systems;
