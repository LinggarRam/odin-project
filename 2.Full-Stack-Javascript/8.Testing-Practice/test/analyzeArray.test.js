import analyzeArray from "../src/analyzeArray";

test("menganalisis array dengan benar", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("array satu elemen", () => {
  expect(analyzeArray([7])).toEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1,
  });
});
