import capitalize from "../capitalize";

test("mengkapitalkan huruf pertama", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("string kosong tidak error", () => {
  expect(capitalize("")).toBe("");
});

test("huruf kapital diawal tetap sama", () => {
  expect(capitalize("World")).toBe("World");
});
