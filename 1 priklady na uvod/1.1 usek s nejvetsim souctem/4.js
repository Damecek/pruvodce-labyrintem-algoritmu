// pro zadanou posloupnost najdi nejdelsi k-hladky usek

let input = Array.from({length: 20}, () => Math.floor(Math.random() * 200) - 100);

function getLongestKSmoothSection(input, k) {
    let longestSection = [];
    let longestEndSection = [];

    function isKSmooth(section, k) {
        return Math.max(...section) - Math.min(...section) <= k;
    }

    input.forEach((item) => {
        longestEndSection.push(item);
        while (!isKSmooth(longestEndSection, k)) {
            longestEndSection = longestEndSection.slice(1);
        }
        if (longestSection.length < longestEndSection.length) {
            longestSection = [...longestEndSection];
        }
    });
    return longestSection;
}

console.log(input);
console.log(getLongestKSmoothSection(input, 1));