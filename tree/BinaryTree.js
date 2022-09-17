import TreeNode from './TreeNode.js';

export default class BinaryTree {
  constructor() {
    this.root = new TreeNode(1);
  }
  createTree() {
    /*
            1
          /   \
         2     3
        / \   /  \
       4   5 6    7
    */
    this.root.left = new TreeNode(2);
    this.root.right = new TreeNode(3);
    this.root.left.left = new TreeNode(4);
    this.root.left.right = new TreeNode(5);
    this.root.right.left = new TreeNode(6);
    this.root.right.right = new TreeNode(7);
  }
  preorder() {
    this.preorderTraversal(this.root);
  }
  preorderTraversal(node) {
    if (!node) return;
    console.log(node.data);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
  }
  inorder() {
    this.inorderTraversal(this.root);
  }
  inorderTraversal(node) {
    if (!node) return;
    inorderTraversal(node.left);
    console.log(node.node);
    inorderTraversal(node.right);
  }
  postorder() {
    this.postorderTraversal(this.root);
  }
  postorderTraversal(node) {
    if (!node) return;
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.node);
  }
  maxDepth() {

  }
  invertTree() {

  }
}