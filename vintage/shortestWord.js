/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// CW Solution
// function findShort(s){
//   return Math.min(...s.split(" ").map (s => s.length));
// }


// My Solution
const findShort = (s) => {
  const words = s.split(" ")
  let shortestWord = words[0]
  words.forEach((word) => {
    if (shortestWord.length > word.length) {
      // console.log("word", word)
      shortestWord = word
    }
  })
  return shortestWord
}

const test = "Thee quick brown fox jumps over the lazy dog."
findShort(test)
const num = [1, 2, 3]
console.log("array test ---> ", ...num)