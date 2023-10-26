function bfs(graph, startVertex, visited) {
  visited[startVertex] = true;
  const queue = [startVertex];
  
  while (queue.length > 0) {
    const v = queue.shift();

    console.log('当前顶点：', v);

    // 遍历当前顶点的邻居顶点
    for (const w of graph[v]) {
      if (!visited[w]) {
        visited[w] = true; // 标记邻居顶点为已访问
        queue.push(w); // 将未访问的邻居顶点入队
      }
    }
  }
}

export function breathFirstSearch(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);

  bfs(graph, 0, visited); // 从指定起始顶点开始遍历
}