export default class DigraphByAdjList {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = Array.from({ length: vertices }, () => []);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
  }

  topologicalSortByDFS() {
    const visited = new Array(this.vertices).fill(0);
    const result = [];
  
    const dfs = v => {
      // 访问到正在访问的顶点说明有环
      if (visited[v] === 1) return false;
      // 访问到已访问到的顶点继续访问其他顶点
      if (visited[v] === 2) return true;
      // 将当前顶点标记为已访问
      visited[v] = 1;
  
      for (const w of this.adjList[v]) {
        if (!dfs(w)) return false;
      }
  
      // 当前顶点的所有邻居顶点访问完成则将该节点标记为已访问
      visited[v] = 2;
      result.push(v);
      return true;
    };
  
    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i] && !dfs(i)) return [];
    }
  
    return result.reverse();
  }

  topologicalSortByKahn() {
    const indegrees = new Array(this.vertices).fill(0);
    const result = [];
  
    // 计算每个顶点的入度
    for (const neighbors of this.adjList) {
      for (const w of neighbors) {
        indegrees[w]++;
      }
    }
  
    const queue = [];
    // 将入度为 0 的顶点入队
    for (let i = 0; i < indegrees.length; i++) {
      if (indegrees[i] === 0) queue.push(i);
    }
    
    while (queue.length > 0) {
      const v = queue.shift();
      result.push(v);
  
      for (const w of this.adjList[v]) {
        if (--indegrees[w] === 0) queue.push(w);
      }
    }
  
    // 检测是否有环
    return result.length === this.vertices ? result : [];
  }

  toString() {
    for (let i = 0; i < this.vertices; i++) {
      console.log(i + ':', this.adjList[i].join(' -> '));
    }
  }
}