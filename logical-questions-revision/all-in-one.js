// 🔄 2. Logic with Loops and Conditions

// Find Missing Number:
// In a sequence 1 to n, one number is missing — find it without sorting.

// Input: [1, 2, 4, 5, 6]
// Output: 3

const arr = [1, 2, 4, 5, 6]

const findMissigNumber = (array) => {
    let actualSum = array.reduce((a,b) => a + b)
    let ArraySum = (array.length * (array.length + 1)) / 2
    let missingNumber = actualSum - ArraySum 
    return missingNumber
}

console.log( `The missing number is => ${findMissigNumber(arr)}`)