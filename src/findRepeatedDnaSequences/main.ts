export function findRepeatedDnaSequences(s: string): string[] {
  if (!s || s.length < 10) return []
  const longestOccurrence = new Map<string, 1 | 2>()
  const finalRes = new Set<string>()

  for (let i = 0; i < s.length; i++) {
    const seqString = s.slice(i, i + 10)
    if (seqString.length !== 10) break
    const isSq = longestOccurrence.get(seqString)
    if (!isSq) {
      longestOccurrence.set(seqString, 1)
      continue
    }
    if (isSq === 2) continue
    finalRes.add(seqString)
    longestOccurrence.set(seqString, 2)
    continue
  }

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
