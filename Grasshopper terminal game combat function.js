function combat(health, damage) {
  let result = health - damage;
  if (result < 0) return 0;
  else return result;
}
