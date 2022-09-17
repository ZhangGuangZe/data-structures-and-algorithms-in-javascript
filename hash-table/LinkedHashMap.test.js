import LinkedHashMap from './LinkedHashMap.js';

const hashTable = new LinkedHashMap();

// console.log(hashTable.hash(null));
// console.log(hashTable.hash());
// console.log(hashTable.hash(undefined));
// console.log(hashTable.hash(0));
// console.log(hashTable.hash('cat'));
// console.log(hashTable.hash('dog'));
// console.log(hashTable.hash(123));
// console.log(hashTable.hash('123'));

// console.log(hashTable.get('dog'));
// console.log(hashTable.set('dog', 1));
// console.log(hashTable.set('cat', 1));
// console.log(hashTable.get('cat'));
// console.log(hashTable.delete('cat'));
// console.log(hashTable.get('cat'));
// console.log(hashTable.get('dog'));

console.log(hashTable.set(1, 1));
console.log(hashTable.set(2, 2));
console.log(hashTable.get(1));
console.log(hashTable.get(3));
console.log(hashTable.set(2, 1));
console.log(hashTable.get(2));
console.log(hashTable.delete(2));
console.log(hashTable.get(2));