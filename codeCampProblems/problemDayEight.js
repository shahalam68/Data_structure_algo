// // Time complexity: O(n^3)
// // Space complexity: O(n)

// function longestPalindrome(s) {
//   if (s.length <= 1) return s;

//   let longest = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const substring = s.substring(i, j);
//       if (isPalindrome(substring) && substring.length > longest.length) {
//         longest = substring;
//       }
//     }
//   }

//   return longest;
// }

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(longestPalindrome("aaaaabaaaaa"));
// console.log(longestPalindrome("cbbd"));
