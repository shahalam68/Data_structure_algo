// function maxSumimumSubarray(arr) {
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < arr.length; j++) {
//       currentSum += arr[j];
//       maxSum = Math.max(maxSum, currentSum);
//     }
//   }
//   return maxSum;
// }
// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSumimumSubarray(array));

// function maxSumimumSubarrayTwo(arr) {
//   const n = arr.length;
//   let maxSum = 0;
//   let currentSum = 0;
//   for (let i = 0; i < n; i++) {
//     currentSum += arr[i];
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }
//   return maxSum;
// }
// console.log(maxSumimumSubarrayTwo(array));

function getAllSubarrays(arr) {
  const result = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      result.push(arr.slice(i, j));
    }
  }
  return result;
}
const array = [5, 4, -1, 7, 8];
const subarrays = getAllSubarrays(array);
console.log(subarrays);
