var number = function (array) {
  let final = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      final.push(`${i + 1}: ${array[i]}`);
    }
  }
  return final;
};
