var findAverage = function (nums) {
  return (
    nums.reduce((total, curr) => {
      return (total += curr);
    }) / nums.length
  );
};
