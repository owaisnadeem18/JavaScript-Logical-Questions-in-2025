// Find the maximum and minimum number in an array.

// const arr = [4 , 67 , 23 , 24 ,21 ,778 ,24 , 213 ,12 , 12 ,4 ,67 ,24 , 213]

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

// -------------4------------- 
// Reverse an array without using .reverse().

// const reverseAnArray = (array) => {
    //     let sorted_arr = array.sort((a,b) => a-b)
    
    //     let arr_removed_duplicates = [...new Set(sorted_arr)]
    
    //     let reversed_arr = []
    
    //     for (let i = arr_removed_duplicates.length - 1 ; i >= 0 ; i--) {
            // reversed_arr.push(arr_removed_duplicates[i])
            // }

            //     return reversed_arr

            // }

// console.log(reverseAnArray(arr))
        
// -------------5------------- 
// Count how many times each element appears in an array.

// const countOccurences = (numbersArr) => {
//     let numbersObj = {}

//     for (let i = 0 ; i<numbersArr.length ; i++) {
//         if (Object.hasOwn(numbersObj, numbersArr[i])) {
//             numbersObj[numbersArr[i]]++
//         }
//         else {
//              numbersObj[numbersArr[i]] = 1
//         }
//     }

//     return numbersObj

// }

// console.log(countOccurences(arr))

// -------------6------------- 
// Merge two arrays and remove duplicates.

// const arr1 = [2 ,5 ,1 , 3 , 5 ,2 ,2 , 64 ,23 ,12 , 3 , 12]
// const arr2 = [32 ,25 ,41 , 33 , 35 ,12 ,32 , 164 ,23 ,12 , 164 , 25]

// const mergeArrayAndRemoveDuplicates = (array1 , array2) => {
//     const merged_arr = [...array1 , ...array2]
//     return [... new Set(merged_arr)] 
// }

// console.log(mergeArrayAndRemoveDuplicates(arr1 , arr2))
    
    
    
// -------------7------------- 
// Find the sum of all even numbers in an array.

// const array = [32 ,25 ,41 , 33 , 35 ,12 ,32 , 164 ,23 ,12 , 164 , 25]

// const SumOfAllEvenNumbers = (arr) => {
//     const evenNumsArray = arr.filter(num => num % 2 == 0)
//     return evenNumsArray.reduce((a , b) => a + b , 0 )
// }

// console.log(SumOfAllEvenNumbers(array))

// Check if two arrays contain the same elements (regardless of order).

let arr1 = [1, 2, 3, 5];
let arr2 = [4, 3, 2, 1];

const CheckTwoArraysSimilarity = (array1 , array2) => {
    const sorted_arr1 = [...array1].sort((a,b) => a-b)
    const sorted_arr2 = [...array2].sort((a,b) => a-b )

    if (sorted_arr1.length !== sorted_arr2.length) return false

    for (let i = 0 ; i<sorted_arr1.length ; i++) {
        if (sorted_arr1[i] !== sorted_arr2[i]) {
            return false
        }
    }

    // return sorted_arr1 == sorted_arr2
    return true
}

console.log(CheckTwoArraysSimilarity(arr1 , arr2))

// Flatten a nested array (e.g., [1,[2,[3]]] → [1,2,3]).