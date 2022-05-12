import ListNode from "./ListNode";

class PriorityQueue {
  private pq: ListNode[];
  private _size: number = 0;

  constructor(N: number) {
    this.pq = new Array(N + 1);
  }

  size(): number {
    return this._size;
  }

  insert(e: ListNode) {
    this.pq[++this._size] = e;
    this.swim(this._size);
  }

  pullMin(): ListNode {
    let min = this.pq[1];
    this.exch(1, this._size--);
    this.pq.pop();
    this.sink(1);
    return min;
  }

  swim(e: number) {
    while (e > 1 && this.less(e, this.parent(e))) {
      this.exch(e, this.parent(e));
      e = this.parent(e);
    }
  }

  sink(e: number) {
    while (2 * e <= this._size) {
      let old = this.left(e);
      if (old < this._size && this.less(this.right(e), old)) {
        old = this.right(e);
      }
      if (this.less(e, old)) {
        break;
      }
      this.exch(e, old);
      e = old;
    }
  }

  less(i: number, j: number): boolean {
    return this.pq[i].val < this.pq[j].val;
  }

  exch(i: number, j: number) {
    let t = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = t;
  }

  parent(index: number): number {
    return Math.floor(index / 2);
  }

  left(index: number): number {
    return index * 2;
  }

  right(index: number): number {
    return index * 2 + 1;
  }
}

export default PriorityQueue;
