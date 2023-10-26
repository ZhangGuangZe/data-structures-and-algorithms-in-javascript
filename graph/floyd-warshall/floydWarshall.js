export function floydWarshall(graph) {
  const vertices = graph.length;

  // 初始化距离和下一个顶点矩阵
  const distances = Array.from({ length: vertices }, () => []);
  const nextVertices = Array.from({ length: vertices }, () => Array(vertices).fill(null));

  for (let i = 0; i < vertices; i++) {
    for (let j = 0; j < vertices; j++) {
      distances[i][j] = graph[i][j];
      if (i !== j && graph[i][j] !== Infinity) { // 两顶点有边
        nextVertices[i][j] = j;
      }
    }
  }

  for (let k = 0; k < vertices; k++) { // 中间顶点
    for (let i = 0; i < vertices; i++) { // 起始顶点
      for (let j = 0; j < vertices; j++) { // 目标顶点
        const middleDist = distances[i][k] + distances[k][j];
        // 检查从起始顶点到中间顶点再到目标顶点的路径是否比直接从起始顶点到目标顶点近
        if (middleDist < distances[i][j]) {
          distances[i][j] = middleDist;
          nextVertices[i][j] = nextVertices[i][k];
        }
      }
    }
  }

  return { distances, nextVertices };
}

export function getShortestPath(nextVertices, startVertex, targetVertex) {
  const path = [];
  
  if (nextVertices[startVertex][targetVertex] === -1) {
    return path;
  }

  path.push(startVertex);
  while (startVertex !== targetVertex) {
    startVertex = nextVertices[startVertex][targetVertex];
    path.push(startVertex);
  }

  return path.join(' -> ');
}