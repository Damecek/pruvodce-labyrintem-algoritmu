function getClosestSquareRoot(n) {
    let l = 0;
    let r = n;
    let middle = 0;
    while (l <= r) {
        middle = Math.floor((l + r) / 2);
        const square = middle * middle;
        if (square === n) {
            return middle;
        } else if (square < n) {
            l = middle + 1;
        } else {
            r = middle - 1;
        }
    }
    return middle;
}

console.log(getClosestSquareRoot(101));