function calculateAge(born, now) {
  let age = now - born;
  if (age == 1) return "You are 1 year old.";
  if (age == -1) return "You will be born in 1 year.";
  if (age > 0) return `You are ${age} years old.`;
  else if (age == 0) return `You were born this very year!`;
  else return `You will be born in ${Math.abs(age)} years.`;
}
