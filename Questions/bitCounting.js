var countBits = function (n) {
  // Program Me
  return n
    .toString(2)
    .split("")
    .filter((num) => num == 1).length;
};
module.exports = {
  countBits,
};
