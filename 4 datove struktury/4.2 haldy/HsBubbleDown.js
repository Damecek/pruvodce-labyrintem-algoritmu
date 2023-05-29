/**
 * @param heap {Integer[]}
 * @param heapLength {Integer}
 * @param index {Integer}
 */
export function hsBubbleDown(heap, heapLength, index) {
    while (2 * index + 1 <= heapLength) {
        let childIndex = 2 * index + 1;
        if (childIndex + 1 <= heapLength && heap[childIndex + 1] > heap[childIndex]) {
            childIndex++;
        }
        if (heap[index] < heap[childIndex]) {
            const temp = heap[index];
            heap[index] = heap[childIndex];
            heap[childIndex] = temp;
            index = childIndex;
        } else {
            break;
        }
    }
}