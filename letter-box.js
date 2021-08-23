const paintLetterBoxes = () => {

  console.log("hello world")
  return ("hello world")
} 

// paintLetterBoxes();

const num = 123456;

// Convert a number to an array.
const numArray = String(num).split("").map((num) => Number(num));

let start = 100;
let end = 105;

const rangeArray = [];

while(start <= end) {
  rangeArray.push(start);
  // console.log(rangeArray);
  start++;
}

// console.log(numArray);

const dummyNumber = [1, 2, 3, 1];
// console.log(dummyNumber)

const numberMap = {};

for (const num of dummyNumber){
  if(numberMap[num]) {
    numberMap[num] ++
  } else {
    numberMap[num] = 1
  }
}

console.log(numberMap)