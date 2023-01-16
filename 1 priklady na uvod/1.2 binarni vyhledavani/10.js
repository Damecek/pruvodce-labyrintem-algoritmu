// pouzij funkci jako predikat tak ze vrati -1 pro posun do leve pulky, +1 pro posun do prave pulky a 0 pro vraceni nalezeneho prvku

let inputLocalMin = Array.from({length: 10}, () => Math.floor(Math.random() * 200) - 100);
let inputFirstGap = [...new Set(Array.from({length: 200}, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b))];

function binSearch(input, predicate) {
    let l = 0, r = input.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const predicateResult = predicate(input, m);
        switch (predicateResult) {
            case -1:
                r = m - 1;
                break;
            case 0:
                return m;
            case 1:
                l = m + 1;
                break;
        }
    }
    return -1;
}

function localMinPredicate(inputArray, middleIndex) {
    const left = inputArray[middleIndex - 1] || Infinity;
    const right = inputArray[middleIndex + 1] || Infinity;
    if (inputArray[middleIndex] < left && inputArray[middleIndex] < right) {
        return 0;
    } else if (inputArray[middleIndex] > left) {
        return -1;
    } else {
        return 1;
    }
}

console.log(inputLocalMin);
console.log(binSearch(inputLocalMin, localMinPredicate));

function firstGapPredicate(inputArray, middleIndex) {
    const complement = middleIndex - inputArray[middleIndex];
    const leftComplement = (middleIndex - 1) - inputArray[middleIndex - 1];
    if (complement === 0) {
        return 1;
    }
    if (leftComplement === 0 && complement !== 0) {
        return 0;
    }
    return -1;
}

console.log(inputFirstGap);
console.log(binSearch(inputFirstGap, firstGapPredicate));
