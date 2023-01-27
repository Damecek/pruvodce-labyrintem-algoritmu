const A = 1036;
const B = 2132;

function odcitaciEuklid(a, b) {
    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}

console.log(odcitaciEuklid(A, B));