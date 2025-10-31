// 1. Find Missing Number:
// In a sequence 1 to n, one number is missing — find it without sorting.

// Input: [1, 2, 4, 5, 6]
// Output: 3

// const arr = [1, 2, 4, 5, 6]

// const findMissigNumber = (array) => {
//     let actualSum = array.reduce((a,b) => a + b)
//     let ArraySum = (array.length * (array.length + 1)) / 2
//     let missingNumber = actualSum - ArraySum 
//     return missingNumber
// }

// console.log( `The missing number is => ${findMissigNumber(arr)}`)

// ---------------------------------------------------------------------------------------------------- 

// 2. Two Sum (Without using extra space):

// Find two numbers in an array that sum up to a target.

// Input: [2, 7, 11, 15], target = 9
// Output: [2, 7]

// const arr = [2, 7, 11, 15]
// let target = 9

// const findTwoNumbers = (array , targetNumber) => {
//     for (let i = 0 ; i < array.length ; i++ ) {
//         for (let j = i + 1 ; j < array.length ; j++) {
//             if (array[i] + array[j] == targetNumber ) {
//                 // return `Two numbers ${array[i]} & ${array[j]} are the numbers who meet the target`
//                 return [array[i] , array[j]]
//             }
//         }
//     }

//     return `Not any two Array Numbers would be able to meet the condition`
    
// }

// console.log(findTwoNumbers(arr , target)) 

// ⚡ Logical Scope Chain

let a = 10;
function outer() {
  let a = 20;
  function inner() {
    console.log(a);  
  }
  return inner();
}

const fn = outer();

fn();

// Output: 
// 20
// 20