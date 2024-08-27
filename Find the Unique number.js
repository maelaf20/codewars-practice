function findUniq(arr) {
  let holder = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in holder) {
      holder[arr[i]] += 1;
    } else {
      holder[arr[i]] = 1;
    }
  }
  for (let i in holder) {
    if (holder[i] == 1) {
      return Number(i);
    }
  }
}
