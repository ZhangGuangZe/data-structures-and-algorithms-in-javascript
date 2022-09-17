class Trie {
    constructor() {
        this.root = new TrieNode('/');
    }
    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let index = word[i].codePointAt() - 'a'.codePointAt();

            if (!node.children[index]) {
                const newNode = new TrieNode(word[i]);
                node.children[index] = newNode;
            }

            node = node.children[index];
        }
        
        node.isWord = true;
    }
    search(pattern) {
        let node = this.root;

        for (let i = 0; i < pattern.length; i++) {
            let index = pattern[i].codePointAt() - 'a'.codePointAt();

            if (!node.children[index]) return false;
            node = node.children[index];
        }

        return !!node.isWord;
    }

}

class TrieNode {
    constructor(data) {
        this.data = data;
        this.children = new Array(26);
        this.isWord = false;
    }
}

const trie = new Trie();
trie.insert('how');
trie.search('hi');
trie.insert('hi');
trie.insert('her');
trie.search('hello');
trie.insert('hello');
trie.insert('so');
trie.insert('see');