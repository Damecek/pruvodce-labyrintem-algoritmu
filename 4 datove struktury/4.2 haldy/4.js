class Heap {
    /**
     * @param array {{value: any, key: number}[]}
     * @param rank {number}
     */
    constructor(array, rank) {
        this.heap = array;
        this.rank = rank;
    }

    /**
     * @param item {{value: any, key: number}}
     */
    insert(item) {
        this.heap.push(item);
        this.#bubbleUp(this.heap.length - 1);
    }
    
    extractMin() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.#bubbleDown(0);
        return min;
    }
    
    #bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor(index / this.rank);
            if (this.heap[parentIndex].key > this.heap[index].key) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[index];
                this.heap[index] = temp;
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    #bubbleDown(index) {
        while (this.rank * index <= this.heap.length - 1) {
            let childIndex = this.rank * index;
            if (childIndex + 1 <= this.heap.length - 1 && this.heap[childIndex + 1].key < this.heap[childIndex].key) {
                childIndex++;
            }
            if (this.heap[index].key > this.heap[childIndex].key) {
                const temp = this.heap[index];
                this.heap[index] = this.heap[childIndex];
                this.heap[childIndex] = temp;
                index = childIndex;
            } else {
                break;
            }
        }
    }
}

const h2 = new Heap([{value: 1, key: 1}, {value: 2, key: 2}, {value: 3, key: 3}, ], 2);
console.log(h2.extractMin(), h2.extractMin())

const h3 = new Heap([{value: 1, key: 1}, {value: 2, key: 2}, {value: 3, key: 3}, ], 3);
console.log(h3.extractMin(), h3.extractMin())
h3.insert({value: 4, key: 4});
console.log(h3.extractMin(), h3.extractMin())