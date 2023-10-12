
import ListNode from "./ListNode"

class LinkedListNodeQueue<T> {
    constructor() {
        this.#head = null
        this.#tail = null
    }

    #head: ListNode<T> | null
    #tail: ListNode<T> | null

    push(item: T) {
        const newItem = new ListNode(item)
        if (!this.#head) {
            this.#head = newItem
            this.#tail = newItem
        } else {
            this.#tail!.next = newItem
            this.#tail = newItem
        }
    }

    pop(): (T | null) {
        if (!this.#head) {
            return null
        }
        const item = this.#head.data
        this.#head = this.#head.next
        if (!this.#head) {
            this.#tail = null
        }
        return item
    }

    peek(): (T | null) {
        if (!this.#head) {
            return null
        }
        return this.#head.data
    }
}

class ArrayQueue<T> {
    constructor() {
        this.#items = []
    }

    #items: T[]

    push(item: T) {
        this.#items.push(item)
    }

    pop(): T | undefined {
        return this.#items.shift()
    }

    peek(): T | undefined {
        return this.#items[0]
    }
}

export { LinkedListNodeQueue, ArrayQueue }