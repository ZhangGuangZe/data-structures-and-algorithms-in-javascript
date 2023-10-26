import GraphByAdjList from '../GraphByAdjList.js';

const graph = new GraphByAdjList(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

graph.toString();