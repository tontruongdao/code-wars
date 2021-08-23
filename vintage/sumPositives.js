// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// ##### CodeWars Solution
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}



// ##### My Solution 

// const arr = [1, -4, 3]

// function positiveSum(arr) {
//   if (!arr) {
//     return 0
//   }
  
//   console.log(arr)
//   const newArr = arr.map((num) => {
//     if( num < 0 ) {
//       return 0
//     } else {
//       return num
//     }
//   })
  
//   console.log(newArr)

//   let i;
//   let sum = 0;
//   for (i = 0; i < newArr.length; i++) {
//     console.log(arr[i], sum)
//     sum += newArr[i]
//     console.log(sum)
//   }
//   return sum
// }

// console.log(positiveSum(arr))