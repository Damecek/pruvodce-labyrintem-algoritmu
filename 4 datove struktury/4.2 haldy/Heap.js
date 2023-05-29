import {makeHeap} from './MakeHeap.js';
import {heapInsert} from './HeapInsert.js';
import {heapExtractMin} from './HeapExtractMin.js';

export default class Heap {
    /**
     * @param array {object[]}
     */
    constructor(array) {
        this.heap = makeHeap(array);
    }

    /**
     * @param value
     * @param key {Integer}
     */
    insert({value, key}) {
        heapInsert({value, key}, this.heap);
    }

    /**
     * @returns {object}
     */
    extractMin() {
        return heapExtractMin(this.heap);
    }
}