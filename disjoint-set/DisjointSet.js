export default class DisjointSet {
  constructor(n) {
    this.parents = new Array(n); // 存储每个集合的根节点
    this.ranks = new Array(n); // 用于记录每棵树的秩（深度），从而进行按秩合并
    this.size = n; // 当前集合的数量

    for (let i = 0; i < n; i++) {
      this.parents[i] = i; // 每个元素自成一个集合，将每个集合的根节点初始化为自身
      this.ranks[i] = 0; // 将每棵树的深度初始化为 0
    }
  }
  /**
   * 查询元素的所在集合（路径压缩）
   * @param {*} x
   * @returns
   */
  find(x) {
    if (x === this.parents[x]) return x;
    this.parents[x] = this.find(this.parents[x]);
    /* let root = x;
    while (root !== this.parents[root]) {
      root = this.parents[root]; // 沿着查找路径向上查找根节点
    }
    while (x !== this.parents[x]) {
      [this.parents[x], x] = [root, this.parents[root]]; // 从根节点向下将路径上的每个节点的父节点指向根节点
    }
    return root; */
  }
  /**
   * 合并两个集合（按秩合并）
   * @param {*} x 
   * @param {*} y 
   */
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return;
    
    if (this.ranks[rootX] < this.ranks[rootY]) {
      this.parents[rootX] = rootY;
    } else if (this.ranks[rootX] > this.ranks[rootY]) {
      this.parents[rootY] = rootX;
    } else {
      this.parents[rootY] = rootX;
      this.ranks[rootX] += 1;
    }
    this.size--;
  }
  /**
   * 判断元素x与元素y是否在同一集合中
   * @param {*} x 
   * @param {*} y 
   */
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
  toString() {
    return this.parents.join(' ');
  }
}