import { expect, test } from "bun:test"
import { lengthOfLongestSubstring } from "./main"

test.skip("dvdf", () => {
  expect(lengthOfLongestSubstring("dvdf")).toBe(3)
})

test.skip(" ", () => {
  expect(lengthOfLongestSubstring("1")).toBe(1)
})

test.skip("dvdf r5piu fso", () => {
  expect(lengthOfLongestSubstring("dvdf r5piu fso")).toBe(9)
})

test.skip("bbbbbb", () => {
  expect(lengthOfLongestSubstring("bbbbbb")).toBe(1)
})

test.skip("", () => {
  expect(lengthOfLongestSubstring("")).toBe(0)
})

test.skip("hello hello helelehashas lefa hsefopa s", () => {
  expect(lengthOfLongestSubstring("hello hello helelehashas lefa hsefopa s")).toBe(8)
})
