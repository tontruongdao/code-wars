/*

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421

*/


// My Solution
const descendingOrder = (num) => {
  const numArr = Array.from(String(num), Number);
  numArr.sort((a, b) => b - a);
  
  return parseInt(numArr.join(""), 10)
}

descendingOrder(856)