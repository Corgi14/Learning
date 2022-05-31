/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  //iterate
  // let dummy = new ListNode(-1)
  // let next: ListNode = null
  // while(head) {
  //     next = head.next
  //     head.next = dummy.next
  //     dummy.next = head
  //     head = next
  // }
  // return dummy.next

  //recursion
  if (head == null || head.next == null) {
    return head;
  }
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
// @lc code=end
