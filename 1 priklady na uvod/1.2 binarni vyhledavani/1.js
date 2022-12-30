// vrat vsechny indexi hledaneho prvku
let input = Array.from({length: 1000}, () => Math.floor(Math.random() * 200) - 100).sort((a,b) => a - b);

function binSearch(input, item) {
    let l = 0, r = input.length - 1;
    const result = [];
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (input[m] === item) {
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
            return result;
        } else if (input[m] > item) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return [];
}

console.log(input);
console.log(binSearch(input, 0));