// problemOne
function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}

console.log(removeDuplicates("addbbc"));
console.log(removeDuplicates("cba"));

// problemTwo

function leftRotation(arr, d) {
  let result = [];
  for (let i = d; i < arr.length; i++) {
    let newIndex = arr[i];
    result.push(newIndex);
  }
  for (let i = 0; i < d; i++) {
    let newIndex = arr[i];
    result.push(newIndex);
  }
  return result;
}

const array = [1, 2, 4, 6, 7];
const d = 2;
console.log(leftRotation(array, d));
