function getSum(a, b) {
  let maxNum = Math.max(a, b);
  let minNum = Math.min(a, b);
  let count = 0;
  for (let i = minNum; i <= maxNum; i++) {
    count += i;
  }
  return count;
}
