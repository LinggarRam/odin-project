function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const result = [0, 1];

    for (let i = 2; i < n; i++) {
        const next = result[i -1] + result[i -2];
        result.push(next);
    }

    return result;
}

console.log("fibs(1)",fibs(1));
console.log("fibs(2)",fibs(2));
console.log("fibs(8)",fibs(8));
console.log("fibs(10)",fibs(10));