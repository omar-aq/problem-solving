function digPow(n, p) {
  let result = 0;
  n.toString()
    .split("")
    .map((Number) => {
      result += Math.pow(Number, p++);
      return result;
    });
  let k = result / n;
  return Number.isInteger(k) ? k : -1;
}

module.exports = {
  digPow,
};
