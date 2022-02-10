const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const undirectedPath = (edges, firstNode, secondNode) => {
  const graph = buildGraph(edges);

  console.log(hasPath(graph, firstNode, secondNode, new Set()))
  return hasPath(graph, firstNode, secondNode, new Set())
}

const hasPath = (graph, source, destination, visited) => {
  if (source === destination) return true;
  if (visited.has(source)) return false;

  visited.add(source);

  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination, visited)) return true;
  }

  return false;
}

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [first, second] = edge;
    // Initiate Property
    if (!(first in graph)) graph[first] = [];
    if (!(second in graph)) graph[second] = [];

    graph[first].push(second);
    graph[second].push(first);
  }

  console.log("graph is ---> ", graph)
  return graph;
}

undirectedPath(edges, 'j', 'o'); // -> true