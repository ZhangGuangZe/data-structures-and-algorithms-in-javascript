export default class GraphByAdjMatrix {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjMatrix = Array.from({ length: vertices }, () => new Array(vertices).fill(0));
  }

  addEdge(u, v) {
    this.adjMatrix[u][v] = 1;
    this.adjMatrix[v][u] = 1;
  }

  toString() {
    for (let i = 0; i < this.vertices; i++) {
      console.log(this.adjMatrix[i].join(' '));
    }
  }
}