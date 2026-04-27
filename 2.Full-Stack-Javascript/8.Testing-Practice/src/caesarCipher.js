const shiftChar = (char, shift) => {
  const isUpper = char >= "A" && char <= "Z";
  const isLower = char >= "a" && char <= "z";

  if (!isUpper && !isLower) return char;

  const base = isUpper ? 65 : 97;
  return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
};

const caesarCipher = (str, shift) =>
  str
    .split("")
    .map((c) => shiftChar(c, shift))
    .join("");

export default caesarCipher;
