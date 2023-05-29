import {bubbleDown} from './BubbleDown.js';

/**
 * @param array {object[]}
 */
export function makeHeap(array) {
    const heap = array.slice();
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
        bubbleDown(heap, i);
    }
    return heap;
}