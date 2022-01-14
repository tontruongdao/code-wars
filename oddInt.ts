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

const findOdd = (numArr: number[]) => {
  // let result = 1
  const charMap: ICharMap = {}
  numArr.forEach(num => {
    if (!charMap[num]) {
      charMap[num] = 1;
    } else if (typeof (charMap[num]) === "number") {
      charMap[num]++;
    }
  })

  // console.log("charMap is ----> ", charMap)
  const charMapArr = Object.entries(charMap)

  // const oddEntry = charMapArr.find(entry => {
  //   entry[1] % 2 === 1
  // })
  charMapArr.forEach(entry => {
    if (entry[1] % 2 === 1) {
      console.log("entry is", entry)
    }
  })

  const findOne = charMapArr.find(entry => entry[1] === 1)

  console.log("char map arr", charMapArr)

  // if (oddEntry) {
  //   console.log("odd entry ---> ", oddEntry[0])
  // }

  // return oddEntry ? oddEntry[0] : 1
}

const test = [0, 2, 0, 5, 5, 5, 6, 7, 8];
const result = findOdd(test)