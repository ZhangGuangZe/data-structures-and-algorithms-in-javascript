import { breathFirstSearch } from '../breathFirstSearch.js';

const adjList = [
  [1, 2],
  [0, 2, 3, 4],
  [0, 1, 3],
  [1, 2, 4],
  [1, 3]
];

breathFirstSearch(adjList);
