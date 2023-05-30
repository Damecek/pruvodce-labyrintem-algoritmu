class PriorityQueue {
    /**
     * @param array {object[]}
     */
    constructor(array) {
        this.heap = [];
        array.forEach((item) => this.insert(item));
    }

    /**
     * @param value
     * @param key {Integer}
     */
    insert({value, key}) {
        this.heap.push({value: [value], key});
        this.#bubbleUp(this.heap.length - 1);
    }

    /**
     * @returns {object}
     */
    extractMin() {
        const min = this.heap[0];
        if (min.value.length === 1) {
            this.heap[0] = this.heap.pop();
            this.#bubbleDown(0);
            return {value: min.value[0], key: min.key};
        } else {
            return {value: min.value.shift(), key: min.key};
        }
    }

    #bubble(index) {
        const parentIndex = Math.floor(index / 2);
        if (parentIndex === index) return;
        if (this.heap[parentIndex].key >= this.heap[index]) {
            this.#bubbleUp(index);
        } else {
            this.#bubbleDown(index);
        }
    }

    #bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor(index / 2);
            if (this.heap[parentIndex].key > this.heap[index].key) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[index];
                this.heap[index] = temp;
                index = parentIndex;
            } else if (this.heap[parentIndex].key === this.heap[index].key) {
                this.heap[parentIndex].value.push(...this.heap[index].value);
                this.heap[index] = this.heap.pop();
                this.#bubble(index);
                break;
            } else {
                break;
            }
        }
    }

    #bubbleDown(index) {
        const isSiblingsKeyLess = (childIndex) => childIndex + 1 <= this.heap.length - 1 && this.heap[childIndex + 1].key < this.heap[childIndex].key;
        while (2 * index + 1 <= this.heap.length - 1) {
            let childIndex = 2 * index + 1;
            if (isSiblingsKeyLess(childIndex)) {
                childIndex++;
            }
            if (this.heap[index].key > this.heap[childIndex].key) {
                const temp = this.heap[index];
                this.heap[index] = this.heap[childIndex];
                this.heap[childIndex] = temp;
                index = childIndex;
            } else if (this.heap[childIndex].key === this.heap[index].key) {
                this.heap[childIndex].value.push(...this.heap[index].value);
                this.heap[index] = this.heap.pop();
                this.#bubble(index);
                break;
            } else {
                break;
            }
        }
    }
}

const queue = new PriorityQueue([{value: 'a', key: 1}, {value: 'bb', key: 2}]);
queue.insert({value: 'c', key: 1});
queue.insert({value: 'd', key: 3});
console.log(queue.extractMin());
queue.insert({value: 'e', key: 1});
queue.insert({value: 'ss', key: 1});
console.log(queue.extractMin());
console.log(queue.extractMin());
console.log(queue.extractMin());
console.log(queue.extractMin());
console.log(queue.extractMin());