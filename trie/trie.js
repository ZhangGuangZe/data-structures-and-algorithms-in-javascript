import TrieNode from './TrieNode.js';

export default class Trie {
  constructor() {
    this.root = new TrieNode('/');
  }
  /**
   * 插入字符串
   * @param {*} word
   * @returns {void}
   */
  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const index = word[i].charCodeAt() - 'a'.charCodeAt();
      if (!node.children[index]) {
        const newNode = new TrieNode(word[i]);
        node.children[index] = newNode;
      }
      node = node.children[index];
    }

    node.isWord = true;
  }
  /**
   * 查找字符串
   * @param {*} word 
   * @returns {boolean}
   */
  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const index = word[i].charCodeAt() - 'a'.charCodeAt();
      if (!node.children[index]) return false;
      node = node.children[index];
    }

    return node.isWord;
  }
}