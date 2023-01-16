let input = [...new Set(Array.from({length: 200}, () => Math.floor(Math.random() * 100)))];

function getFirstGap(input) {
    const edgeMap = new Map();
    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        const mapHasLeftEdge = edgeMap.has(value - 1);
        const mapHasRightEdge = edgeMap.has(value + 1);
        if (mapHasLeftEdge && mapHasRightEdge) {
            edgeMap.delete(value - 1);
            edgeMap.delete(value + 1);
        } else {
            edgeMap.set(value, 1);
            if (mapHasLeftEdge) {
                edgeMap.delete(value - 1);
            } else if (mapHasRightEdge) {
                edgeMap.delete(value + 1);
            }
        }
    }
    const firstGap = edgeMap.keys().next().value + 1;
    return firstGap === input.length ? -1 : firstGap;
}

console.log(input.sort((a,b) => a - b));
console.log(getFirstGap(input));