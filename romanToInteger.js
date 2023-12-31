// const values = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// function romanToInt(string = "") {
//   const reversedString = string.split("").reverse();
//   let sum = 0;
//   for (let i = 0; i < reversedString.length; i++) {
//     sum += values[reversedString[i]];
//   }

//   return sum;
// }

// romanToInt("LVIII");

const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(string) {
  const reversedString = string.split("").reverse();
  let sum = 0;
  let current;
  let previous = 0;
  for (let i = 0; i < reversedString.length; i++) {
    current = values[reversedString[i]];
    if (current >= previous) {
      sum += current;
    } else sum -= current;

    previous = current;
  }

  return sum;
}

const result = romanToInt("III");

console.log(result);
