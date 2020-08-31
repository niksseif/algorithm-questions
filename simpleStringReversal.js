/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
// In this Kata, we are going to reverse a string while maintaining the spaces(if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// --Normal reversal without spaces is "edocruo".
// --However, there is a space after the first three characters, hence "edo cruo"

// solve("your code rocks") = "skco redo cruoy"
// solve("codewars") = "srawedoc"
// More examples in the test cases.All input will be lower case letters and in some cases spaces.

// Good luck!

// Please also try:

function solve(str) {
  let s = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') s += str[i];
    if (str[s.length] === ' ') s += str[s.length];
  }
  return s;
}
