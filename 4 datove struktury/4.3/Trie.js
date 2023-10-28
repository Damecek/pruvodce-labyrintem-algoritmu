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
        if (!node.children[char]) {
            return node;
        }
        const child = this._remove(node.children[char], key);
        if (!child || (Object.keys(child.children).length === 0 && !child.isMember)) {
            delete node.children[char];
        }
        if (Object.keys(node.children).length === 0 && !node.isMember) {
            return null;
        }
        return node;
    }


    removeMin() {
        let node = this.root;
        let key = '';
        while (Object.keys(node.children).length > 0) {
            const char = Object.keys(node.children).sort()[0];
            key += char;
            node = node.children[char];
        }
        this.remove(key);
        return key;
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
    
    isEmpty() {
        return Object.keys(this.root.children).length === 0;
    }
}


class TrieNode {
    /** @type {boolean} */
    isMember = false;
    /** @type {Object<string, TrieNode>} */
    children = {};
}
