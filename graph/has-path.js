const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

// DepthFirst

// const hasPath = (graph, source, destination) => {
//   if (source === destination) return true;

//   for (let neighbor of graph[source]) {
//     if (hasPath(graph, neighbor, destination)) return true;
//   }

//   return false;
// }


// BreadthFirst
const hasPath = (graph, source, destination) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log("current ---> ", current);
    console.log("")

    if (current === destination) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  return false
}



console.log(hasPath(graph, 'v', 'z')); // false
console.log(hasPath(graph, 'v', 'w')); // true

// hasPath(graph, 'v', 'w'); // true
// hasPath(graph, 'v', 'z'); // false