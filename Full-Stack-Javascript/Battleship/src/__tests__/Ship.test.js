const Ship = require("../Ship.js");

describe("Ship", () => {
  test("Create a Ship with correct length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
  });

  test("starts with 0 hits", () => {
    const ship = new Ship(3);
    expect(ship.hits).toBe(0);
  });

  test("starts not sunk", () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);
  });

  test("hit() increases hits by 1", () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("hit() can be called multiply times", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("isSunk() returns false if not enough hits", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("isSunk() returns true when hits equal length", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("length 1 ship sinks after 1 hit", () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("length 5 ship does not sink after 4 hits", () => {
    const ship = new Ship(5);
    for (let i = 0; i < 4; i++) ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
