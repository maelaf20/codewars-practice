function getMiddle(s) {
  let lengthen = Math.floor(s.length / 2);
  if (s.length % 2 == 0) {
    return s.slice(lengthen - 1, lengthen + 1);
  } else {
    return s[lengthen];
  }
}
