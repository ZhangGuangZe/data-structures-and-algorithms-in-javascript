export default class DynamicArrayStack {
  constructor(capacity) {
    this.top = 0;
    this.items = new Array(capacity);
    this.size = capacity;
  }

  /**
   * 获取栈中元素数量
   * @returns {number}
   */
  get length() {
    return this.top;
  }

  /**
   * 压入数据
   * @param {*} val 数据
   */
  push(val) {
    if (this.isFull()) {
      this.size *= 2;
      const temp = new Array(this.size);
      for (let i = 0; i < this.top; i++) {
        temp[i] = this.items[i];
      }
      this.items = temp;
    }
    this.items[this.top++] = val;
  }

  /**
   * 弹出元素
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) return; // throw new Error('stack underflow!');
    this.top--;
    const item = this.items[this.top];
    delete this.items[this.top];
    if (this.top > 0 && this.top === Math.floor(this.items.length / 4)) {
      this.items.length = Math.floor(this.items.length / 2);
    }
    return item;
  }

  /**
   * 获取栈顶元素
   * @returns {*}
   */
  peek() {
    return this.items[this.top - 1];
  }

  /**
   * 栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.top === 0;
  }

  /**
   * 栈是否已满
   * @returns {boolean}
   */
  isFull() {
    return this.top === this.size;
  }
}