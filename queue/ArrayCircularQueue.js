export default class ArrayCircularQueue {
  constructor(capacity = 5) {
    this.items = new Array(capacity + 1);
    this.size = capacity + 1;
    this.front = 0;
    this.rear = 0;
  }

  /**
   * 获取队列元素数量
   * @returns {number}
   */
  get length() {
    return (this.rear - this.front + this.size) % this.size;
  }

  /**
   * 入队操作
   * @param {*} val 
   */
  enqueue(val) {
    if (this.isFull()) return;
    this.items[this.rear] = val;
    this.rear = (this.rear + 1) % this.size;
  }

  /**
   * 出队操作
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) return;
    const val = this.items[this.front];
    this.front = (this.front + 1) % this.size;
    return val;
  }

  /**
   * 判断队列是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.front === this.rear;
  }

  /**
   * 判断队列是否已满
   * @returns {number}
   */
  isFull() {
    return this.front === (this.rear + 1) % this.size;
  }

  toString() {
    const arr = [];
    for (let i = 0; i < (this.rear - this.front + this.size) % this.size; i++) {
      arr.push(this.items[(this.front + i) % this.size]);
    }
    return `[${arr.join(", ")}]`;
  }
}