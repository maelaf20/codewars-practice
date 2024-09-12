function addLength(str) {
  let final = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let count = str[i].length;
    let holder = `${str[i]} ${count}`;
    final.push(holder);
  }
  return final;
}
