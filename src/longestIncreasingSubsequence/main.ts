import { measureExecutionTime } from "../libs/utils"

// * LIS With Binary Search + DP Method
function lengthOfLIS(nums: number[]): number {
  const res: number[] = []
  for (let n of nums) {
    const last = res[res.length - 1]
    if (last === n) continue
    else if (!last || last < n) res.push(n)
    else {
      const idx = binarySearch(res, n)
      res[idx] = n
    }
  }
  return res.length
}

// * LIS With DP
function lengthOfLISDP(nums: number[]): number {
  const res = new Array(nums.length).fill(1)

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && res[i] < res[j] + 1) {
        res[i] = res[j] + 1
      }
    }
  }

  return Math.max(...res)
}

function binarySearch(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
): number {
  if (left > right) return left
  const mid = Math.trunc((left + right) / 2)
  if (arr[mid] === target) return mid
  else if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1)
  else return binarySearch(arr, target, mid + 1, right)
}

console.log(measureExecutionTime(lengthOfLIS, [10, 9, 2, 5, 3, 7, 101, 18]))
console.log(measureExecutionTime(lengthOfLISDP, [10, 9, 2, 5, 3, 7, 101, 18]))
