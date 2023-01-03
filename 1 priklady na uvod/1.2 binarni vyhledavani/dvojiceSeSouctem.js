let input = Array.from({length: 20}, () => Math.floor(Math.random() * 200) - 100).sort((a,b) => a - b);

function dvojiceSeSouctem(input, total) {
    let l = 0, r = input.length - 1;
    while (l <= r) {
        const leftValue = input[l];
        const rightValue = input[r];
        const complement = total - leftValue;
        if (rightValue === complement) {
            return [l, r];
        } else if (rightValue > complement) {
            r--;
        } else {
            l++;
        }
    }
    return [];
}

console.log(input);
console.log(dvojiceSeSouctem(input, 0));