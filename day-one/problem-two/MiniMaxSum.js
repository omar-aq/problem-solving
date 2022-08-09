function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let max = 0,
    min = 0;
  for (let i = 0; arr.length > i; i++) {
    i < arr.length - 1 ? (min += arr[i]) : true;
    i != 0 ? (max += arr[i]) : true;
  }
  console.log(`${min} ${max}`);
}
