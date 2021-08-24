const paintLetterBoxes = (startNumber, endNumber) => {

  console.log("hello world")
  return ("hello world")
} 

// paintLetterBoxes();


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
const numberMap = {};
const dummyNumber = [19, 200, 3018, 14];
// console.log(dummyNumber)

// Iterating through each digit to record in number map.
for (const num of dummyNumber){
  const numArr = String(num).split("").map((int) => Number(int))

  numArr.forEach((int) => {
    if(numberMap[int]) {
      numberMap[int] ++
    } else {
      numberMap[int] = 1
    }
  })
}
// console.log(numberMap)


// Making a number Map(array)