function areYouPlayingBanjo(name) {
  return name.toLowerCase().split("")[0] == "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
