// CW Solution

const noOdds = (numArr) => {
  return numArr.filter((num) => num % 2 === 0);
}

// My Solution

// const noOdds = (numArr) => {
//   const evenArr = [];

//   numArr.forEach(num => {
//     if (num % 2 === 0) {
//       evenArr.push(num)
//     }
//   });

//   console.log("even array is:", evenArr)
//   return evenArr
// }

noOdds([1, 2, 9, 18])