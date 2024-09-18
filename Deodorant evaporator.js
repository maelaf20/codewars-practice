function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let gas_remaining = 100;

  while (gas_remaining > threshold) {
    gas_remaining -= gas_remaining * (evap_per_day / 100);
    days++;
  }

  return days;
}
