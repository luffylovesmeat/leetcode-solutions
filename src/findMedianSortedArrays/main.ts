/**
 * Finds the median of two sorted arrays in O((m+n) log(m+n)) time complexity
 * @param nums1 - First sorted array of numbers
 * @param nums2 - Second sorted array of numbers
 * @returns The median value of the combined arrays
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Merge both arrays and sort them
  const newArr = [...nums1, ...nums2]
  const sortedArr = newArr.sort((a, b) => a - b)

  // Calculate array length and check if even/odd
  const n = sortedArr.length
  const isEven = n % 2 === 0

  // Handle even-length array case
  if (isEven) {
    // Get two middle elements and average them
    const u = sortedArr[n / 2 - 1]
    const v = sortedArr[n / 2]
    return (u + v) / 2
  }
  // Handle odd-length array case
  else {
    // Return middle element directly
    return sortedArr[(n + 1) / 2 - 1]
  }
}

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const sortedArr: number[] = []
//   let i = 0,
//     j = 0
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] < nums2[j]) {
//       sortedArr.push(nums1[i++])
//     } else {
//       sortedArr.push(nums2[j++])
//     }
//   }
//   sortedArr.push(...nums1.slice(i), ...nums2.slice(j))
//   const n = sortedArr.length
//   const isEven = n % 2 === 0
//   if (isEven) {
//     const u = sortedArr[n / 2 - 1]
//     const v = sortedArr[n / 2]
//     return (u + v) / 2
//   } else {
//     console.log((n + 1) / 2 - 1)
//     return sortedArr[(n + 1) / 2 - 1]
//   }
// }

// console.log(findMedianSortedArrays([1, 3], [2]))

console.log(
  findMedianSortedArrays(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  )
)
