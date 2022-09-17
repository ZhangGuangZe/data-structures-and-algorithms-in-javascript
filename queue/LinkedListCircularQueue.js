import { Node } from '/linked-list/Node.js';

export default class ArrayCircularQueue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  enqueue(data) {
    const node = new Node(data);
    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.tail.next = this.head;
    this.size++;
  }
  dequeue() {
    if (!this.head) return;
    const val = this.head.data;
    if (this.head === this.tail) { // size = 1
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.size--;
    return val;
  }
}