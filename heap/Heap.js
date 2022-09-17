export default class Heap {
  constructor() {
    this.container = [];
    this.size = 0;
  }
  /**
   * 获取指定节点左子节点
   * @param {number} i 父节点索引
   * @return {number}
   */
  getLeftIndex(i) {
    return 2 * i;
  }
  /**
   * 获取指定节点右子节点
   * @param {number} i 父节点索引
   * @return {number}
   */
  getRightIndex(i) {
    return 2 * i + 1;
  }
  /**
   * 获取指定节点父节点
   * @param {number} i 子节点索引
   * @return {number}
   */
  getParentIndex(i) {
    return Math.floor(i / 2);
  }
  /**
   * 插入元素
   * @param {*} data 
   */
  insert(data) {
    this.container[++this.size] = data;
    this.heapifyUp(this.size);
  }
  /**
   * 删除堆顶元素
   * @return {*}
   */
  remove() {
    if (this.isEmpty()) return;

    let val = this.peek();
    this.container[1] = this.container[this.size--];
    this.heapifyDown(1);
    return val;
  }
  /**
   * 返回堆顶元素
   * @return {*}
   */
  peek() {
    if (!this.isEmpty()) return this.container[1];
  }
  /**
   * 建堆
   * @param {Array} a 未排序数组
   */
  build(a, n) {
    for (let i = Math.floor(n / 2); i >= 1; i--) {
      this.heapify(a, i, n);
    }
  }
  /**
   * 堆排序
   * @param {Array} a 未排序数组
   */
  sort(a) {
    let n = a.length - 1;
    this.build(a, n);
    while (n > 1) {
      this.swap(a, 1, n--);
      this.heapify(a, 1, n);
    }
  }
  /**
   * 判断堆是否为空
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
  /**
   * 交换节点
   * @param {Array} a
   * @param {number} i 
   * @param {number} j 
   */
  swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
  }
  /**
   * 自下而上堆化
   * @param {number} i 节点索引
   */
  heapifyUp(i) {
    let pos = i || this.container.length - 1;
    while (pos > 1 && this.container[this.getParentIndex(pos)] < this.container[pos]) {
      this.swap(this.container, pos, this.getParentIndex(pos));
      pos = this.getParentIndex(pos);
    }
  }
  /**
   * 自上而下堆化
   * @param {number} i 节点索引
   */
  heapifyDown(i = 1) {
    while (2 * i <= this.size) {
      let pos = i;
      const left = this.getLeftIndex(i);
      const right = this.getRightIndex(i);
      if (left <= this.size && this.container[i] < this.container[left]) pos = left;
      if (right <= this.size && this.container[pos] < this.container[right]) pos = right;
      if (pos === i) break;
      this.swap(this.container, i, pos);
      i = pos;
    }
  }
  /**
   * 自上而下堆化（原地）
   * @param {Array} a 数组
   * @param {number} i 节点索引
   */
  heapify(a, i, n) {
    while (2 * i <= n) {
      let pos = i;
      const left = this.getLeftIndex(i);
      const right = this.getRightIndex(i);
      if (left <= n && a[i] < a[left]) pos = left;
      if (right <= n && a[pos] < a[right]) pos = right;
      if (pos === i) break;
      this.swap(a, i, pos);
      i = pos;
    }
  }
}