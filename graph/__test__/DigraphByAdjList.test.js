import DigraphByAdjList from '../DigraphByAdjList.js';

const graph = new DigraphByAdjList(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.toString();

const graph1 = new DigraphByAdjList(4);
graph1.addEdge(0, 1);
graph1.addEdge(0, 2);
graph1.addEdge(1, 3);
graph1.addEdge(2, 3);
console.log(graph1.topologicalSortByDFS()); // => [0, 1, 2, 3] 或 [0, 2, 1, 3]

const graph2 = new DigraphByAdjList(2);
graph2.addEdge(0, 1);
graph2.addEdge(1, 0);
console.log(graph2.topologicalSortByKahn()); // => []