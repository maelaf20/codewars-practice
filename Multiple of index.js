function multipleOfIndex(array) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0 && i == 0) {
      final.push(i);
      continue;
    }
    if (array[i] % i == 0) {
      final.push(array[i]);
    }
  }
  return final;
}
