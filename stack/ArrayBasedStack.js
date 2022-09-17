export class ArrayBasedStack {
  constructor(cap = 2) {
    this.top = 0; // 栈中元素数量
    this.items = new Array(cap); // 存储栈元素的数组
    this.max = cap; // 栈的容量
  }
  /**
   * 获取栈中元素数量
   */
  size() {
    return this.top;
  }
  /**
   * 获取栈顶元素
   */
  peek() {
    return this.items[this.top - 1];
  }
  isFull() {
    return this.top === this.max;
  }
  /**
   * 判断栈是否为空
   */
  isEmpty() {
    return this.top === 0;
  }
  /**
   * 压入数据
   *
   * @param {*} data 数据
   */
  push(data) {
    if (this.isFull()) return;
    this.items[this.top++] = data;
  }
  /**
   * 弹出元素
   *
   * @returns
   */
  pop() {
    if (this.isEmpty()) return;
    return this.items[--this.top];
  }
}