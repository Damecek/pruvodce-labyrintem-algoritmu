// vyhodnocujeme podle hodnoty n (mocniny) a vyuzivame toho ze x^4 = x^2 * x^2 a x^5 = x^2 * x^2 * x
// zde t reprezentuje nekterou ze sudych mocnin, pokud je n liche pridame k vysledku * x
// napriklad pro power(2, 10) misto toho abychom pocitali 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2
// tak pouze pocitame
// 1 * 1 * 2
//         |-> 2 * 2 * 1
//                     |-> 4 * 4 * 2
//                                 |-> 32 * 32 * 1


function power(x, n) {
    if (n === 0) {
        return 1;
    }
    const t = power(x, Math.floor(n / 2));
    console.log(`returning ${t} * ${t} * ${n % 2 === 1 ? x : 1}`);
    return t * t * (n % 2 === 0 ? 1 : x);
}

console.log(power(5, 2));