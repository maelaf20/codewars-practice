var uniqueInOrder = function (iterable) {
  function checkType(iterable) {
    if (iterable.every((element) => typeof element === "number")) {
      iterable = iterable.split("");
    }
  }

  let final = [];
  for (let i = 0; i < iterable.length; i++) {
    if (i > 0 && iterable[i] === iterable[i - 1]) {
      continue;
    } else {
      final.push(iterable[i]);
    }
  }
  return final;
};
