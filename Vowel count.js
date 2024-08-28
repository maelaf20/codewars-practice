function getCount(str) {
  let letters = "aeiou".split("");
  str = str.toLowerCase().split("");

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}
