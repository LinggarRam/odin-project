const Ship = require("./Ship");

class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () => Array(10).fill(null));
    this._missedAttacks = [];
    this._attackedCells = new Set();
    this._ships = [];
  }

  placeShip(row, col, length, direction = "horizontal") {
    if (direction === "horizontal" && col + length > 10) {
      throw new Error("ship placement out of bounds (horizontal)");
    }
    if (direction === "vertical" && row + length > 10) {
      throw new Error("ship placement out of bounds (vertical)");
    }

    for (let i = 0; i < length; i++) {
      const r = direction === "vertical" ? row + i : row;
      const c = direction === "horizontal" ? col + i : col;
      if (this.grid[r][c] !== null) {
        throw new Error("ship placement overlaps with existing ship");
      }
    }

    const ship = new Ship(length);
    this._ships.push(ship);

    for (let i = 0; i < length; i++) {
      const r = direction === "vertical" ? row + i : row;
      const c = direction === "horizontal" ? col + i : col;
      this.grid[r][c] = { ship, index: i };
    }
  }

  receiveAttack(row, col) {
    const key = `${row},${col}`;

    if (this._attackedCells.has(key)) {
      throw new Error(`coodinate [${row},${col}] already attacked`);
    }

    this._attackedCells.add(key);
    const cell = this.grid[row][col];

    if (cell !== null) {
      cell.ship.hit();
    } else {
      this._missedAttacks.push([row, col]);
    }
  }

  getMissedAttacks() {
    return [...this._missedAttacks];
  }

  isAttacked(row, col) {
    return this._attackedCells.has(`${row}, ${col}`);
  }

  allSunk() {
    if (this._ships.length === 0) return true;
    return this._ships.every((ship) => ship.isSunk());
  }
}

module.exports = Gameboard;
