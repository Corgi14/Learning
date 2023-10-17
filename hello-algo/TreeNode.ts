class TreeNode {
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

export default TreeNode