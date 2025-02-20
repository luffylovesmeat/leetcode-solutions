import { measureExecutionTime } from "../libs/utils"

// * Brute Force
// function sortedSquares(nums: number[]): number[] {
//   return nums.map((n) => n * n).sort((a, b) => a - b)
// }

// * Optimized (Two Pointer Approach)
function sortedSquares(nums: number[]): number[] {
  const res = new Array(nums.length)
  let i = 0,
    j = nums.length - 1,
    pos = nums.length - 1
  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) res[pos--] = nums[i] * nums[i++]
    else res[pos--] = nums[j] * nums[j--]
  }
  return res
}

// * Easy to Understand ( Two Pointer Approach)
// function sortedSquares(nums: number[]): number[] {
//   const res = new Array(nums.length)
//   let i = 0,
//       j = nums.length - 1,
//       pos = nums.length - 1
//   while (i <= j) {
//       if (Math.abs(nums[i]) > Math.abs(nums[j])) {
//           res[pos--] = Math.pow(nums[i++], 2)
//       } else {
//           res[pos--] = Math.pow(nums[j--], 2)
//       }
//   }
//   return res
// }

console.log(measureExecutionTime(sortedSquares, [-4, -1, 0, 3, 10]))
