// 32-bit signed integer range constants
const IMax = 2 ** 31 - 1 // Maximum 32-bit integer value (2,147,483,647)
const IMin = -(2 ** 31) // Minimum 32-bit integer value (-2,147,483,648)

/**
 * Reverses the digits of a 32-bit signed integer while checking for overflow
 * @param x - The integer to reverse
 * @returns The reversed integer, or 0 if reversed value exceeds 32-bit range
 */
function reverse(x: number): number {
  let result = 0
  while (x !== 0) {
    // Extract last digit and reduce x by factor of 10
    let digit = x % 10
    x = Math.trunc(x / 10)

    // Check for positive overflow:
    // - If current result > IMax/10, next multiplication will overflow
    // - If equal to IMax/10, last digit must be <= 7 (since IMax ends with 7)
    if (
      result > Math.trunc(IMax / 10) ||
      (result === Math.trunc(IMax / 10) && result % 10 > 7)
    )
      return 0

    // Check for negative overflow:
    // - If current result < IMin/10, next multiplication will underflow
    // - If equal to IMin/10, last digit must be >= -8 (since IMin ends with -8)
    if (
      result < Math.trunc(IMin / 10) ||
      (result === Math.trunc(IMin / 10) && result % 10 < -8)
    )
      return 0

    // Build reversed number digit by digit
    result = result * 10 + digit
  }
  return result
}

// function reverse(x: number): number {
//   const isNegative = x < 0
//   const num = Number(String(Math.abs(x)).split("").reverse().join(""))
//   if (isNegative) {
//     if (num > 2 ** 31) return 0
//     return -num
//   }
//   if (num > 2 ** 31 - 1) return 0
//   return num
// }

// console.log(reverse(1534236469))
// console.log(reverse(1563847412))
// console.log(reverse(-2147483648))
console.log(reverse(-1563847412))
// console.log(reverse(-123))
