const systems = [];
// systems.push(require('./DebugRender'));
systems.push(require('./PlayerControl'));
systems.push(require('./PixiRender'));

module.exports = systems;
