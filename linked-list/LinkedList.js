import { Node } from './Node.js'

export class LinkedList {
  constructor() {
    this.head = null;
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
    while (index-- > 0) {
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
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.data === data) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }
  /**
   * 链表头部添加节点
   *
   * @param {*} data
   * @memberof LinkedList
   */
  prepend(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  /**
   * 链表尾部添加节点
   *
   * @param {*} data
   * @memberof LinkedList
   */
  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
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
    if (index === 0) { // 链表头部插入
      node.next = curr;
      this.head = node;
    } else { // 其他位置插入
      let prev;
      while (index-- > 0) {
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
    return true;
  }
  
  /**
   * 指定节点后插入节点
   *
   * @param {*} target
   * @param {*} data
   * @memberof LinkedList
   */
  /*insert(target, data) {
    const node = new Node(data);
    if (target === null) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      while (curr && curr.data !== target) {
        curr = curr.next;
      }
      if (curr) {
        node.next = curr.next;
        curr.next = node;
      }
    }
  }*/
  /**
   * 删除链表头节点
   *
   * @memberof LinkedList
   */
   removeHead() {
    if (!this.head) return false;
    this.head = this.head.next;
    this.size--;
    return true;
  }
  /**
   * 删除链表尾节点
   *
   * @returns
   * @memberof LinkedList
   */
  removeTail() {
    if (!this.head) return false; // 空链表
    if (!this.head.next) { // 链表只有一个节点
      this.head = null;
    } else { // 链表有很多节点
      let curr = this.head;
      while (curr.next) {
        if (curr.next.next) {
          curr = curr.next;
        } else {
          curr.next = null;
        }
      }
    }
    this.size--;
    return true;
  }
  /**
   * 删除指定节点
   *
   * @param {*} data
   * @memberof LinkedList
   */
  remove(data) {
    if (!this.head) return false;
    let isDeleted = false;
    // 删除头节点
    while (this.head && this.head.data === data) {
      isDeleted = true;
      this.head = this.head.next;
      this.size--;
    }
    // 删除其他节点
    let curr = this.head;
    if (curr) {
      while (curr.next) {
        if (curr.next.data === data) {
          isDeleted = true;
          curr.next = curr.next.next;
          this.size--;
        } else {
          curr = curr.next;
        }
      }
    }
    return isDeleted;
  }
  toString() {
    let curr = this.head;
    let str = 'head -> ';
    while (curr) {
      str += curr.data + ' -> ';
      curr = curr.next;
    }
    str += 'null';
    return str;
  }
}