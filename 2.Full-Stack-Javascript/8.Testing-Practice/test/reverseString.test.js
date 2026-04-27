import reverseString from "../src/reverseString";

test("membalik string normal", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("string satu karakter", () => {
  expect(reverseString("a")).toBe("a");
});

test("string kosong", () => {
  expect(reverseString("")).toBe("");
});
