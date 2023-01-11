export default class TrieNode {
  constructor(data) {
    this.data = data;
    this.children = new Array(26);
    this.isWord = false;
  }
}