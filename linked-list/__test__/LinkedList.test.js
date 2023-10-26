import LinkedList from '../LinkedList2.js'

const list = new LinkedList();
list.prepend(1);
console.log(list.toString());
list.prepend(0);
console.log(list.toString());

list.append(2);
console.log(list.toString());
list.append(3);
console.log(list.toString());

console.log(list.insert(2, 2));
console.log(list.toString());

console.log(list.get(0));
console.log(list.removeHead());
console.log(list.toString());
console.log(list.get(0));
console.log(list.find(3));
console.log(list.removeTail());
console.log(list.find(3));
console.log(list.toString());
console.log(list.remove(0));
console.log(list.toString());
console.log(list.removeVal(2));
console.log(list.toString());

console.log(list.insert(2, 2));
console.log(list.removeHead());
console.log(list.removeTail());
console.log(list.remove(0));
console.log(list.removeVal(2));

list.append(3);
list.append(2);
list.append(2);
list.append(3);
list.append(2);
list.append(2);
list.append(3);
console.log(list.removeVal(3));
console.log(list.toString());