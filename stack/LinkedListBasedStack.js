import { Node } from '../linked-list/Node.js';
export class LinkedListBasedStack {
  constructor() {
    this.top = 0;
    this.head = null;
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
    return this.head.data;
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
    const newNode = new Node(data);
    if (this.head) newNode.next = this.head;
    this.head = newNode;
    this.top++;
  }
  /**
   * 弹出元素
   *
   * @returns
   */
  pop() {
    if (this.isEmpty()) return;
    let val = this.peek();
    this.head = this.head.next;
    this.top--;
    return val;
  }
}