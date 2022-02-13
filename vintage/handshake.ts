// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
// Every year he takes photos of farmers handshaking. 
// Johnny knows that no two farmers handshake more than once. 
// He also knows that some of the possible handshake combinations may not happen.
// However, Johnny would like to know the minimal amount of people 
// that participated this year just by counting all the handshakes.
// Help Johnny by writing a function, that takes the amount of handshakes 
// and returns the minimal amount of people needed 
// to perform these handshakes (a pair of farmers handshake only once).


// CW Solition
const getParticipants = (handshakes: number): number => {
  let n: number = 1;
  while (handshakes > (n * (n - 1)) / 2) {
    ++n;
  }

  return n;
}

// My Solution
// const factorial = (num: number): number => {
//   const factors: number[] = [1, 1];

//   if (num < 0 || num === 0 || num === 1) {
//     return factors[0];
//   } else if (!factors[num]) {
//     for (let i = 2; i <= num; i++) {
//       if (!factors[i]) {
//         factors.push(factors[i - 1] * i)
//       }
//     }
//   }

//   return factors[num]
// }

// const getParticipants = (handshakes: number): number => {
//   let minParticipants = 1;
//   let minHandshakes = 0;

//   while (handshakes > minHandshakes) {
//     minParticipants += 1

//     if (minParticipants === 2) {
//       minHandshakes = 1
//     } else if (minParticipants > 2) {
//       const numerator = factorial(minParticipants)
//       const firstDenominator = factorial(2)
//       const secondDenominator = factorial(minParticipants - 2)

//       minHandshakes = (numerator / (firstDenominator * secondDenominator))
//     }
//   }
//   return minParticipants
// }

console.log("---> result", getParticipants(711))