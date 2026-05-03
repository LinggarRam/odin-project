import { getKnightMoves } from "./knightMoves.js";

console.log("Moves dari [0,0]:", getKnightMoves(0, 0));

console.log("Moves dari [4,4]:", getKnightMoves(4, 4));

console.log("Jumlah moves dari [4,4]:", getKnightMoves(4, 4).length);
