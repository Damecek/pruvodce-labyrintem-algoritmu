// metoda dvou jezdcu nelze pouzit nebot vyuziva predpoklad, ze pricitanim z prava se suma zvetsuje a odcitanim z leva se zmensuje
// to ale neni pravda v pripade ze posloupnost opsahuje i zaporna cisla, tudiz odectenim z leva by se mohla suma zvysit

// toto reseni vyuziva mapu kam se ukladaji sumy vzdy od 0 do i tzn S[i] = sum(0, i) a plati vztah
// S[i] - S[j] = sum(j + 1, i) pro i > j; a my hledame takove i, j ze sum(j + 1, i) = sum
// vztah lze upravit na S[i] - sum = S[j], kde sum mame zadano, S[j] mame ulozene v mape a S[i] je soucasna suma od 0 do i;
let input = Array.from({length: 20}, () => Math.floor(Math.random() * 200) - 100);

function getSequenceEqualToSum(input, sum) {
    const hashMap = new Map();
    let currentSum = 0;
    for (let i = 0; i < input.length; i++) {
        currentSum += input[i];
        const rest = currentSum - sum;
        if (rest === 0) {
            return [0, i];
        }
        if (hashMap.has(rest)) {
            return [hashMap.get(rest), i];
        }
        hashMap.set(currentSum, i + 1);
    }
}

console.log(input)
console.log(getSequenceEqualToSum(input, 10))
