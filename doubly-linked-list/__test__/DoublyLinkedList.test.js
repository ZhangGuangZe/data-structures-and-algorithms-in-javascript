import DoublyLinkedList from '../DoublyLinkedList2.js';
import Node from '../Node.js';

const doublyLinkedList = new DoublyLinkedList();

console.log('从链表头部插入节点1');
doublyLinkedList.prepend(1);
console.log(doublyLinkedList.toString()); // => head <-> 1 -> tail
console.log('\n从链表头部插入节点0');
doublyLinkedList.prepend(0);
console.log(doublyLinkedList.toString()); // => head <-> 0 <-> 1 <-> tail

console.log('\n从链表尾部插入节点2');
doublyLinkedList.append(2);
console.log(doublyLinkedList.toString()); // => head <-> 0 <-> 1 <-> 2 <-> tail
console.log('\n从链表尾部插入节点3');
doublyLinkedList.append(3);
console.log(doublyLinkedList.toString()); // => head <-> 0 <-> 1 <-> 2 <-> 3 <-> tail

console.log('\n查找值为0的节点所在位置');
console.log(doublyLinkedList.indexOf(0)); // => 0
console.log('\n查找值为3的节点所在位置');
console.log(doublyLinkedList.indexOf(3)); // => 3
console.log('\n查找值为4的节点所在位置');
console.log(doublyLinkedList.indexOf(4)); // => -1

console.log('\n删除头节点');
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString()); // => head <-> 1 <-> 2 <-> 3 <-> tail
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString()); // => head <-> 2 <-> 3 <-> tail
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString()); // => head <-> 3 <-> tail
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString()); // => head <-> tail

console.log('\n在链表尾部插入节点');
doublyLinkedList.append(0);
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
console.log(doublyLinkedList.toString());

console.log('\n删除尾节点');
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());

console.log('\n在任意位置插入节点');
doublyLinkedList.insertAt(0, 3);
doublyLinkedList.insertAt(1, 2);
doublyLinkedList.insertAt(2, 2);
doublyLinkedList.insertAt(3, 3);
doublyLinkedList.insertAt(4, 2);
doublyLinkedList.insertAt(5, 2);
doublyLinkedList.insertAt(6, 3);
console.log(doublyLinkedList.toString()); // => head <-> 3 <-> 2 <-> 2 <-> 3 <-> 2 <-> 2 <-> 3 <-> tail

console.log('\n删除值等于指定值的节点');
doublyLinkedList.removeByVal(3);
console.log(doublyLinkedList.toString()); // => head <-> 2 <-> 2 <-> 2 <-> 2 <-> tail

console.log('\n在指定节点前插入节点');
const newNode = new Node(1);
doublyLinkedList.insertBefore(doublyLinkedList.tail, newNode);
console.log(doublyLinkedList.toString());

console.log('\n删除指定节点');
doublyLinkedList.remove(newNode);
console.log(doublyLinkedList.toString()); // => head <-> 2 <-> 2 <-> 2 <-> 2 <-> tail

