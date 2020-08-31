const assert = require('assert');
const stringCompression = require('./index');

describe('stringCompression', () => {
  describe('stringCompression', () => {
    it('if the length of the string is empty return empty string', () => {
      // add an assertion
      assert.equal(stringCompression(''), '');
    });
    it('if the length of the result is longer than input string return result', () => {
      assert.equal(stringCompression('cvsrffkjnwkskskks'), 'c1v1s1r1f2k1j1n1w1k1s1k1s1k2s1');
    });
    it('should return the correct count of the chars ', () => {
      assert.equal(stringCompression('aabbccddee'), 'a2b2c2d2e2');
    });
    it('should return the string if the result is shorter than the string', () => {
      assert.equal(stringCompression('aaaaaaaaaaa'), 'aaaaaaaaaaa');
    });
  });
});
