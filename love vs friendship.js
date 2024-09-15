function wordsToMarks(string) {
  let dictionary = {};
  let set = "abcdefghijklmnopqrstuvwxyz";
  set = set.split("");
  for (let i = 0; i < set.length; i++) {
    dictionary[set[i]] = i + 1;
  }
  string = string.split("");
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += parseInt(dictionary[string[i]]);
  }
  return count;
}
