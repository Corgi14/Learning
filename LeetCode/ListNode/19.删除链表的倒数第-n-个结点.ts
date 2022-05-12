/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import ListNode from "../data_structure/ListNode";
import findFromEnd from "../utils/findFromEnd";
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let nNode = findFromEnd(dummy, n + 1);
  nNode.next = nNode.next.next;
  return dummy.next;
}
// @lc code=end
