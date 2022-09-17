export default class ArrayCircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.size = capacity;
    this.head = 0;
    this.tail = 0;
  }
  enqueue(data) {
    if (this.isFull()) return;
    this.items[this.tail] = data;
    this.tail = (this.tail + 1) % this.size;
  }
  dequeue() {
    if (this.isEmpty()) return;
    const val = this.items[this.head];
    this.head = (this.head + 1) % this.size;
    return val;
  }
  isEmpty() {
    return this.head === this.tail;
  }
  isFull() {
    return this.head === (this.tail + 1) % this.size;
  }
}