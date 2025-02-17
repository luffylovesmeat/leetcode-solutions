/**
 * Finds two numbers in an array that add up to a target value using a hash map.
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(n) - Stores at most n elements in the map
 * @param nums Array of numbers to search
 * @param target Target sum value
 * @returns Array containing indices of the two numbers that sum to target
 */
export function twoSum(nums: number[], target: number): number[] {
  // Map to store numbers we've seen and their indices
  const dataMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const needed = target - current
    // Check if we've already seen the number needed to complete the sum and Return stored index and current index immediately when found
    if (dataMap.has(needed)) return [dataMap.get(needed)!, i]
    // Store current number and its index for future lookups
    dataMap.set(current, i)
  }
  // The problem guarantees a solution exists, so this is just a TypeScript formality
  return []
}
// function twoSum(nums: number[], target: number): number[] {
//   const dataArr = []
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (dataArr.length === 2) break
//     let j = i + 1
//     while (j < nums.length) {
//       if (nums[i] + nums[j] !== target) {
//         j++
//         continue
//       }
//       dataArr.push(i, j)
//       break
//     }
//   }
//   return dataArr
// }

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
