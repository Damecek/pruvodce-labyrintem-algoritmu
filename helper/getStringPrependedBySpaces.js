export default function (input, section) {
    const emptySpaceLength = input.join('').split(section)[0].length;
    return new Array(emptySpaceLength).fill(' ').join('') + section;
}