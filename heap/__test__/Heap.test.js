import Heap from '../Heap.js';

const heap = new Heap();
// const arr = [, 16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
// const arr = [, 7, 5, 19, 8, 4, 1, 20, 13, 16];
// heap.sort(arr);
// console.log(arr);

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
console.log(heap.remove());