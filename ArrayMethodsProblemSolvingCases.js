// 🔑 Most Important Array Methods for Interview Problem Solving
// 🔹 Searching & Checking

// ------------------- Question # 01 for problem solving array methods -----------------------------

// 1. map() + includes()

const students = ["Ali", "Sara", "Owais", "Ahmed"];
const passed = ["Sara", "Ahmed"];

// you should return an array like follows: 

// [
//   { name: "Ali", passed: false },
//   { name: "Sara", passed: true },
//   { name: "Owais", passed: false },
//   { name: "Ahmed", passed: true }
// ]

const studentsResult = []

const findResult = (arr1 , arr2) => {
    return arr1.map((student) => {
        return {
            name: student,
            passed: arr2.includes(student)
        }
    })
}

console.log(findResult(students , passed))