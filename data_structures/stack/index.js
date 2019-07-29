const LinkedList = require('../linked-list/LinkedList');

module.exports = Stack;

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        // The stack is empty if its linked list doesn't have a head.
        return !this.linkedList.head;
    }

    /**
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) return null;

        return this.linkedList.head.value;
    }

    /**
     * @param {*} value
     */
    push(value) {
        this.linkedList.prepend(value);
    }

    /**
     * @return {*}
     */
    pop() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    /**
     * @return {*[]}
     */
    toArray() {
        return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */
    toString() {
        return this.linkedList.toString(callback);
    }
}
