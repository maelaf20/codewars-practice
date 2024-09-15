function accum(s) {
  s = s.split("");
  let final = [];
  for (let i = 0; i < s.length; i++) {
    final.push(s[i].toUpperCase());
    for (let j = 0; j < i; j++) {
      final.push(s[i].toLowerCase());
    }
    final.push("-");
  }
  final.pop();
  return final.join("");
}
