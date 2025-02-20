import { measureExecutionTime } from "../libs/utils"

function search(
  nums: number[],
  target: number,
  start: number = 0,
  end: number = nums.length - 1
): number {
  const mid = Math.trunc((end + start) / 2)

  if (nums[mid] === target) return mid

  if (end <= start) return -1
  if (nums[start] <= nums[mid]) {
    if (nums[start] <= target && target < nums[mid])
      return search(nums, target, start, mid - 1)
    return search(nums, target, mid + 1, end)
  } else {
    if (nums[mid] < target && target <= nums[end])
      return search(nums, target, mid + 1, end)
    return search(nums, target, start, mid - 1)
  }
}

console.log(measureExecutionTime(search, [4, 5, 6, 7, 0, 1, 2], 3))
console.log(measureExecutionTime(search, [4, 5, 6, 7, 0, 1, 2], 0))
console.log(measureExecutionTime(search, [1], 3))
console.log(measureExecutionTime(search, [1, 3], 3))
console.log(measureExecutionTime(search, [1, 3, 5], 6))
console.log(measureExecutionTime(search, [5, 1, 3], 3))
console.log(measureExecutionTime(search, [5, 1, 3], 5))
