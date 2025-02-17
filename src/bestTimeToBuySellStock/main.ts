import { measureExecutionTime } from "../libs/utils"

// function maxProfit(prices: number[]): number {
//   let maxProfit = 0
//   let i = 0
//   let j = 1

//   while (j < prices.length) {
//     if (prices[i] < prices[j])
//       maxProfit = Math.max(prices[j] - prices[i], maxProfit)
//     else i = j
//     j++
//   }

//   return maxProfit
// }

function maxProfit(prices: number[]): number {
  let mP = 0
  let i = 0
  let j = 1
  while (j < prices.length) {
    if (prices[j] > prices[i]) {
      mP = Math.max(prices[j] - prices[i], mP)
    } else i = j

    j++
  }

  return mP
}

console.log(measureExecutionTime(maxProfit, [7, 1, 5, 3, 6, 4]))
