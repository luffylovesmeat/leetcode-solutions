function isMatch(s: string, p: string): boolean {
  if (!p.includes("*") && !p.includes(".")) return s === p
  if (p === ".*") return true
  
}

console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", ".*"))
