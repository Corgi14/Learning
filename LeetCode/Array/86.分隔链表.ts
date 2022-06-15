/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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
function partition(head: ListNode | null, x: number): ListNode | null {
  let dummy1 = new ListNode(-1);
  let dummy2 = new ListNode(-2);
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;
  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    let tmp = p.next;
    p.next = null;
    p = tmp;
  }
  p1.next = dummy2.next;
  return dummy1.next;
}
// @lc code=end
