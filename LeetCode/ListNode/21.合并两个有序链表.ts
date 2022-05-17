/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
import ListNode from "../data_structure/ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(-1);
  let p = dummy;
  let p1 = list1,
    p2 = list2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  if (p1) {
    p.next = p1;
  }
  if (p2) {
    p.next = p2;
  }
  return dummy.next;
}
// @lc code=end
