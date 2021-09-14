let a = [1, 2, 3];
let b = ["a", "b"];

// CW

function mergeArrays(a, b) {
  // your code here
  var returnArray = [];
  var counter = 0;
  while (a[counter] || b[counter] ){
    if(a[counter]){
      returnArray.push(a[counter]);
    }
    if(b[counter]){
      returnArray.push(b[counter]);
    }
    counter++;
    
  }
  return returnArray;
}

// CW
function mergeArrays(a, b) {
  let j = [],
      longest = a.length > b.length ? a:b;
  for (var i=0; i<longest.length; i++){
    if (a[i]) j.push(a[i])
    if (b[i]) j.push(b[i])
  }
  return j
}

// My Solution
function mergeArrays(a, b) {
  // your code here
  let longerArray;
  let shorterArray;
  let finalArray = [];
  let n = 0;
  let r = 0;

  if (a.length <= b.length) {
    longerArray = b
    shorterArray = a
  } else {
    longerArray = a
    shorterArray = b
  }
  
  while (r < shorterArray.length) {
    if (n % 2 == 0) {
      finalArray.push(a[r])
      n++
    } else {
      finalArray.push(b[r])
      n++
      r++
    }
  }

  while (r < longerArray.length) {
    finalArray.push(longerArray[r])
    r++;
  } 

  console.log(finalArray)
  return finalArray
}

mergeArrays(a, b)