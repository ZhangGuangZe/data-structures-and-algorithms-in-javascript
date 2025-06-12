import Node from '../linked-list/Node.js';
export default class LinkedListBasedStack {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   * 获取栈中元素数量
   */
  get length() {
    return this.size;
  }

  /**
   * 压入数据
   * @param {*} val 数据
   */
  push(val) {
    const newNode = new Node(val);
    if (this.head) newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  /**
   * 弹出元素
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) return;
    let val = this.peek();
    this.head = this.head.next;
    this.size--;
    return val;
  }

  /**
   * 获取栈顶元素
   * @returns {*}
   */
  peek() {
    return this.head?.val;
  }

  /**
   * 栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
}