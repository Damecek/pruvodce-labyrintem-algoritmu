let input = [...new Set(Array.from({length: 200}, () => Math.floor(Math.random() * 100)).sort((a,b) => a - b))];

function getFirstGap(input) {
    let l = 0, r = input.length - 1;
    let middle = 0;
    while (l <= r) {
        middle = Math.floor((l + r) / 2);
        const middleValue = input[middle];
        const complement = middle - middleValue;
        if (complement === 0) {
            l = middle + 1;
        } else {
            r = middle - 1;
        }
    }
    return middle;
}

console.log(input);
console.log(getFirstGap(input));
