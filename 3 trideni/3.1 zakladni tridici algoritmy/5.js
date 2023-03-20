function insertSortMod(array) {
    function moveIndex(targetPosition, fromPosition) {
        const value = array[fromPosition];
        array.splice(targetPosition + 1, 0, value);
        array.splice(fromPosition + 1, 1);
    }

    for (let i = 1; i < array.length; i++) {
        const value = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > value) {
            j--;
        }
        moveIndex(j, i);
    }
    return array;
}


console.log(insertSortMod([5, 1, 2, 3, 4]));
console.log(insertSortMod([5, 4, 1, 2, 3]));
console.log(insertSortMod([5, 4, 3, 2, 1]));