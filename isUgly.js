
// ---------recrusive soloution
const isUgly = function (num) {
  if (num > 0 && num < 7) {
    return true;
  } else if (num > 6) {
    if (num % 2 === 0) {
      return isUgly(num / 2);
    } else if (num % 3 === 0) {
      return isUgly(num / 3);
    } else if (num % 5 === 0) {
      return isUgly(num / 5);
    }
  }
  return false;
};
console.log(isUgly(5));

