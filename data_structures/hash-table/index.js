const LinkedList = require('../linked-list/LinkedList');

module.exports = HashTable;

class HashTable {
    /**
     * @param {number} hashTableSize
     */
    constructor(hashTableSize = 32) {
        // Create hash table of certain size and fill each bucket with empty linked list.
        this.buckets = Array(hashTableSize)
            .fill(null)
            .map(() => new LinkedList());
        // Just to keep track of all actual keys in a fast way.
        this.keys = {};
    }

    hash(key) {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
            0
        );

        return hash % this.buckets.length;
    }

    /**
     * @param {string} key
     * @param {*} value
     */
    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;

        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }

    /**
     * @param {string} key
     * @return {*}
     */
    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];

        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

        if (node) {
            return bucketLinkedList.delete(node.value);
        } else {
            return null;
        }
    }

    /**
     * @param {string} key
     */
    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
        return node ? node.value.value : undefined;
    }

    /**
     * @param {string} key
     * @return {boolean}
     */
    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    /**
     * @return {string[]}
     */
    getKeys() {
        return Object.keys(this.keys);
    }
}
