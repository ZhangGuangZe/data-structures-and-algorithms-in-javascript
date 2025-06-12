import Node from '../linked-list/Node.js';

export default class LinkedListCircularQueue {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
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
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.tail.next = this.head; // 保持循环
    this.size++;
  }

  /**
   * 出队操作
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) return;

    const val = this.head.val;
    this.head = this.head.next;
    this.size--;

    return val;
  }

  /**
   * 队列是否为空
   * @returns {boolean}
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
    let len = this.size;
    while (len-- > 0) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return `[${arr.join(", ")}]`;
  }
}