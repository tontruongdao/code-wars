

// My Solutions & CodeWars solution
function disemvowel(str) {
  const strArray = [...str]
  const tempArray = [];

  strArray.forEach((letter) => {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      return
    } else {
      tempArray.push(letter)
    }
  })

  return tempArray.join('')
}

// disemvowel("e llo")

function disVowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// disVowel(" ello")