// Find the maximum and minimum number in an array.

const arr = [4 , 67 , 23 , 24 ,21 ,778 ,24 , 213 ,12 , 12 ,4 ,67 ,24 , 213]

// -------------1------------- 
// const findMaxAndMin = (numbersArray , index) => [...numbersArray].sort((a,b) => a-b)[index]

// console.log(`The maximum number is => ${findMaxAndMin(arr , arr.length - 1)}`)
// console.log(`The minimum number is => ${findMaxAndMin(arr , 0)}`)

// -------------2------------- 
// Remove duplicate elements from an array.

// const removeDuplicatesFromArray = (array) => {
//     return [...new Set(array)]
// }

// console.log(removeDuplicatesFromArray(arr))

// -------------3------------- 
// Find the second largest element in an array.

// const findLargetElemInArr = (array) => {
//     return [...array].sort((a,b) => a-b)[array.length - 2]
// }

// console.log(findLargetElemInArr(arr))

// Reverse an array without using .reverse().

const reverseAnArray = (array) => {
    let sorted_arr = array.sort((a,b) => a-b)

    let arr_removed_duplicates = [...new Set(sorted_arr)]

    let reversed_arr = []

    for (let i = arr_removed_duplicates.length - 1 ; i >= 0 ; i--) {
        reversed_arr.push(arr_removed_duplicates[i])
    }

    return reversed_arr

}

console.log(reverseAnArray(arr))

// Count how many times each element appears in an array.
// Merge two arrays and remove duplicates.
// Rotate an array k times to the right.
// Find the sum of all even numbers in an array.
// Check if two arrays contain the same elements (regardless of order).
// Flatten a nested array (e.g., [1,[2,[3]]] → [1,2,3]).