const fruits = {
  banana: 3,
  pineapple: 2,
  apple: 10
}
// Extract the key names
const keys = Object.keys(fruits);
//by default sort() will order string alphabetically
let sortedKeys = keys.sort();
//create a new object to hold the newly sorted properties
let newObj = {}
//the order of the sorted keys will be how the new object stores data
//it will become the key of a new obj and references its original value from 
//fruits
sortedKeys.forEach(key => {
  newObj[key] = fruits[key];
})
console.log(newObj);