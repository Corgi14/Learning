/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
import ListNode from "../data_structure/ListNode";
class MyLinkedList {
  private dummy: ListNode;
  private size: number;

  constructor() {
    this.size = 0;
    this.dummy = new ListNode(-1);
  }

  private getNode(index: number): ListNode {
    let p = this.dummy;
    for (let i = 0; i <= index; i++) {
      p = p.next;
    }
    return p;
  }

  get(index: number): number {
    if (this.size <= index || index < 0) {
      return -1;
    }
    return this.getNode(index).val;
  }

  addAtHead(val: number): void {
    let p = this.dummy.next;
    let add = new ListNode(val);
    this.dummy.next = add;
    add.next = p;
    this.size++;
  }

  addAtTail(val: number): void {
    let add = new ListNode(val);
    let tail = this.getNode(this.size - 1);
    tail.next = add;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return;
    }
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }
    let add = new ListNode(val);
    let p = this.getNode(index - 1);
    add.next = p.next;
    p.next = add;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index > this.size - 1 || index < 0 || this.size == 0) {
      return;
    }
    let p = this.getNode(index - 1);
    p.next = p.next.next;
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
