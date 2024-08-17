function printerError(s) {
  let letters = new Set("abcdefghijklm");
  let counter = 0;
  let arrays = s.split("");
  arrays.forEach((num) => {
    if (!letters.has(num)) {
      counter++;
    }
  });
  return `${counter}/${arrays.length}`;
}
