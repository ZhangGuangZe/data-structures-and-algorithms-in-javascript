function dfs(graph, v, visited) {
  visited[v] = true;
  
  console.log('当前顶点：', v);

  // 遍历当前顶点的邻居顶点
  for (const w of graph[v]) {
    if (!visited[w]) {
      dfs(graph, w, visited);
    }
  }
}

export function depthFirstSearch(graph) {
  const vertices = graph.length;
  const visited = new Array(vertices).fill(false);

  // 从每个未访问过的顶点开始遍历
  for (let v = 0; v < vertices; v++) {
    if (!visited[v]) {
      dfs(graph, v, visited);
    }
  }
}