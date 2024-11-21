import CircularLinkedList from '../CircularLinkedList.js';

function lastRemaining(n, m) {
  const list = new CircularLinkedList();
  for (let i = 0; i < n; i++) {
    list.append(i);
  }

  let curNode = list.head.next;
  while (list.size > 1) {
    for (let i = 1; i < m; i++) {
      curNode = curNode.next;
      if (curNode === list.head) curNode = curNode.next; // 跳过哨兵
    }
    curNode = list.remove(curNode);
    if (curNode === list.head) curNode = curNode.next; // 跳过哨兵
  }

  return list.head.next.val; // 返回最后一个节点的值
};

console.log(lastRemaining(1, 1)); // => 0
console.log(lastRemaining(5, 3)); // => 3
console.log(lastRemaining(10, 17)); // => 2