export default class GraphByAdjList {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = Array.from({ length: vertices }, () => []);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }

  toString() {
    for (let i = 0; i < this.vertices; i++) {
      console.log(i + ':', this.adjList[i].join(' -> '));
    }
  }
}