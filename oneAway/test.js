const assert = require('assert');
const oneAway = require('./index');

describe('one away', () => {
  describe('one away', () => {
    it('if the length difference is more than 1', () => {
      // add an assertion
      assert.equal(oneAway('pale', 'pl'), false);
    });
    it('one string is longer than the other by one && insert one extra character', () => {
      assert.equal(oneAway('pales', 'pale'), true);
    });
    it('the length of the strings are the same but the char is one different', () => {
      assert.equal(oneAway('pale', 'bale'), true);
    });
    it('the length of strings are same but character differences are more', () => {
      assert.equal(oneAway('pale', 'bake'), false);
    });
  });
});
