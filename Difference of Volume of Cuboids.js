function findDifference(a, b) {
  let A = 1;
  let B = 1;
  for (let i = 0; i < a.length; i++) {
    A *= a[i];
    B *= b[i];
  }
  return Math.max(A, B) - Math.min(A, B);
}
