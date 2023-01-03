let input = Array.from({length: 10}, () => Math.floor(Math.random() * 200) - 100);

function localMinBinSearch(input) {
    let l = 0, r = input.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const left = input[m - 1] || Infinity;
        const right = input[m + 1] || Infinity;
        if (input[m] < left && input[m] < right) {
            return m;
        } else if (input[m] > left) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
}

console.log(input);
console.log(localMinBinSearch(input, 0));