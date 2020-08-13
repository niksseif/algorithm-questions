const assert = require('assert');
const permute = require('./index.js');

describe('permute', function () {
    describe('permute', function () {
        
        it('this should return false', function () {
            assert.equal(permute("",""), false);
        })
        it('this should return true ', function () {

            assert.equal(permute('aba', 'aab'), true);
        })
        it('it should check count of chars', function () {

            assert.equal(permute('aba', 'aaba'), false);
        })
        it('should count of the chars', function () {

            assert.equal(permute('aba', 'aa'), false);
        })
       
    });
});

