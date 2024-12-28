const { v4: uuidv4 } = require('uuid');
const constants = require('./constants');

const initGame = (
  player1Type,
  player1Name,
  player2Type = 'computer',
  player2Name = 'computer'
) => {
  if (!player1Type || !constants.PLAYERTYPE.includes(player1Type)) {
    throw new Error('invalid or missing player1 type');
  }

  const game = {
    gameID: uuidv4(),
    players: [
      createPlayer(player1Type, player1Name),
      createPlayer(player2Type, player2Name),
    ],
    turn: 'player1',
    gamestate: constants.GAME_STATES.PLACING,
    getAttack(player, coordinateX, coordinateY) {
      const field = this.players[player].playerBoard[coordinateX][coordinateY];
      field.state = 2;
    },
  };

  return game;
};

const createBoard = () => {
  let emptyBoard = Array(10).fill(Array(10));
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      emptyBoard[i][j] = { state: 0 };
    }
  }

  return emptyBoard;
};

const createPlayer = (type, name) => {
  if (!type || !constants.PLAYERTYPE.includes(type)) {
    throw new Error('invalid or missing player type');
  }

  if (!name) {
    throw new Error('missing or invalid player name');
  }

  const player = {
    type: type,
    name: name,
    isReady: false,
    isLost: false,
    playerBoard: createBoard(),
    ships: createShips(),
    placedShips: [],
    placeShip(direction, coordinates, ship) {
      const { coordinateX, coordinateY } = { ...coordinates };

      if (direction !== 'horizontal' && direction !== 'vertical') {
        throw new Error('invalid ship placement direction');
      }

      if (
        !coordinateX ||
        !coordinateY ||
        coordinateX < 0 ||
        coordinateX > 9 ||
        coordinateY < 0 ||
        coordinateY > 9
      ) {
        throw new Error('missing or invalid ship placement coordinates');
      }

      switch (direction) {
        case 'horizontal':
          if (coordinateX + Number(ship.size) > 9) {
            throw new Error('ship out of horizontal bounds');
          }
          //set fields state to ship
          for (let i = 0; i < ship.size; i++) {
            this.playerBoard[coordinateX][i].state = 1;
          }
          break;

        default:
          break;
      }
    },
  };
  return player;
};

const createShips = () => {
  return [
    { type: 'Carrier', size: 5, coordinates: [], isSunk: false },
    { type: 'Battleship', size: 4, coordinates: [], isSunk: false },
    { type: 'Cruiser', size: 3, coordinates: [], isSunk: false },
    { type: 'Submarine', size: 3, coordinates: [], isSunk: false },
    { type: 'Destroyer', size: 2, coordinates: [], isSunk: false },
  ];
};

const placeShip = function (direction, coordinates, length) {
  const { coordinateX, coordinateY } = { ...coordinates };

  if (!['horizontal, vertical'].includes(direction)) {
    throw new Error('invalid ship placement direction');
  }

  if (
    !coordinateX ||
    !coordinateY ||
    coordinateX < 0 ||
    coordinateX > 9 ||
    coordinateY < 0 ||
    coordinateY > 9
  ) {
    throw new Error('missing or invalid ship placement coordinates');
  }
};

const getAttack = (player, coordinateX, coordinateY) => {
  const field = game.players[player].playerBoard[coordinateX][coordinateY];
  field.state = 2;
};

const game = initGame('human', 'lajos');
game.players[0].placeShip(
  'horizontal',
  { coordinateX: 4, coordinateY: 2 },
  { size: 4 }
);
console.log(game.players[0].playerBoard);

// STATE: placing ships, have to change the x and y directions
