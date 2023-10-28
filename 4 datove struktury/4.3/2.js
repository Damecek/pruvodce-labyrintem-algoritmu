import {Trie} from './Trie.js';

function trieSort(arr) {
    const sorted = [];
    const trie = new Trie();
    arr.forEach(item => trie.insert(item));
    while (!trie.isEmpty()) {
        sorted.push(trie.removeMin());
    }
    return sorted;
}


console.log(trieSort(['asd', 'qwe', 'adf']));
console.log(trieSort(['abcd','aaa','aabcd','asd']));