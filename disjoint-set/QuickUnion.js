export default class QuickUnion {
  constructor(n) {
    this.parents = new Array(n); // 存储每个元素的父节点
    this.size = n; // 集合的数量

    for (let i = 0; i < n; i++) {
      this.parents[i] = i;
    }
  }
  /**
   * 查询元素的所在集合
   * @param {*}
   * @returns
   */
  find(x) {
    // return x !== this.parents[x] ? this.find(this.parents[x]) : x;
    while (x !== this.parents[x]) {
      x = this.parents[x];
    }
    return x;
  }
  /**
   * 合并两个集合
   * @param {*} x 
   * @param {*} y 
   */
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return;

    this.parents[rootX] = rootY;
    this.size--;
  }
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
  toString() {
    return this.parents.join(' ');
  }
}