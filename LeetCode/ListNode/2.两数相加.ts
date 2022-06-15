/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let p1 = l1,
    p2 = l2;
  let dummy = new ListNode(-1);
  let p = dummy;
  let carry = 0;
  while (p1 || p2) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;
    let valSum = val1 + val2 + carry;
    carry = Math.floor(valSum / 10);
    p.next = new ListNode(valSum % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p = p.next;
  }
  if (carry) p.next = new ListNode(carry);
  return dummy.next;
}
// @lc code=end
