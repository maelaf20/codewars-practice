function powersOfTwo(n) {
  let final = [];
  for (let i = 0; i < n + 1; i++) {
    final.push(2 ** i);
  }
  return final;
}
