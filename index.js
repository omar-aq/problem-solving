const { order } = require("./Questions/yourOrderPlease");
const { digPow } = require("./Questions/playingWithDigits");
const { persistence } = require("./Questions/persistentBugger");

console.log(order("is2 Thi1s T4est 3a")); //--> "Thi1s is2 3a T4est"
console.log(persistence(39)); //should return 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
console.log(digPow(46288, 3)); //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
