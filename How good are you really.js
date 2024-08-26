function betterThanAverage(classPoints, yourPoints) {
  let count = 0;
  let total = 0;
  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
    count += 1;
  }
  return total / count < yourPoints ? true : false;
}
