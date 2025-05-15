// Next Question (Example):
// 🧠 Question 10: Merge Two Arrays Without Duplicates
// 📌 Problem Statement:
// Write a JavaScript function that takes two arrays and returns a new array that contains all unique elements from both arrays.

// Example:
// mergeArrays([1, 2, 3], [2, 3, 4]) → [1, 2, 3, 4]

const mergeArrays = (arr1 , arr2) => {
    return [...new Set([...arr1 , ...arr2])]
}

console.log(mergeArrays([2 , 4 ,2 ,88, 43 ,2 , 5 , 89 , 88] , [4 ,2 ,65 , 223 ,13 ,52 ,13 ,12 ,44 ,12 , 2] ))