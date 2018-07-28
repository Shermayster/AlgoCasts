// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let result = true;
  const arr = str.split('');
  const middle = Math.floor(arr.length / 2);
  arr.forEach((item, index) => {
    if (index === middle) return;
    if(item !== arr[arr.length - 1 - index]) {
      result = false;
      return;
    }
  });
  return result;
}


module.exports = palindrome;
