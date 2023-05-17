import initBuckets from '../../helper/initBuckets.js';

/**
 *
 * @param array {string[]}
 */
function stringSorting(array) {
    const maxLength = Math.max(...array.map(x => x.length));
    const buckets = initBuckets(maxLength);
    array.forEach(x => buckets[x.length].push(x.toLowerCase()));
    let result = [];
    for (let i = maxLength; i > 0; i--) {
        const charBuckets = initBuckets(26);
        const lengthBucket = buckets[i];
        const getPosition = (x) => x.charCodeAt(0) - 97;
        lengthBucket.forEach(x => charBuckets[getPosition(x[i - 1])].push(x));
        result.forEach(x => charBuckets[getPosition(x[i - 1])].push(x));
        result = [];
        charBuckets.forEach(x => result.push(...x));
    }
    return result;
}

console.log(stringSorting(['ab', 'c', 'bca']));
console.log(stringSorting(['ab', 'c', 'bca', 'abc', 'cba', 'bac', 'cab']));
console.log(stringSorting(['ab', 'c', 'bca', 'abc', 'cba', 'bac', 'cab', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'axxafsfweeaf']));