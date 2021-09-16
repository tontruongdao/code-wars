// Code Wars Solution
function halvingSum(n) {
  var sum = 0;
  while(n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}

// My Solution
const tempFunction = (num) => {
    let tempIndex = num;
    let sum = num;

    while(tempIndex > 0) {
        tempIndex = Math.floor(tempIndex/2)
        sum = sum + tempIndex
        console.log(num, sum)
    }

    return sum
}
tempFunction(25)
