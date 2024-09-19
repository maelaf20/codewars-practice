function sumOfMinimums(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort((a, b) => a - b);
    count += Math.min(arr[i][0]);
  }
  return count;
}
