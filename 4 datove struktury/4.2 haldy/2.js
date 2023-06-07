import {bubbleUp} from './BubbleUp.js';
import {bubbleDown} from './BubbleDown.js';

function deleteIndex(heap, index) {
        const res = heap[index];
        heap[index] = heap.pop();
        const parentIndex = Math.floor(index / 2);
        if (heap[parentIndex].key >=  heap[index].key) {
            bubbleUp(heap, index);
        } else {
            bubbleDown(heap, index);
        }
        return res;
}
const heap = [
    {key: 1, value: 1},
    {key: 2, value: 2},
    {key: 3, value: 3},
    {key: 4, value: 4},
    {key: 5, value: 5},
    {key: 6, value: 6},
    {key: 7, value: 7},
];
console.log(deleteIndex(heap, 2), heap);
console.log(deleteIndex(heap, 2), heap);
console.log(deleteIndex(heap, 2), heap);