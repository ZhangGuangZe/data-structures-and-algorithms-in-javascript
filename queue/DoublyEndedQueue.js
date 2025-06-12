import Node from '../doubly-linked-list/Node.js'

export default class DoublyEndedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 获取队列元素数量
   * @returns {number}
   */
  get length() {
    return this.size;
  }

  /**
   * 队列后端入队
   * @param {*} val 
   */
  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * 队列前端入队
   * @param {*} val 
   */
  unshift(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = this.head.prev;
    }
    this.size++;
  }

  /**
   * 队列后端出队
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) return;
  
    const val = this.tail.val;
    if (this.head === this.tail) { // 链表只有一个节点
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return val;
  }

  /**
   * 队列前端出队
   * @returns {*}
   */
  shift() {
    if (this.isEmpty()) return;
  
    const val = this.head.val;
    if (this.head === this.tail) { // 链表只有一个节点
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
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
   * 获取队首元素
   * @returns {*}
   */
  peekFirst() {
    return this.head?.val;
  }

  /**
   * 获取队尾元素
   * @returns {*}
   */
  peekLast() {
    return this.tail?.val;
  }
}