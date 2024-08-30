function sortByLength(array) {
  let holder = array.sort((a, b) => a.length - b.length);
  return holder;
}
