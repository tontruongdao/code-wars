// CW Solution
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// My Solution
const highestAndLowest = (str) => {
  const numberArr = str.split(/[ ,]+/).join(',').split(',').map((str) => parseInt(str))
  let highest = numberArr[0];
  let lowest = numberArr[0];

  numberArr.forEach(element => {
    if(element < lowest) {
      lowest = element
    }
    if(element > highest) {
      highest = element
    }
  });
  return (`${highest} ${lowest}`)
};

highestAndLowest("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
