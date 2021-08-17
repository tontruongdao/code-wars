/*
It's pretty straightforward. 
Your goal is to create a function that removes the first and 
last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/


// ##### CW Solution
function removeChar(str) {
  return str.slice(1, -1);
}

/* ##### My Solution 
let word = "wordi"

function removeChar(str){
  let arr = []
  for(let i = 0; i < str.length; i++ ) {
    if (i > 0 && i < str.length - 1) {
      arr.push(str[i])
    }
  }
  return arr.join("")
};

removeChar(word)
*/