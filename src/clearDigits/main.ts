// * Slower
// function clearDigits(s: string): string {
//   let i = 0
//   const stack: string[] = []
//   while (i < s.length) {
//     const c = s[i]
//     if (isNaN(Number(c))) {
//       stack.push(c)
//       i++
//       continue
//     }
//     stack.pop()
//     i++
//   }
//   return stack.join("")
// }

function clearDigits(s: string): string {
  let i = 0
  let lastIdx: number | null = null
  const str = s.split("")
  while (i < str.length) {
    const c = str[i]
    if (isNaN(Number(c))) {
      lastIdx = i
      i++
      continue
    }
    str.splice(i, 1)
    lastIdx !== null && str.splice(lastIdx, 1)
    i = 0
    continue
  }
  return str.join("")
}

console.log(clearDigits("abc"))
console.log(clearDigits("cb34"))
console.log(clearDigits("34"))
