const game = {
  id: 123,
  players: [] /* list of player IDs */,
  gameState: '' /* one of possible playing states */,
  activePlayer: '' /* ID of the currently active player */,
  winner: null /* winners ID when the game ends */,
};

const player = {
  id: '',
  type: '' /* human or ai */,
  name: '',
  boardId: '' /* id of the players own board */,
  ships: [] /* array of ship ids */,
  isReady: false /* flag to indicate if the player is ready to start the game */,
  isWon: false /* flag to indicate if the player has won the game */,
};

const board = {
  id: '',
  playerId: '',
  table: [] /* 2D array containing the fields */,
  allPlaced: false /* flag to indicate if all ships has been placed on the table */,
  allSunk: false /* flag to indicate if all ships sunk */,
};

const ship = {
  id: '',
  playerId: '',
  type: '' /* name of the ship eg 'Carrier' */,
  size: 3,
  coordinates: [] /* list of the ships own coordinates on the board */,
  hits: 0 /* number of times ship has been hit */,
  isSunk: false /* flag turns true if hits === size */,
};
