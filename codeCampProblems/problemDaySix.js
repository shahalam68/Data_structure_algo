function tripletSum(nums) {
  const n = nums.length;
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      for (let j = i + 1; j < n - 1; j++) {
        if (j === i + 1 || (j > i + 1 && nums[j] !== nums[j - 1])) {
          for (let k = j + 1; k < n; k++) {
            if (k === j + 1 || (k > j + 1 && nums[k] !== nums[k - 1])) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
              }
            }
          }
        }
      }
    }
  }
  return result;
}

const array = [-1, 0, 1, 2, -1, -4];
console.log(tripletSum(array));
