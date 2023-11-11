
{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = val || 0
            this.next = next || null
        }
    }
    class LinkedListQueue {

        private head: ListNode | null
        private tail: ListNode | null
        private size: number

        constructor() {

        }

        push(val: number) {
            const node = new ListNode(val)
            if (!this.head) {
                this.head = node
                this.tail = node
            } else {
                this.head.next = node
                this.tail = node
            }
            this.size++
        }

        pop(): number {
            let num = this.peek()
            if (!this.head) throw new Error('empty')
            this.head = this.head.next
            this.size--
            return num
        }

        peek(): number {
            if (this.size === 0) throw new Error('empty')
            return this.head!.val
        }
    }

    let lq = new LinkedListQueue()
    lq.push(1)
    lq.push(2)
    console.log(lq.peek())
    console.log(lq.pop())
    console.log(lq.peek())
}