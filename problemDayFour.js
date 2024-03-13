function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rows = new Set();
  const cols = new Set();

  //   Time Complexity o(n^2)
  //   space o(m*n)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (let row of rows) {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  }
  for (let col of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }
}
const exampleMatrix = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
setZeroes(exampleMatrix);
console.log(exampleMatrix);
