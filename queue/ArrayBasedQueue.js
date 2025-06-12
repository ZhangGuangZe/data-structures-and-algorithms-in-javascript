export default class ArrayBasedQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.size = capacity;
    this.front = 0;
    this.rear = 0;
  }

  /**
   * 获取队列
   * @returns {number}
   */
  get length() {
    return this.rear - this.front;
  }

  /**
   * 入队操作
   * @param {*} val 
   */
  enqueue(val) {
    if (this.isFull()) return;
    this.items[this.rear++] = val;
  }

  /**
   * 出队操作
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) return;
    return this.items[this.front++];
  }

  /**
   * 队列是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.front === this.rear;
  }

  /**
   * 队列是否已满
   * @returns {boolean}
   */
  isFull() {
    return this.rear === this.size;
  }

  toString() {
    const arr = [];
    for (let i = this.front; i < this.rear; i++) {
      arr.push(this.items[i]);
    }
    return `[${arr.join(", ")}]`;
  }
}