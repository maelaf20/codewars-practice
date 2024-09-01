function findNextSquare(sq) {
  if (sq % sq ** 0.5 == 0) {
    return (sq ** 0.5 + 1) ** 2;
  } else {
    return -1;
  }
}
