let input = Array.from({length: 200}, () => Math.floor(Math.random() * 200));

function getSequenceEqualToSum(input, sum) {
    let l = 0, r = 0, currentSum = 0;
    while (1) {
        if (currentSum === sum) {
            return {l, r, sequence: input.slice(l, r)};
        }
        if (currentSum < sum) {
            if (r === input.length) {
                return [];
            }
            currentSum += input[r++];
        } else {
            if (l === r) {
                return [];
            }
            currentSum -= input[l++];
        }
    }
}


console.log(input);
console.log(getSequenceEqualToSum(input, 1246 ));