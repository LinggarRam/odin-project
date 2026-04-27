const analyzeArray = (arr) => ({
  average: arr.reduce((sum, n) => sum + n, 0) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

export default analyzeArray;
