// const string = "Owais Nadeem"

// const countOcc = (str) => {
    
//     const obj = {}

//     let trimmed_str = str.split(" ").join("")

//     for (let char of trimmed_str) {
//         obj[char] = (obj[char] || 0) + 1
//     }

//     return obj

// }

// console.log(countOcc(string))

// -------------- Find the most frequent elements in the array ----------- 

// const string = "Owais Nadeem"

// const countOcc = (str) => {
    
//     const obj = {}
//     let max_count = 0
//     let most_freq_elem = []

//     let trimmed_str = str.toLowerCase().split(" ").join("")

//     for (let char of trimmed_str) {
//         obj[char] = (obj[char] || 0) + 1
        
//         if (obj[char] > max_count) {
//             max_count = obj[char]
//             most_freq_elem = [char]
//         } else if (obj[char] == max_count) {
//             most_freq_elem.push(char)
//         }

//     }

//     return [obj , most_freq_elem , max_count]

// }

// console.log(countOcc(string))

// Two Sum (Without using extra space):

// Find two numbers in an array that sum up to a target.

// Input: [2, 7, 11, 15], target = 9
// Output: [2, 7]

// const arr = [2, 7, 11, 15]
// let target = 9 

// const twoSum = (array) => {
    
//     const obj = {}
    
//     for (let i = 0 ; i < array.length ; i++) {
//         let elem = array[i]

//         let complement = target - elem

//         if (obj[complement] !== undefined) {
//             return [obj[complement] , i]
//         }

//         obj[elem] = i

//     }

// }

// console.log(twoSum(arr))

// --------------------- Group Anagram ------------------------

// const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// const groupAnagram = (array) => {
    
//     let obj = {}

//     for (let i = 0 ; i < array.length ; i++) {
        
//         let elem = array[i]
//         let key = elem.split("").sort().join("")

//         if (!obj[key]) {
//             obj[key] = []
//         }

//         obj[key].push(elem)

//     }

//     return Object.values(obj)


// }

// console.log(groupAnagram(arr))

// Two sum problem: 

// const arr = [2, 7, 11, 15]

// const twoSum = (array) => {
    
//     let obj = {}
//     let target = 9

//     for (let i = 0 ; i < array.length ; i++) {
        
//         let elem = array[i]
//         let complement = target - elem
        
//         if (obj[complement] !== undefined) {
//             return [obj[complement] , i]
//         }

//         obj[elem] = i
        
//     }
// }

// console.log(twoSum(arr))

// Given two arrays, return an array of elements that are present in both.

arr1 = [1, 2, 3, 4, 5]

arr2 = [4, 5, 6, 7, 8]

// const getIntersection = (array1 , array2) => {

//     let intersection = []
    

//     for (let i = 0 ; i < array2.length ; i++) {
//         if (array1.includes(array2[i])) {
//             intersection.push(array2[i])
//         }

//     }

//     return intersection

// }

// console.log(getIntersection(arr1 , arr2))

// Following is the more optimized way to solve the above problem:

// const getIntersection = (arr1 , arr2) => {
    
//     // first covert the first array into set:
//     let set1 = new Set(arr1)

//     return arr2.filter(item => set1.has(item))


// }

// console.log(getIntersection(arr1 , arr2))

const arr = [1, 2, 3, 2, 4, 5, 1 , 8 , 9 , 9 , 9]

const findingDuplicates = (array) => {
    const obj = {}
    const duplicates_arr = []

    for(let i = 0 ; i < array.length ; i++) {
        let elem = array[i]

        obj[elem] = (obj[elem] || 0) + 1

        if (obj[elem] === 2) {
            duplicates_arr.push(elem)
        }

    }

    return duplicates_arr


}

console.log(findingDuplicates(arr))