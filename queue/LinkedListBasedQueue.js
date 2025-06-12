import Node from '../linked-list/Node.js';

export default class LinkedListBasedQueue {
  constructor(capacity) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.capacity = capacity;
  }

  /**
   * 获取队列元素数量
   * @returns {number}
   */
  get length() {
    return this.size;
  }

  /**
   * 入队操作
   * @param {*} val
   */
  enqueue(val) {
    if (this.isFull()) return;

    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  /**
   * 出队操作
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) return; //  throw new Error('queue underflow!');

    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return val;
  }

  /**
   * 判断队列是否为空
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 判断队列是否已满
   * @returns {boolean}
   */
  isFull() {
    return this.size === this.capacity;
  }

  toString() {
    let curr = this.head;
    const arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return `[${arr.join(", ")}]`;
  }
}