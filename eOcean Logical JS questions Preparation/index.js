// 🔥 1. Array / Object Logic (VERY IMPORTANT):

// ✅ Q1: Find first non-repeating element:

// [4,5,1,2,0,4]

// const array = [4,5,1,2,0,4]

// const firstNonRepeatingElement = (arr) => {

//     let count = {}

//     for (let i = 0 ; i < arr.length ; i++) {

//         if (count[arr[i]]) {
//             count[arr[i]]++
//         } else {
//             count[arr[i]] = 1
//         }

//     }

//     for (let i = 0 ; i < arr.length ; i++) {
//         let element = arr[i]

//         if (count[element] === 1) {
//             return element
//         }

//     }

//     return -1

// }

// console.log(firstNonRepeatingElement(array))

// Expected Output: 5

// ********** (Output Based Traps) What will be the output of the following: **********

// let a = [1, 2, 3];
// let b = [...a];

// console.log(a == b) // Output: false because both of them are stored at different memory locations

// Reason: 
// Spread Operator creates a new memory location for the new array and it copies all the elements of the original array into the new one. So, both "a" and "b" are stored at different memory locations and they are not equal to each other because “Objects/arrays are compared by reference, not by value. (shallow copy) 

// let a = [1, 2, 3]

// let b = a

// console.log(b == a) // Output: true because both of them are pointing at the same memory location.

// let a = [1, 2, 3];
// let b = a;

// b.push(4);

// console.log(a); // output: [1,2,3,4] // "a" will also get changed because both of them i.e "a" & "b" are pointing at the same memory location:

// let a = [1, 2, 3];
// let b = [...a];

// b.push(4);

// console.log(a); // output: [1,2,3] // "a" will not get changed , because "b" is not pointing towards "a" , "b" has different memory location and "a" has different one.


// 