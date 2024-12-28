const game = {
  id: 123,
  players: {
    player1: {
      type: 'human',
      name: 'lajos',
      playerBoard: [],
      ships: [],
      isReady: false,
      isLoseing: false,
    },
    player2: {
      type: 'computer',
      name: 'computer',
      playerBoard: [],
      ships: [],
      isReady: false,
      isLoseing: false,
    },
  },
  gameState: GAME_STATES.PLACING,
  activePlayer: 'lajos',
};

const GAME_STATES = {
  PLACING: 'placing',
  PLAYING: 'playing',
  FINISHED: 'finished',
};
