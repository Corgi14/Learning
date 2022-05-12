/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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
function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      break;
    }
  }
  if (fast == null || fast.next == null) {
    return null;
  }
  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
// @lc code=end
