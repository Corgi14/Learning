/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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
function isPalindrome(head: ListNode | null): boolean {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast) {
    slow = slow.next;
  }
  let left = head;
  let right = reverse(slow);
  while (right) {
    if (right.val != left.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
}
// @lc code=end

function reverse(head: ListNode): ListNode | null {
  let pre = null;
  let cur = head,
    nxt = head;
  while (cur) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}
