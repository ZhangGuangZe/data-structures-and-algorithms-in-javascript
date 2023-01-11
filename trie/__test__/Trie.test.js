import Trie from '../Trie.js';

const trie = new Trie();
trie.insert('high');
console.log(trie.search('high')); // => true
console.log(trie.search('hi')); // => false
trie.insert('hi');
console.log(trie.search('hi')); // => true