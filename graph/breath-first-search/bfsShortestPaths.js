export function bfsShortestPaths(graph, startVertex) {
  const vertices = graph.length;
  const queue = [startVertex];
  const visited = new Array(vertices).fill(false);
  visited[startVertex] = true;

  const distances = {};
  const predecessors = {};

  for (let i = 0; i < vertices; i++) {
    distances[i] = 0;
    predecessors[i] = null;
  }

  while (queue.length > 0) {
    const v = queue.shift();

    for (const w of graph[v]) {
      if (!visited[w]) {
        visited[w] = true;
        distances[w] = distances[v] + 1;
        predecessors[w] = v;
        queue.push(w);
      }
    }
  }

  return { distances, predecessors };
}

export function getPath(predecessors, startVertex, targetVertex) {
  const path = [];
  let currVertex = startVertex;

  while (currVertex !== targetVertex) {
    path.push(currVertex);
    currVertex = predecessors[currVertex];
  }
  path.push(targetVertex);

  return path.reverse();
}