/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    for (const arr of matrix) {
        reverse(arr)
    }
};
function reverse(arr: number[]): void {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        j--
        i++
    }
}
// @lc code=end

