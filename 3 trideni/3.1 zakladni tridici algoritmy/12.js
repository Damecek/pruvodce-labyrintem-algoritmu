function pancakeSorting(array) {
    function flip(array) {
        const newArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    }

    function flipArray(array, index) {
        return [...flip(array.slice(0, index + 1)), ...array.slice(index + 1)];
    }

    for (let i = 0; i < array.length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        array = flipArray(array, maxIndex);
        array = flipArray(array, array.length - i - 1);
    }
    return array;
}

console.log(pancakeSorting([5, 4, 3, 2, 1, 0]));