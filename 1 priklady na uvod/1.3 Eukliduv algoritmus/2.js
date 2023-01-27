// porovnavat a, b netreba jelikoz a = a mod b zmensi a tak ze b > a, jedina vyjimka je v prvnim kroku kdyz b > a tim padem mod a nezmeni
// priklad: a = 5, b = 10 pak a = a mod b je a = 5 mod 10 = 5, cili a = a

const A = 1036;
const B = 2132;

function euklides(a, b) {
    while (true) {
        [a, b] = [b, a];
        if (b === 0) {
            return a;
        }
        a %= b;
    }
}

console.log(euklides(A, B));