class Player {
  constructor(type = "human") {
    const Gameboard = require("./Gameboard");
    this.type = type;
    this.gameboard = new Gameboard();
  }

  attack(enemyBoard, row, col) {
    enemyBoard.receiveAttack(row, col);
  }

  randomAttack(enemyBoard) {
    let row, col;

    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (enemyBoard.isAttacked(row, col));

    enemyBoard.receiveAttack(row, col);
    return [row, col];
  }
}

module.exports = Player;
