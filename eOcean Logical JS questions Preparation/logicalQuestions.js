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

// let a = 34
// let b = 89

// console.log(`Value of {a} before swap is -> ${a}`)
// console.log(`Value of {b} before swap is -> ${b}`)

// const swapNumbers = (num1 , num2) => {

//     a = a + b

//     b = a - b

//     console.log(`Value of b after swap is -> ${b}`)
    
//     a = a - b
    
//     console.log(`Value of a after swap is -> ${a}`)

// }

// console.log(swapNumbers(a , b))

const students = [
  {id: 101,name: "ali Raza",course: "Web Development",semester: "5th"},
  {id: 102,name: "sara Khan",course: "Mobile App Development",semester: "4th"},
  {id: 103,name: "Usman Ahmed",course: "Data Science",semester: "6th"},
  {id: 104,name: "hira Sheikh",course: "Artificial Intelligence",semester: "7th"},
  {id: 105,name: "Bilal Aslam",course: "Cyber Security",semester: "3rd"}
];

// separate the name of all students in a new array: 

const capitalizeName = (studentsArr) => {

    let students = studentsArr.map(obj => obj.name[0].toUpperCase() + obj.name.slice(1) )

    return students

}

console.log(capitalizeName(students))