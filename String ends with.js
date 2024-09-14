function solution(str, ending) {
  if (ending.length > str.length) return false;
  return str.slice(str.length - ending.length) == ending;
}
