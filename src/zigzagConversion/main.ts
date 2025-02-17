function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  let isReverse = false
  let currRow = 1
  const data = new Array<string>(numRows).fill("")
  for (let c of s) {
    if (!isReverse) {
      data[currRow - 1] = data[currRow - 1] + c
      if (currRow === numRows) {
        currRow--
        isReverse = !isReverse
        continue
      }
      currRow++
      continue
    }
    data[currRow - 1] = data[currRow - 1] + c
    if (currRow === 1) {
      currRow++
      isReverse = !isReverse
      continue
    }
    currRow--
  }

  return data.join("")
}
// function convert(s: string, numRows: number): string {
//   if (numRows === 1) return s
//   let isReverse = false
//   let currRow = 1
//   const data = new Array<string>(numRows).fill("")
//   for (let c of s) {
//     if (!isReverse) {
//       data[currRow - 1] = data[currRow - 1] + c
//     } else {
//       data[currRow - 1] = data[currRow - 1] + c
//     }
//     if (currRow === numRows || currRow === 1) {
//       isReverse = !isReverse
//     }
//     isReverse ? currRow++ : currRow--
//   }

//   return data.join("")
// }

console.log(convert("PAYPALISHIRING", 3))
// console.log(convert("PAYPALISHIRING", 4))
