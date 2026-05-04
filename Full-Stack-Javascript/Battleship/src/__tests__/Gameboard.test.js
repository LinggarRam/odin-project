const Gameboard = require("../Gameboard.js");
const Ship = require("../Ship.js");

describe("Gameboard", () => {
  let board;
  beforeEach(() => {
    board = new Gameboard();
  });

  test("creates a 10x10 grid", () => {
    expect(board.grid.length).toBe(10);
    expect(board.grid[0].length).toBe(10);
  });

  test("starts with empty missed attacks", () => {
    expect(board.getMissedAttacks()).toEqual([]);
  });

  test("places ship horizontally", () => {
    board.placeShip(0, 0, 3, "horizontal");
    expect(board.grid[0][0]).not.toBeNull();
    expect(board.grid[0][1]).not.toBeNull();
    expect(board.grid[0][2]).not.toBeNull();
    expect(board.grid[0][3]).toBeNull();
  });

  test("places ship vertically", () => {
    board.placeShip(0, 0, 3, "vertical");
    expect(board.grid[0][0]).not.toBeNull();
    expect(board.grid[1][0]).not.toBeNull();
    expect(board.grid[2][0]).not.toBeNull();
    expect(board.grid[3][0]).toBeNull();
  });

  test("throw error if ship placed out of bounds", () => {
    expect(() => board.placeShip(0, 8, 3, "horizontal")).toThrow();
  });

  test("throw error if ship overlaps another ship", () => {
    board.placeShip(0, 0, 3, "horizontal");
    expect(() => board.placeShip(0, 0, 2, "horizontal")).toThrow();
  });

  test("receiveAttack hits a ship", () => {
    board.placeShip(0, 0, 3, "horizontal");
    board.receiveAttack(0, 0);
    const ship = board.grid[0][0].ship;
    expect(ship.hits).toBe(1);
  });

  test("receiveAttack records missed attack", () => {
    board.receiveAttack(5, 5);
    expect(board.getMissedAttacks()).toContainEqual([5, 5]);
  });

  test("receiveAttack does not record hit as missed", () => {
    board.placeShip(0, 0, 3, "horizontal");
    board.receiveAttack(0, 0);
    expect(board.getMissedAttacks()).toEqual([]);
  });

  test("receiveAttack throws if same coordinate attacked twice", () => {
    board.receiveAttack(3, 3);
    expect(() => board.receiveAttack(3, 3)).toThrow();
  });

  test("allSunk() returns false if ships remain", () => {
    board.placeShip(0, 0, 3, "horizontal");
    expect(board.allSunk()).toBe(false);
  });

  test("allsunk() returns true when all ships sunk", () => {
    board.placeShip(0, 0, 2, "horizontal");
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    expect(board.allSunk()).toBe(true);
  });

  test("allSunk() returns true when no ships placed", () => {
    expect(board.allSunk()).toBe(true);
  });
});
