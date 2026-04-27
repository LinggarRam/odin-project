import caesarCipher from "../src/caesarCipher";

test("geser huruf dasar", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wrap z ke a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("jaga huruf kapital", () => {
  expect(caesarCipher("AkJJu", 3)).toBe("DnMMx");
});

test("punctuation tidak berubah", () => {
  expect(caesarCipher("Hai, Rio!", 3)).toBe("Kdl, Ulr!");
});
