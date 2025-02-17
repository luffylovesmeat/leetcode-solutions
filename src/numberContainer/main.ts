class NumberContainers {
  private indexes: Map<number, number>
  private heapMap: Map<number, MinHeap>
  constructor() {
    this.indexes = new Map<number, number>()
    this.heapMap = new Map<number, MinHeap>()
  }

  change(idx: number, val: number): void {
    if (this.indexes.has(idx)) {
      const prevVal = this.indexes.get(idx)!
      prevVal !== undefined && this.heapMap.get(prevVal)?.insert(idx)
    }
    this.indexes.set(idx, val)

    let heap = this.heapMap.get(val)
    if (!heap) this.heapMap.set(val, new MinHeap())
    this.heapMap.get(val)?.insert(idx)
    // if (this.indexes.has(idx)) {
    //   const initialValue = this.indexes.get(idx)!
    //   if (initialValue === val) return
    //   const initialHm = this.heapMap.get(initialValue)
    //   initialHm && initialHm.pop()
    //   initialHm && this.heapMap.set(initialValue, initialHm)
    // }
    // this.indexes.set(idx, val)
    // if (this.heapMap.has(val)) {
    //   const hm = this.heapMap.get(val)!
    //   hm.insert(idx)
    // } else {
    //   const hm = new MinHeap()
    //   hm.insert(idx)
    //   this.heapMap.set(val, hm)
    // }
  }

  find(number: number): number {
    return this.heapMap.get(number)?.peek() ?? -1
  }
}

export class MinHeap {
  private heap: number[]

  constructor() {
    this.heap = []
  }

  private swap(i: number, j: number) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }

  private getLeftChildIndex(i: number) {
    return 2 * i + 1
  }

  private getRightChildIndex(i: number) {
    return 2 * i + 2
  }

  // * Bubble Up
  private heapifyUp(i: number) {
    let currIndex = i
    while (currIndex > 0) {
      const parentIdx = this.getParentIndex(currIndex)
      if (this.heap[currIndex] < this.heap[parentIdx]) {
        this.swap(currIndex, parentIdx)
        currIndex = parentIdx
      } else {
        break
      }
    }
  }

  private heapifyDown(i: number) {
    const length = this.heap.length
    let currIndex = i
    while (true) {
      const leftIdx = this.getLeftChildIndex(currIndex)
      const rightIdx = this.getRightChildIndex(currIndex)
      let smallestIdx = currIndex

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallestIdx]) {
        smallestIdx = leftIdx
      }

      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallestIdx]) {
        smallestIdx = rightIdx
      }

      if (smallestIdx !== currIndex) {
        this.swap(currIndex, smallestIdx)
        currIndex = smallestIdx
      } else break
    }
  }

  public peek() {
    return this.heap[0]
  }

  public insert(val: number) {
    this.heap.push(val)
    this.heapifyUp(this.heap.length - 1)
  }

  public pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.heapifyDown(0)
    return min
  }

  public size() {
    return this.heap.length
  }
}

// class NumberContainers {
//   keyStore: Map<number, number>
//   revData: Map<number, number[]>
//   constructor() {
//     this.revData = new Map<number, number[]>()
//     this.keyStore = new Map<number, number>()
//   }

//   private setOrUpdate(idx: number, val: number) {
//     if (!this.revData.has(val)) return this.revData.set(val, [idx])
//     this.revData.set(val, [...(this.revData.get(val) ?? []), idx])
//   }

//   change(index: number, number: number): void {
//     // console.log("Change", index, number, this.revData, this.keyStore)
//     if (!this.keyStore.has(index)) {
//       this.keyStore.set(index, number)
//       this.revData.set(number, [...(this.revData.get(number) ?? []), index])
//     }
//     const key = this.keyStore.get(index)
//     // number === 31 && console.log(this.revData.has(key!))
//     if (this.revData.has(key!)) {
//       const rev = this.revData.get(key!)
//       // number === 31 && console.log(rev)
//       const idx = rev!.findIndex((a) => a === index)
//       rev?.splice(idx, 1)
//       if (rev?.length === 0) {
//         this.revData.delete(key!)
//       }
//       this.revData.set(key!, rev!)
//     }
//     this.keyStore.set(index, number)
//     this.setOrUpdate(index, number)
//     // console.log("Changed", index, number, this.revData, this.keyStore)
//   }

//   find(number: number): number {
//     // console.log("Find", number, this.revData, this.keyStore)
//     const rev = this.revData.get(number)
//     if (!rev || rev.length === 0) return -1
//     return rev!.sort((a, b) => a - b)[0]
//   }
// }

let nc = new NumberContainers()

const input = [
  [],
  [75, 40],
  [14],
  [41],
  [40],
  [27, 40],
  [22, 14],
  [85, 14],
  [22, 40],
  [18, 34],
  [92, 41],
  [22, 40],
  [75, 40],
  [59, 34],
  [40],
  [27, 14],
  [34],
  [14],
  [13, 34],
  [40],
  [18, 41],
]

for (let inp of input) {
  if (inp.length === 0) {
    console.log("Init", undefined)
    continue
  }
  if (inp.length === 1) {
    console.log(`Find ${inp[0]}`, nc.find(inp[0]))
    continue
  }
  if (inp.length === 2) {
    console.log(`Change ${inp[0]} ${inp[1]}`, nc.change(inp[0], inp[1]))
    continue
  }
}
