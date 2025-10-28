// Given two arrays of strings, compare them such that for each element in the first array,
// you check if its reversed (palindromic) form exists in the second array.
// Create and print a new array of boolean values representing whether each element’s reversed match is found.

const arr1 = ["abc", "madam", "car", "sir", "test"];
const arr2 = ["cba", "madam", "rac", "sir", "tset"];

let resultArr = []

const findPalindrome = (array1 , array2) => {
    return resultArr = array1.map((item) => {
        let revered = item.split("").reverse().join("")
        return array2.includes(revered)
    })

}

console.log(findPalindrome(arr1 , arr2))