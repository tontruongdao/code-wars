// Code Wars Solution
function accum(s) {
  console.log(s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'))
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
accum("codewars")

// My Solution
const accumulate = (str) => {
  const noWhiteSpaceString = str.replace(/\s/g, "");
  const charArray = noWhiteSpaceString.split("")
  const ajustedCaseArray = charArray.map((char, index) => (
    char.toUpperCase() + char.toLowerCase().repeat(index)
  ))
  // console.log(ajustedCaseArray.join("-"))

  return ajustedCaseArray.join("-")
}
// accumulate("hatter")

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
    // console.log(index)
    return char.toUpperCase() + char.toLowerCase().repeat(index)
  })
} 
// console.log(returnAdjustedChar(["a", "x", "Z"]))


// Convert an Array of String to a String
const convertTestArr = ["a", "b", "c"]
const resultTestArr = convertTestArr.join("-")
// console.log(resultTestArr)