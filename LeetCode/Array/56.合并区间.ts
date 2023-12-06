/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    if (intervals.length == 0) {
        return new Array<number[]>()
    }
    intervals.sort((a: number[], b: number[]) => a[0] - b[0])
    let res: number[][] = new Array<number[]>()
    res.push(intervals[0])
    for (let index = 1; index < intervals.length; index++) {
        const cur = intervals[index];
        const tail = res[res.length - 1]
        if (cur[0] <= tail[1] ) {
            tail[1] = Math.max(tail[1], cur[1])
        } else {
            res.push(cur)
        }
    }
    return res
};
// @lc code=end

