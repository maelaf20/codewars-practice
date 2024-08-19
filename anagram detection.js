// write the function isAnagram
var isAnagram = function (test, original) {
  t = test.toLowerCase().split("").sort().join("");
  o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false;
};
