// Swap two numbers without using any other 3rd variable , you can not even use destructuring technique: 

let a = 34 
let b = 42

console.log(` Value of "a" before swap is => ${a}`)
console.log(` Value of "b" before swap is => ${b}`)

a = a + b // Added values "a" and "b" into our "a" variable
b = a - b // Value of "b" has been swapped now , by adding "a" into "b"

// Now , it's time to update the first variable "a"
a = a - b  // Updated and swapped the first variable "a" by substracting the new value of "a" with updated "b" 

console.log(` Value of "a" after swap is => ${a}`)
console.log(` Value of "b" after swap is => ${b}`)