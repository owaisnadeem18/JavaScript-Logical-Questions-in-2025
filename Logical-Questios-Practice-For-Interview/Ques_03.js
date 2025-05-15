// Write a function in JavaScript that takes a string as input and returns true if the string is a palindrome, otherwise false.

// 📌 A palindrome is a word that reads the same forward and backward.
// Examples:

// "madam" → true

// "racecar" → true

// "hello" → false

const checkPalindrome = (str) => {

    let reversed_str = ""

    for(let char of str) {
        reversed_str = char + reversed_str 
    }

    // Check for Palindrome: 

    if (str.toLowerCase() == reversed_str.toLowerCase()) {
        return (`String "${str}" is Palindrome`)
    }
    
    else {
        return (`String "${str}" is non Palindrome`) 
    }

}

console.log(checkPalindrome("madam"))