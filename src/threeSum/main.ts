function threeSum(nums: number[]): number[][] {
  const target = 0
  if (nums.length < 3) return []
  const sorted = nums.sort((a, b) => a - b)
  const arr: number[][] = []

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1,
      k = sorted.length - 1

    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k]

      if (sum === target) {
        arr.push([nums[i], nums[j], nums[k]])

        while (j < k && nums[j] === nums[j + 1]) j++
        while (j < k && nums[k] === nums[k - 1]) k--

        j++
        k--
      } else if (sum < target) {
        j++
      } else {
        k--
      }
    }
  }
  return arr
}

// function isEqual(a1: number[], a2: number[]) {
//   const map = new Map<number, number>()
//   for (let n of a1) {
//     map.set(n, (map.get(n) ?? 0) + 1)
//   }
//   for (let n of a2) {
//     if (!map.has(n) || map.get(n) === 0) return false
//     map.set(n, map.get(n)! - 1)
//   }
//   return true
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))
// console.log(threeSum([0, 0, 0, 0]))
// console.log(threeSum([-2, 0, 0, 2, 2]))
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0, 1, 1]))
