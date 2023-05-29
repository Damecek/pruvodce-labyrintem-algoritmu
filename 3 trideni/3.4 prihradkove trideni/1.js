import {chartToNormInteger} from '../../helper/charToNormInteger.js';

/**
 * 
 * @param array {string[]}
 * @returns {string[]}
 */
function recursiveBucketSort(array, depth) {
    if (depth == null) return recursiveBucketSort(array, 0);
    if (depth >= array[0].length) return array;
    const buckets = Array.from({ length: 27 }, () => []);
    array.forEach(item => {
        buckets[chartToNormInteger(item[depth])].push(item);
    });
    const result = [];
    buckets.forEach(bucket => {
        if (bucket.length > 1) {
            result.push(...recursiveBucketSort(bucket, depth + 1));
        } else {
            result.push(...bucket);
        }
    });
    return result;
}

console.log(recursiveBucketSort(['abs', 'cca', 'bca']));