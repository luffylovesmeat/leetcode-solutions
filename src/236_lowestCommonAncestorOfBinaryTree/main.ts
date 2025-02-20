import { measureExecutionTime } from "../libs/utils"

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// function lowestCommonAncestor(
//   root: TreeNode | null,
//   p: TreeNode | null,
//   q: TreeNode | null
// ): TreeNode | null {
//   if (root === null) return null

//   const leftHasPQ = lowestCommonAncestor(root.left, p, q)
//   const rightHasPQ = lowestCommonAncestor(root.right, p, q)

//   if (
//     (!!leftHasPQ && !!rightHasPQ) ||
//     root.val === p?.val ||
//     root.val === q?.val
//   )
//     return root

//   return leftHasPQ ?? rightHasPQ
// }

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const { currPath: pChain } = getChainUpToNode(root, p)
  const { currPath: qChain } = getChainUpToNode(root, q)
  let lowestCommonAncestor: number | null = null

  let i = 0
  while (i < pChain.length && i < qChain.length) {
    if (pChain[i] !== qChain[i]) break
    lowestCommonAncestor = pChain[i++]
  }

  return new TreeNode(lowestCommonAncestor!)
}

function getChainUpToNode(
  n: TreeNode | null,
  t: TreeNode | null
): { currPath: number[]; found: boolean } {
  const arr: number[] = []
  if (!n || !t) return { currPath: arr, found: false }
  arr.push(n.val)
  if (n.val === t.val) return { currPath: arr, found: true }
  const { currPath: leftPath, found: leftFound } = getChainUpToNode(n.left, t)
  if (leftFound) return { currPath: [...arr, ...leftPath], found: true }
  const { currPath: rightPath, found: rightFound } = getChainUpToNode(
    n.right,
    t
  )
  if (rightFound) return { currPath: [...arr, ...rightPath], found: true }
  return { currPath: arr, found: false }
}

function createBinaryTreeFromArray(data: (number | null)[]): TreeNode | null {
  if (data.length === 0 || data[0] === null) return null

  const root = new TreeNode(data[0])
  const queue: TreeNode[] = [root]

  let i = 1
  while (i < data.length) {
    const node = queue.shift()! // Get the next available parent node

    // Assign left child
    if (i < data.length && data[i] !== null) {
      node.left = new TreeNode(data[i]!)
      queue.push(node.left)
    }
    i++

    // Assign right child
    if (i < data.length && data[i] !== null) {
      node.right = new TreeNode(data[i]!)
      queue.push(node.right)
    }
    i++
  }

  return root
}

const tree = createBinaryTreeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
const p = new TreeNode(5)
// const q = new TreeNode(4)
const q = new TreeNode(1)

console.log(measureExecutionTime(lowestCommonAncestor, tree, p, q))
