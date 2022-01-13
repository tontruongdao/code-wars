// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
// Every year he takes photos of farmers handshaking. 
// Johnny knows that no two farmers handshake more than once. 
// He also knows that some of the possible handshake combinations may not happen.
// However, Johnny would like to know the minimal amount of people 
// that participated this year just by counting all the handshakes.
// Help Johnny by writing a function, that takes the amount of handshakes 
// and returns the minimal amount of people needed 
// to perform these handshakes (a pair of farmers handshake only once).

const getParticipants = (handshakes: number): number => {
  let binomialConst = 1;
  let minHandshakes = 0;

  const binFactors: number[] = [1, 1]

  const factorial = (num: number): number => {
    console.log("all factors are --->", binFactors)
    if (num < 0) {
      return 1
    } else if (!binFactors[num]) {
      binFactors[num] = num * factorial(num - 1)
    }

    console.log("bin factor is", binFactors[num])
    return binFactors[num]
  }

  while (handshakes > minHandshakes) {
    //   const numerator = 1
    //   const firstDenominator = 1
    //   const secondDenominator = 1

    //   const newBinomialConst = (numerator / (firstDenominator * secondDenominator))
    minHandshakes += 1
    console.log("min handshake ---> ", minHandshakes)
  }
  return binomialConst
}

// const result = getParticipants(10)
// console.log("result is ---->", result)

const factors: number[] = [1, 1]

const factorial = (num: number): number => {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * factorial(num - 1));
  }
}

factorial(5)