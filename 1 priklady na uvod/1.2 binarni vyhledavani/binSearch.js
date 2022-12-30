let input = Array.from({length: 200}, () => Math.floor(Math.random() * 200) - 100).sort((a,b) => a - b);

function binSearch(input, item) {
    let l = 0, r = input.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (input[m] === item) {
            return m;
        } else if (input[m] > item) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
}

console.log(input);
console.log(binSearch(input, 0));