// spocitej kombinacni cislo n nad k 0<=k<=n
// k reseni vyuzito: n nad k = n/k * (n-1) nad (k-1)

const n = 6;
const k = 2;

function nChooseK(n, k) {
    let result = 1;
    for (let i = 0; i < k; i++) {
        result *= (n - i) / (k - i);
    }
    return Math.round(result);
}

console.log(nChooseK(n, k));