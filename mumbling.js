// My Solution
const accum = (str) => {
  console.log(str)
}


// Remove white space from string
const testStr = "hello World"
const noWhiteSpaceStr = testStr.replace(/\s/g, "");
// console.log(testStr, noWhiteSpaceStr)


// Convert string to Array
const wordArr = noWhiteSpaceStr.split("")
// console.log(wordArr)


// Function returning array of string with Uppercase first character
const returnAdjustedChar = (strArr) => {
  return strArr.map((char, index) => {
    console.log(index)
    return char.toUpperCase() + char.toLowerCase().repeat(index)
  })
} 
// console.log(returnAdjustedChar(["a", "x", "Z"]))


// Convert an Array of String to a String
const convertTestArr = ["a", "b", "c"]
const resultTestArr = convertTestArr.join("-")
console.log(resultTestArr)