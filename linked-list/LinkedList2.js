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
   * @returns data
   * @memberof LinkedList
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    while (index-- >= 0) {
      curr = curr.next;
    }
    return curr.data;
  }
  /**
   * 查找指定节点
   *
   * @param {*} data
   * @returns index
   * @memberof LinkedList
   */
  find(data) {
    let curr = this.head.next;
    let i = 0;
    while (curr) {
      if (curr.data === data) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }
  findByValue(key) {
    let curr = this.head.next;
    while (curr) {
      if (curr.data.key === key) return curr;
      curr = curr.next;
    }
    return null;
  }
  /**
   * 链表头部添加节点
   *
   * @param {*} data
   * @memberof LinkedList
   */
  prepend(data) {
    this.insert(0, data);
  }
  /**
   * 链表尾部添加节点
   *
   * @param {*} data
   * @memberof LinkedList
   */
  append(data) {
    this.insert(this.size, data);
  }
  /**
   * 任意位置插入
   *
   * @param {*} index
   * @param {*} data
   * @memberof LinkedList
   */
  insert(index, data) {
    if (index < 0 || index > this.size) return false;
    const node = new Node(data);
    let curr = this.head;
    while (index-- > 0) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return true;
  }
  /**
   * 删除链表头节点
   *
   * @memberof LinkedList
   */
  removeHead() {
    this.remove(0);
  }
  /**
   * 删除链表尾节点
   *
   * @returns
   * @memberof LinkedList
   */
  removeTail() {
    this.remove(this.size - 1);
  }
  /**
   * 删除任意位置节点
   *
   * @param {*} index 节点位置
   * @memberof LinkedList
   */
  remove(index) {
    if (index < 0 || index >= this.size) return false;
    let curr = this.head;
    while (index-- > 0) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
    return true;
  }
  /**
   * 删除值等于指定值节点
   *
   * @param {*} data
   * @memberof LinkedList
   */
  removeVal(data) {
    let isDeleted = false;
    let curr = this.head;
    while (curr.next) {
      if (curr.next.data === data) {
        curr.next = curr.next.next;
        this.size--;
        isDeleted = true;
      } else {
        curr = curr.next;
      }
    }
    return isDeleted;
  }
  toString() {
    let curr = this.head.next;
    let str = 'head -> ';
    while (curr) {
      str += curr.data + ' -> ';
      curr = curr.next;
    }
    str += 'null';
    return str;
  }
}