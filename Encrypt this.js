var encryptThis = function (text) {
  text = text.split(" ");

  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    if (word.length <= 2) {
      text[i] = word.charCodeAt(0) + word.slice(1);
    } else {
      let firstChar = word.charCodeAt(0);
      let lastChar = word[word.length - 1];
      let middle = word.slice(2, -1);
      text[i] = firstChar + lastChar + middle + word[1];
    }
  }

  return text.join(" ");
};
