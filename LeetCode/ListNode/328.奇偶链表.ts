/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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
function oddEvenList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null || head.next.next == null) {
    return head;
  }
  let dummy1 = new ListNode(-1, head);
  let dummy2 = new ListNode(-2, head.next);
  let p1 = dummy1.next;
  let p2 = dummy2.next;
  while (p1.next && p2.next) {
    p1.next = p2.next;
    p1 = p1.next;
    p2.next = p1.next;
    p2 = p2.next;
  }
  p1.next = dummy2.next;
  return dummy1.next;
}
// @lc code=end
