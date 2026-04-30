// FIBS ITERASI 
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
console.log("fibs(12)",fibs(12));


// FIBONACCI RECURSIVE
function fibsRec(n) {
    console.log("Hasil Output Recursive");

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prevSequence = fibsRec (n -1);

    const len = prevSequence.length;
    const nextNumber = prevSequence[len - 1] + prevSequence[len - 2];

    return [...prevSequence, nextNumber];
}

console.log("fibsRec(8):", fibsRec(8));


// PERBANDINGAN
const testCases = [0, 1, 2, 5, 8, 10];

testCases.forEach((n) => {
    iterResult = fibs(n);
    recurResult = fibsRec(n);

    const match = JSON.stringify(iterResult) === JSON.stringify(recurResult);

    console.log(`n=${n}:`);
    console.log(`  Iterasi  : [${iterResult}]`);
    console.log(`  Rekursif : [${recurResult}]`);
    console.log(`  Match    : ${match ? "✅ SAMA" : "❌ BERBEDA"}`);
});