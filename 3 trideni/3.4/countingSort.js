function countingSort(array, min, max) {
    const counts = [];
    for (let i = min; i <= max; i++) {
        counts[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        counts[array[i]]++;
    }
    const result = [];
    for (let i = min; i <= max; i++) {
        for (let j = 0; j < counts[i]; j++) {
            result.push(i);
        }
    }
    return result;
}

console.log(countingSort([5,1,2,2,4,4,5,1,0, 4, 3, 2, 1, 0], 0, 5));