function noBoringZeros(n) {
  let holder = n.toString().split("");
  while (holder[holder.length - 1] == "0") {
    holder.pop();
  }
  return Number(holder.join(""));
}
