const { order } = require("./Questions/yourOrderPlease");
const { digPow } = require("./Questions/playingWithDigits");
const { persistence } = require("./Questions/persistentBugger");
const { isPrime } = require("./Questions/IsAnumberPrime");
const { maskify } = require("./Questions/creditCardMask");
const { countBits } = require("./Questions/bitCounting");

console.log(order("is2 Thi1s T4est 3a")); //--> "Thi1s is2 3a T4est"
console.log(persistence(39)); //should return 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
console.log(digPow(46288, 3)); //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
console.log(isPrime(0)); //should return false, "0 is not prime"
console.log(maskify("4556364607935616")); //should return '############5616'
console.log(countBits(4)); //should return 1'
