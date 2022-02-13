// Write a function, persistence, that takes in a positive parameter num 
// and returns its multiplicative persistence, which is the number of times you must multiply 
// the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// CW Solution

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}

// My Solution
// const persistence = (num) => {
//   let test = num
//   let isPersisted = false
//   let persistenceValue = 0

//   if(test<10) {
//     return persistenceValue;
//   }

//   while(!isPersisted) {
//     const numArr = Array.from(String(test), Number);
//     test = numArr.reduce((previousValue, currentValue) => previousValue * currentValue)
//     persistenceValue++

//     if(test < 10) {
//       isPersisted = true;
//     }
//   }
//   return persistenceValue
// }

persistence(39)