// MERGE HELPER
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

console.log("Test Merge Helper");
console.log(merge([1, 3, 5], [2, 4, 6]));
console.log(merge([1], [2]));
console.log(merge([], [1, 2, 3]));

// MERGER SORT RECURSIVE
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  console.log(
    `Memisahkan: [${arr}] -> Left: [${leftHalf}] | Right: [${rightHalf}]`,
  );

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  const merged = merge(sortedLeft, sortedRight);

  console.log(
    `Menggabungkan: [${sortedLeft}] + [${sortedRight}] -> [${merged}]`,
  );

  return merged;
}

console.log("\nTest 1 - Array kosong:");
console.log("Input:  []");
console.log("Output:", mergeSort([]));
console.log("Expect: []");

console.log("\nTest 2 - Satu elemen:");
console.log("Input:  [73]");
console.log("Output:", mergeSort([73]));
console.log("Expect: [73]");

console.log("\nTest 3 - Sudah terurut:");
console.log("Input:  [1, 2, 3, 4, 5]");
console.log("Output:", mergeSort([1, 2, 3, 4, 5]));
console.log("Expect: [1, 2, 3, 4, 5]");

console.log("\nTest 4 - Acak:");
console.log("Input:  [3, 2, 1, 13, 8, 5, 0, 1]");
console.log("Output:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("Expect: [0, 1, 1, 2, 3, 5, 8, 13]");

console.log("\nTest 5 - Acak lainnya:");
console.log("Input:  [105, 79, 100, 110]");
console.log("Output:", mergeSort([105, 79, 100, 110]));
console.log("Expect: [79, 100, 105, 110]");

// VALIDASI OTOMATIS
const tests = [
  { input: [], expected: [] },
  { input: [73], expected: [73] },
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [3, 2, 1, 13, 8, 5, 0, 1], expected: [0, 1, 1, 2, 3, 5, 8, 13] },
  { input: [105, 79, 100, 110], expected: [79, 100, 105, 110] },
];

tests.forEach(({ input, expected }, i) => {
  const result = mergeSort([...input]);
  const pass = JSON.stringify(result) === JSON.stringify(expected);

  console.log(`Test ${i + 1}: ${pass ? "✅ PASS" : "❌ FAIL"}`);
  if (!pass) {
    console.log(`  Expected: [${expected}]`);
    console.log(`  Got:      [${result}]`);
  }
});
