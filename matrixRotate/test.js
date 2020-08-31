const assert = require('assert');
const matrixRotate = require('./index.js');
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];
describe('matrixRotate', () => {
  describe('matrixRotate', () => {
    it('should rotate the matrix 90 degree clockwise', () => {
      // add an assertion
      assert.deepEqual(matrixRotate(testMatrix), [[1, 0, 0, 1], [0, 0, 1, 2], [0, 1, 2, 3], [1, 2, 3, 4]]);
    }) 
  });
});
