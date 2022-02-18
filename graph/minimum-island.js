
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ]; // -> 2


const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
]; // -> 1

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {

      const size = exploreSize(grid, r, c, visited)
      if (size > 0 && size < minSize) {
        minSize = size
      }
    }
  }

  console.log("size is ---> ", minSize)
  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const columnInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !columnInbounds) return 0;

  if (grid[r][c] === 'W') return 0;

  const position = r + ',' + c;
  if (visited.has(position)) return 0;
  visited.add(position)

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
}



minimumIsland(grid); 