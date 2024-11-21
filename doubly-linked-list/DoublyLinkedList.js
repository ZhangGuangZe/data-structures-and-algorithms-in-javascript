import Node from './Node.js';

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 获取链表指定位置节点
   *
   * @param {*} index 节点位置
   * @returns Node
   * @memberof DoublyLinkedList
   */
  get(index) {
    if (index < 0 || index >= this.size) return null;

    let curNode;
    if (index < this.size / 2) {
      curNode = this.head;
      for (let i = 0; i < index; i++) {
        curNode = curNode.next;
      }
    } else {
      curNode = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        curNode = curNode.prev;
      }
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
   * 链表头部插入
   *
   * @param {*} val
   * @memberof DoublyLinkedList
   */
  prepend(val) {
    this.insertAt(0, val);
  }

  /**
   * 链表尾部插入
   *
   * @param {*} val
   * @memberof DoublyLinkedList
   */
  append(val) {
    this.insertAt(this.size, val);
  }

  /**
   * 在任意位置插入节点
   *
   * @param {Number} index 插入位置
   * @param {*} val 节点值
   * @memberof DoublyLinkedList
   */
  insertAt(index, val) {
    if (index < 0 || index > this.size) return false;

    const newNode = new Node(val);
    if (index === 0) {
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.size) {
      const newNode = new Node(val);
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    } else {
      const curNode = this.get(index);
      newNode.next = curNode;
      curNode.prev.next = newNode;
      newNode.prev = curNode.prev;
      curNode.prev = newNode;
    }
    this.size++;

    return true;
  }

  /**
   * 指定节点前插入节点
   *
   * @param {Node} targetNode 目标节点
   * @param {Node} newNode 插入节点
   * @memberof DoublyLinkedList
   */
  insertBefore(targetNode, newNode) {
    if (!targetNode) return false;

    if (targetNode === this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      newNode.next = targetNode;
      targetNode.prev.next = newNode;
      newNode.prev = targetNode.prev;
      targetNode.prev = newNode;
    }
    this.size++;

    return true;
  }

  /**
   * 删除链表头部节点
   *
   * @memberof DoublyLinkedList
   */
  removeHead() {
    this.removeAt(0);
  }

  /**
   * 删除链表尾部节点
   *
   * @memberof DoublyLinkedList
   */
  removeTail() {
    this.removeAt(this.size - 1);
  }

  /**
   * 删除任意位置节点
   *
   * @param {Number} index 删除位置
   * @memberof DoublyLinkedList
   */
  removeAt(index) {
    if (index < 0 || index >= this.size) return false;

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    } else {
      const curNode = this.get(index);
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
    }
    this.size--;

    return true;
  }

  /**
   * 删除值等于指定值的节点
   *
   * @param {*} val 节点值
   * @memberof DoublyLinkedList
   */
  removeByVal(val) {
    if (this.size === 0) return false;

    let isDeleted = false;
    while (this.head && this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      isDeleted = true;
      if (this.size === 0) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    }
    while (this.tail && this.tail.val === val) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
      isDeleted = true;
      if (this.size === 0) {
        this.head = null;
      } else {
        this.tail.next = null;
      }
    }

    let curNode = this.head;
    while (curNode) {
      if (curNode.val === val) {
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
        curNode = curNode.next;
        this.size--;
        isDeleted = true;
      } else {
        curNode = curNode.next;
      }
    }

    return isDeleted;
  }

  /**
   * 删除指定节点
   *
   * @param {*} targetNode 目标节点
   * @memberof DoublyLinkedList
   */
  remove(targetNode) {
    if (!targetNode || this.size === 0) return false;

    if (targetNode === this.head) {
      this.head = this.head.next;
      if (this.size === 0) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (targetNode === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      targetNode.prev.next = targetNode.next;
      targetNode.next.prev = targetNode.prev;
    }
    this.size--;

    return true;
  }

  toString() {
    let curNode = this.head;
    let str = 'head <-> ';
    while (curNode) {
      str += curNode.val + ' <-> ';
      curNode = curNode.next;
    }
    str += 'tail';
    return str;
  }
}