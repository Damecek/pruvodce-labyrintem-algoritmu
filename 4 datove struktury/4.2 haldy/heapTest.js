import Heap from './Heap.js';

const heap = new Heap([{value: 'a', key: 1}, {value: 'b', key: 2}, {value: 'c', key: 3}]);
heap.insert({value: 'd', key: 0});
heap.insert({value: 'e', key: 4});
heap.insert({value: 'f', key: 5});
console.log(heap.extractMin());
console.log(heap.extractMin());
heap.insert({value: 'g', key: 0});
console.log(heap.extractMin());