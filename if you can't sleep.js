var countSheep = function (num) {
  let final = "";
  for (let i = 0; i < num; i++) {
    final += `${i + 1} sheep...`;
  }
  return final;
};
