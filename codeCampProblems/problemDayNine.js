// problem 1

// timeComplexity o(n);

function missingNumbers(arr) {
  const n = arr.length;
  const total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  const ans = total - sum;
  return ans;
}

problem 2
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

Test cases
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
console.log(missingNumbers([0, 3, 1]));
