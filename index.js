function calculateTax(amount) {
  console.log (amount * 0.10)
}

function convertToUpperCase(text) {
console.log (text.toUpperCase())
}

function findMaximum(num1, num2) {
  console.log ( Math.max(num1, num2))
}

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  console.log (word === reversed)
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  console.log( originalPrice * (1 - discountPercentage / 100))
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };