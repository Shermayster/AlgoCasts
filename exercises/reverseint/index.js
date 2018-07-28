// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const result =
    n.toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(result) * Math.sign(n);
}
console.log(Number('-5'))

console.log(reverseInt(0) === 0);
console.log(reverseInt(5) === 5);
console.log(reverseInt(15) === 51);
console.log(reverseInt(90) === 9);
console.log(reverseInt(2359) === 9532);


console.log(reverseInt(-5) === -5);
console.log(reverseInt(-15) === -51);
console.log(reverseInt(-90) === -9);
console.log(reverseInt(-2359) === -9532);

module.exports = reverseInt;
