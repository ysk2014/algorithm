module.exports = Heap;

/**
 * Parent class for Min and Max Heaps.
 */
class Heap {
    /**
     * @constructs Heap
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction) {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly');
        }

        // Array representation of the heap.
        this.heapContainer = [];
        this.compare = comparatorFunction;
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     */
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     */
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    /**
     * @param {number} childIndex
     * @return {number}
     */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * @param {number} childIndex
     * @return {boolean}
     */
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    /**
     *
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     *
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     *
     * @param {number} parentIndex
     * @return {*}
     */
    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    /**
     *
     * @param {number} parentIndex
     * @return {*}
     */
    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    /**
     *
     * @param {number} parentIndex
     * @return {*}
     */
    parent(childIndex) {
        this.heapContainer[this.getParentIndex(childIndex)];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.heapContainer.length;
    }

    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     */
    swap(indexOne, indexTwo) {
        let tmp = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = tmp;
    }

    /**
     * @return {*}
     */
    peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0];
    }

    /**
     * @return {*}
     */
    poll() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const item = this.heapContainer[0];
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();

        return item;
    }

    /**
     * @param {*} item
     * @return {Heap}
     */
    add(item) {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Heap}
     */
    remove(item, comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let i = 0; i < numberOfItemsToRemove.length; i++) {
            const indexToRemove = this.find(item, comparator).pop();
            if (indexToRemove === this.heapContainer.length - 1) {
                this.heapContainer.pop();
            } else {
                this.heapContainer[indexToRemove] = this.heapContainer.pop();
                const parentItem = this.parent(indexToRemove);

                if (
                    this.hasLeftChild(indexToRemove) &&
                    (!parentItem ||
                        this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
                ) {
                    this.heapifyDown(indexToRemove);
                } else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }

        return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Number[]}
     */
    find(item, comparator = this.compare) {
        const foundItemindexs = [];

        for (let i = 0; i < this.heapContainer.length; i++) {
            if (comparator(item, this.heapContainer[i])) {
                foundItemindexs.push(i);
            }
        }
        return foundItemindexs;
    }

    /**
     * @param {number} [customStartIndex]
     */
    heapifyUp(customStartIndex) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        while (
            this.hasParent(currentIndex) &&
            !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
        ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /**
     * @param {number} [customStartIndex]
     */
    heapifyDown(customStartIndex = 0) {
        // Compare the parent element to its children and swap parent with the appropriate
        // child (smallest child for MinHeap, largest child for MaxHeap).
        // Do the same for next children after swap.
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (
                this.hasRightChild(currentIndex) &&
                this.pairIsInCorrectOrder(
                    this.rightChild(currentIndex),
                    this.leftChild(currentIndex)
                )
            ) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (
                this.pairIsInCorrectOrder(
                    this.heapContainer[currentIndex],
                    this.heapContainer[nextIndex]
                )
            ) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    /**
     * Checks if pair of heap elements is in correct order.
     * For MinHeap the first element must be always smaller or equal.
     * For MaxHeap the first element must be always bigger or equal.
     *
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    /* istanbul ignore next */
    pairIsInCorrectOrder(firstElement, secondElement) {
        throw new Error(`
            You have to implement heap pair comparision method
            for ${firstElement} and ${secondElement} values.
        `);
    }

    /**
     * @return {string}
     */
    toString() {
        return this.heapContainer.toString();
    }
}
