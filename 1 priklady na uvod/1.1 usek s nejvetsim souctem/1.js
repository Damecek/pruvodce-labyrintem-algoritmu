// upravte maxSoucet aby take vracel polohu nejbohatsiho useku

let input = Array.from({length: 20}, () => Math.floor(Math.random() * 200) - 100);

function getRichestSection(input) {
    let totalSum = -Math.pow(2, 53) - 1;
    let endSectionSum = -Math.pow(2, 53) - 1;
    let minPosition = 0;
    let sectionMinPosition = 0;
    let maxPosition = 0;
    let sectionMaxPosition = 0;
    input.forEach((item, index) => {
        const maxEndSectionSum = Math.max(endSectionSum, 0);
        // if maxEndSectionSum is 0 then it is start of new section
        if (maxEndSectionSum === 0) {
            sectionMinPosition = index;
            sectionMaxPosition = index;
        } else {
            sectionMaxPosition = index;
        }
        endSectionSum = maxEndSectionSum + item;
        if (totalSum < endSectionSum) {
            totalSum = endSectionSum;
            minPosition = sectionMinPosition;
            maxPosition = sectionMaxPosition;
        }
    });
    return {totalSum, minPosition, maxPosition};
}

console.log(input);
console.log(getRichestSection(input));