/**
 * Represents a node in a singly-linked list
 * @class
 * @property {number} val - Node value
 * @property {ListNode | null} next - Reference to next node
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
 * Merges k sorted linked lists using a divide-and-conquer approach
 * @function
 * @param {Array<ListNode | null>} lists - Array of linked list heads
 * @returns {ListNode | null} - Merged linked list head
 *
 * @description
 * Implements merge sort strategy for linked lists:
 * 1. Base cases for empty, single, and two lists
 * 2. Split array of lists into halves recursively
 * 3. Merge divided halves using mergeTwoLists
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1])
  const mid = Math.trunc(lists.length / 2)
  const left = mergeKLists(lists.slice(0, mid))
  const right = mergeKLists(lists.slice(mid))
  return mergeTwoLists(left, right)
}

// Alternative O(nk) implementation (commented out for comparison):
// Uses sequential pairwise merging - less efficient than divide-and-conquer O(n log k)
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   if (lists.length === 0) return null
//   let def = lists[0]
//   for (let i = 1; i < lists.length; i++) {
//     def = mergeTwoLists(def, lists[i])
//   }
//   return def
// }

/**
 * Merges two sorted linked lists recursively
 * @function
 * @param {ListNode | null} list1 - Head of first sorted list
 * @param {ListNode | null} list2 - Head of second sorted list
 * @returns {ListNode | null} - Merged list head
 *
 * @description
 * 1. Handles base cases for empty lists
 * 2. Compares current nodes
 * 3. Recursively builds merged list by connecting smaller node
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  console.log()
  if (!list1 && !list2) return null
  if (!list1) return list2
  if (!list2) return list1

  const isTrue = list1.val < list2.val
  const smallerNode = isTrue ? list1 : list2
  const biggerNode = isTrue ? list2 : list1

  return new ListNode(
    smallerNode?.val,
    mergeTwoLists(smallerNode?.next, biggerNode)
  )
}

// Test case lists
const l1 = new ListNode( // 1 -> 3 -> 4 -> 5 -> 7 -> 9 -> 11
  1,
  new ListNode(
    3,
    new ListNode(
      4,
      new ListNode(5, new ListNode(7, new ListNode(9, new ListNode(11))))
    )
  )
)
const l2 = new ListNode(1, new ListNode(4, new ListNode(5))) // 1 -> 4 -> 5
const l3 = new ListNode(1, new ListNode(3, new ListNode(4))) // 1 -> 3 -> 4
const l5 = new ListNode(2, new ListNode(6)) // 2 -> 6
const l6 = new ListNode(12, new ListNode(13, new ListNode(14))) // 12 -> 13 -> 14
// const l4 = new ListNode(15, new ListNode(16, new ListNode(18)))

// console.log(mergeKLists([l1, l2, l3, l4]))
console.log(mergeKLists([l2, l3, l5]))
// console.log(mergeKLists([l1, l2]))
