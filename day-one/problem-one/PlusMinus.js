function plusMinus(arr) {
  // Write your code here
  let pos = [],
    nig = [],
    zeros = [];
  arr.map((num) => {
    num > 0
      ? pos.push(num)
      : num == 0
      ? zeros.push(num)
      : num < 0
      ? nig.push(num)
      : true;
  });
  console.log((pos.length / arr.length).toFixed(6));
  console.log((nig.length / arr.length).toFixed(6));
  console.log((zeros.length / arr.length).toFixed(6));
}
