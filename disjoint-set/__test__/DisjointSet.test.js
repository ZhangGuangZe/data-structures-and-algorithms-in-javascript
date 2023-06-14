import DisjointSet from '../DisjointSet.js'

const ds = new DisjointSet(6);
console.log('初始化');
console.log(ds.toString()); // => 0 1 2 3 4 5
console.log('当前集合大小：', ds.size); // => 6

console.log('\n将集合 0 与 1 合并');
ds.union(0, 1);
console.log(ds.toString()); // => 0 0 2 3 4 5

console.log('将集合 2 与 3 合并');
ds.union(2, 3);
console.log(ds.toString()); // => 0 0 2 2 4 5

console.log('将集合 4 与 5 合并');
ds.union(4, 5);
console.log(ds.toString()); // => 0 0 2 2 4 4

console.log('将集合 0 与 2 合并');
ds.union(0, 2);
console.log(ds.toString()); // => 0 0 0 2 4 4

console.log('将集合 0 与 4 合并');
ds.union(0, 4);
console.log(ds.toString()); // => 0 0 0 2 0 4