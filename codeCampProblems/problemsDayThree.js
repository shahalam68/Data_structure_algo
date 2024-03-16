// Problem 1
// time complexcity string.length
function timeConversion(s) {
  const time = s.slice(0, 8);
  const period = s.slice(8);
  const [hours, minutes, seconds] = time.split(":");
  let militaryTime = "";

  if (period === "AM") {
    if (hours === "12") {
      militaryTime = "00";
    } else {
      militaryTime = hours;
    }
  } else if (period === "PM") {
    if (hours === "12") {
      militaryTime = hours;
    } else {
      militaryTime = String(parseInt(hours, 10) + 12);
    }
  }

  return militaryTime + ":" + minutes + ":" + seconds;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:01:00AM"));

//  Problem 2
// time complexsity O(n^2)
// time complexsity O(1)

function matchingStrings(stringList, queries) {
  const results = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let count = 0;
    for (let j = 0; j < stringList.length; j++) {
      if (query === stringList[j]) {
        count++;
      }
    }
    results.push(count);
  }
  return results;
}

const stringList = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];
console.log(matchingStrings(stringList, queries));
