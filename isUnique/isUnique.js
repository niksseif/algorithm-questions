/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
// implement an algorithm to determine if a string has all unique characters.What if you can not use additional data structure.


const isUnique = (s) => {
  const str = s.split('');
  if (s.length === 0) {
    return false;
  }
  const obj = str.reduce((acc, char) => {
    if (acc[char] === undefined) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }
    return acc;
  }, {});
  for (const k in obj) {
    if (obj[k] > 1) {
      return false;
    }
  }
  return true;
};

module.exports = isUnique;
// console.log(isUnique('abcd'), 'true');
// console.log(isUnique('abccd'), 'false');
// console.log(isUnique('bhjjb'), 'false');
// console.log(isUnique('mdjq'), 'true');
