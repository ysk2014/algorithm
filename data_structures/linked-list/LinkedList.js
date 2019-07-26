/**
 * 单向链表
 *
 * 数组不总是最佳的数据结构，因为，在很多编程语言中，数组的长度都是固定的，
 * 如果数组已被数据填满，再要加入新的元素是非常困难的。
 * 而且，对于数组的删除和添加操作，通常需要将数组中的其他元素向前或者向后平移，这些操作也是十分繁琐的。
 *
 *
 * 参考：https://juejin.im/entry/59cb70995188256aa423b680
 *
 */

const LinkedListNode = require('./LinkedListNode');

module.exports = LinkedList;

class LinkedList {
    constructor(comparatorFunction) {
        /** @var LinkedListNode */
        this.head = null;
        /** @var LinkedListNode */
        this.tail = null;

        this.compare = comparatorFunction;
    }

    /**
     * 往前边插入一个元素
     * @param {*} value
     * @return {LinkedList}
     */
    prepend(value) {
        // Make new node to be a head.
        const newHead = new LinkedListNode(value, this.head);
        this.head = newHead;

        // If there is no tail yet let's make new node a tail.
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    /**
     * 在后边插入一个元素
     * @param {*} value
     * @return {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        // If there is no head yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    /**
     * 删除一个元素
     * @param {*} value
     * @return {LinkedListNode}
     */
    delete(value) {
        if (!this.head) return null;

        let deletedNode = null;

        // If the head must be deleted then make next node that is differ
        // from the head to be a new head.
        while (this.head && this.compare(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode != null) {
            while (currentNode.next) {
                if (this.compare(currentNode.next.value, value)) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // Check if tail must be deleted.
        if (this.compare(this.tail.value, value)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    /**
     * 查找
     * @param {object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {LinkedListNode}
     */
    find({ value = undefined, callback = undefined }) {
        if (!this.head) return null;

        let currentNode = this.head;

        while (currentNode) {
            // If callback is specified then try to find node by callback.

            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // If value is specified then try to compare by value..
            if (value != undefined && this.compare(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteTail() {
        const deleteTail = this.tail;
        if (this.head == this.tail) {
            // There is only one node in linked list.
            this.head = null;
            this.tail = null;
            return deleteTail;
        }

        // If there are many nodes in linked list...
        // Rewind to the last node and delete "next" link for the node before the last one.
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deleteTail;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteHead() {
        if (!this.head) return null;

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    /**
     * 格式化数组为链表
     * @param {[*[]} values   - Array of values that need to be converted to linked list.
     * @return {LinkedList}
     */
    fromArray(values = []) {
        values.forEach(val => this.append(val));
        return this;
    }

    /**
     * @return {LinkedListNode[]}
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
        return this.toArray().map(node => node.toString(callback).toString);
    }

    /**
     * Reverse a linked list.
     * @returns {LinkedList}
     */
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}
