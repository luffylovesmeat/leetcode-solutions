function threeSumClosest(nums: number[], target: number): number {
  const sorted = nums.sort((a, b) => a - b)
  let smallestSum = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1,
      k = sorted.length - 1

    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k]
      if (sum === target) {
        smallestSum = sum
        break
      }
      const diff = Math.abs(sum - target)
      if (diff < Math.abs(smallestSum - target)) smallestSum = sum
      if (sum < target) j++
      else k--
    }
    if (smallestSum == target) break
  }
  return smallestSum
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2))
console.log(threeSumClosest([-4, 2, 2, 3, 3, 3], 0))
console.log(threeSumClosest([0, 0, 0], 1))
