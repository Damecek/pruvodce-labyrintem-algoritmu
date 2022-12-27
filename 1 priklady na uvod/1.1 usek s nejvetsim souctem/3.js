// najdete v textu nejkratsi usek obsahujici celou abecedu

import getStringPrependedBySpaces from "../helper/getStringPrependedBySpaces.js";

let input = Array.from({length: 100}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97));

function getShortestAlphabet(input) {
    let shortestSection;
    let shortestEndSection = [];

    function containsAlphabet(chars) {
        return new Set(chars).size === 26;
    }

    input.forEach((item) => {
        shortestEndSection.push(item);
        while (containsAlphabet(shortestEndSection)) {
            if (shortestSection == null || shortestSection.length > shortestEndSection.length) {
                shortestSection = shortestEndSection;
            }
            shortestEndSection = shortestEndSection.slice(1);
        }
    });
    return shortestSection == null ? '' : shortestSection.join('');
}

console.log(input.join(''));
console.log(getStringPrependedBySpaces(input, getShortestAlphabet(input)));