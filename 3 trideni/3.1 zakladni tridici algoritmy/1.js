// if the first element in array is the biggest
// then after the first iteration it will be in the last position
// same holds for the biggest element in any position in the array

export function bubbleSortOptimized1(array) {
    let continueSorting = true;
    let iteration = 0;
    while (continueSorting) {
        continueSorting = false;
        for (let i = 0; i < array.length - iteration; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                continueSorting = true;
            }
        }
        iteration++;
    }
    return {array, iteration};
}

console.log(bubbleSortOptimized1([5, 4, 3, 2, 1]));