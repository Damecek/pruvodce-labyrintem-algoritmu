/**
 * @param {object[]} heap
 * @param {number} index
 */
export function bubbleDown(heap, index) {
    while (2 * index <= heap.length - 1) {
        let childIndex = 2 * index;
        if (childIndex + 1 <= heap.length - 1 && heap[childIndex + 1].key < heap[childIndex].key) {
            childIndex++;
        }
        if (heap[index].key > heap[childIndex].key) {
            const temp = heap[index];
            heap[index] = heap[childIndex];
            heap[childIndex] = temp;
            index = childIndex;
        } else {
            break;
        }
    }
}