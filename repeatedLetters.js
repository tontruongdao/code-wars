/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/


// CW Solution

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}


// My Solution

// const isIsogram = (str) => {
//   const letters = str.split("")
//   const charMap = {}
//   let isIso = true

//   if (!letters) {
//     return isIso
//   }

//   for (letter of letters) {
//     if (!!charMap[letter.toLowerCase()]) {
//       console.log("if loop")
//       isIso = false
//       break
//     } else {
//       console.log("else loop")
//       charMap[letter] = 1
//       isIso = true
//     }
//   }
//   console.log("isIso", isIso)
//   return isIso;
// }

const test = "Dermatoglyphics"

// assert.strictEqual( isIsogram("Dermatoglyphics"), true );
// assert.strictEqual( isIsogram("isogram"), true );
// assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
// assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
// assert.strictEqual( isIsogram("isIsogram"), false );
// assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );

isIsogram(test)