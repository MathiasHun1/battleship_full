const GAME_STATES = {
  PLACING: 'placing',
  PLAYING: 'playing',
  FINISHED: 'finished',
};

const FIELDSTATES = {
  ATTACKED: {
    MISSED: 'missed',
    HITTED: 'hitted',
  },
  NOT_ATTACKED: null,
};

const PLAYERTYPE = ['human', 'computer'];

module.exports = {
  GAME_STATES,
  FIELDSTATES,
  PLAYERTYPE,
};
