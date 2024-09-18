function whatday(num) {
  if (num < 1 || num > 7) return "Wrong, please enter a number between 1 and 7";
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num - 1];
}
