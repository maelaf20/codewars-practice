function sumMul(n, m) {
  if (m <= 0) return "INVALID";
  let count = 0;
  for (let i = n; i < m; i += n) {
    count += i;
  }
  return count;
}
