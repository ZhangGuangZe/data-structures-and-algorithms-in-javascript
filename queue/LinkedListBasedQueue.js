import { Node } from '/linked-list/Node.js';

export class LinkedListBasedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(data) {
    const node = new Node(data);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }
  dequeue() {
    if (!this.head) return; //  throw new Error('queue underflow!');
    const val = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return val;
  }
  toString() {
    let curr = this.head;
    let str = 'head -> ';
    while (curr) {
      str += curr.data + ' ';
      curr = curr.next;
    }
    return str + '<- tail';
  }
}