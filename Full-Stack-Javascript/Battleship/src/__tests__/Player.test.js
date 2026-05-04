const Player = require("../Player");
const Gameboard = require("../Gameboard");

describe("Player", () => {
  describe("Human Player", () => {
    test("creates a human player with a gameboard", () => {
      const player = new Player("human");
      expect(player.type).toBe("human");
      expect(player.gameboard).toBeInstanceOf(Gameboard);
    });

    test("human player can attack enemy board", () => {
      const human = new Player("human");
      const enemy = new Player("computer");
      enemy.gameboard.placeShip(0, 0, 3, "horizontal");
      human.attack(enemy.gameboard, 0, 0);
      expect(enemy.gameboard.grid[0][0].ship.hits).toBe(1);
    });
  });

  describe("Computer Player", () => {
    test("creates a computer player with a gameboard", () => {
      const player = new Player("computer");
      expect(player.type).toBe("computer");
      expect(player.gameboard).toBeInstanceOf(Gameboard);
    });

    test("computer makes a random attack on enemy board", () => {
      const computer = new Player("computer");
      const enemy = new Player("human");
      computer.randomAttack(enemy.gameboard);

      let attackedCount = 0;
      for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
          if (enemy.gameboard.isAttacked(r, c)) attackedCount++;
        }
      }
      expect(attackedCount).toBe(1);
    });

    test("computer does not attack same coordinate twice", () => {
      const computer = new Player("computer");
      const enemy = new Player("human");

      for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
          if (r === 9 && c === 9) continue;
          enemy.gameboard.receiveAttack(r, c);
        }
      }
      computer.randomAttack(enemy.gameboard);
      expect(enemy.gameboard.isAttacked(9, 9)).toBe(true);
    });
  });
});
