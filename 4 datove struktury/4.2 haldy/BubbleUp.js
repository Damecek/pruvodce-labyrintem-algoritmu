/**
 * 
 * @param heap {object[]}
 * @param index {Integer}
 */
export function bubbleUp(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor(index / 2);
        if (heap[parentIndex].key > heap[index].key) {
            const temp = heap[parentIndex];
            heap[parentIndex] = heap[index];
            heap[index] = temp;
            index = parentIndex;
        } else {
            break;
        }
    }
}