// 🧠 Question 9: Remove Duplicates from an Array
// 📌 Problem Statement:
// Write a JavaScript function that takes an array and returns a new array with all duplicate elements removed.

// Example:

// removeDuplicates([1, 2, 2, 3, 4, 4, 5]);  // Output: [1, 2, 3, 4, 5]
// removeDuplicates(["apple", "banana", "apple", "orange"]); // Output: ["apple", "banana", "orange"]

const removeDuplicates = (array) => {

    let newArr = []

    for (let i = 0 ; i<array.length ; i++) {
        if (!(newArr.includes(array[i]))) {
            newArr.push(array[i])
        }
    }

    return newArr    

}

console.log(removeDuplicates([3 , 4 ,9 ,3 ,4 ,87 , 4 ,122 , 87 , 42 , 122]))
