const fruitsArr = ["banana", "orange", "pear"]
const tempArr = []

// if (fruitsArr.includes("orange")) {
//   console.log("array includes orange")
//   const itemIdx = fruitsArr.findIndex((fruit) => fruit === "orange")
//   console.log(itemIdx)
//   tempArr.push("orange")
//   fruitsArr.splice(itemIdx, 1)
// }

// console.log("fruitsArr:", fruitsArr)
// console.log("tempArr is:", tempArr)

const filteredArr = fruitsArr.filter((fruit) => fruit === "orange")
console.log(filteredArr)
