function getRealFloor(n) {
  if (n >= 13) {
    n -= 2;
  } else if (n >= 1) {
    n -= 1;
  }
  return n;
}
