// problem1
const array = [1, 3, 2, 6, 1, 2];
const con = 3;

function countPairs(ar, k) {
  let count = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs(array, con));

// // problem 2
// function cameliCious(s) {
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i].toUpperCase()) {
//       total++;
//     }
//   }
//   return total + 1;
// }
// console.log(cameliCious("iAmSoykotAlam"));
