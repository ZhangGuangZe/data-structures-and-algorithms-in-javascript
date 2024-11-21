import Node from '../linked-list/Node.js';

export default class CircularLinkedList {
  constructor() {
    this.head = new Node('dummy'); // 哨兵节点
    this.head.next = this.head; // 初始循环
    this.size = 0;
  }

  append(val) {
    let curNode = this.head;
    while (curNode.next !== this.head) {
      curNode = curNode.next;
    }
    const newNode = new Node(val);
    newNode.next = this.head; // 保持循环
    curNode.next = newNode;
    this.size++;
  }

  remove(node) {
    let precursor = this.head;
    while (precursor.next !== node) {
      precursor = precursor.next;
    }
    precursor.next = node.next;
    this.size--;
    return node.next;
  }
}