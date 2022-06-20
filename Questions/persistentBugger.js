function persistence(num) {
  //code me

  let number = num.toString().split("").map(Number);
  return number.length != 1
    ? 1 + persistence(number.reduce((a, b) => a * b, 1))
    : 0;
}

module.exports = {
  persistence,
};
