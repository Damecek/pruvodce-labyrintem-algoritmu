let input = Array.from({length: 200000}, () => Math.floor(Math.random() * 200000)).sort((a,b) => a - b);

function interpolationSearch(input, item) {
    let l = 0, r = input.length - 1;
    while (l <= r && item >= input[l] && item <= input[r]) {
        const pos = l + (((item - input[l]) * (r - l)) / (input[r] - input[l]));
        const m = Math.floor(pos);
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

console.time('interpolationSearch');
console.log(interpolationSearch(input, 55433));
console.timeEnd('interpolationSearch');

// console.time('binSearch');
// console.log(binSearch(input, 55433));
// console.timeEnd('binSearch');