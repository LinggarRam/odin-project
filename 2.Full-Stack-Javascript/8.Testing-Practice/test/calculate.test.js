import calculate from "../src/calculate";

test("add: 1 + 2 = 3", () => {
  expect(calculate.add(1, 2)).toBe(3);
});

test("subtract: 5 - 2 = 3", () => {
  expect(calculate.subtract(5, 2)).toBe(3);
});

test("multiply: 5 * 5 = 25", () => {
  expect(calculate.multiply(5, 5)).toBe(25);
});

test("divide: 5 / 5 = 1", () => {
  expect(calculate.divide(5, 5)).toBe(1);
});
