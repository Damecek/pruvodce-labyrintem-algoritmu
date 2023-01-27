const A = 1036;
const B = 2132;

function euklides(a, b) {
    let alpha = 0;
    let beta = 0;
    while (true) {
        [a, b, alpha, beta] = [b, a, beta, alpha];
        if (b === 0) {
            return {a, alpha, beta};
        }
        a %= b;
    }
}

console.log(euklides(A, B));