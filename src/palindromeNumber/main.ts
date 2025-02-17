/**
 * Determines if a number is a palindrome (reads same forward and backward)
 * @param x - The number to check
 * @returns Boolean indicating if the number is a palindrome
 */
function isPalindrome(x: number): boolean {
  // Negative numbers can't be palindromes
  if (x < 0) return false
  
  // Store original number and initialize reversed number
  let y = x
  let res = 0
  
  // Reverse the digits of the number
  while (y !== 0) {
    // Build reversed number digit by digit:
    // 1. Multiply current reversed number by 10 to shift digits left
    // 2. Add last digit of y (from modulus operation)
    // 3. Remove last digit from y using integer division
    res = res * 10 + (y % 10)
    y = Math.trunc(y / 10)
  }
  
  // Check if reversed number matches original
  return res === x
}

// Test case: 121 is a palindrome (121 -> 121)
console.log(isPalindrome(121))
