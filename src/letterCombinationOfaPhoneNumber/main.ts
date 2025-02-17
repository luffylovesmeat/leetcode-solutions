type Keys = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

const keyVals: Record<Keys, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
}

function letterCombinations(digits: string): string[] {
  if (!digits) return []
  if (digits.length === 1) return keyVals[digits as Keys]
  const c: string[] = []

  return c
}

function backtrack(digits: string, idx: number, comb: string) {
  if (idx === digits.length) return comb
  for(let char of keyVals[digits[idx] as Keys]){
    
  }
}
