import {hsBubbleDown} from './HsBubbleDown.js';

/**
 * @param array {Integer[]}
 */
function heapSort(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        hsBubbleDown(array, array.length - 1, i);
    }
    for (let i = array.length - 1; i > 0; i--) {
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        hsBubbleDown(array, i - 1, 0);
    }
    return array;
}


console.log(heapSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(heapSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
