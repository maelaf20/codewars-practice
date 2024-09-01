for (let i = 1; i < arr.length; i++) {
  arr.splice(i, 1);
  // After removing an element, the next element moves to the current index, so increment i
  // to account for the new index of the next element to remove.
  i--;
}
return arr;
