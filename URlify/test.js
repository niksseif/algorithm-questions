const assert = require('assert');
const urlify = require('./index');

describe('urlify', () => {
  describe('urlify', () => {
    it('should return the string with 20% added to the space without end spaces ', () => {
      assert.equal(urlify('ab cd   ', 5), 'ab20%cd');
    });
    it('should return the string with 20% added to the space without end spaces ', () => {
      assert.equal(urlify('abc cddd   ', 8), 'abc20%cddd');
    });
    it('should return the string with 20% added to the space without end spaces ', () => {
      assert.equal(urlify('Mr John Smith   ', 13), 'Mr20%John20%Smith');
    });
  });
});
