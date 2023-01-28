// for example 2^10 = 1024 and 10 in binary is 1010
// for digit = 1 result = 1 * 1 * 2
// for digit = 0 result = 2 * 2 * 1
// for digit = 1 result = 4 * 4 * 2
// for digit = 0 result = 32 * 32 * 1
// that means that if the digit in binary is 1 we multiply the result by x otherwise we multiply by 1

function power(x, n) {
    const nBinary = n.toString(2);
    let result = 1;
    nBinary.split('').forEach(digit => {
        // console.log(`for digit = ${digit} result = ${result} * ${result} * ${digit === '1' ? x : 1}`);
        result = result * result * (digit === '1' ? x : 1);
    })
    return result;
}

for (let i = 0; i < 20; i++) {
    console.log(i, power(2, i), Math.pow(2, i));
}
// console.log(power(2, 10));