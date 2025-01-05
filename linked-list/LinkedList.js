import Node from './Node.js'

export default class LinkedList {
  constructor() {
    this.head = null;
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

    let curNode = this.head;
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
    let curNode = this.head;

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

    /* const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++; */
  }

  /**
   * 从链表尾部插入节点
   *
   * @param {*} val
   * @memberof LinkedList
   */
  append(val) {
    this.insertAt(this.size, val);

    /* const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = newNode;
    }
    this.size++; */
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

    const newNode = new Node(val);
    if (index === 0) { // 链表头部插入
      newNode.next = this.head;
      this.head = newNode;
    } else { // 其他位置插入
      const curNode = this.get(index - 1);
      newNode.next = curNode.next;
      curNode.next = newNode;
    }
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

    /* if (!this.head) return false;
    this.head = this.head.next;
    this.size--;
    return true; */
  }

  /**
   * 删除链表尾节点
   *
   * @memberof LinkedList
   */
  removeTail() {
    return this.removeAt(this.size - 1);

    /* if (!this.head) return false; // 空链表
    if (!this.head.next) { // 链表只有一个节点
      this.head = null;
    } else { // 链表有很多节点
      let curNode = this.head;
      while (curNode.next) {
        if (curNode.next.next) {
          curNode = curNode.next;
        } else {
          curNode.next = null;
        }
      }
    }
    this.size--;
    return true; */
  }

  /**
   * 删除任意位置节点
   *
   * @param {*} index
   * @memberof LinkedList
   */
  removeAt(index) {
    if (index < 0 || index >= this.size) return false;

    if (index === 0) { // 删除头节点
      this.head = this.head.next;
    } else { // 删除其他节点
      const curNode = this.get(index - 1);
      curNode.next = curNode.next.next;
    }
    this.size--;

    return true;
  }

  /**
   * 删除值等于指定值的节点
   *
   * @param {*} val
   * @memberof LinkedList
   */
  removeByVal(val) {
    if (this.size === 0) return false;

    let isDeleted = false;
    // 删除头节点
    while (this.head && this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      isDeleted = true;
    }

    // 删除其他节点
    let curNode = this.head;
    while (curNode && curNode.next) {
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
    let curNode = this.head;
    let str = 'head -> ';
    while (curNode) {
      str += curNode.val + ' -> ';
      curNode = curNode.next;
    }
    str += 'null';
    return str;
  }
}