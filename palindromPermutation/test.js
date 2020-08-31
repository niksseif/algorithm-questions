const assert = require('assert');
const palindromePermute = require('./index');

describe('palindromePermute', () => {
  describe('palindromePermute', () => {
    it('if the length of the both string is not the same', () => {
      // add an assertion
      assert.equal(palindromePermute('acb', 'b ca'), false);
    });
    it('sshoould check if the both string are palindrom ', () => {
      assert.equal(palindromePermute('taco cat', 'atco cta'), true);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(palindromePermute('abccd', 'addccb'), false);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(palindromePermute('aabb', 'bbaa'), true);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(palindromePermute('code', 'edoc'), false);
    });
  });
});
// console.log(canPermutePalindrome('code'))
// console.log(canPermutePalindrome('aabb'))
// console.log(canPermutePalindrome('carerac'))