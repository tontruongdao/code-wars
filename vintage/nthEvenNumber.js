// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466


// ##### My Solution
function nthEven(num){
  const next = num * 2;
  const res = next - 2;
  return res;
}

nthEven(50)