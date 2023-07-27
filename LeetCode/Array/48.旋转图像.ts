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
    if(matrix.length == 0 || matrix == null) {
        return
    }
    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < m; n++) {
            let tmp = matrix[m][n]
            matrix[m][n] = matrix[n][m]
            matrix[n][m] = tmp
        }
    }
    for (const arr of matrix) {
        reverse(arr)
    }
};

function reverse(arr: number[]): void {
    let left = 0, right = arr.length - 1
    while(left < right) {
        let tmp = arr[left]
        arr[left] = arr[right]
        arr[right] = tmp
        left++
        right--
    }
}
// @lc code=end

