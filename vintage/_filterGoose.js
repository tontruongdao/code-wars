/*
Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, 
that takes an array of strings as an argument and returns a 
filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, 
which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

*/

// ##### CW Solution
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

// ##### My Solution
let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let arr = []

  birds.forEach((word, index) => {
    console.log(index)
    if(!geese.includes(word)) {
      arr.push(word)
    }
  })
  console.log(arr)
  return arr
};

gooseFilter(birds)