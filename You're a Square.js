var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  return Math.round(n ** (1 / 2)) * Math.round(n ** (1 / 2)) == n
    ? true
    : false;
};
