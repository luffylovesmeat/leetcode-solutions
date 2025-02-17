export function longestPalindrome(s: string): string {
  if (!s) return ""
  let lPal = ""
  let l = 0
  for (let i = 0; i < s.length; i++) {
    const newSubstr = s.slice(Math.max(i - l, 0), i + l + 1)
    if (isPalindrome(newSubstr) && newSubstr.length > lPal.length)
      lPal = newSubstr
    l++
  }

  return lPal
}

function isPalindrome(str: string) {
  return str === str.split("").reverse().join("")
}

// export function longestPalindrome(s: string): string {
//   if (!s) return ""

//   let lP = ""

//   for (let i = 0; i <= s.length; i++) {
//     for (let j = s.length - 1; j >= i; j--) {
//       const substr = s.substring(i, j + 1)
//       const subsTrPal = substr.split("").reverse().join("")
//       if (subsTrPal !== substr) continue
//       if (subsTrPal.length < lP.length) continue
//       lP = subsTrPal
//     }
//   }
//   return lP
// }
