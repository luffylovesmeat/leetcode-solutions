/**
 * Finds all 10-letter-long sequences in DNA molecule that occur more than once.
 * Optimized approach using single pass with hash map tracking first and subsequent occurrences.
 * @param s - Input DNA sequence string (containing only A, C, G, T)
 * @returns Array of repeated DNA sequences (exactly 10 characters long)
 * @example
 * // returns ["AAAAACCCCC","CCCCCAAAAA"]
 * findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
 */
export function findRepeatedDnaSequences(s: string): string[] {
  // Early exit for invalid/short inputs
  if (!s || s.length < 10) return []

  // Tracks sequences we've seen: 1 = seen once, 2 = seen multiple times
  const longestOccurrence = new Map<string, 1 | 2>()
  // Stores final results (using Set prevents duplicates)
  const finalRes = new Set<string>()

  // Slide 10-character window through the DNA sequence
  for (let i = 0; i < s.length; i++) {
    const seqString = s.slice(i, i + 10)

    // Stop when remaining characters can't form 10-length sequence
    if (seqString.length !== 10) break

    const occurrence = longestOccurrence.get(seqString)

    if (!occurrence) {
      // First time seeing this sequence
      longestOccurrence.set(seqString, 1)
      continue
    }

    if (occurrence === 2) {
      // Already counted as duplicate, skip further processing
      continue
    }

    // Second occurrence - add to results and mark as processed
    finalRes.add(seqString)
    longestOccurrence.set(seqString, 2)
  }

  // Convert Set to array for final output
  return [...finalRes]
}
// export function findRepeatedDnaSequences(s: string): string[] {
//   if (!s || s.length < 10) return []
//   const longestOccurrence = new Map<string, number>()

//   for (let i = 0; i < s.length; i++) {
//     const seqString = s.substring(i, i + 10)
//     if (seqString.length !== 10) break
//     if (longestOccurrence.has(seqString)) {
//       const item = longestOccurrence.get(seqString)!
//       longestOccurrence.set(seqString, item + 1)
//       continue
//     }
//     longestOccurrence.set(seqString, 1)
//   }

//   const masEntry = [...longestOccurrence.keys()].filter(
//     (sq) => (longestOccurrence.get(sq) ?? 0) > 1
//   )

//   return masEntry
// }

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
