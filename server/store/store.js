const store = {
  games: {},
  players: {},
  ships: {},
  boards: {},
};

const saveEntity = (entityKey, entity) => {
  store[entityKey][entity.id] = entity;
};

module.exports = { store, saveEntity };
