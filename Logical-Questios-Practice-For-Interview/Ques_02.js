// 🔄 Question 2: Reverse a String
// 👉 Problem Statement:

// Write a function in JavaScript that takes a string as input and returns the reversed version of that string.

const reverseString = (str) => {
    const splitted_str = str.split("")
    
    let reversed_str = []

    for (let i = splitted_str.length - 1 ; i >= 0 ; i--) {
        reversed_str.push(splitted_str[i])
    }

    return reversed_str.join("")

}

console.log(reverseString("Owais"))