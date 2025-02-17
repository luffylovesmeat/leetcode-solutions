class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head
  const length = getLength(head, 0)
  let usableK = k % length
  console.log({k, usableK})
  while (usableK > 0) {
    let tail = getTail(head)
    const poppedHead = popLastElement(head)
    head = new ListNode(tail?.val, poppedHead)
    usableK--
  }
  return head
}

function getTail(head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  return getTail(head.next)
}
function getLength(head: ListNode | null, length: number): number {
  length += 1
  if (!head?.next) return length
  return getLength(head.next, length)
}
function popLastElement(head: ListNode | null): ListNode | null {
  if (!head?.next) return null
  return new ListNode(head.val, popLastElement(head.next))
}

const node = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
)

console.log(rotateRight(node, 7))
