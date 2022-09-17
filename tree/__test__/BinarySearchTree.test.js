import TreeNode from '../TreeNode.js';
import BinarySearchTree from '../BinarySearchTree.js';

const tree = new BinarySearchTree();
// tree.insert(12);
// tree.insert(5);
// tree.insert(18);
// tree.insert(2);
// tree.insert(9);
// tree.insert(15);
// tree.insert(19);
// tree.insert(13);
// tree.insert(17);
// console.log(tree.inorder());

tree.insert(15);
tree.insert(6);
tree.insert(18);
tree.insert(3);
tree.insert(7);
tree.insert(17);
tree.insert(20);
tree.insert(2);
tree.insert(4);
tree.insert(13);
tree.insert(9);
console.log(tree.inorder());

// const node = tree.search(13);
// console.log(tree.predecessor(node));
// console.log(tree.successor(node));

tree.delete(9);
console.log(tree.inorder());
tree.delete(7);
console.log(tree.inorder());
tree.delete(15);
console.log(tree.inorder());
