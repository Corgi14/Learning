class ListNode<T> {
    data: T
    next: ListNode<T> | null
    constructor(data: T) {
        this.data = data
    }
}

export default ListNode