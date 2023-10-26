import { bfsShortestPaths, getPath } from '../bfsShortestPaths.js';

const adjList = [
  [1, 2],
  [0, 2, 3, 4],
  [0, 1, 3],
  [1, 2, 4],
  [1, 3]
];

const { distances, predecessors } = bfsShortestPaths(adjList, 0);

const startVertex = 0;
for (let v = 0; v < adjList.length; v++) {
  if (v !== startVertex) {
    const path = getPath(predecessors, v, startVertex);
    console.log(`${startVertex} to ${v}: ${path.join(' -> ')}`);
  }
}