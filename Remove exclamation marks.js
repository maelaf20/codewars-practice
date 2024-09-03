function removeExclamationMarks(s) {
  let result = s.split("").filter((element) => element != "!");
  return result.join("");
}
