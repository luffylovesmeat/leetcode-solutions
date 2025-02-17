export type RomanNumerals = "I" | "V" | "X" | "L" | "C" | "D" | "M"

const romanValues: Record<RomanNumerals, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function intToRoman(num: number): string {
  let rom: string[] = []
  while (num !== 0) {}
}

console.log(intToRoman(1994)) // "MCMXCIV"
