function binGcd(x, y) {
    if (x === y) {
        return x;
    }
    const isEven = x => x % 2 === 0;
    if (isEven(x) && isEven(y)) {
        return 2 * binGcd(x / 2, y / 2);
    }
    if (isEven(x) && !isEven(y)) {
        return binGcd(x / 2, y);
    }
    if (!isEven(x) && isEven(y)) {
        return binGcd(x, y / 2);
    }
    if (x >= y) {
        return binGcd(x - y, y);
    } else {
        return binGcd(x, y - x);
    }
}

console.log(binGcd(17*2*9, 17*2*3*5));
console.log(17*2*3)