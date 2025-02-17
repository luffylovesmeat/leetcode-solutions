const whiteList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const validFirst = ["+", "-", ...whiteList]

function myAtoi(s: string): number {
  const txt = s.trim()
  if (!validFirst.includes(txt[0])) return 0
  const isNegative = txt[0] === "-"

  let num = 0
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i]
    if (i === 0 && (c === "-" || c === "+")) continue
    if (!whiteList.includes(c)) break
    num = num * 10 + Number(c)
  }

  if (isNegative) {
    if (num > 2 ** 31) return -(2 ** 31)
    return -num
  }
  if (num > 2 ** 31 - 1) return 2 ** 31 - 1
  return num
}

console.log(myAtoi("   -247309"))
console.log(myAtoi("   -43"))
console.log(myAtoi("1337sha dof798"))
console.log(myAtoi("0-1"))
