/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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
//  */
import PriorityQueue from "../data_structure/PriorityQueue";
import ListNode from "../data_structure/ListNode";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let size = 0;
  for (let list of lists) {
    while (list) {
      size++;
      list = list.next;
    }
  }
  let pq = new PriorityQueue(size);
  for (let list of lists) {
    pq.append(list);
  }
  let dummy = new ListNode(-1);
  let p = dummy;
  while (pq.getSize() > 0) {
    let min = pq.fetchMin();
    min.next = null;
    p.next = min;
    p = p.next;
  }
  return dummy.next;
}
// @lc code=end

//2022.5.26 二刷 通过
