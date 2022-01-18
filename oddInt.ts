// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

interface ICharMap {
  [name: string]: number;
}

// CW Solution
const findOdd = (numbers: number[]): number => {
  return numbers.reduce((acc, x) => {
    console.log("x is", x)
    console.log("acc is", x)
    console.log("result is", x ^ acc)
    return (x ^ acc)
  }, 0);
};

// my solution
// const findOdd = (numArr: number[]) => {
//   const charMap: ICharMap = {}
//   numArr.forEach(num => {
//     if (!charMap[num]) {
//       charMap[num] = 1;
//     } else {
//       charMap[num]++;
//     }
//   })

//   const charMapArr = Object.entries(charMap)
//   const findOne = charMapArr.find(entry => entry[1] % 2 === 1)

//   return !!findOne ? parseInt(findOne[0], 10) : 0
// }

// const test = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
// console.log(findOdd(test))