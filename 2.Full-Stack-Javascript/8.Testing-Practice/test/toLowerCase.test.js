import toLowerCase from "../toLowerCase";

test("mengubah huruf besar ke kecil", () => {
  expect(toLowerCase("AKU")).toBe("aku");
});
