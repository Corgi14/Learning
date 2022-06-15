/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null) return null;
  let dummy = head,
    slow = head,
    fast = head;
  while (fast) {
    if (slow.val !== fast.val) {
      slow = slow.next;
      slow.val = fast.val;
    }
    fast = fast.next;
  }
  slow.next = null;
  return dummy;
}
// @lc code=end
