// Code Wars' Solution
function paintLetterboxes(start, end) {
  const frequencies = new Array(10).fill(0);
  for(let number=start; number<=end; number++) {
    number.toString().split('').forEach(x => frequencies[x]++);
  }
  return frequencies;
}


// My Solution
const paintLetterBoxes = (startNumber, endNumber) => {
  const numMapArr =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  let start = startNumber;
  let end = endNumber;
  const rangeArr = []
  while(start <= end) {
    rangeArr.push(start);
    start++;
  }
  console.log(rangeArr)

  for (const num of rangeArr){
    const numArr = String(num).split("").map((int) => Number(int))
    numArr.forEach((int) => numMapArr[int]++)
  }

  console.log(numMapArr)
  return numMapArr
} 

paintLetterBoxes(8, 15);


// Convert a number to an array.
const num = 123456;

const numArray = String(num).split("").map((int) => Number(int));
// console.log(numArray);


// Creating a number range
const rangeArray = [];
let start = 100;
let end = 105;

while(start <= end) {
  rangeArray.push(start);
  start++;
}
// console.log(rangeArray);



// Making a number Map(object)
const numberMapObj = {};
const dummyNumberObj = [19, 200, 3018, 14];
// console.log(dummyNumber)

// Iterating through each digit to record in number map.
for (const num of dummyNumberObj){
  const numArr = String(num).split("").map((int) => Number(int))

  numArr.forEach((int) => {
    if(numberMapObj[int]) {
      numberMapObj[int] ++
    } else {
      numberMapObj[int] = 1
    }
  })
}
// console.log(numberMapObj)


// Making a number Map(array)
const numberMapArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const dummyNumberArr = [19, 200, 3018, 14];

// Iterating through each digit to record in number map.
for (const num of dummyNumberArr){
  const numArr = String(num).split("").map((int) => Number(int))
  numArr.forEach((int) => numberMapArr[int] ++)
}
// console.log(numberMapArr)