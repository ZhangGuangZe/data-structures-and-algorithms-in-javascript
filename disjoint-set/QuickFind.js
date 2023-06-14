export default class QuickFind {
  constructor(n) {
    this.parents = new Array(n); // 存储每个元素的集合代表
    this.size = n; // 集合的数量

    for (let i = 0; i < n; i++) {
      this.parents[i] = i;
    }
  }
  /**
   * 查询元素的所在集合
   * @param {*} x
   * @returns
   */
  find(x) {
    return this.parents[x];
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
    
    for (let i = 0; i < this.parents.length; i++) {
      if (this.parents[i] === rootX) {
        this.parents[i] = rootY;
      }
    }
    this.size--;
  }
  /**
   * 检查元素 x 和元素 y 是否在一个集合中
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
  toString() {
    return this.parents.join(' ');
  }
}