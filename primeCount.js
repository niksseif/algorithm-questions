/**
 * @param {number} n
 * @return {number}
 */
// prime numbers are numbers that are divisible by itself or one
// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// -----------------------My soloution
// const prime = (n) => {
//   if (n < 2) {
//     return false;
//   }
//   if (n === 2) {
//     return true;
//   }
//   // eslint-disable-next-line no-plusplus
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };


// const countPrimes = (n) => {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (prime(i)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countPrimes(10));// 2,3,5,7

// =============== other soloution:
const countPrimes = (n) => {
  let flagArray = [],
    result = 0;
  for (let i = 2; i < n; i++) {
    if (flagArray[i] === undefined) {
      // if is prime gets 1 otherwise gets 0
      flagArray[i] = 1;
      result++;
      // rm it's multiples
      let j = i;
      while (i * j < n) {
        flagArray[i * j] = 0;
        j++;
      }
    }
  }
  return result;
};
console.log(countPrimes(10));// 2,3,5,7
