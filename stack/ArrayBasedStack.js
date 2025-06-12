export default class ArrayBasedStack {
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
    if (this.isFull()) return;
    this.items[this.top++] = val;
  }

  /**
   * 弹出元素
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) return;
    return this.items[--this.top];
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