export class ArrayBasedQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.size = capacity;
    this.head = 0;
    this.tail = 0;
  }
  enqueue(data) {
    if (this.isFull()) return;
    this.items[this.tail++] = data;
  }
  dequeue() {
    if (this.isEmpty()) return;
    return this.items[this.head++];
  }
  isEmpty() {
    return this.head === this.tail;
  }
  isFull() {
    return this.tail === this.size;
  }
  toString() {
    let str = 'head -> ';
    for (let i = this.head; i < this.tail; i++) {
      str += this.items[i] + ' ';
    }
    str += '<- tail';
    return str;
  }
}