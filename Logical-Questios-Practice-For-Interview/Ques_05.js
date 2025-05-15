// 🔥 Question 5: Find the Largest Number in an Array
// 🧠 Problem Statement:
// Write a function in JavaScript that takes an array of numbers as input and returns the largest number in that array.

const numArr = [4 , 56 ,12 , 65 , 32 ,25 , 64 ,12 , 13 ,14] 

const FindLargestArrayNum = (array) => {
    let sorted_arr = array.sort((a,b) => a-b)
    return `The largest array number is => ${sorted_arr[sorted_arr.length-1]}`
}

console.log(FindLargestArrayNum(numArr))