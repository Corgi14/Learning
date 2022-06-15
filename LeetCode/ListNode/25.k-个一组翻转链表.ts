/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head == null) return head;
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    if (b == null) return head;
    b = b.next;
  }
  //reverse first k items
  //old: a -> b now: b -> a
  let newHead = reverseA2B(a, b);
  //reverse rest ones via recursion function
  a.next = reverseKGroup(b, k);
  return newHead;
}
//1 reverse all
function reverseAll(head: ListNode): ListNode | null {
  let pre: ListNode | null = null;
  let cur = head;
  let nxt = head;
  while (cur) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}

//2 reverse from a to b
function reverseA2B(a: ListNode, b: ListNode): ListNode | null {
  let pre: ListNode | null = null;
  let cur = a;
  let nxt = a;
  while (cur != b) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}
// @lc code=end
