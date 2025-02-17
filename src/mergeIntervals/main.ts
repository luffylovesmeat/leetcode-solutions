function merge(intervals: number[][]): number[][] {
  const pairs: number[][] = []
  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = i; j < intervals.length; j++) {}
  }

  return pairs
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)
