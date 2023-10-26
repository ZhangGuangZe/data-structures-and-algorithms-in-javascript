import PriorityQueue from '../../heap/Heap.js';

export function dijkstra(graph, sourceVertex) {
  const distances = {};
  const visited = {};
  const predecessors = {};
  const vertices = graph.length;

  // 初始化所有顶点的距离和前驱顶点
  for (let v = 0; v < vertices; v++) {
    distances[v] = Infinity;
    predecessors[v] = null;
  }
  distances[sourceVertex] = 0;

  for (let v = 0; v < vertices; v++) {
    // 找出与源顶点最近的邻居顶点
    let minVertex = -1;
    for (let i = 0; i < vertices; i++) {
      if (!visited[i] && (minVertex === -1 || distances[i] < distances[minVertex])) {
        minVertex = i;
      }
    }

    visited[minVertex] = true; // 标记为已访问

    for (let w = 0; w < vertices; w++) {
      const newDist = distances[minVertex] + graph[minVertex][w];
      // 如果源顶点到当前邻居顶点有更短的路径，更新其距离和前驱顶点
      if (
        !visited[w] && graph[minVertex][w] !== 0 &&
        distances[minVertex] !== Infinity && newDist < distances[w]
      ) {
        distances[w] = newDist;
        predecessors[w] = minVertex;
      }
    }
  }

  return { distances, predecessors };
}

export function dijkstraByPriorityQueue(graph, sourceVertex) {
  const distances = {};
  const predecessors = {};
  const vertices = graph.length;
  const queue = new PriorityQueue((a, b) => a[1] - b[1]);

  // 初始化所有顶点的距离和前驱顶点
  for (let v = 0; v < vertices; v++) {
    distances[v] = Infinity;
    predecessors[v] = null;
  }
  distances[sourceVertex] = 0;
  queue.insert([sourceVertex, 0]);

  while (!queue.isEmpty()) {
    // 找出与源顶点最近的邻居顶点
    const [vertex, weight] = queue.remove();

    for (const [neighbor, distance] of graph[vertex]) {
      const newDist = distance + weight;
      // 如果源顶点到当前邻居顶点有更短的路径，更新其距离和前驱顶点
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        predecessors[neighbor] = vertex;
        queue.insert([neighbor, newDist]);
      }
    }
  }

  return { distances, predecessors };
}

export function getShortestPath(predecessors, startVertex, targetVertex) {
  const path = [];
  let currVertex = targetVertex;

  while (currVertex !== startVertex) {
    path.push(currVertex);
    currVertex = predecessors[currVertex];
  }
  path.push(startVertex);

  return path.reverse().join(' -> ');
}

export function getShortestPathVal(distances, v) {
  return distances[v] < Infinity ? distances[v] : -1;
}