function order(words) {
  // ...
  let result = words.split(" ");
  let output = [];
  for (let i = 0; result.length > i; i++) {
    let res = result.find((item) => item.includes(`${i + 1}`));
    output.push(res);
  }
  return output.join(" ");
}

module.exports = {
  order,
};
