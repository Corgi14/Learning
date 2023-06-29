/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
    if (nums.length == 0) {
        return 0
    }
    let total = 0
    for (const v of nums) {
        total += v
    }
    let preSum = 0
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (2*preSum + element == total) return index
        preSum += element
    }
    return -1
};
// @lc code=end

