const { v4: uuidv4 } = require('uuid');

class Field {
  constructor(state = 0) {
    this.state = state;
  }
  setNewState(newState) {
    this.state = newState;
  }
}

class Ship {
  constructor(playerId, type, size) {
    this.id = uuidv4();
    this.playerId = playerId;
    this.type = type;
    this.size = size;
    this.coordinates = [];
    this.hits = 0;
    this.isSunk = false;
    this.isPlaced = false;
  }

  setSunk() {
    this.isSunk = true;
  }

  registerHit() {
    this.hits++;
  }

  checkSunk() {
    if (this.hits === this.size) {
      this.isSunk = true;
      return true;
    } else {
      return false;
    }
  }

  setPlaced() {
    if (this.coordinates.length === 0) {
      throw new Error("can't set ship to be placed, no coordinates yet");
    }
    this.isPlaced = true;
  }
}

const createEmptyTable = () => {
  let array = [];
  let rows = 10;
  let columns = 10;

  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < columns; j++) {
      array[i][j] = new Field();
    }
  }
  return array;
};

module.exports = { createEmptyTable, Ship };
