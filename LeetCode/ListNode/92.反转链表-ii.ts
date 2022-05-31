/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 */

import ListNode from "../data_structure/ListNode";

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
let successor: ListNode = null;
function reverseToN(head: ListNode, n: number): ListNode {
  if (n == 1) {
    successor = head.next;
    return head;
  }
  let last = reverseToN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
}
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left == 1) {
    return reverseToN(head.next, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return;
}
// @lc code=end
