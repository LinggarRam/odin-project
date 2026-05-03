const KNIGHT_MOVES = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

const isValidPosition = (x, y) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

const getKnightMoves = (x, y) => {
  const moves = [];

  for (const [dx, dy] of KNIGHT_MOVES) {
    const newX = x + dx;
    const newY = y + dy;

    if (isValidPosition(newX, newY)) {
      moves.push([newX, newY]);
    }
  }
  return moves;
};

export { getKnightMoves, isValidPosition };
