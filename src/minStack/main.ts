/**
 * MinStack is a data structure that supports push, pop, top, and retrieving the minimum element in constant time.
 */
class MinStack {
  private stack: [number, number][] // Stack to hold pairs of values: [value, currentMin]

  constructor() {
    this.stack = [] // Initialize an empty stack
  }

  /**
   * Pushes a new value onto the stack.
   * @param val - The value to be pushed onto the stack.
   */
  push(val: number): void {
    const last = this.stack[this.stack.length - 1] // Get the last element in the stack
    // Push the new value along with the current minimum
    this.stack.push([val, last ? (val > last[1] ? last[1] : val) : val])
  }

  /**
   * Removes the top element from the stack.
   */
  pop(): void {
    this.stack.pop() // Remove the top element
  }

  /**
   * Retrieves the top element of the stack.
   * @returns The top value of the stack.
   */
  top(): number {
    return this.stack[this.stack.length - 1][0] // Return the top value
  }

  /**
   * Retrieves the minimum element in the stack.
   * @returns The minimum value in the stack.
   */
  getMin(): number {
    return this.stack[this.stack.length - 1][1] // Return the current minimum
  }
}

let ms = new MinStack()

const methods = [
  "MinStack",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "top",
  "getMin",
]
const value = [[], [-2], [0], [-3], [], [], [], []]

for (let i = 0; i < methods.length; i++) {
  const method = methods[i]
  switch (method) {
    case "MinStack":
      console.log(undefined)
      continue
    case "push":
      console.log(ms.push(value[i][0])) // Push value onto the stack
      continue
    case "pop":
      console.log(ms.pop()) // Pop the top value from the stack
      continue
    case "top":
      console.log(ms.top()) // Get the top value of the stack
      continue
    case "getMin":
      console.log(ms.getMin()) // Get the minimum value in the stack
      continue
  }
}
