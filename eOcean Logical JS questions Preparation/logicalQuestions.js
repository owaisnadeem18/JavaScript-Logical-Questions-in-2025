// const array = [4,5,1,2,0,4]

// const firstNonRepeatingElement = (arr) => {

//     const count = {}

//     for (let i = 0 ; i < arr.length ; i++) {
        
//         if (count[arr[i]]) {
//             count[arr[i]]++
//         }
//         else {
//             count[arr[i]] = 1
//         }

//     }

//     for (let i = 0 ; i < arr.length ; i++) {
//         if (count[arr[i]] === 1) return arr[i]
//     }

// }


// console.log(firstNonRepeatingElement(array))

// angram checker: 

// function isAnagram (str1 , str2) {
    
//     if (str1.length == str2.length) {
        
//     let sorted_str_1 = str1.split("").sort().join("")
//     let sorted_str_2 = str2.split("").sort().join("")

//         return sorted_str_1

//     if (sorted_str_1 == sorted_str_2) {
//         return "Anagrams"
//     }

// }

// return "Non Anagrams ! "
    
// }

// console.log(isAnagram("listen" , "silent"))

// Swap Numbers , without creating a new variable: 

let a = 34
let b = 89

console.log(`Value of {a} before swap is -> ${a}`)
console.log(`Value of {b} before swap is -> ${b}`)

const swapNumbers = (num1 , num2) => {

    a = a + b

    b = a - b

    console.log(`Value of b after swap is -> ${b}`)
    
    a = a - b
    
    console.log(`Value of a after swap is -> ${a}`)

}

console.log(swapNumbers(a , b))