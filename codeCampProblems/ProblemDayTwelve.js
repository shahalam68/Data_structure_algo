function subsets(nums) {
  const result = [];

  function generateSubsets(index, currentSubset) {
    result.push(currentSubset.slice());

    for (let i = index; i < nums.length; i++) {
      currentSubset.push(nums[i]);
      generateSubsets(i + 1, currentSubset);
      currentSubset.pop();
    }
  }

  generateSubsets(0, []);

  return result;
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));

// problem 2

function exist(board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(row, col, index) {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

const board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log(exist(board1, "ABCCED"));

const board2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log(exist(board2, "SEE"));
const board3 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log(exist(board3, "ABCB"));
