import LinkedListBasedQueue from '../LinkedListBasedQueue.js';

const queue = new LinkedListBasedQueue(3);
queue.enqueue(1);
console.log('插入元素1', queue.toString()); // => [1]
console.log('获取队列元素数量', queue.length); // => 1
queue.enqueue(2);
console.log('插入元素2', queue.toString()); // => [1, 2]
console.log('获取队列元素数量', queue.length); // => 2
queue.enqueue(3);
console.log('插入元素3', queue.toString()); // => [1, 2, 3]
console.log('队列是否已满', queue.isFull()); // => true
queue.enqueue(4);
console.log('插入元素4', queue.toString()); // => [1, 2, 3]
queue.dequeue();
queue.dequeue();
console.log(queue.toString()); // => [3]
queue.dequeue();
console.log(queue.toString()); // => []
console.log('队列是否为空', queue.isEmpty()); // => true
console.log('获取队列元素数量', queue.length); // => 0
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.toString()); // => [4, 5, 6]
console.log('获取队列元素数量', queue.length); // => 3