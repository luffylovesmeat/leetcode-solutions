// export function minSubArrayLen(target: number, nums: number[]): number {
//   let shortest: null | number = null
//   for (let i = 0; i < nums.length; i++) {
//     let currSum = nums[i]
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = currSum + nums[j]
//       if (sum < target) continue
//         currSum = sum
//         seq.push(nums[j])
//         break
//     }
    
//   }
//   return shortest ?? 0
// }

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
