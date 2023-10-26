import { floydWarshall, getShortestPath } from '../floydWarshall.js';

const graph = [
  [Infinity, 3, Infinity, Infinity],
  [3, Infinity, 1, 4],
  [Infinity, 1, Infinity, 1],
  [Infinity, 4, 1, Infinity],
];

const { distances, nextVertices } = floydWarshall(graph);

console.log(distances);
/* [
  [6, 3, 4, 5],
  [3, 2, 1, 2],
  [4, 1, 2, 1],
  [5, 2, 1, 2],
] */
console.log(getShortestPath(nextVertices, 0, 3));