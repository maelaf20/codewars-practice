function repeatStr(n, s) {
  let final = [];
  for (let i = 0; i < n; i++) {
    final.push(s);
  }
  return final.join("");
}
