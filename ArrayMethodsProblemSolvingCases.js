// 🔑 Most Important Array Methods for Interview Problem Solving
// 🔹 Searching & Checking

// ------------------- Questions for problem solving array methods -----------------------------

// 1. map() + includes()

// const students = ["Ali", "Sara", "Owais", "Ahmed"];
// const passed = ["Sara", "Ahmed"];

// // you should return an array like follows:

// // [
// //   { name: "Ali", passed: false },
// //   { name: "Sara", passed: true },
// //   { name: "Owais", passed: false },
// //   { name: "Ahmed", passed: true }
// // ]

// const studentsResult = []

// const findResult = (arr1 , arr2) => {
//     return arr1.map((student) => {
//         return {
//             name: student,
//             passed: arr2.includes(student)
//         }
//     })
// }

// console.log(findResult(students , passed))

// 2. Filter Method in Array

// Show the name of students in a row with above 80%

// const students = [
//   { name: "Ali", score: 85 },
//   { name: "Owais", score: 95 },
//   { name: "Sara", score: 92 },
//   { name: "John", score: 70 },
// ];

// const FilterA1Students = (students) => {
//     const passStudents = students.filter((item) => item.score > 80)

//     const A1StudentsNamesArr = passStudents.map((stud) => stud.name )
//     return A1StudentsNamesArr
// }

// console.log(FilterA1Students(students))

// ---------------- Array method (Find) ----------------

// const students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 92 },
//   { name: "John", marks: 60 }
// ];

// // only returns that first object by iterating the array , where the condition meet
// const findTopper = (studArray) => {
//   const answer = studArray.find((student) => student.marks > 105)
//   return answer
// }

// console.log(findTopper(students))

// ------------------------------------------ 5. Find First Negative Number (find) ------------------------------------------

// Input: [5, -2, 9, -1]

// const data = [5, -2, 9, -1]

// const findNegativeNumber = (arr) => {
//   const data = arr.find((item) => item < 1 )
//   return data
// }

// console.log(findNegativeNumber(data))

// Output: -2

// -------------------------------------------

// 2. Find the smallest negative number (most negative) 👉 Use reduce

// const data = [5, -2, 9, -1, -7, 3];

// let mostNegativeNum

// const findMostNegNum = (arr) => {
//   let mostNegativeNum = arr.reduce((a , b) =>
//     { return (a < b ? a : b)}
// )
//   return mostNegativeNum
// }

// console.log(findMostNegNum(data))

// ------------------ Map Array method ----------------------

// 9. Replace all negative numbers with text negative if any number is negative in the array (boolean check)

// const data = [5, -2, 9, -1, -7, 3];

// const replaceNegNumbers = (arr) => {
  //   const replacement = arr.map((item) => item < 0 ? "Negative" : item)
  //   return replacement
  // }
  
  // console.log(replaceNegNumbers(data))
  
  // -----------------------------------------------------------
  
  // Question:- Replace all negative numbers with negative number's index , if any number is negative in the array (boolean check)
  
const data = [5, -2, 9, -1, -7, 3];

const replaceNegWithIndex = (arr) => {
  const ResultArr = arr.map((item , ind) => item > 0 ? item : `index is ${ind}` )
  return ResultArr
}

console.log(replaceNegWithIndex(data))