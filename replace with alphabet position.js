function alphabetPosition(text) {
  let hashset = {};
  let letters = "abcdefghijklmnopqrstuvwxyz";
  letters.split("");
  for (let i = 1; i <= 26; i++) {
    hashset[letters[i - 1]] = i;
  }
  let holder = text.toLowerCase().split("");
  let result = [];
  for (let i = 0; i <= holder.length; i++) {
    if (holder[i] in hashset) {
      result.push(hashset[holder[i]]);
    }
  }
  return result.join(" ");
}
