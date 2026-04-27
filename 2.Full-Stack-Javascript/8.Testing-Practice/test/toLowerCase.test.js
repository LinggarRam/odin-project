import toLowerCase from "../src/toLowerCase";

test("mengubah huruf besar ke kecil", () => {
  expect(toLowerCase("AKU")).toBe("aku");
});

test("string kosong tidak error", () => {
  expect(toLowerCase("")).toBe("");
});
