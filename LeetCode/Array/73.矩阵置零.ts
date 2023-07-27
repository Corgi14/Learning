/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return;
  }
  let rowFlag = false,
    colFlag = false;
  let m = matrix.length,
    n = matrix[0].length;
  for (let index = 0; index < n; index++) {
    if (matrix[0][index] == 0) {
      rowFlag = true;
      break;
    }
  }
  for (let index = 0; index < m; index++) {
    if (matrix[index][0] == 0) {
      colFlag = true;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (colFlag) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (rowFlag) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
}
// @lc code=end
