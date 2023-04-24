export function merge(left, right) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result[k] = left[i];
            i++;
        } else {
            result[k] = right[j];
            j++;
        }
        k++;
    }
    if (i <= left.length) {
        result.push(...left.slice(i));
    }
    if (j <= right.length) {
        result.push(...right.slice(j));
    }
    return result;
}