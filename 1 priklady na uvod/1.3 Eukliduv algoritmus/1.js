// je narocne ziskat prvociselny rozklad cisla. pro dane cislo x musite znat prvocisla od 1 do x a zkouset kolik mocnin se do x vejde
// a pak jeste porovnavat 2 seznamy prvociselnych rozkladu a hledat spolecne prvky

const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]; // pro jednoduchost pouzijeme jen prvocisla do 30, jinak nutno hledat prvocisla pomoci Eratosthenova sita napriklad

function gcd(a, b) {
    function getPrimeFactors(x) {
        // velmi narocne
        const result = [];
        for (let i = 0; i < PRIMES.length; i++) {
            const prime = PRIMES[i];
            if (x % prime === 0) {
                result.push(prime);
                x /= prime;
                i--;
            }
        }
        return result;
    }
    const aFactors = getPrimeFactors(a);
    const bFactors = getPrimeFactors(b);
    console.log(aFactors, bFactors);
    const commonFactors = aFactors.filter(x => bFactors.includes(x));
    return commonFactors.reduce((acc, x) => acc * x, 1);
}

console.log(gcd(14, 21));