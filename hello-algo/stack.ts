{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = val || 0
            this.next = next || null
        }
    }

    class LinkedListStack {

        private head: ListNode | null
        private __size: number

        constructor() {
            this.head = null
            this.__size = 0
        }

        peek(): number {
            if (!this.head) {
                throw new Error('empty')
            }
            return this.head.val
        }

        push(val: number) {
            let node = new ListNode(val, this.head)
            this.head = node
            this.__size++
        }

        pop(): number {
            let popVal = this.peek()
            if (!this.head) {
                throw new Error('empty')
            }
            this.head = this.head.next
            this.__size--
            return popVal
        }


        get size(): number {
            return this.__size
        }

        get isEmpty(): boolean {
            return this.__size === 0
        }

    }
    let stack = new LinkedListStack()
    stack.push(1)
    stack.push(2)
    stack.peek()
    stack.pop()
    stack.isEmpty
    stack.size
}
