// toString(2) return binary number we split it by 0
// join it back now we have a string of ones and we can return the length
const hammingWeight = function (n) {
  return n.toString(2).split('0').join('').length;
};


// -------- Second soloution
const hammingWeight = (n) => {
  // check if number has decimal
  if (n !== Math.floor(n)) {
    console.log('Please enter a number');
    // if number is negetive
  } else if (n < 0) {
    console.log('Please enter a positive number');
  } else {
    console.log(n.toString(2).split(0).join('').length);
  }
};
console.log(hammingWeight(11));
