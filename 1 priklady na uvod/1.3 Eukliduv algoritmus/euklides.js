const A = 1036;
const B = 2132;

function euklides(a, b) {
    while (true) {
        if (a < b) {
            [a, b] = [b, a];
        }
        if (b === 0) {
            return a;
        }
        a %= b;
    }
}

console.log(euklides(A, B));