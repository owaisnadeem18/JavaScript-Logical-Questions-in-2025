// 1. Reverse Each Word Without Changing Sentence Order

// Input: "JavaScript is powerful"
// Output: "tpircSavaJ si lufrewop"

// const sententece = "JavaScript is powerful"

// const ReverseEachWord = (sent) => sent.split(" ").map(item => item.split("").reverse("").join("")).join(" ")


// console.log(ReverseEachWord(sententece))

// 2. Check if Two Strings are Anagrams (Ignore Case & Spaces) 

// Input: "listen", "Silent"
// Input: "hello", "Olelh"

// const str1 = "hello";
// const str2 = "Olelh";

// const CheckAnagrams = (string1 , string2) => {

//     const s1 = string1.toLowerCase()
//     const s2 = string2.toLowerCase()


//     if (s1.length == s2.length) {
//         const sorted_str_1 = s1.split("").sort().join("")
//         const sorted_str_2 = s2.split("").sort().join("")
        
//         console.log(sorted_str_1)
//         console.log(sorted_str_2)

//         // compare and return boolean
//         if (sorted_str_1 == sorted_str_2) {
//             return `The both strings , '${string1}' and '${string2}' are anagrams`
//         }
//     }
//     else {
//         return `Non Anagrams`
//     }
// }

// console.log(CheckAnagrams(str1 , str2))

// 5. Capitalize the First Letter of Each Word in a sentence: 

// const data = [
//     { id: 1 , name: "owais nadeem" },
//     { id: 2 , name: "hamza aslam" },
//     { id: 3 , name: "Tufail akram" }
// ]

// const CapitalizeFirstWord = (usersArray) => {
//     return usersArray.flatMap(item => item?.name.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")  )
// }

// console.log(CapitalizeFirstWord(data))

// 6. Check if a String is a Pangram

// 7. Check if String is Made of Unique Characters

// Input: "abcdefg"
// Input: "hello"

// const string = "abcdefg"

// const checkStringUniqueness = (str)  => new Set(str).size == str.length ? `The string '${str}' has unique characters ` : "Non Unique characters"

// console.log(checkStringUniqueness(string))