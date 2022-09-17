import ThreadLocalMap from './ThreadLocalMap.js';

const hashTable = new ThreadLocalMap();

// console.log(hashTable.get('dog'));
// console.log(hashTable.set('dog', 1));
// console.log(hashTable.set('cat', 1));
// console.log(hashTable.set('cat', 2));
// console.log(hashTable.delete('cat'));
// console.log(hashTable.get('cat'));

console.log(hashTable.set(1, 1));
console.log(hashTable.set(2, 2));
console.log(hashTable.get(1));
console.log(hashTable.get(3));
console.log(hashTable.set(2, 1));
console.log(hashTable.get(2));
console.log(hashTable.delete(2));
console.log(hashTable.get(2));