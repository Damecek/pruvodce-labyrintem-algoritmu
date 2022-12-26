// generate array of integer positive and negative, long 200 and store it in variable input
let input = Array.from({length: 10}, () => Math.floor(Math.random() * 200) - 100);

function getRichestSection(input) {
    let totalSum = 0;
    let endSectionSum = 0;
    input.forEach((item) => {
        endSectionSum = Math.max(endSectionSum, 0) + item;  // if endSectionSum is negative then item, else + item
        totalSum = Math.max(totalSum, endSectionSum);
    });
    return totalSum;
}

console.log(input);
console.log(getRichestSection(input));