function cameliCious(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      total++;
    }
  }
  return total + 1;
}
console.log(cameliCious("iAmSoykotAlam"));
