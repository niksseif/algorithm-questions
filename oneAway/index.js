/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
// there are three types of edits that can be performed on strings insert a character, remove a character, or replace a character. Gicen two strings, write a function to check if they are one edit or 0 edits away.
// we need two functions for this problem 1 is to find the missing char and one to find the differet char
// I:2 strings
// O:bolean
// C:optimize
// E:empty strings,
const objMaker = s => s.split('').reduce((acc, char) => {
  if (acc[char] === undefined) {
    acc[char] = 1;
  } else {
    acc[char]++;
  }
  return acc;
}, {});

const oneAway = (st1, st2) => {
  let missingCharTwo;
  let count = 0;
  let re;
  
    if (st1.length - st2.length <= 1) {
      missingCharTwo = () => {
        const s1 = objMaker(st1);
        const s2 = objMaker(st2);
        for (const k in s1) {
          if (s1[k] !== s2[k] || s2[k] === undefined) {
            count++;
          }
        }
        return count;
      };
      re = missingCharTwo()
      if(count <=1 ){
        return true;
      }
    }
      return false;
      
    }


  module.exports = oneAway;
