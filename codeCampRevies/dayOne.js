// const array = [1, 2, 3, 4, 5, 6];
// const k = 5;
// function makePair(arr, k) {
//   const n = arr.length;
//   let result = 0;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (i < j && (arr[i] + arr[j]) % k === 0) {
//         result++;
//       }
//     }
//   }
//   return result;
// }
// console.log(makePair(array, k));

// problem 2
function camelCaseHunt(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      total++;
    }
  }
  return total + 1;
}
const string = "iAmSoykotAlam";
console.log(camelCaseHunt(string));
