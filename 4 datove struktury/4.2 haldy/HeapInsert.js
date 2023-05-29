import {bubbleUp} from './BubbleUp.js';

/**
 * 
 * @param value
 * @param key {Integer}
 * @param heap {object[]}
 */
export function heapInsert({value, key}, heap) {
    heap.push({value, key});
    bubbleUp(heap, heap.length - 1);
}