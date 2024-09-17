function sumDigits(number) {
  let count = 0;
  number = number.toString().split("");
  for (let i = 0; i < number.length; i++) {
    if (!isNaN(Number(number[i]))) {
      count += Number(number[i]);
    }
  }
  return count;
}
