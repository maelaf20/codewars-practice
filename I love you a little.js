function howMuchILoveYou(nbPetals) {
  let holder = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  while (nbPetals > 6) {
    nbPetals -= 6;
  }
  return holder[nbPetals - 1];
}
