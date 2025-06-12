import ArrayBasedQueue from '../ArrayBasedQueue.js';
  
const queue = new ArrayBasedQueue(2);
queue.enqueue(1);
console.log('获取队列元素数量', queue.length); // => 1
console.log(queue.toString()); // => [1]
queue.enqueue(2);
console.log(queue.toString()); // => [1, 2]
console.log('获取队列元素数量', queue.length); // => 2
console.log('队列是否已满', queue.isFull()); // => true
queue.enqueue(3);
console.log(queue.toString()); // => [1, 2]
queue.dequeue();
console.log(queue.toString()); // => [2]
queue.dequeue();
console.log(queue.toString()); // => []
console.log('队列是否为空', queue.isEmpty()); // => true
console.log('获取队列元素数量', queue.length); // => 0