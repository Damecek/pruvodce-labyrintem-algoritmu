// vyhledavani v nekonecne posloupnosti
// Just a theory
let input = Array.from({length: 1000}, () => Math.floor(Math.random() * 200) - 100).sort((a,b) => a - b);

function getFoundItems(m, input, item) {
    const result = [];
    result.push(m);
    let i = 1;
    while (input[m + i] === item || input[m - i] === item) {
        if (input[m + i] === item) {
            result.push(m + i);
        }
        if (input[m - i] === item) {
            result.push(m - i);
        }
        i++;
    }
    return result.sort();
}

function binSearch(input, item) {
    let l = 0, r = 2;
    let foundUpperBound = false;
    while (l <= r) {
        if (foundUpperBound) {
            const m = Math.floor((l + r) / 2);
            if (input[m] === item) {
                return getFoundItems(m, input, item);
            } else if (input[m] > item) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (input[r] === item) {
                return getFoundItems(r, input, item);
            } else if (input[r] > item) {
                foundUpperBound = true;
            } else {
                l = r;
                r *= 2;
            }
        }
    }
    return [];
}

console.log(input);
console.log(binSearch(input, 0));