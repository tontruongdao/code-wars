/*
Given an array of positive integers (the weights of the people), 
return a new array/tuple of two integers, where the first one is the total weight of team 1, 
and the second one is the total weight of team 2.
*/

const test = [9, 100, 9, 654]


// CW Solution

// Complicated comma operator.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator

const rowWeights = arr => arr.reduce((prevValue, currentValue, index) => (prevValue[index % 2] += currentValue, prevValue), [0, 0])

// My Solution
// const rowWeights = (arr) => {
//   let oddSum = 0;
//   let evenSum = 0;

//   arr.forEach((num, index) => index % 2 === 0 ? evenSum += num : oddSum += num )

//   return [evenSum, oddSum]
// }


// console.log(rowWeights(test))

console.log(4 % 2)