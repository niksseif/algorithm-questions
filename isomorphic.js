// egg >>> add
// e => a
// g => d
// foo ==> bar ... false
// f ==> b
// o === a
// o ===> r


const isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }
  const objS = {};
  const objT = {};
  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];
    // if it is undefined add it to the object otherwise don't add
    if (!objT[tLetter]) {
      objT[tLetter] = sLetter;
    }
    if (!objS[sLetter]) {
      objS[sLetter] = tLetter;
    }
    // check if the letters are not the same in the both objects return false;
    if (objS[sLetter] !== tLetter || objT[tLetter] !== sLetter) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic('egg', 'add'));
