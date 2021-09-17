// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
  const numStr = num.toString()
  // console.log("numstring is:", numStr, typeof(numStr))
  const strArr = numStr.split("")
  // console.log(strArr)
  const squareArr = strArr.map((item) => {
    return Math.pow(parseInt(item),2)
  })
  console.log(parseInt(squareArr.reduce((initialInt, currentInt) => initialInt.toString() + currentInt.toString())))
  return parseInt(squareArr.reduce((initialInt, currentInt) => initialInt.toString() + currentInt.toString()))
}

squareDigits(84)