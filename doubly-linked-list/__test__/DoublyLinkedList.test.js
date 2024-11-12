import DoublyLinkedList from '../DoublyLinkedList2.js';
import Node from '../Node.js';

const doublyLinkedList = new DoublyLinkedList();

console.log('测试链表头部插入');
doublyLinkedList.prepend(3);
doublyLinkedList.prepend(2);
doublyLinkedList.prepend(1);
doublyLinkedList.prepend(0);
console.log(doublyLinkedList.toString());

console.log('\n测试通过索引查找节点');
console.log(doublyLinkedList.get(0));
console.log(doublyLinkedList.get(3));
console.log(doublyLinkedList.get(4));

console.log('\n测试通过值查找节点');
console.log(doublyLinkedList.indexOf(0));
console.log(doublyLinkedList.indexOf(3));
console.log(doublyLinkedList.indexOf(4));

console.log('\n测试删除头节点');
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeHead();
console.log(doublyLinkedList.toString());

console.log('\n测试链表尾部插入');
doublyLinkedList.append(0);
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
console.log(doublyLinkedList.toString());

console.log('\n测试删除尾节点');
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());
doublyLinkedList.removeTail();
console.log(doublyLinkedList.toString());

console.log('\n测试在任意位置插入节点');
doublyLinkedList.insertAt(0, 0);
doublyLinkedList.insertAt(1, 1);
doublyLinkedList.insertAt(2, 1);
doublyLinkedList.insertAt(3, 2);
console.log(doublyLinkedList.toString());

console.log('\n测试删除值等于指定值的节点');
doublyLinkedList.removeByVal(1);
console.log(doublyLinkedList.toString());

console.log('\n测试在指定节点前插入节点');
const newNode = new Node(1);
doublyLinkedList.insertBefore(doublyLinkedList.tail, newNode);
console.log(doublyLinkedList.toString());

console.log('\n测试删除指定节点');
doublyLinkedList.remove(newNode);
console.log(doublyLinkedList.toString());

