function reverseArray(a) {
  // Write your code here
  let result = 
  let newArr = [];
  for (let i = a.length - 1; i > -1; i--) {
    let newArrIndex = a[i];
    newArr.push(newArrIndex);
  }
  for (let i = 0; i < newArr.length; i++) {
    result = console.log(newArr[i]);
  }
  return result;
}
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));


function timeConversion(s) {
    const time = s.slice(0, 8);
    const period = s.slice(8);
    const [hours, minutes, seconds] = time.split(':');
    let militaryTime = '';

    if (period === 'AM') {
        if (hours === '12') {
            militaryTime = '00';
        } else {
            militaryTime = hours;
        }
    } else if (period === 'PM') {
        if (hours === '12') {
            militaryTime = hours;
        } else {
            militaryTime = String(parseInt(hours, 10) + 12);
        }
    }

    return militaryTime + ':' + minutes + ':' + seconds;
}


console.log(timeConversion('07:05:45PM')); 
console.log(timeConversion('12:01:00AM')); 
