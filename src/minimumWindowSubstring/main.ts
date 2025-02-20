import { measureExecutionTime } from "../libs/utils"

// function minWindow(s: string, t: string): string {
//   if (t.length > s.length) return ""
//   const tMap = new Map<string, number>()
//   ;[...s].forEach((c) => tMap.set(c, (tMap.get(c) ?? 0) + 1))

//   let left = 0,
//     minStart = 0,
//     req = tMap.size,
//     minLen = Number.MAX_SAFE_INTEGER

//   const wMap = new Map<string, number>()

//   for (let right = 0; right < s.length; right++) {
//     const c = s[right]
//     wMap.set(c, (wMap.get(c) ?? 0) + 1)

//     if (tMap.has(c) && tMap.get(c) === wMap.get(c)) req--

//     while (req === 0) {
//       const wSize = right - left + 1
//       if (wSize < minLen) {
//         minLen = wSize
//         minStart = left
//       }

//       const leftChar = s[left]
//       wMap.set(leftChar, (wMap.get(leftChar) ?? 0) - 1)

//       if (tMap.has(leftChar) && wMap.get(leftChar)! < tMap.get(leftChar)!) req++

//       left++
//     }
//   }

//   return minLen === Number.MAX_SAFE_INTEGER
//     ? ""
//     : s.substring(minStart, minStart + minLen)
// }

function minWindow(s: string, t: string): string {
  if (s.length < t.length) return ""
  const tMap = new Map<string, number>()
  for (const c of t) tMap.set(c, (tMap.get(c) ?? 0) + 1)
  let minLen = Number.MAX_SAFE_INTEGER,
    req = tMap.size,
    minStart = 0,
    left = 0

  const wMap = new Map<string, number>()

  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    wMap.set(c, (wMap.get(c) ?? 0) + 1)

    if (tMap.has(c) && tMap.get(c) === wMap.get(c)) req--
    while (req === 0) {
      const wSize = right - left + 1
      if (wSize < minLen) {
        minLen = wSize
        minStart = left
      }

      const cLeft = s[left]
      wMap.set(cLeft, (wMap.get(cLeft) ?? 0) - 1)

      if (tMap.has(cLeft) && wMap.get(cLeft)! < tMap.get(cLeft)!) {
        req++
      }

      left++
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER
    ? ""
    : s.substring(minStart, minStart + minLen)
}

console.log(measureExecutionTime(minWindow, "ADOBERODEBANC", "ABC"))
// console.log(measureExecutionTime(minWindow, "b", "b"))
