function remove(string) {
  let holder = string.split("");
  if (holder[holder.length - 1] == "!") {
    holder.pop();
  }
  return holder.join("");
}
