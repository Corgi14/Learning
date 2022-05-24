/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let p = dummy;
  let next: ListNode = null;
  let prev: ListNode = p;
  while (head) {
    next = head.next;
    if (head.val == val) {
      prev.next = next;
    } else {
      prev = head;
    }
    head = head.next;
  }
  return dummy.next;
}
// @lc code=end
