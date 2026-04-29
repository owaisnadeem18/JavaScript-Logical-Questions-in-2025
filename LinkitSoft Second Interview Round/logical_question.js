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

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagram = (array) => {
    
    let obj = {}

    for (let i = 0 ; i < array.length ; i++) {
        
        let elem = array[i]
        let key = elem.split("").sort().join("")

        if (!obj[key]) {
            obj[key] = []
        }

        obj[key].push(elem)

    }

    return Object.values(obj)


}

console.log(groupAnagram(arr))