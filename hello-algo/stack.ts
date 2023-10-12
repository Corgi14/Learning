{
    

    class LinkedListStack {

        private head: ListNode | null
        private __size: number

        constructor() {
            this.head = null
            this.__size = 0
        }

        top(): number {
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
            let popVal = this.top()
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
    stack.top()
    stack.pop()
    stack.isEmpty
    stack.size
}
{
    class ArrayStack {
        private stack: number[]
        constructor() {
            this.stack = []
        }

        peek(): number | undefined {
            if (this.stack.length == 0) throw new Error('empty')
            return this.stack[this.stack.length]
        }

        push(val: number) {
            this.stack.push(val)
        }

        top(): number | undefined {
            if (this.stack.length == 0) throw new Error('empty')
            return this.stack.pop()
        }
    }
}