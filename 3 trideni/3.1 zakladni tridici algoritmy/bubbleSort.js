function bubbleSort(array) {
    let continueSorting = true;
    while (continueSorting) {
        continueSorting = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                continueSorting = true;
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));