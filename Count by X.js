function countBy(x, n) {
  let final = [];
  for (let i = x; i <= x * n; i += x) {
    final.push(i);
  }
  return final;
}
