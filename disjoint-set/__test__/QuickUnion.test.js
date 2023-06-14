import QuickUnion from '../QuickUnion.js'

const qu = new QuickUnion(6);
console.log('初始化');
console.log(qu.toString()); // => 0 1 2 3 4 5
console.log('当前集合大小：', qu.size); // => 6

console.log('\n将集合 1 与 0 合并');
qu.union(1, 0);
console.log(qu.toString()); // => 0 0 2 3 4 5

console.log('将集合 2 与 0 合并');
qu.union(2, 0);
console.log(qu.toString()); // => 0 0 0 3 4 5

console.log('将集合 4 与 3 合并');
qu.union(4, 3);
console.log(qu.toString()); // => 0 0 0 3 3 5

console.log('将集合 5 与 4 合并');
qu.union(5, 4);
console.log(qu.toString()); // => 0 0 0 3 3 3

console.log('当前集合大小：', qu.size); // => 2

console.log('\n元素 0 和 5 是否在同一集合中：', qu.isConnected(0, 5)); // => false

console.log('\n元素 0 所在集合：', qu.find(0)); // => 0
console.log('元素 5 所在集合：', qu.find(5)); // => 3

console.log('\n将集合 0 与 5 合并');
qu.union(0, 5);
console.log(qu.toString()); // => 3 0 0 3 3 3

console.log('\n元素 1 所在集合：', qu.find(1)); // => 3
console.log('元素 2 所在集合：', qu.find(2)); // => 3

console.log('\n元素 0 和 5 是否在同一集合中：', qu.isConnected(0, 5)); // => true

console.log('\n当前集合大小：', qu.size); // => 1