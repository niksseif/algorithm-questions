const assert = require('assert');
const isUnique = require('./isUnique.js');

describe('isUnique', () => {
  describe('isUnique', () => {
    it('should check if string has no chars return false', () => {
      // add an assertion
      assert.equal(isUnique(''), false);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(isUnique('abcd'), true);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(isUnique('abccd'), false);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(isUnique('bhjjb'), false);
    });
    it('should check if string has unique chars ', () => {
      assert.equal(isUnique('mdjq'), true);
    });
  });
});
