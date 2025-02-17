export function measureExecutionTime(fn: Function, ...args: any[]) {
  const start = performance.now() // Start time
  const result = fn(...args) // Execute the function with provided arguments
  const end = performance.now() // End time
  const executionTime = end - start // Calculate execution time
  console.log(
    `\x1b[32m✅ Execution time: ${executionTime.toFixed(2)} milliseconds\x1b[0m`
  ) // Log the time taken with color and icon
  return result // Return the result of the function
}
