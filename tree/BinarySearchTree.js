import TreeNode from './TreeNode.js';

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  search(data) {
    return this.searchNode(this.root, data);
  }
  searchNode(node, data) {
    /* if (!node || data === node.data) return node;
    return this.searchNode(data < node.data ? node.left : node.right, data); */
    while (node) {
      if (data === node.data) return node;
      node = data < node.data ? node.left : node.right;
    }
    return null;
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    if (!node) return null;
    if (!node.left) return node;
    return this.minNode(node.left);
    /* while (node && node.left) {
      node = node.left;
    }
    return node; */
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    if (!node) return null;
    if (!node.right) return node;
    return this.maxNode(node.right);
    /* while (node && node.right) {
      node = node.right;
    }
    return node; */
  }
  successor(node) {
    return this.successorNode(this.root, node);
  }
  successorNode(root, node) {
    if (node.right) return this.minNode(node.right);
    let successor = null;
    while (root) {
      if (root.data > node.data) {
        successor = root;
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return successor;
  }
  predecessor(node) {
    return this.predecessorNode(this.root, node);
  }
  predecessorNode(root, node) {
    if (node.left) return this.maxNode(node.left);
    let predecessor = null;
    while (root) {
      if (root.data < node.data) {
        predecessor = root;
        root = root.right;
      } else {
        root = root.left;
      }
    }
    return predecessor;
  }
  insert(data) {
    this.root = this.insertNode(this.root, data);
  }
  insertNode(node, data) {
    if (!node) return new TreeNode(data);
    let curr = node;
    while (curr) {
      if (data < curr.data) {
        if (!curr.left) {
          curr.left = new TreeNode(data);
          break;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = new TreeNode(data);
          break;
        }
        curr = curr.right;
      }
    }
    return node;
    /* if (!node) return new TreeNode(data);
    if (data < node.data) node.left = this.insertNode(node.left, data);
    else node.right = this.insertNode(node.right, data);
    return node; */
  }
  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }
  deleteNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const minNode = this.minNode(node.right);
      node.data = minNode.data;
      node.right = this.deleteNode(node.right, minNode.data);
    }
    return node;
  }
  inorder() {
    const arr = [];
    this.inorderTraversal(this.root, arr);
    return arr;
  }
  inorderTraversal(root, arr) {
    if (!root) return;
    this.inorderTraversal(root.left, arr);
    arr.push(root.data);
    this.inorderTraversal(root.right, arr);
  }
}