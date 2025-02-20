import { measureExecutionTime } from "../libs/utils"

function findKthLargest(nums: number[], k: number): number {
  const heap = new MaxHeap(nums)
  let kth = 0
  for (let i = 0; i < k; i++) {
    kth = heap.pop() ?? 0
  }
  return kth
}

class MaxHeap {
  private heap: number[]

  constructor(arr: number[] = []) {
    this.heap = arr
    arr.length > 0 && this.buildHeap()
  }

  private buildHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.bubbleDown(i)
    }
  }

  private swap(i: number, j: number) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }

  private getLeftChild(i: number) {
    return 2 * i + 1
  }

  private getRightChild(i: number) {
    return 2 * i + 2
  }

  private bubbleUp() {
    let currIndex = this.heap.length - 1
    while (currIndex > 0) {
      const parentIdx = this.getParentIndex(currIndex)
      if (this.heap[currIndex] > this.heap[parentIdx]) {
        this.swap(currIndex, parentIdx)
        currIndex = parentIdx
      } else {
        break
      }
    }
  }

  private bubbleDown(idx: number) {
    const length = this.heap.length
    let currIndex = idx
    while (true) {
      const leftIdx = this.getLeftChild(currIndex),
        rightIdx = this.getRightChild(currIndex)

      let largestIdx = currIndex

      if (leftIdx < length && this.heap[leftIdx] > this.heap[largestIdx]) {
        largestIdx = leftIdx
      }

      if (rightIdx < length && this.heap[rightIdx] > this.heap[largestIdx]) {
        largestIdx = rightIdx
      }

      if (largestIdx !== currIndex) {
        this.swap(largestIdx, currIndex)
        currIndex = largestIdx
      } else break
    }
  }

  public peek() {
    return this.heap[0]
  }

  public pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()
    const max = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.bubbleDown(0)
    return max
  }

  public push(val: number) {
    this.heap.push(val)
    this.bubbleUp()
  }

  public size() {
    return this.heap.length
  }
}

console.log(measureExecutionTime(findKthLargest, [3, 2, 1, 5, 6, 4], 3))
