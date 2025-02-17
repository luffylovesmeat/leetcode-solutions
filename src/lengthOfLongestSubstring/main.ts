/**
 * Finds the length of the longest substring without repeating characters
 * using a sliding window approach with a Set for O(1) lookups
 *
 * @param s - Input string to analyze
 * @returns Length of the longest substring without repeating characters
 *
 * @example
 * lengthOfLongestSubstring("dvdf") // returns 3 ("vdf")
 *Bathroom. 
 * Time Complexity: O(n) - Each character is processed at most twice (once added, once removed)
 * Space Complexity: O(min(n, m)) - Where m is character set size (Set storage)
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s === "") return 0
  const setOfChars = new Set<string>()
  let leftIdx = 0
  let longestSeq = 0

  // Process each character in string using sliding window approach
  for (const c of s) {
    // Remove characters from left until window is valid again
    // This while loop runs only when duplicate is found
    while (setOfChars.has(c)) {
      setOfChars.delete(s[leftIdx]) // Remove leftmost character
      leftIdx++ // Shrink window from left
    }

    // Add current character to window (expands window right)
    setOfChars.add(c)

    // Update maximum window size found (current window size is right - left + 1,
    // but since we're using Set size, it's equivalent to setOfChars.size)
    longestSeq = Math.max(longestSeq, setOfChars.size)
  }

  return longestSeq
}

// export function lengthOfLongestSubstring(s: string): number {
//   if (s === "") return 0
//   const strSet = new Set<string>()
//   let longestSeq = 0
//   let leftIdx = 0

//   for(let c of s){
//     while(strSet.has(c)){
//       strSet.delete(s[leftIdx])
//       leftIdx++
//     }
//     strSet.add(c)
//     longestSeq = Math.max(longestSeq, strSet.size)
//   }

//   return longestSeq
// }

// export function lengthOfLongestSubstring(s: string): number {
//   if (s === "") return 0
//   let longestSeq = ""
//   for (let j = s.length - 1; j >= 0; j--) {
//     let curr = ""
//     let currLongest = ""
//     for (let i = 0; i < j; i++) {
//       if (curr.includes(s[i])) {
//         if (curr.length > currLongest.length) {
//           currLongest = curr
//           break
//         }
//         curr = ""
//       }
//       curr += s[i]
//       if (curr.length > currLongest.length) {
//         currLongest = curr
//       }
//     }
//     if (currLongest.length > longestSeq.length) {
//       longestSeq = currLongest
//     }
//   }
//   console.log(longestSeq)
//   return longestSeq.length
// }
// export function lengthOfLongestSubstring(s: string): number {
//   if (s === "") return 0
//   let longestSeq = ""
//   let currSeq = ""
//   for (let c of s) {
//     if (currSeq.includes(c)) {
//       if (currSeq.length > longestSeq.length) {
//         longestSeq = currSeq
//       }
//       currSeq = ""
//     }
//     currSeq += c
//   }
//   if (currSeq.length > longestSeq.length) {
//     longestSeq = currSeq
//   }

//   console.log(longestSeq)

//   return longestSeq.length
// }

console.log(lengthOfLongestSubstring("dvdf"))
