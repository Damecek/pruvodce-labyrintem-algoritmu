// for example 2^10 = 1024 and 10 in binary is 1010
// that means that 10 = 2^3 + 2^1 = 8 + 2 = (1 + 4) + (1 + 4) = ...

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