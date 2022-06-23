/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  private preSum: number[];

  constructor(nums: number[]) {
    this.preSum = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
      this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.preSum[right + 1] - this.preSum[left + 1 - 1];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
