// Time Complexity  O(NK)

function countDistinctElements(arr, K) {
  const n = arr.length;
  let result = [];

  for (let i = 0; i <= n - K; i++) {
    let window = arr.slice(i, i + K);
    let distinctCount = new Set(window).size;
    result.push(distinctCount);
  }

  return result.join(" ");
}

const array = [1, 2, 1, 3, 5, 5, 3];
const con = 4;
console.log(countDistinctElements(array, con));
