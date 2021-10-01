const isSquare = (n) => {
  return n >= 0 && Math.sqrt(n) % 1 === 0
}

isSquare(9)