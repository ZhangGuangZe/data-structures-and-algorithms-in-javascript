import PriorityQueue from '../../heap/Heap.js';

/**
 * 基于优先队列的 Prim 算法
 * @param {*} n 顶点数量
 * @param {*} graph 
 * @returns 
 */
export function prim(n, graph) {
  const minimumSpanningTree = [];
  const priorityQueue = new PriorityQueue((a, b) => a[2] - b[2]); // 小顶堆
  const visited = new Set();
  let selectedEdgeCount = 0;

  // 任意选择一个顶点作为起始顶点
  const startVertex = 0;
  visited.add(startVertex);

  // 将起始顶点相连的所有边添加到优先队列中
  for (const [neighbor, weight] of graph[startVertex]) {
    priorityQueue.insert([startVertex, neighbor, weight]);
  }

  while (!priorityQueue.isEmpty() && selectedEdgeCount < n - 1) {
    // 选择权重最小的边
    const [u, v, w] = priorityQueue.remove();

    // 跳过两个顶点都被选择的边
    if (visited.has(u) && visited.has(v)) continue;

    // 将选择的边添加到生成树中，并将另一端的顶点标记为已选择
    minimumSpanningTree.push([u, v, w]);
    const nextVertex = visited.has(u) ? v : u;
    visited.add(nextVertex);

    selectedEdgeCount++;

    // 将新选择的顶点的相邻边加入优先队列，以便下一次选择
    for (const [neighbor, weight] of graph[nextVertex]) {
      if (!visited.has(neighbor)) {
        priorityQueue.insert([nextVertex, neighbor, weight]);
      }
    }
  }

  return selectedEdgeCount === n - 1 ? minimumSpanningTree : [];
}