import WeightedGraphByAdjList from '../../WeightedGraphByAdjList.js';
import { kruskal } from '../kruskal.js';

/* const weightedGraph = new WeightedGraphByAdjList(3);
weightedGraph.addEdge(0, 1, 5);
weightedGraph.addEdge(0, 2, 6);
weightedGraph.addEdge(1, 2, 1);
console.log(kruskal(weightedGraph.vertices, weightedGraph.edges)); */

const weightedGraph = new WeightedGraphByAdjList(4);
weightedGraph.addEdge(0, 1, 2);
weightedGraph.addEdge(0, 2, 3);
weightedGraph.addEdge(1, 2, 4);
weightedGraph.addEdge(1, 3, 5);
weightedGraph.addEdge(2, 3, 1);
console.log(kruskal(weightedGraph.vertices, weightedGraph.edges));