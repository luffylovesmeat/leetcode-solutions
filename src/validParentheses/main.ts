// Type representing all valid bracket characters
type Bracket = "(" | ")" | "{" | "}" | "[" | "]"

// Bidirectional mapping of bracket pairs for quick lookup
const validPairs: Record<Bracket, Bracket> = {
  "(": ")",
  ")": "(",
  "{": "}",
  "}": "{",
  "[": "]",
  "]": "[",
}

// Helper arrays for quick bracket type identification
const openingBrackets = ["(", "{", "["]
const closingBrackets = [")", "}", "]"]

/**
 * Validates if a string of brackets is properly nested and closed
 * @param s - Input string containing only brackets
 * @returns Boolean indicating if the bracket arrangement is valid
 *
 * Algorithm:
 * 1. Immediate fail if string starts with closing or ends with opening bracket
 * 2. Use a stack to track expected closing brackets
 * 3. For each character:
 *    - Push opening brackets to stack (expect their closing pair)
 *    - For closing brackets, check if they match the most recent opening
 * 4. Final validation checks if all brackets were properly closed
 */
function isValid(s: string): boolean {
  // Quick check for obvious mismatches at boundaries
  if (
    openingBrackets.includes(s[s.length - 1]) ||
    closingBrackets.includes(s[0])
  )
    return false

  // Stack stores expected closing order (LIFO structure)
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i] as Bracket

    // Immediate fail if first character is closing bracket
    if (i === 0 && closingBrackets.includes(c)) return false

    // Process opening brackets
    if (openingBrackets.includes(c)) stack.push(c)

    // Process closing brackets
    if (closingBrackets.includes(c)) {
      const lastElem = stack[stack.length - 1]
      const requiredOpening = validPairs[c]

      // Mismatch if closing doesn't match most recent opening
      if (lastElem !== requiredOpening) return false
      stack.pop()
    }
  }

  // Valid if stack is empty (all brackets properly closed)
  return stack.length === 0 
}

console.log(isValid("{}"))
console.log(isValid("[{}]"))
console.log(isValid("()[{}]"))
console.log(isValid("(){}]"))
console.log(isValid("](){}]"))
console.log(isValid("](){}["))
