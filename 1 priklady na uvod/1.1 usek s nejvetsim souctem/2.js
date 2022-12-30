// na vstupu je text z pismen a mezer. vrat nejdelsi usek textu kde se pismena neopakuji
// assign to array input, list of lowercase letters and spaces, length 20
import getStringPrependedBySpaces from "../../helper/getStringPrependedBySpaces.js";

let input = Array.from({length: 100}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97));
// let input = 'asdafg'.split('');

function getLongestSectionWithoutRepetition(input) {
    let longestSection = '';
    let longestEndSection = '';
    input.forEach((item) => {
        const index = longestEndSection.indexOf(item);
        if (index >= 0) {
            longestEndSection = longestEndSection.slice(index + 1);
        }
        longestEndSection += item;
        
        if (longestSection.length < longestEndSection.length) {
            longestSection = longestEndSection;
        }
    });
    return longestSection;
}

console.log(input.join(''));
console.log(getStringPrependedBySpaces(input, getLongestSectionWithoutRepetition(input)));