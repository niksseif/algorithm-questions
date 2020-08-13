// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// -----------------Soloution one---------
// const reverseString = str => str.split('').reverse().join('');

// -------------Soloution tow
// const reverseString = str => str.split('').reduce((acc, char) => char + acc, '');
// console.log(reverseString('hello'));

// --------------Soloution 3 ------------
const reverseString = (str) => {
  let rev = '';
  for (const char of str) {
    rev = char + rev;
  }
  return rev;
};
console.log(reverseString('hello'));

