const assert = require('assert');
const permute = require('./index.js');

describe('permute', () => {
  describe('permute', () => {
    it('this should return false', () => {
      assert.equal(permute('', ''), false);
    });
    it('this should return true ', () => {
      assert.equal(permute('aba', 'aab'), true);
    });
    it('it should check count of chars', () => {
      assert.equal(permute('aba', 'aaba'), false);
    });
    it('should count of the chars', () => {
      assert.equal(permute('aba', 'aa'), false);
    });
  });
});

