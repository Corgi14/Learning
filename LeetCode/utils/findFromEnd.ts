import ListNode from "../data_structure/ListNode";

const findFromEnd = (head: ListNode, k: number): ListNode => {
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  let slow = head;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

export default findFromEnd;
