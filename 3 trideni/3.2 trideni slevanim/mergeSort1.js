import {merge} from './merge.js';

function mergeSort1(arr) {
    let b = 1;
    while (b < arr.length) {
        for (let i = 0; i < arr.length; i += 2 * b) {
            const left = arr.slice(i, i + b);
            const right = arr.slice(i + b, i + 2 * b);
            arr.splice(i, 2 * b, ...(merge(left, right)));
        }
        b *= 2;
    }
    return arr;
}

console.log(mergeSort1([5, 4, 3, 2, 1, 0]));