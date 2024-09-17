function array(words) {
  words = words.split(",");
  if (words.length < 3) return null;
  return words.slice(1, words.length - 1).join(" ");
}
