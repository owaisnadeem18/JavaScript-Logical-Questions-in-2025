// 🧠 Question 11: Flatten a Nested Array
// 📌 Problem Statement:
// Write a JavaScript function that takes a nested array of any depth and returns a flattened array (all elements in a single-level array).

// Example: 
// flattenArray([1, [2, [3, 4], 5], 6]);  // Output: [1, 2, 3, 4, 5, 6]

const flattenArray = (arr) => {
    let newArr = []

    for ( let i = 0 ; i< arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return newArr.concat(flattenArray(arr[i])) // recursion
        } 
        else {
            newArr.push(arr[i])
        }
    }

    return newArr

}

console.log(flattenArray([45 , 42 , 12 , [53 , 34 , [43 , 23]] , 56 ] ))