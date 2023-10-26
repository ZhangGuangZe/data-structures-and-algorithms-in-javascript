export default class WeightedDigraphByAdjList {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = Array.from({ length: vertices }, () => []);
  }

  addEdge(u, v, w) {
    this.adjList[u].push([v, w]);
  }

  get graph() {
    return this.adjList;
  }

  toString() {
    for (let i = 0; i < this.vertices; i++) {
      console.log(i + ':', this.adjList[i].join(' '));
    }
  }
}