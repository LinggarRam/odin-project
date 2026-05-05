import { knightMoves, printKnightMoves } from "./knightMoves.js";

printKnightMoves([0, 0], [1, 2]);
printKnightMoves([0, 0], [3, 3]);
printKnightMoves([3, 3], [0, 0]);
printKnightMoves([0, 0], [7, 7]);
printKnightMoves([3, 3], [4, 3]);
printKnightMoves([4, 4], [4, 4]);
printKnightMoves([0, 0], [7, 0]);
printKnightMoves([0, 0], [0, 7]);

const testCases = [
  [
    [0, 0],
    [1, 2],
  ],
  [
    [0, 0],
    [3, 3],
  ],
  [
    [0, 0],
    [7, 7],
  ],
  [
    [3, 3],
    [4, 3],
  ],
];

testCases.forEach(([start, end]) => {
  const path = knightMoves(start, end);
  let valid = true;

  for (let i = 0; i < path.length - 1; i++) {
    const [x1, y1] = path[i];
    const [x2, y2] = path[i + 1];
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);

    const isKnightMove = (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
    if (isKnightMove) {
      valid = false;
      console.log(`invalid: [${path[i]}] -> [${path[i + 1]}]`);
    }
  }

  const moves = path.length - 1;
  console.log(
    `[${start}] -> [${end}]: ${moves} pindah - ${valid ? "all valid" : "invalid move"}`,
  );
});

console.log("\nTest Error:");
try {
  knightMoves([9, 0], [1, 2]);
} catch (e) {
  console.log("Error ditemukan:", e.message);
}

try {
  knightMoves([0, 0], [-1, 2]);
} catch (e) {
  console.log("Error ditemukan:", e.message);
}
