const { initSinglePayerGame } = require('../services/gameService');
const { store } = require('../store/store');

//initialize a new game
const gameId = initSinglePayerGame('Lajos');

//create references to the games entities
const game = store.games[gameId];

const humanPlayer = store.players[game.players[0]];
const aiPlayer = store.players[game.players[1]];

const humanPlayerBoard = store.boards[humanPlayer.boardId];
const aiPlayerBoard = store.boards[aiPlayer.boardId];

const humanShips = Object.values(store.ships).filter(
  (ship) => ship.playerId === humanPlayer.id
);
const aiShips = Object.values(store.ships).filter(
  (ship) => ship.playerId === aiPlayer.id
);

console.log(aiShips);
