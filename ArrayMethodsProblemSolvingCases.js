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

// const data = [5, -2, 9, -1, -7, 3];

// const replaceNegWithIndex = (arr) => {
//   const ResultArr = arr.map((item , ind) => item > 0 ? item : `index is ${ind}` )
//   return ResultArr
// }

// console.log(replaceNegWithIndex(data))

// ---------------------------------------------------------------------

// Detailed (and nested) mock data to practice the array different methods

const platform = [
  {
    id: 1,
    courseName: "JavaScript Mastery",
    instructor: {
      id: 101,
      name: "John Doe",
      expertise: ["JavaScript", "React", "Node.js"],
      students: [
        {
          studentId: 201,
          name: "Owais",
          age: 22,
          progress: [
            { module: "Basics", score: 85, completed: true },
            { module: "ES6", score: 90, completed: true },
            { module: "Async JS", score: 70, completed: false },
          ],
          certificates: [
            { type: "Participation", year: 2024 },
            { type: "Best Performer", year: 2025 },
            { type: "Hard Work", year: 2025 },
            { type: "Topper Software Engineer", year: 2025 },
            { type: "Consistency", year: 2025 },
          ],
          friends: [
            {
              id: 301,
              name: "Ali",
              chats: [
                { msg: "Hey bro", time: "10:00" },
                { msg: "Practice array methods!", time: "10:05" },
              ],
            },
            {
              id: 302,
              name: "Sara",
              chats: [
                { msg: "Assignment complete?", time: "11:00" },
                { msg: "Let's study together", time: "11:10" },
              ],
            },
          ],
        },
        {
          studentId: 202,
          name: "Hina",
          age: 20,
          progress: [
            { module: "Advance JS", score: 95, completed: true },
            { module: "ES7", score: 85, completed: true },
            { module: "Async JS", score: 80, completed: true },
          ],
          certificates: [{ type: "Consistency", year: 2025 }],
          friends: [
            {
              id: 303,
              name: "Zara girl",
              chats: [
                { msg: "Check notes", time: "09:00" },
                { msg: "Good luck!", time: "09:30" },
              ],
            },
          ],
        },
        {
          studentId: 203,
          name: "owais",
          age: 20,
          progress: [
            { module: "Computer Science", score: 95, completed: true },
            { module: "Programming", score: 85, completed: true },
            { module: "Flask with Fast API", score: 80, completed: true },
          ],
          certificates: [{ type: "Hard Work", year: 2025 }],
          friends: [
            {
              id: 303,
              name: "Owais Ahmed",
              chats: [
                { msg: "Check notes", time: "09:00" },
                { msg: "Good luck!", time: "09:30" },
              ],
            },
          ],
        },
      ],
    },
  },
];

// -------------------- Question # 01 -------------------------

// Level 1 (Nested access)

// (i) Get all the student names under the JavaScript Mastery course (use of flatMap method of array).

// const GetAllStudentNames = (array) => {
//   return array.flatMap(item => item?.instructor?.students.map(studentData => studentData?.name))
// }

// console.log(GetAllStudentNames(platform))

// (ii) Find the modules completed by "Owais".

// const ModulesCompletedByStudent = (StudentsArray) => {
//   const StudentData = StudentsArray.flatMap(item => item?.instructor?.students.filter(studentData => studentData.name.toLowerCase() == "owais" ))

//   let CompletedModules = StudentData.flatMap(item => item.progress.filter(module => module.completed ))

//   return CompletedModules.map((item) => item.module )

// }

// console.log( `Completed modules are => ` , ModulesCompletedByStudent(platform))

// (iii) Extract all the friend names of Owais.

// const ExtractFriendNamesOfOwais = (StudentsArray) => {
//   const studentsData = StudentsArray;
//   return studentsData.flatMap((item) => item?.instructor?.students.filter((item) => item?.name.toLowerCase() == "owais")).flatMap((item) => item.friends?.map(friend => friend?.name))
// };

// console.log(ExtractFriendNamesOfOwais(platform));

// X --------------------------------------------------------------------------------------- X

// Level 2 (Map, Filter, Reduce or any other array method with nesting)

// Level 02 (i) -----> Return an array of all students who completed all their modules. (Use Of 'Every' method of array)

// const StudentsCompletedModule = (StudentsArray) => {
//   return StudentsArray.flatMap(item => item?.instructor?.students
//     .filter(studentData => studentData?.progress
//     .every(CourseStatus => CourseStatus?.completed )))
//   .map((NiceStudent) => NiceStudent.name)
// }

// console.log(StudentsCompletedModule(platform))

// ---------------------------------------------------------------------------------------

// Level 02 (ii) -----> Find the average score of Hina across all modules.

// const FindAverageScore = (StudentsArray) => {
//   const hinaProgress = StudentsArray.flatMap((data) =>
//     data?.instructor?.students.filter(student => student?.name.toLowerCase() == "hina")
//     .flatMap(item => item?.progress)
//   )

//   let hinaObtainedMarks = 0
//   let totalMarks = hinaProgress.length * 100 

//   if (hinaProgress.length > 0) {
//     hinaProgress.map((item) => hinaObtainedMarks = item.score + hinaObtainedMarks  )
//   }

//   let percentage = ((hinaObtainedMarks * 100) / totalMarks).toFixed(2)

//   const average = hinaObtainedMarks / hinaProgress.length;

//   return  `The average is => ${average.toFixed(2)} & the percentage is => ${percentage} `

// };

// console.log(FindAverageScore(platform));

// Level 02 (iii) -----> From all students, collect a single array of all certificates (types only).

// const AllCertificates = (array) => {
//   return [... new Set (array.flatMap(item => item?.instructor?.students.flatMap(item => item?.certificates.map(certificatesData => certificatesData.type )) )
//  )] }

// console.log(AllCertificates(platform))