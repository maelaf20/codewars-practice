function pipeFix(numbers) {
  let newArr = [];
  let max = numbers[numbers.length - 1];
  let min = numbers[0];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  return newArr;
}
