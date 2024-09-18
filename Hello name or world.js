function hello(name) {
  if (!name) return "Hello, World!";
  let capitalized =
    name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
  return "Hello, " + capitalized + "!";
}
