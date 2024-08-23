function isIsogram(str) {
  let holder = str.toLowerCase().split("").sort();
  for (let i = 0; i < holder.length; i++) {
    if (i > 0 && holder[i] == holder[i - 1]) {
      return false;
    }
  }
  return true;
}
