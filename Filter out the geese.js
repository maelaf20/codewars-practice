function gooseFilter(birds) {
  let result = [];
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      result.push(birds[i]);
    }
  }
  return result;
  // return an array containing all of the strings in the input array except those that match strings in geese
}
