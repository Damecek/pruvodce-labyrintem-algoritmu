import {merge} from './merge.js';

function mergeSort(arr) {
    let b = 1;
    while (b < arr.length) {
        let i = 0, j = b; // zacatek leveho a praveho pole
        while (j < arr.length) {
            const k = Math.min(j + b, arr.length);  // konec praveho pole
            const left = arr.slice(i, j);
            const right = arr.slice(j, k);
            arr.splice(i, k - i, ...(merge(left, right)));
            i += 2 * b;
            j += 2 * b;
        }
        b *= 2;
    }
    return arr;
}

console.log(mergeSort([5, 4, 3, 2, 1, 0]));