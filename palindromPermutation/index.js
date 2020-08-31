/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
//given a string, write a function to check if it is a permutation of a palindrom
//explanation what is palindrom ? Palindrom is a word that is same is the reverse world and permutation is means each char should be even number in the string or have only one odd char in that.

//I:string
//O:bolean
//C:optimize
//E:empty string, space between chars, start and at the end, more than 2 of the same chars,even and odd chars
const palindromPermute = (s1) => {
  //create a hash map and count the letters and check if the value is even or odd <= 1
  const arr = s1.split(' ').join("").split("");
  let count = 0;
  let obj = arr.reduce((acc, char) => {
      if (!acc[char]) {
          acc[char] = 1;
      } else {
      acc[char]++
    }
    return acc;
  }, {})
  for (let k in obj){
      if(obj[k] % 2 !== 0){
          count += 1
          console.log(count)
      }
  }
  return count < 2;
};


console.log(palindromPermute('taco cat'))

module.exports = palindromPermute;
