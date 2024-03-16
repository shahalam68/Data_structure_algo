function timeConversion(s) {
  const time = s.slice(0, 8);
  const period = s.slice(8);
  const [hour, min, sec] = time.split(":");
  return;
}
console.log(timeConversion("12:00:00AM"));
