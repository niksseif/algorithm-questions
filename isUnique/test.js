let assert = require('assert');
let isUnique = require('./isUnique.js')

describe('isUnique', function () {
    describe('isUnique', function () {
        it('should check if string has no chars return false', function () {
            // add an assertion
            assert.equal(isUnique(""),false);
        })
        it('should check if string has unique chars ', function () {
            
            assert.equal(isUnique('abcd'), true);
        })
        it('should check if string has unique chars ', function () {

            assert.equal(isUnique('abccd'), false);
        })
        it('should check if string has unique chars ', function () {

            assert.equal(isUnique('bhjjb'), false);
        })
        it('should check if string has unique chars ', function () {

            assert.equal(isUnique('mdjq'), true);
        })
    });
});
