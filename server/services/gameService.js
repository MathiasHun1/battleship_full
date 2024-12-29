const { v4: uuidv4 } = require('uuid');
const { Ship, createEmptyTable } = require('../utils/helpers');
const { store, saveEntity } = require('../store/store');

const createGame = () => {
  return {
    id: uuidv4(),
    players: [],
    gameState: null,
    activePlayer: null,
    winner: null,

    setGamestate(state) {
      if (!['placing', 'battle', 'ended'].includes(state)) {
        throw new Error('invalid game state parameter');
      }
      this.gameState = state;
    },
  };
};

const createBoard = (playerId) => {
  return {
    id: uuidv4(),
    playerId: playerId,
    table: createEmptyTable(),
    ships: [],
    allPlaced: false,
    allSunk: false,
  };
};

const createPlayer = (type, playerName) => {
  if (!playerName && type !== 'ai') {
    throw new Error('missing human player name-parameter');
  }

  const playerId = uuidv4();

  return {
    id: playerId,
    type: type,
    name: type === 'ai' ? 'computer' : playerName,
    boardId: '',
    ships: [],
    isReady: false,
    isWon: false,
  };
};

const createShips = (playerId) => {
  return [
    new Ship(playerId, 'Carrier', 5),
    new Ship(playerId, 'Battleship', 4),
    new Ship(playerId, 'Cruiser', 3),
    new Ship(playerId, 'Submarine', 3),
    new Ship(playerId, 'Destroyer', 2),
  ];
};

//game initialization
const initSinglePayerGame = (playerName) => {
  const game = createGame();

  //create two players, one of them is ai, and connect them to game
  const humanPlayer = createPlayer('human', playerName);
  const aiPlayer = createPlayer('ai');

  game.players.push(humanPlayer.id);
  game.players.push(aiPlayer.id);

  //create boards two boards and connnect them to players
  const humanBoard = createBoard(humanPlayer.id);
  const aiBoard = createBoard(aiPlayer.id);

  humanPlayer.boardId = humanBoard.id;
  aiPlayer.boardId = aiBoard.id;

  //create ships and connect them to players
  humanShips = createShips(humanPlayer.id);
  aiShips = createShips(aiPlayer.id);

  humanShips.forEach((ship) => {
    humanPlayer.ships.push(ship.id);
  });

  aiShips.forEach((ship) => {
    aiPlayer.ships.push(ship.id);
  });

  //save all entities into store
  saveEntity('games', game);
  saveEntity('players', humanPlayer);
  saveEntity('players', aiPlayer);
  saveEntity('boards', humanBoard);
  saveEntity('boards', aiBoard);
  humanShips.forEach((ship) => saveEntity('ships', ship));
  aiShips.forEach((ship) => saveEntity('ships', ship));

  return game.id;
};

module.exports = { initSinglePayerGame };
