import Heap from '../Heap.js';

const heap = new Heap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
console.log(heap.peek());    // => 1
console.log(heap.remove());  // => 1
console.log(heap.peek());    // => 3
console.log(heap.remove());  // => 3
console.log(heap.peek());    // => 5
console.log(heap.remove());  // => 5
console.log(heap.peek());    // => 2
console.log(heap.remove());  // => 2
console.log(heap.peek());    // => 4
console.log(heap.remove());  // => 4
console.log(heap.peek());    // => undefined
console.log(heap.remove());  // => undefined
console.log(heap.isEmpty()); // => true

/* const heap = new Heap();
const arr = [, 16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
heap.sort(arr);
console.log(arr); // => [, 16, 14, 10, 9, 8, 7, 4, 3, 2, 1] */

/* const heap = new Heap((a, b) => b - a);
const arr = [, 7, 5, 19, 8, 4, 1, 20, 13, 16];
heap.sort(arr);
console.log(arr); // => [, 1, 4, 5, 7, 8, 13, 16, 19, 20] */