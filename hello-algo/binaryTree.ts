import { LinkedListNodeQueue } from "./queue";
import TreeNode from "./TreeNode";

function levelOrder(root: TreeNode | null): number[] {
    if (!root) return []
    const queue = new LinkedListNodeQueue<TreeNode>()
    const list: number[] = []
    queue.push(root)
    while (!queue.isEmpty()) {
        let node = queue.pop() as TreeNode
        list.push(node.val)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return list
}

function preOrder(root: TreeNode | null) {
    const preOrderResult: number[] = []
    const inOrderResult: number[] = []
    const postOrderResult: number[] = []

    function traverse(node: TreeNode | null) {
        if (!node) {
            return
        }
        preOrderResult.push(node.val)
        traverse(node.left)
        inOrderResult.push(node.val)
        traverse(node.right)
        postOrderResult.push(node.val)
    }
}