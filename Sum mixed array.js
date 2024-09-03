function sumMix(x) {
  let result = x.reduce((total, curr) => {
    return (total += Number(curr));
  }, 0);
  return result;
}
