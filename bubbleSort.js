function bubbleSort (items) {
    const length = items.length
  
    for (let i = (length - 1); i > 0; i--) {
      // Number of passes
      for (let j = (length - i); j > 0; j--) {
        // Compare the adjacent positions
        if (items[j] < items[j - 1]) {
          // Swap the numbers
          [items[j], items[j - 1]] = [items[j - 1], items[j]]
        }
      }
    }
  
    return items
  }

  module.exports = bubbleSort;