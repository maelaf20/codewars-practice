function gimme(triplet) {
  let minimum = Math.min(...triplet);
  let maximum = Math.max(...triplet);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] != minimum && triplet[i] != maximum) {
      return i;
    }
  }
}
