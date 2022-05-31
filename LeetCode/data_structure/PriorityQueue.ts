//实现小根堆
//小根堆特点
//增 在末尾增加元素并上浮
//删 交换收尾元素位置 pop原首元素 现首元素下潜
//改 上浮&下潜时比较元素并根据结果交换位置
//查 N/A
//关键操作 交换位置 比较元素大小 获取当前queue长度确定尾部位置
import ListNode from "./ListNode";
class PriorityQueueLess {
  private size: number = 0;
  private queue: ListNode[];
  constructor(size: number) {
    //方便对index以及parent left right进行计算，所以从index = 1开始保存数据
    this.queue = new Array(size + 1);
  }
  getSize(): number {
    return this.size;
  }
  append(append: ListNode) {
    while (append) {
      let tail = ++this.size;
      this.queue[tail] = append;
      this.float(tail);
      append = append.next;
    }
  }
  float(n: number) {
    //对比this.queue[n].val 与n的parent(n/2), 根据结果交换, 逐步进行上浮
    while (n > 1) {
      if (this.less(n, this.parent(n))) {
        this.exchange(n, this.parent(n));
        n = this.parent(n);
      } else {
        break;
      }
    }
  }
  fetchMin(): ListNode {
    let min = this.queue[1];
    let tail = this.size;
    this.exchange(1, tail);
    this.queue.pop();
    this.size--;
    this.dive(1);
    return min;
  }
  dive(n: number) {
    while (n * 2 <= this.size) {
      let tempIndex = this.left(n);
      if (tempIndex < this.size && this.less(this.right(n), tempIndex)) {
        tempIndex = this.right(n);
      }
      if (this.less(n, tempIndex)) {
        break;
      }
      this.exchange(n, tempIndex);
      n = tempIndex;
    }
  }
  less(current: number, parent: number) {
    return this.queue[current].val < this.queue[parent].val;
  }
  parent(n: number) {
    return Math.floor(n / 2);
  }
  left(n: number) {
    return n * 2;
  }
  right(n: number) {
    return n * 2 + 1;
  }
  exchange(a: number, b: number) {
    let temp = this.queue[b];
    this.queue[b] = this.queue[a];
    this.queue[a] = temp;
  }
}

export default PriorityQueueLess;
