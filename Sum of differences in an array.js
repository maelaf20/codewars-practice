function sumOfDifferences(arr) {
  arr = arr.sort((a, b) => b - a);
  let current = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    current += arr[i];
    current -= arr[i + 1];
  }
  return current;
}
