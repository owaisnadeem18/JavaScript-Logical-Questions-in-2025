// // 🔄 Question 2: Reverse a String
// // 👉 Problem Statement:

// // Write a function in JavaScript that takes a string as input and returns the reversed version of that string.

// const reverseString = (str) => {
//     const splitted_str = str.split("")
    
//     let reversed_str = []

//     for (let i = splitted_str.length - 1 ; i >= 0 ; i--) {
//         reversed_str.push(splitted_str[i])
//     }

//     return reversed_str.join("")

// }

// console.log(reverseString("Owais"))

// -------------------

// Solve this question using for-of loop now: 

const reverseStr = (str) => {

    let reversed_str = ""


    for (let char of str) {
        reversed_str = char + reversed_str
    }

    return reversed_str

} 

console.log(reverseStr("Owais"))