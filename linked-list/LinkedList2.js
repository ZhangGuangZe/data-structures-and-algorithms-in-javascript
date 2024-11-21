import Node from './Node.js'

export default class LinkedList {
  constructor() {
    this.head = new Node('dummy');
    this.size = 0;
  }

  /**
   * 查找任意位置的节点
   *
   * @param {*} index
   * @returns Node
   * @memberof LinkedList
   */
  get(index) {
    if (index < 0 || index >= this.size) return null;

    let curNode = this.head.next;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }

    return curNode;
  }

  /**
   * 查找值等于指定值的节点
   *
   * @param {*} val
   * @returns index
   * @memberof LinkedList
   */
  indexOf(val) {
    let i = 0;
    let curNode = this.head.next;

    while (curNode) {
      if (curNode.val === val) return i;
      curNode = curNode.next;
      i++;
    }

    return -1;
  }

  /**
   * 从链表头部插入节点
   *
   * @param {*} val
   * @memberof LinkedList
   */
  prepend(val) {
    this.insertAt(0, val);
  }

  /**
   * 从链表尾部插入节点
   *
   * @param {*} val
   * @memberof LinkedList
   */
  append(val) {
    this.insertAt(this.size, val);
  }

  /**
   * 任意位置插入节点
   *
   * @param {*} index
   * @param {*} val
   * @memberof LinkedList
   */
  insertAt(index, val) {
    if (index < 0 || index > this.size) return false;

    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }

    const newNode = new Node(val);
    newNode.next = curNode.next;
    curNode.next = newNode;
    this.size++;

    return true;
  }

  /**
   * 删除链表头节点
   *
   * @memberof LinkedList
   */
  removeHead() {
    return this.removeAt(0);
  }

  /**
   * 删除链表尾节点
   *
   * @memberof LinkedList
   */
  removeTail() {
    return this.removeAt(this.size - 1);
  }

  /**
   * 删除任意位置节点
   *
   * @param {*} index 节点位置
   * @memberof LinkedList
   */
  removeAt(index) {
    if (index < 0 || index >= this.size) return false;

    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }
    curNode.next = curNode.next.next;
    this.size--;

    return true;
  }

  /**
   * 删除值等于指定值节点
   *
   * @param {*} val
   * @memberof LinkedList
   */
  removeByVal(val) {
    if (this.size === 0) return false;

    let isDeleted = false;
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.val === val) {
        curNode.next = curNode.next.next;
        this.size--;
        isDeleted = true;
      } else {
        curNode = curNode.next;
      }
    }

    return isDeleted;
  }

  toString() {
    let curNode = this.head.next;
    let str = 'head -> ';
    while (curNode) {
      str += curNode.val + ' -> ';
      curNode = curNode.next;
    }
    str += 'null';
    return str;
  }
}