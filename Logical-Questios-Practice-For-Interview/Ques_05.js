// 🔥 Question 5: Find the Largest Number in an Array
// 🧠 Problem Statement:
// Write a function in JavaScript that takes an array of numbers as input and returns the largest number in that array.

// With the use of built-in sort method: 

// const numArr = [4 , 56 ,12 , 65 , 32 ,25 , 64 ,12 , 13 ,14] 

// const FindLargestArrayNum = (array) => {
//     let sorted_arr = array.sort((a,b) => a-b)
//     return `The largest array number is => ${sorted_arr[sorted_arr.length-1]}`
// }

// console.log(FindLargestArrayNum(numArr))

// Without the use of built-in sort method:

const FindLargestArrayNum = (array) => {
    let LargestArrNum = array[0]

    for (let char of array) {
        if (char > LargestArrNum) {
            LargestArrNum = char
        }
    }

    return LargestArrNum

}

console.log(FindLargestArrayNum([4 ,65 , 2 , 3 , 9 , 43 ,24 , 12 , 63 , 23 , 53 , 246]))