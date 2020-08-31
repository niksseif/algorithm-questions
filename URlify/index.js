/* eslint-disable max-len */
/* eslint-disable space-in-parens */
/* eslint-disable no-plusplus */
/* eslint-disable keyword-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable eol-last */
// write a method to replace all the spaces in string with '20%'You may assume that the string has sufficient space at the end to hold the additional characters, and you are given the true length of the string
// example "Mr John Smith    ", 13 >>>

// @@ perhaps to be able to use it to trim the end of the string.

const urLify = (str, length ) => {
  const strArr = str.split('');
  for (let i = 0; i < length; i++) {
    if(strArr[i] === ' ') {
      strArr[i] = '20%';
    }
  }
  const re = strArr.join('').trim();
  return re;
};
module.exports = urLify;