function correct(string) {
  let thing = string.split("");
  for (let i = 0; i < thing.length; i++) {
    thing[i] = String(thing[i]);
    if (thing[i] == "5") {
      thing[i] = "S";
    } else if (thing[i] == "0") {
      thing[i] = "O";
    } else if (thing[i] == "1") {
      thing[i] = "I";
    }
  }
  return thing.join("");
}
