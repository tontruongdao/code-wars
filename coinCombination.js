/*
The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickels ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25

So for example:
coinCombo(6) --> [1, 1, 0, 0]
*/

const coinCombo = (cents) => {
  let totalCents = cents;
  const coinArr = [25, 10, 5, 1];
  const resultArr = new Array(4).fill(0)

  coinArr.forEach((coin, index) => {
    const coinInt = Math.floor(totalCents / coin, 0);
    const coinRemainder = totalCents % coin;

    resultArr[index] = coinInt;
    totalCents = coinRemainder;
  })

  return resultArr.reverse()
}

coinCombo(120)