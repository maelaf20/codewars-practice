function replace(s) {
  let final = [];
  let words = "aeiou";
  words = words.split("");
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (words.includes(s[i].toLowerCase())) final.push("!");
    else final.push(s[i]);
  }
  return final.join("");
}
