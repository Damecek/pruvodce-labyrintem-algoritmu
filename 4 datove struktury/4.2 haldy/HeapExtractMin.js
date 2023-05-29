import {bubbleDown} from './BubbleDown.js';

/**
 * @param {Object[]} heap
 */
export function heapExtractMin(heap) {
    const min = heap[0];
    heap[0] = heap.pop();
    bubbleDown(heap, 0);
    return min;
}