/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
  let res = new Array<number>();
  if (mat.length == 0) return res;
  if (mat[0].length == 0) return res;
  const m = mat.length;
  const n = mat[0].length;
  const loopCount = m + n - 1;
  for (let loopIndex = 0; loopIndex < loopCount; loopIndex++) {
    if (loopIndex % 2 == 0) {
      let x: number, y: number;
      if (loopIndex <= m - 1) {
        x = 0;
        y = loopIndex - x;
      } else {
        y = m - 1;
        x = loopIndex - y;
      }
      while (y >= 0 && x <= n - 1) {
        let item = mat[y][x];
        x++;
        y--;
        res.push(item);
      }
    } else {
      let x: number, y: number;
      if (loopIndex <= n - 1) {
        y = 0;
        x = loopIndex - y;
      } else {
        x = n - 1;
        y = loopIndex - x;
      }
      while (x >= 0 && y <= m - 1) {
        let item = mat[y][x];
        x--;
        y++;
        res.push(item);
      }
    }
  }
  return res;
}
// @lc code=end
