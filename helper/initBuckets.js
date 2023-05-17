export default function initBuckets(length) {
    return Array.from({length: ++length}, () => []);
}