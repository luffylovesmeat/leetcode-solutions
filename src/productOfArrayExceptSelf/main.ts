import { measureExecutionTime } from "../libs/utils"

/**
 * Calculates the product of all elements in the array except for the current element.
 * Implements an O(n) time complexity solution with O(1) extra space (excluding output array).
 * Avoids using division operation and handles negative numbers and zeros.
 *
 * @param nums - Input array of integers. The product is guaranteed to fit in 32-bit integer.
 * @returns Array where each element at index i contains product of all elements except nums[i]
 */
function productExceptSelf(nums: number[]): number[] {
  const arr: number[] = new Array(nums.length).fill(1)

  // Left pass: Calculate product of elements to the left of each index
  let curr = 1
  for (let i = 0; i < nums.length; i++) {
    arr[i] *= curr // Multiply existing value (1) with accumulated product from left
    curr *= nums[i] // Update running product for next elements
  }

  // Right pass: Calculate product of elements to the right of each index
  curr = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] *= curr // Combine left product (stored) with right product (current)
    curr *= nums[i] // Update running product for next elements (moving leftward)
  }

  return arr
}

// Test cases
console.log(measureExecutionTime(productExceptSelf, [1, 2, 3, 4])) // Expected output: [24,12,8,6]
// console.log(measureExecutionTime(productExceptSelf, [-1, 1, 0, -3, 3])) // Handles zeros and negatives
