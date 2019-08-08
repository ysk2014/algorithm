import MinHeap from '../heap/MinHeap';

module.exports = PriorityQueue;

class PriorityQueue extends MinHeap {
    constructor() {
        // Call MinHip constructor first.
        super();

        // Setup priorities map.
        this.priorities = new Map();

        this.compare = comparatorFunction;
    }

    /**
     * Add item to the priority queue.
     * @param {*} item - item we're going to add to the queue.
     * @param {number} [priority] - items priority.
     * @return {PriorityQueue}
     */
    add(item, priority = 0) {
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }

    /**
     * Remove item from priority queue.
     * @param {*} item - item we're going to remove.
     * @param {Comparator} [customFindingComparator] - custom function for finding the item to remove
     * @return {PriorityQueue}
     */
    remove(item, customFindingComparator) {
        super.remove(item, customFindingComparator);
        this.priorities.delete(item);
        return this;
    }

    /**
     * Change priority of the item in a queue.
     * @param {*} item - item we're going to re-prioritize.
     * @param {number} priority - new item's priority.
     * @return {PriorityQueue}
     */
    changePriority(item, priority) {
        this.remove(item, this.compare);
        this.add(item, priority);
        return this;
    }

    /**
     * Find item by ite value.
     * @param {*} item
     * @return {Number[]}
     */
    findByValue(item) {
        return this.find(item, this.compare);
    }

    /**
     * Check if item already exists in a queue.
     * @param {*} item
     * @return {boolean}
     */
    hasValue(item) {
        return this.findByValue(item).length > 0;
    }

    /**
     * Compares priorities of two items.
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    comparePriority(a, b) {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0;
        }
        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
    }

    /**
     * Compares values of two items.
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    compareValue(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }
}
