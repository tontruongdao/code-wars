// Given a two-dimensional array, return a new array which carries over only those arrays from the original, 
// which were not empty and whose items are all of the same type (i.e. homogenous). 
// For simplicity, the arrays inside the array will only contain characters and integers.

// Example:
// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

// Addendum:
// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
// The resultant arrays should be in the order they were originally in and should not have its values changed.
// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

const test = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]];

// CodeWars solution 
function filterHomogenous(arr) {
  return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
}

// My Solution
const filterHomogenous = (arr) => {
  const filterArr = arr.filter((subArray) => {
    let tempType;
    let isArrReturn = true;

    console.log("subArray is", subArray)
    subArray.forEach((element) => {
      if(!tempType) {
        tempType = typeof(element)
      }

      if(tempType !== typeof(element)) {
        isArrReturn = false;
      }
    })

    console.log("type and boolean are:", tempType, isArrReturn)
    if(!!tempType && isArrReturn) {
      return subArray
    }
  })

  console.log("filtered original array is:", filterArr)
  return filterArr
}

filterHomogenous(test)
