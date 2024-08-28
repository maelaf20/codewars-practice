function twoSum(numbers, target) {
  let hashset = {};
  for (let i = 0; i < numbers.length; i++) {
    hashset[numbers[i]] = i;
  }
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (complement in hashset && i != hashset[i]) {
      return [hashset[complement], i];
    }
  }
}
