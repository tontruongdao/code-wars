

const isIsogram = (str) => {
  const letters = str.split("")
  const charMap = {}
  let isIso = false

  for (letter of letters) {
    if (charMap[letter]) {
      isIso = true
      break
    } else {
      charMap[letter] = 1
    }
  }
  console.log("isIso", isIso)
  return isIso;
}

const test = "hel"

isIsogram(test)