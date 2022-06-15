/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum1(nums: number[], target: number): number[] {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const got = nums[index];
    const need = target - got;
    if (map.has(need)) {
      return [map.get(need), index];
    } else {
      map.set(got, index);
    }
  }
  return [];
}
// @lc code=end
