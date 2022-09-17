export class DynamicArrayStack {
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
    if (this.top === this.max) {
      this.max *= 2;
      const temp = new Array(this.max);
      for (let i = 0; i < this.top; i++) {
        temp[i] = this.items[i];
      }
      this.items = temp;
    }
    this.items[this.top++] = data;
  }
  /**
   * 弹出元素
   *
   * @returns
   */
  pop() {
    if (this.isEmpty()) throw new Error('stack underflow!');
    this.top--;
    const item = this.items[this.top];
    delete this.items[this.top];
    if (this.top > 0 && this.top === Math.floor(this.items.length / 4)) {
      this.items.length = Math.floor(this.items.length / 2);
    }
    return item;
  }
}