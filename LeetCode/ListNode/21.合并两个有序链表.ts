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
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      p.next = list2;
      list2 = list2.next;
    } else {
      p.next = list1;
      list1 = list1.next;
    }
    p = p.next;
  }
  if (list1.next !== null) {
    p.next = list1;
  }
  if (list2.next !== null) {
    p.next = list2;
  }
  return dummy.next;
}
// @lc code=end
//2022.5.17 二刷 没记住
