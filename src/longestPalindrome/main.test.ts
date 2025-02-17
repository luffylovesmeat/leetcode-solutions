import { expect, test } from "bun:test"
import { longestPalindrome } from "./main"

test("babad", () => {
  expect(longestPalindrome("babad")).toSatisfy(
    (val: string) => val === "bab" || val === "aba"
  )
})

test(" ", () => {
  expect(longestPalindrome(" ")).toBe(" ")
})

test("cbbd", () => {
  expect(longestPalindrome("cbbd")).toBe("bb")
})

test("bbbbbb", () => {
  expect(longestPalindrome("bbbbbb")).toBe("bbbbbb")
})

test("", () => {
  expect(longestPalindrome("")).toBe("")
})

// test.skip("hello hello helelehashas lefa hsefopa s", () => {
//   expect(longestPalindrome("hello hello helelehashas lefa hsefopa s")).toBe(8)
// })
