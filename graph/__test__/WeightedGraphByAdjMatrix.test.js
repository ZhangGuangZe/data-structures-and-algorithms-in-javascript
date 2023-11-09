import WeightedGraphByAdjMatrix from '../WeightedGraphByAdjMatrix.js';

const graph = new WeightedGraphByAdjMatrix(4);
graph.addEdge(0, 2, 5);
graph.addEdge(0, 1, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(3, 0, 3);

graph.toString();