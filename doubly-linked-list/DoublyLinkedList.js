import { Node } from './Node.js';

export class DoublyLinkedList {
  constructor() {
    this.head = new Node('dummyHead');
    this.tail = new Node('dummyTail');
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  /**
   * 获取当前位置节点
   *
   * @param {*} index 当前位置
   * @memberof DoublyLinkedList
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    if (index + 1 < this.size - index) {
      for (let i = 0; i < index + 1; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      for (let i = 0; i < this.size - index; i++) {
        curr = curr.prev;
      }
    }
    return curr;
  }
  /**
   * 链表头部插入
   *
   * @param {*} data
   * @memberof DoublyLinkedList
   */
  prepend(data) {
    this.insert(0, data);

    // const node = new Node(data);
    // const successor = this.head.next;
    // node.next = this.head.next;
    // this.head.next = node;
    // successor.prev = node;
    // node.prev = this.head;
    // this.size++;

    // const node = new Node(data);
    // if (!this.head) {
    //   this.head = node;
    //   this.tail = node;
    // } else {
    //   node.next = this.head;
    //   this.head.prev = node;
    //   this.head = node;
    // }
  }
  /**
   * 链表尾部插入
   *
   * @param {*} data
   * @memberof DoublyLinkedList
   */
  append(data) {
    this.insert(this.size, data);

    // const node = new Node(data);
    // const precursor = this.tail.prev;
    // node.next = this.tail;
    // precursor.next = node;
    // this.tail.prev = node;
    // node.prev = precursor;
    // this.size++;

    // const node = new Node(data);
    // if (!this.head) {
    //   this.head = node;
    //   this.tail = node;
    // } else {
    //   this.tail.next = node;
    //   node.prev = this.tail;
    //   this.tail = node;
    // }
    // this.count++;
  }
  /**
   * 在任意位置插入节点
   *
   * @param {Number} index 插入位置
   * @param {*} data 节点值
   * @memberof DoublyLinkedList
   */
  insert(index, data) {
    if (index < 0 || index > this.size) return false;
    let precursor;
    let successor;
    if (index === 0) {
      precursor = this.head;
      successor = this.head.next;
    } else if (index === this.size) {
      precursor = this.tail.prev;
      successor = this.tail;
    } else {
      if (index < this.size - index) {
        precursor = this.head;
        for (let i = 0; i < index; i++) {
          precursor = precursor.next;
        }
        successor = precursor.next;
      } else {
        successor = this.tail;
        for (let i = 0; i < this.size - index; i++) {
          successor = successor.prev;
        }
        precursor = successor.prev;
      }
    }
    const node = new Node(data);
    node.next = successor;
    precursor.next = node;
    successor.prev = node;
    node.prev = precursor;
    this.size++;
    return true;
  }
  /**
   * 指定节点前插入节点
   *
   * @param {Node} node1 目标节点
   * @param {Node} node2 插入节点
   * @memberof DoublyLinkedList
   */
  insertBefore(node1, node2) {
    node2.prev = node1.prev;
    node2.next = node1;
    node1.prev.next = node2;
    node1.prev = node2;
    this.size++;
    return true;

    // const precursor = node1.prev;
    // node2.next = node1;
    // precursor.next = node2;
    // node1.prev = node2;
    // node2.prev = precursor;
    // this.tail.prev = node1;
    // this.size++;

    // const node = new Node(data);
    // let isInserted = false;
    // if (target === null) {
    //   if (!this.head) {
    //     this.head = node;
    //     this.tail = node;
    //   } else {
    //     this.tail.next = node;
    //     node.prev = this.tail;
    //     this.tail = node;
    //   }
    //   isInserted = true;
    // } else if (this.head.data === target) {
    //   node.next = this.head;
    //   this.head.prev = node;
    //   this.head = node;
    //   isInserted = true;
    // } else if (this.tail.data === target) {
    //   node.next = this.tail;
    //   this.tail.prev.next = node;
    //   node.prev = this.tail.prev;
    //   this.tail.prev = node;
    //   isInserted = true;
    // } else {
    //   let curr = this.head;
    //   while (curr && curr.data !== target) {
    //     curr = curr.next;
    //   }
    //   if (curr) {
    //     node.next = curr;
    //     curr.prev.next = node;
    //     node.prev = curr.prev;
    //     curr.prev = node;
    //     isInserted = true;
    //   }
    // }
    // return isInserted;
  }
  /**
   * 删除链表头部节点
   *
   * @memberof DoublyLinkedList
   */
  removeHead() {
    this.remove(this.head.next);

    // if (this.size === 0) return;
    // const successor = this.head.next.next;
    // this.head.next = successor;
    // successor.prev = this.head;
    // this.size--;

    // if (!this.head) return false;
    // if (!this.head.next) {
    //   this.head = null;
    //   this.tail = null;
    // } else {
    //   this.head = this.head.next;
    //   this.head.prev = null;
    // }
    // return true;
  }
  /**
   * 删除链表尾部节点
   *
   * @memberof DoublyLinkedList
   */
  removeTail() {
    this.remove(this.tail.prev)

    // if (this.size === 0) return;
    // const precursor = this.tail.prev.prev;
    // precursor.next = this.tail;
    // this.tail.prev = precursor;
    // this.size--;

    // if (!this.tail) return false;
    // if (!this.tail.prev) {
    //   this.head = null;
    //   this.tail = null;
    // } else {
    //   this.tail = this.tail.prev;
    //   this.tail.next = null;
    // }
    // return true;
  }
  /**
   * 删除指定节点
   *
   * @param {*} data
   * @memberof DoublyLinkedList
   */
  remove(node) {
    if (this.size === 0) return false;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
    return true;
    // if (!this.head) return false;
    // let isDeleted = false;
    // let curr = this.head;
    // while (curr) {
    //   if (curr.data === data) {
    //     if (this.head === curr) {
    //       this.head = this.head.next;
    //       if (!this.head) {
    //         this.tail = null;
    //       } else {
    //         this.head.prev = null;
    //       }
    //     } else if (this.tail === curr) {
    //       this.tail = this.tail.prev;
    //       this.tail.next = null;
    //     } else {
    //       curr.prev.next = curr.next;
    //       curr.next.prev = curr.prev;
    //     }
    //     isDeleted = true;
    //   }
    //   curr = curr.next;
    // }
    // return isDeleted;

    // if (this.head.data === data) {
    //   this.head = this.head.next;
    //   if (!this.head) {
    //     this.tail = null;
    //   } else {
    //     this.head.prev = null;
    //   }
    // } else if (this.tail.data === data) {
    //   this.tail = this.tail.prev;
    //   this.tail.next = null;
    // } else {
    //   let curr = this.head;
    //   while (curr) {
    //     if (curr.data === data) {
    //       curr.prev.next = curr.next;
    //       curr.next.prev = curr.prev;
    //     }
    //     else {
    //       curr = curr.next;
    //     }
    //   }
    // }
  }
  
  toString() {
    let curr = this.head.next;
    let str = 'head <=> ';
    while (curr && curr !== this.tail) {
      str += curr.data + ' <=> ';
      curr = curr.next;
    }
    str += 'tail';
    return str;
  }
}