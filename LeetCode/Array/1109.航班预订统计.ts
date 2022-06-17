/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
import Difference from "../data_structure/Difference";
function corpFlightBookings(bookings: number[][], n: number): number[] {
  let nums = new Array(n).fill(0);
  let diff = new Difference(nums);
  for (let booking of bookings) {
    let i = booking[0] - 1,
      j = booking[1] - 1,
      val = booking[2];
    diff.increament(i, j, val);
  }
  let res = diff.result();
  return res;
}
// @lc code=end
