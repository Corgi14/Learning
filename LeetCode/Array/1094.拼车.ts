/*
 * @lc app=leetcode.cn id=1094 lang=typescript
 *
 * [1094] 拼车
 */

// @lc code=start
import Difference from "../data_structure/Difference";
function carPooling(trips: number[][], capacity: number): boolean {
  let stops = new Array(1001).fill(0);
  let diff = new Difference(stops);
  for (let stop of trips) {
    let i = stop[1],
      j = stop[2] - 1,
      val = stop[0];
    diff.increament(i, j, val);
  }
  const res = diff.result();
  for (let cap of res) {
    if (cap > capacity) return false;
  }
  return true;
}
// @lc code=end
