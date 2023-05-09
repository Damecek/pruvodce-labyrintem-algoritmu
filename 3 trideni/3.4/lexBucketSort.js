import {bucketSort} from './bucketSort.js';

/**
 * @param array {string[]}
 * @param range {number}
 */
function lexBucketSort(array, range) {
    let result = array;
    for (let i = range - 1; i >= 0; i--) {
        result = bucketSort(
            result,
            Array.from({length: range}, () => []),
            (x) => x[i] - 1
        );
    }
    return result;
}


console.log(lexBucketSort(['123', '321', '213', '231', '312', '132'], 3));
