// given an image represented by NxN matrix, Where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];
//I: 2dArray
//O: 2dArray
//C: in place optimize
//E:

const rotateMatrix = (matrix) =>{
  var edge = matrix.length - 1;
  var movePixels = function (row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
  
    var fromRow;
    var fromCol;
    var fromPixel;

    // first transformation
    var toRow = row; // 0
    var toCol = col; // 0
    var toPixel = matrix[row][col]; // matrix [0][0]

    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      fromRow = toRow;//0
      fromCol = toCol;//0
      toRow = fromCol;//0
      toCol = edge - fromRow;//3 - 0

      fromPixel = toPixel; // matrix[0][0]
      toPixel = matrix[toRow][toCol];//matrix[0][3]
      matrix[toRow][toCol] = fromPixel;//matrix[0][3] ===> matrix[0][0]
    }
  };

  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      movePixels(i, j);
    }
  }
  return matrix
}
console.log(rotateMatrix(testMatrix))
module.exports = rotateMatrix;