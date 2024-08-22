function findMultiples(integer, limit) {
  let holder = [];
  for (let i = 1; i <= limit / integer; i++) {
    holder.push(i * integer);
  }
  return holder;
}
