export class Trie {
    root = new TrieNode();

    /**
     * @param {string} key
     */
    isMember(key) {
        const node = key.split('').reduce((node, char) => {
            if (!node.children[char]) {
                return false;
            }
            return node.children[char];
        }, this.root);
        return node.isMember;
    }

    /**
     * @param {string} key
     */
    insert(key) {
        const node = key.split('').reduce((node, char) => {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            return node.children[char];
        }, this.root);
        node.isMember = true;
    }

    /**
     * Recursively goes down to the node, marks it as not member. Returning up from the recursion, if the node children  has no children and is not a member, it is deleted.
     * @param {string} key
     */
    remove(key) {
        this._remove(this.root, key.split(''));
    }

    _remove(node, key) {
        if (key.length === 0) {
            node.isMember = false;
            if (Object.keys(node.children).length === 0) {
                return null;
            }
            return node;
        }
        const char = key.shift();
        const child = this._remove(node.children[char], key);
        if (!child) return node;
        if (Object.keys(child.children).length === 0 && !child.isMember) {
            delete node.children[char];
        }
        return child;
    }

    print() {
        console.log('-v');
        this._print(this.root, '');
        console.log('-^');
    }

    _print(node, prefix) {
        if (node.isMember) {
            console.log(prefix);
        }
        Object.keys(node.children).forEach(char => {
            this._print(node.children[char], prefix + char);
        });
    }
}


class TrieNode {
    /** @type {boolean} */
    isMember = false;
    /** @type {Object<string, TrieNode>} */
    children = {};
}

const trie = new Trie();
trie.insert('hello');
trie.insert('hell');
trie.insert('hella');
trie.print();
console.log(trie.isMember('hello'));
trie.remove('hell');
trie.print();
trie.remove('hello');
trie.print();
