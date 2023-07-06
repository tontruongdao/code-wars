// CV Solution

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}


// My Solution
function solution(number) {
  const naturalNumbers = []

  let i = 0
  while (i < number) {
    if (i % 3 === 0) {
      naturalNumbers.push(i)
    } else if (i % 5 === 0) {
      naturalNumbers.push(i)
    }
    i++
  }

  return naturalNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

solution(10)