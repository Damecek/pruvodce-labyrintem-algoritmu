// one iteration when one is out of order
// two iterations when two are out of order, etc.

// on descending order array of length n the algorithm will do n - 1 iterations

import {bubbleSortOptimized1} from './1.js';

console.log(bubbleSortOptimized1([5, 1, 2, 3, 4]));
console.log(bubbleSortOptimized1([5, 4, 1, 2, 3]));
console.log(bubbleSortOptimized1([5, 4, 3, 2, 1]));