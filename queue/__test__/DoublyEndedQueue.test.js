import Deque from '../DoublyEndedQueue.js';
const deque = new Deque();
deque.push(1);
deque.push(2);
deque.pop();
deque.pop();
deque.pop();

deque.unshift(2);
deque.unshift(1);
deque.shift();
deque.shift();
deque.shift();

deque.unshift(2);
deque.push(3);
console.log(deque.peekFirst());
console.log(deque.peekLast());
deque.unshift(1);
deque.push(4);
console.log(deque.peekFirst());
console.log(deque.peekLast());
deque.shift();
deque.pop();
console.log(deque.peekFirst());
console.log(deque.peekLast());
deque.shift();
deque.pop();