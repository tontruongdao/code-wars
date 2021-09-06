

// My Solutions
function disemvowel(str) {
  const strArray = [...str]
  const tempArray = [];

  strArray.forEach((letter) => {
    if (letter === " " || letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      return
    } else {
      tempArray.push(letter)
    }
  })

  console.log(tempArray)
  return tempArray
}

// disemvowel("e llo")

function disVowel(str) {
  const noVowel = str.replace(/[aeiou]/gi, '');
  const noWhiteSpace = noVowel.replace(/\s/g, '');

  console.log(noWhiteSpace)
  return noWhiteSpace;
}

// disVowel(" ello")