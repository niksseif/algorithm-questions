/*
We are designing a 2D game and we have a game map that we represent by an integer matrix. For now, each cell can be a wall (denoted by -1) or a blank space (0).

board = [
  //0  1   2 . 3 . 4
  0[0,  0,  0, -1, -1],
  1[0,  0, -1,  0,  0],
  2[0, -1,  0, -1,  0],
  3[0,  0, -1,  0,  0],
  4[0,  0,  0,  0,  0],
  5[0,  0,  0,  0,  0],
  6[0,  0,  0,  0,  0],
]

The player can move 1 space at a time up, down, left, or right. The player can't go through walls or land on a wall, or go through the edges of the board.

Write a function that, given a board and a player starting position (represented as a row-column pair), returns all of the possible next positions for the player.

Sample inputs (board, starting_position) and outputs (in any order):

findLegalMoves(board, [3, 1]) =>
  (3, 0), (4, 1)

findLegalMoves(board, (5, 3)) =>
  (5, 2), (5, 4), (4, 3), (6, 3)

findLegalMoves(board, (5, 1)) =>
  (6, 1), (4, 1), (5, 0), (5, 2)

findLegalMoves(board, (6, 0)) =>
  (5, 0), (6, 1)

findLegalMoves(board, (6, 4)) =>
  (5, 4), (6, 3)

findLegalMoves(board, (0, 0)) =>
  (0, 1), (1, 0)

findLegalMoves(board, (2, 2)) =>
  [empty]
*/
const board1 = [
  // 0  1   2 . 3 . 4
  0[0, 0, 0, -1, -1],
  1[0, 0, -1, 0, 0],
  2[0, -1, 0, -1, 0],
  3[0, 0, -1, 0, 0],
  4[0, 0, 0, 0, 0],
  5[0, 0, 0, 0, 0],
  6[0, 0, 0, 0, 0],
];

function findLegalMoves(board, a) {
  const r = a[0];
  const c = a[1];
  const res = [];
  console.log(r, '<>>>>>');

  // if (board[r - 1][c] !== -1) {
  //   res.push([r - 1, c]);
  // } if (board[r + 1][c] !== -1) {
  //   res.push([r + 1, c]);
  // } if (board[r][c + 1] !== -1) {
  //   res.push([r, c + 1]);
  // } if (board[r][c - 1] !== -1) {
  //   res.push([r, c - 1]);
  // }


  return res;
}
console.log(findLegalMoves(board1, [3, 1]));
