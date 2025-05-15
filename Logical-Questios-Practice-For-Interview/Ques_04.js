// 🧮 Question 4: Factorial of a Number
// 🧠 Problem Statement:
// Write a function in JavaScript that takes a positive integer n as input and returns its factorial.

// 📌 Factorial of n (written as n!) is the product of all positive integers less than or equal to n.
// Example:

// 5! = 5 × 4 × 3 × 2 × 1 = 120

// 0! = 1 by definition

const FindFact = (num) => {
    
    if (num == 0 || num == 1) {
        return 1
    }

    else {
        return num * FindFact(num-1)
    }

}

console.log(FindFact(5))