import WeightedDigraphByAdjMatrix from '../../WeightedDigraphByAdjMatrix.js';

import WeightedDigraphByAdjList from '../../WeightedDigraphByAdjList.js';
import { dijkstra, dijkstraByPriorityQueue, getShortestPath, getShortestPathVal } from '../dijkstra.js';

/* const weightedDigraph = new WeightedDigraphByAdjMatrix(4);
weightedDigraph.addEdge(0, 2, 5);
weightedDigraph.addEdge(0, 1, 2);
weightedDigraph.addEdge(1, 2, 1);
weightedDigraph.addEdge(3, 0, 3); */

/* const adjList = [
  [0, 2, 5, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [3, 0, 0, 0],
]; */

/* const { distances, predecessors } = dijkstra(weightedDigraph.graph, 3);

console.log(getShortestPath(predecessors, 3, 2)); // => 3 -> 0 -> 1 -> 2
console.log(getShortestPathVal(distances, 2)); // => 6 */

const weightedDigraph = new WeightedDigraphByAdjList(4);
weightedDigraph.addEdge(0, 2, 5);
weightedDigraph.addEdge(0, 1, 2);
weightedDigraph.addEdge(1, 2, 1);
weightedDigraph.addEdge(3, 0, 3);

const { distances, predecessors } = dijkstraByPriorityQueue(weightedDigraph.graph, 3);

console.log(getShortestPath(predecessors, 3, 2)); // => 3 -> 0 -> 1 -> 2
console.log(getShortestPathVal(distances, 2)); // => 6