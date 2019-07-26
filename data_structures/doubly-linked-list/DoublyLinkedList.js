/**
 * 双向链表
 */

const DoublyLinkedListNode = require('./DoublyLinkedListNode');

module.exports = DoublyLinkedList;

class DoublyLinkedList {
    constructor(comparatorFunction) {
        /** @var DoublyLinkedListNode */
        this.head = null;

        /** @var DoublyLinkedListNode */
        this.tail = null;

        this.compare = comparatorFunction;
    }

    /**
     * 往前边插入一个元素
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    prepend(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);

        // If there is head, then it won't be head anymore.
        // Therefore, make its previous reference to be new node (new head).
        // Then mark the new node as head.
        if (this.head) {
            this.head.previous = newNode;
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * 往后边边插入一个元素
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    append(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        newNode.previous = this.tail;

        this.tail = newNode;

        return this;
    }

    /**
     * 删除一个元素
     * @param {*} value
     * @return {DoublyLinkedListNode}
     */
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (this.compare(currentNode.value, value)) {
                deleteNode = currentNode;

                if (deleteNode === this.head) {
                    // If HEAD is going to be deleted...

                    // Set head to second node, which will become new head.
                    this.head = deleteNode.next;

                    // Set new head's previous to null.
                    if (this.head) {
                        this.head.previous = null;
                    }

                    // If all the nodes in list has same value that is passed as argument
                    // then all nodes will get deleted, therefore tail needs to be updated.
                    if (deleteNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deleteNode === this.tail) {
                    // If TAIL is going to be deleted...

                    // Set tail to second last node, which will become new tail.
                    this.tail = deleteNode.previous;
                    this.tail.next = null;
                } else {
                    // If MIDDLE node is going to be deleted...
                    let prevNode = deleteNode.previous;
                    let nextNode = deleteNode.next;

                    prevNode.next = nextNode;
                    nextNode.previous = prevNode;
                }
            }

            currentNode = currentNode.next;
        }

        return deleteNode;
    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {DoublyLinkedListNode}
     */
    find({ value = undefined, callback = undefined }) {
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            if (value != undefined && this.compare(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    deleteTail() {
        if (!this.tail) return null;

        const deleteTail = this.tail;

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return deleteTail;
        }

        this.tail = this.tail.previous;
        this.tail.next = null;

        return deleteTail;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    deleteHead() {
        if (!this.head) return null;

        const deleteHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        return deleteHead;
    }

    /**
     * 格式化数组为链表
     * @param {[*[]} values   - Array of values that need to be converted to linked list.
     * @return {DoublyLinkedList}
     */
    fromArray(values = []) {
        values.forEach(val => this.append(val));
        return this;
    }

    /**
     * @return {DoublyLinkedListNode[]}
     */
    toArray() {
        const node = [];
        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
        return this.toArray()
            .map(node => node.toString(callback))
            .toString();
    }

    /**
     * Reverse a linked list.
     * @returns {DoublyLinkedList}
     */
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            prevNode = currentNode.previous;

            currentNode.next = prevNode;
            currentNode.previous = nextNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}
