export default class WeightedGraphByAdjMatrix {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjMatrix = Array.from({ length: vertices }, () => new Array(vertices).fill(0));
  }

  addEdge(u, v, w) {
    this.adjMatrix[u][v] = w;
    this.adjMatrix[v][u] = w;
  }

  get graph() {
    return this.adjMatrix;
  }

  toString() {
    for (let i = 0; i < this.vertices; i++) {
      console.log(this.adjMatrix[i].join(' '));
    }
  }
}