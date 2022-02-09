// interface Graph {
//   [key: string]: string[]
// }

// const graph: Graph = {
//   a: ['b', 'c'],
//   b: ['d'],
//   c: ['e'],
//   d: ['f'],
//   e: [],
//   f: []
// }

// Iteratively

// const depthFirstPrint = (graph: Graph, source: string) => {
//   const stack: string[] = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log("current is ---> ", current);

//     for (let neighbor of graph[current as keyof Graph]) {
//       stack.push(neighbor)
//       console.log("push", stack)
//     }
//   }
// }

// Recursively

// const depthFirstPrint = (graph: Graph, source: string) => {
//   console.log('source', source)
//   for (let neighbor of graph[source as keyof Graph]) {
//     // console.log("neighbor", neighbor)
//     // console.log("arr --->", graph[source as keyof Graph])
//     depthFirstPrint(graph, neighbor);
//   }
// }

// depthFirstPrint(graph, 'a')

// Iteratively

// const breathFirstPrint = (graph: Graph, source: string) => {
//   const queue: string[] = [source];

//   while (queue.length > 0) {
//     const current = queue.shift()
//     console.log("current -> ", current)

//     for (let neighbor of graph[current as keyof Graph]) {
//       queue.push(neighbor)
//     }
//   }
// }

// breathFirstPrint(graph, 'a')