/**
 * Represents a node in a singly-linked list.
 * @class
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * Merges two sorted linked lists into one sorted linked list recursively.
 * @function
 * @param {ListNode | null} list1 - First sorted linked list
 * @param {ListNode | null} list2 - Second sorted linked list
 * @returns {ListNode | null} - Merged sorted linked list
 *
 * @example
 * mergeTwoLists(1->3->4, 2->6->8) returns 1->2->3->4->6->8
 *
 * Approach:
 * 1. Base cases:
 *    - If both lists are empty, return null
 *    - If one list is empty, return the other
 * 2. Compare heads of both lists
 * 3. Choose smaller node as current head
 * 4. Recursively merge remaining elements
 * 5. Link current node with merged result of remaining nodes
 *
 * Time Complexity: O(n + m) where n and m are lengths of input lists
 * Space Complexity: O(n + m) due to recursion stack
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Handle base cases for empty lists
  if (!list1 && !list2) return null
  if (!list1) return list2
  if (!list2) return list1

  // Determine which node has smaller value
  const isTrue = list1.val < list2.val
  const smallerNode = isTrue ? list1 : list2
  const biggerNode = isTrue ? list2 : list1

  // Recursively build merged list by:
  // 1. Using smaller node as current node
  // 2. Merging remainder of smaller node's list with bigger node's list
  return new ListNode(
    smallerNode?.val,
    mergeTwoLists(smallerNode?.next, biggerNode)
  )
}

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   if (!list1 && !list2) return null
//   const isTrue = (list1?.val ?? 101) < (list2?.val ?? 101)
//   const smallerNode = isTrue ? list1 : list2
//   const biggerNode = isTrue ? list2 : list1
//   return new ListNode(
//     smallerNode?.val,
//     mergeTwoLists(smallerNode?.next ?? null, biggerNode)
//   )
// }

const l1 = new ListNode(
  1,
  new ListNode(
    3,
    new ListNode(
      4,
      new ListNode(5, new ListNode(7, new ListNode(9, new ListNode(11))))
    )
  )
)
const l2 = new ListNode(2, new ListNode(6, new ListNode(8)))

console.log(mergeTwoLists(l1, l2))
