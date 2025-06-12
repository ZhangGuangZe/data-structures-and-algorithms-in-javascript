import LinkedListCircularQueue from '../LinkedListCircularQueue.js';

const queue = new LinkedListCircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log('队列长度', queue.length); // => 5
console.log('队列是否已满:', queue.isFull()); // => true
console.log(queue.toString()); // => [1, 2, 3, 4, 5]
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.toString()); // => []
console.log('列是否为空:', queue.isEmpty()); // => true

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
console.log(queue.toString()); // => [5, 6, 7, 8, 9]