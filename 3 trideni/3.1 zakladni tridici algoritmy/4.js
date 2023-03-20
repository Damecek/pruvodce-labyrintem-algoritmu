function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        const value = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > value) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = value;
    }
    return array;
}


console.log(insertSort([5, 1, 2, 3, 4]));
console.log(insertSort([5, 4, 1, 2, 3]));
console.log(insertSort([5, 4, 3, 2, 1]));