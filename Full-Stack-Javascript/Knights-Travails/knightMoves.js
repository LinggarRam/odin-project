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

const knightMoves = (start, end) => {
  const [startX, startY] = start;
  const [endX, endY] = end;

  if (!isValidPosition(startX, startY)) {
    throw new Error(`Posisi start ${start} diluar batas`);
  }
  if (!isValidPosition(endX, endY)) {
    throw new Error(`Posisi End ${end} diluar batas`);
  }
  if (startX === endX && startY === endY) {
    return [start];
  }

  const visited = new Set();
  visited.add(`${startX},${startY}`);

  const queue = [[start, [start]]];
  while (queue.length > 0) {
    const [currentPos, currentPath] = queue.shift();
    const [currentX, currentY] = currentPos;

    const possibleMoves = getKnightMoves(currentX, currentY);

    for (const nextPos of possibleMoves) {
      const [nextX, nextY] = nextPos;
      const posKey = `${nextX},${nextY}`;

      if (visited.has(posKey)) continue;

      const newPath = [...currentPath, nextPos];
      if (nextX === endX && nextY === endY) {
        return newPath;
      }

      visited.add(posKey);
      queue.push([nextPos, newPath]);
    }
  }

  return null;
};

const printKnightMoves = (start, end) => {
  const path = knightMoves(start, end);

  if (path === null) {
    console.log("Path tidak ditemukan");
    return;
  }

  const moves = path.length - 1;

  if (moves === 0) {
    console.log(`=> Anda sudah ada disini!`);
  } else {
    console.log(
      `=> Anda berhasil masuk ${moves} ${moves === 1 ? "move" : "moves"}! berikut adalah jalan anda:`,
    );
  }

  for (const pos of path) {
    console.log(`  [${pos}]`);
  }

  return path;
};

export { knightMoves, printKnightMoves, getKnightMoves, isValidPosition };
