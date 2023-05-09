export function bucketSort(array, buckets, getKey) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        buckets[getKey(element)].push(element);
    }
    const result = [];
    for (let i = 0; i < buckets.length; i++) {
        result.push(...(buckets[i]));
    }
    return result;
}

// console.log(
//     bucketSort(
//         [5, 1, 2, 2, 4, 4, 5, 1, 0, 4, 3, 2, 1, 0],
//         [[], [], [], [], [], []],
//         (x) => x
//     )
// );
//
// console.log(
//     bucketSort(
//         [{value:1}, {value:5}, {value:2}, {value:2}, {value:4}, {value:4}, {value:5}, {value:1}, {value:0}, {value:4}, {value:3}, {value:2}, {value:1}, {value:0}],
//         [[], [], [], [], [], []],
//         (x) => x.value
//     )
// );