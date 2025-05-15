// 🔢 Question 7: Sum of All Numbers in an Array
// 🧠 Problem Statement:
// Write a JavaScript function that takes an array of numbers and returns the sum of all the elements.

// Example:

// sumArray([1, 2, 3, 4]); // Output: 10
// sumArray([10, 20, 30]); // Output: 60

const SumOfAllArrNums = (arr) => {

    let totalSum = 0 
    
    for (let i = 0 ; i<arr.length ; i++) {
        totalSum += arr[i]
    }

    return totalSum

}

console.log(SumOfAllArrNums([4 , 9 , 24 , 2 , 1 ,90]))