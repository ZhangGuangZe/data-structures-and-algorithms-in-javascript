import LinkedList from '../LinkedList2.js'

const list = new LinkedList();
console.log('从链表头部插入节点1');
list.prepend(1);
console.log(list.toString()); // => head -> 1 -> null
console.log('\n从链表头部插入节点0');
list.prepend(0);
console.log(list.toString()); // => head -> 0 -> 1 -> null

console.log('\n从链表尾部插入节点2');
list.append(2);
console.log(list.toString()); // => head -> 0 -> 1 -> 2 -> null
console.log('\n从链表尾部插入节点3');
list.append(3);
console.log(list.toString()); // => head -> 0 -> 1 -> 2 -> 3 -> null

console.log('\n在下标为2的位置插入节点2');
list.insertAt(2, 2);
console.log(list.toString()); // => head -> 0 -> 1 -> 2 -> 2 -> 3 -> null

console.log('\n获取第一个节点');
console.log(list.get(0)); // => Node {val: 0, next: Node}

console.log('\n移除链表头节点');
list.removeHead();
console.log(list.toString()); // => head -> 1 -> 2 -> 2 -> 3 -> null

console.log('\n获取第一个节点')
console.log(list.get(0)); // => Node {val: 1, next: Node}
console.log('\n获取值为3的节点的位置')
console.log(list.indexOf(3)); // => 3

console.log('\n移除链表尾节点');
list.removeTail(); // => true
console.log(list.toString()); // => head -> 1 -> 2 -> 2 -> null

console.log('\n获取值为3的节点的位置');
console.log(list.indexOf(3)); // => -1

console.log('\n移除值为2的节点');
list.removeByVal(2);
console.log(list.toString()); // => head -> 1 -> null

console.log('\n移除第一个元素');
list.removeAt(0);
console.log(list.toString()); // => head -> null

list.append(3);
list.append(2);
list.append(2);
list.append(3);
list.append(2);
list.append(2);
list.append(3);
console.log('\n删除值为3的节点')
console.log(list.toString()); // => head -> 3 -> 2 -> 2 -> 3 -> 2 -> 2 -> 3 -> null
list.removeByVal(3);
console.log(list.toString()); // => head -> 2 -> 2 -> 2 -> 2 -> null