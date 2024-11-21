import Node from './Node.js';

export default class DoublyLinkedList {
  constructor() {
    this.head = new Node('dummyHead');
    this.tail = new Node('dummyTail');
    this.head.next = this.tail;
    this.tail.prev = this.head;
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
      curNode = this.head.next;
      for (let i = 0; i < index; i++) {
        curNode = curNode.next;
      }
    } else {
      curNode = this.tail.prev;
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
    let curNode = this.head.next;

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

    let precursor;
    let successor;
    if (index < this.size / 2) {
      precursor = this.head;
      for (let i = 0; i < index; i++) {
        precursor = precursor.next;
      }
      successor = precursor.next;
    } else {
      successor = this.tail;
      for (let i = this.size; i > index; i--) {
        successor = successor.prev;
      }
      precursor = successor.prev;
    }

    const newNode = new Node(val);
    newNode.next = successor;
    precursor.next = newNode;
    successor.prev = newNode;
    newNode.prev = precursor;
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
    newNode.prev = targetNode.prev;
    newNode.next = targetNode;
    targetNode.prev.next = newNode;
    targetNode.prev = newNode;
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

    let precursor;
    let successor;
    if (index < this.size / 2) {
      precursor = this.head;
      for (let i = 0; i < index; i++) {
        precursor = precursor.next;
      }
      successor = precursor.next.next;
    } else {
      successor = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        successor = successor.prev;
      }
      precursor = successor.prev.prev;
    }
    precursor.next = successor;
    successor.prev = precursor;
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
    let curNode = this.head.next;
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
   * @param {*} targetNode
   * @memberof DoublyLinkedList
   */
  remove(targetNode) {
    if (this.size === 0) return false;

    targetNode.prev.next = targetNode.next;
    targetNode.next.prev = targetNode.prev;
    this.size--;

    return true;
  }

  toString() {
    let curr = this.head.next;
    let str = 'head <-> ';
    while (curr && curr !== this.tail) {
      str += curr.val + ' <-> ';
      curr = curr.next;
    }
    str += 'tail';
    return str;
  }
}