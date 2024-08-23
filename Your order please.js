function order(words) {
  let holder = words.split(" ");
  let binder = [];
  for (let i = 0; i < holder.length; i++) {
    let temp = holder[i].split("");
    for (let j = 0; j < temp.length; j++) {
      let num = parseInt(temp[j]);
      if (!isNaN(num)) {
        binder[num] = holder[i];
      }
    }
  }
  return binder.join(" ").trim();
}
