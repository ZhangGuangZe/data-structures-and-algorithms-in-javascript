import DisjointSet from '../../disjoint-set/DisjointSet.js';

/**
 * 基于并查集的 Kruskal 算法
 * @param {*} n 顶点数量
 * @param {*} edges 边集合
 * @returns 
 */
export function kruskal(n, edges) {
  const minimumSpanningTree = [];
  const ds = new DisjointSet(n);
  let count = 0;

  // 将图的所有边按权重升序排序
  edges.sort((a, b) => a[2] - b[2]);

  for (const [u, v, w] of edges) {
    if (ds.isConnected(u, v)) continue;

    ds.union(u, v);
    minimumSpanningTree.push([u, v, w]);

    count++;
    if (count === n - 1) return minimumSpanningTree;
  }

  return [];
}