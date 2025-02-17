import { expect, test } from "bun:test"
import { twoSum } from "./main"

test("finds indices for basic case", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test("handles negative numbers", () => {
  expect(twoSum([-3, 4, 3], 0)).toEqual([0, 2])
})

test("works with duplicate numbers", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})

test("finds non-consecutive elements", () => {
  expect(twoSum([2, 5, 3, 1], 4)).toEqual([2, 3])
})

test("works with larger arrays", () => {
  expect(twoSum([1, 2, 3, 4, 5, 6, 7], 13)).toEqual([5, 6])
})

test("handles zero target with negatives", () => {
  expect(twoSum([-5, 5, 3], 0)).toEqual([0, 1])
})
