class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (!l1 && !l2) {
    if (!carry) return null
    return new ListNode(carry, null)
  }
  const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
  let nextCarry = Math.floor(sum / 10) // Extract tens place
  let digit = sum % 10
  return new ListNode(
    digit,
    addTwoNumbers(l1?.next ?? null, l2?.next ?? null, nextCarry)
  )
}

// function getSumNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null,
//   carry: number = 0
// ): ListNode | null {
//   if (!l1 && !l2) {
//     if (!carry) return null
//     return new ListNode(carry, null)
//   }
//   const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
//   let nextCarry = Math.floor(sum / 10) // Extract tens place
//   let digit = sum % 10
//   return new ListNode(
//     digit,
//     getSumNumbers(l1?.next ?? null, l2?.next ?? null, nextCarry)
//   )
// }

// function getValue(node: ListNode): number {
//   let dataArr: number[] = []
//   let currNode = node
//   while (true) {
//     dataArr.push(currNode.val)
//     if (!currNode.next) {
//       break
//     }
//   }

//   return Number(dataArr.reverse().join())
// }

const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
)
const l2 = new ListNode(9, new ListNode(9, new ListNode(9)))

console.log(addTwoNumbers(l1, l2))
