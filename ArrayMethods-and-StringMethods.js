// Here , we have to solve logical questions of JavaScript with array iteration loop and strings;

// 1. Write a function to extract all palindromic words from a sentence.

// const sentence = "madam and racecar are level words but apple is not"

// const FindPalindromic = (sent) => {

//     const wordsArray = sent.split(" ")

//     const filteredWords = wordsArray.filter((word) => {
//         const reversedWord = word.split("").reverse().join("")
//         return reversedWord == word
//     })

//     return filteredWords

// }

// console.log(FindPalindromic(sentence))

// const companies = [
//   {
//     id: 1,
//     name: "TechVerse",
//     location: "Karachi",
//     employees: [
//       {
//         id: 101,
//         name: "Owais Nadeem",
//         role: "Frontend Developer",
//         skills: ["HTML", "CSS", "JavaScript", "React"],
//         salary: 95000,
//         email: "owais@techverse.com",
//       },
//       {
//         id: 102,
//         name: "Ayesha Khan",
//         role: "UI/UX Designer",
//         skills: ["Figma", "Adobe XD", "Photoshop"],
//         salary: 85000,
//         email: "ayesha@techverse.com",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "DataNinjas",
//     location: "Lahore",
//     employees: [
//       {
//         id: 201,
//         name: "Ali Raza",
//         role: "Backend Developer",
//         skills: ["Node.js", "Express", "MongoDB", "REST API"],
//         salary: 110000,
//         email: "ali@dataninjas.com",
//       },
//       {
//         id: 202,
//         name: "Sara Ahmed",
//         role: "Data Analyst",
//         skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
//         salary: 105000,
//         email: "sara@dataninjas.com",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "AIVision",
//     location: "Islamabad",
//     employees: [
//       {
//         id: 301,
//         name: "Hassan Javed",
//         role: "Machine Learning Engineer",
//         skills: ["Python", "TensorFlow", "Scikit-learn"],
//         salary: 130000,
//         email: "hassan@aivision.com",
//       },
//     ],
//   },
// ];

// 🧠 INTERVIEW-STYLE QUESTIONS (Array + String Methods)

// 🔹 Level 1: Basics

// (i) - Get an array of all company names.

// const getAllCompanyNames = (companyArray) => {
//     return companyArray.map((item) => item?.name )
// }

// console.log(getAllCompanyNames(companies))

// (ii) - Get all employee names from all companies (single flat array).

// const getAllEmployee = (companyArray) => {
//   return companyArray.flatMap((item) => item?.employees.map(employee => employee?.name))
// }

// console.log(getAllEmployee(companies))

// (iii) Find all employees who earn more than 1,00,000.

// const findHighPaidEmployees = (companyArray) => {
//   const high_paid_employees_arr = companyArray.flatMap((item) => item?.employees.filter(employee => employee.salary >= 100000 ))

//   const high_paid_employees = high_paid_employees_arr.map(item => item?.name)

//   return high_paid_employees

// }

// console.log(findHighPaidEmployees(companies))

// (iv) Get a list of all unique roles across all companies.

// const getEmployeesRole = (companyArray) => {  
//   const employeeRoles =   companyArray.flatMap(item => item?.employees.map(item => item.role))
//   return [... new Set (employeeRoles)] 
//   }

// console.log(getEmployeesRole(companies))

// (v) Find all employees who have “Python” in their skills.

// const getPythonEmployees = (companyArray) => {
//   return companyArray.flatMap((item) => item?.employees?.filter(item => item?.skills.some( item => item.toLowerCase() == "python" ))).map(item => item.name )
// }

// console.log(getPythonEmployees(companies))

const users = [
  {
    id: 1,
    name: "Owais Nadeem",
    age: 23,
    address: {
      city: "Karachi",
      country: "Pakistan",
    },
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
    ],
    projects: [
      { title: "Portfolio Website", tech: ["React", "Tailwind"] },
      { title: "Quiz App", tech: ["JavaScript", "Firebase"] },
    ],
  },
  {
    id: 2,
    name: "Ayesha Khan",
    age: 25,
    address: {
      city: "Lahore",
      country: "Pakistan",
    },
    skills: [
      { name: "Figma", level: "Expert" },
      { name: "Adobe XD", level: "Intermediate" },
    ],
    projects: [
      { title: "UI Design System", tech: ["Figma"] },
      { title: "E-commerce Redesign", tech: ["Figma", "Photoshop"] },
    ],
  },
  {
    id: 3,
    name: "Ali Raza",
    age: 27,
    address: {
      city: "Islamabad",
      country: "Pakistan",
    },
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
    ],
    projects: [
      { title: "API Development", tech: ["Express", "MongoDB"] },
      { title: "Backend Integration", tech: ["Node.js", "REST API"] },
    ],
  },
];

// 🧠 LEVEL 1 — String Manipulation Basics

// (i) Convert all user names to uppercase and return the entire array after it with changed effects of name 

// const ConvertUpperCase = (array , key) => array.map((item) => 
// ({
//   ...item , 
//   [key] : item[key].toUpperCase()
// })
// )

// console.log(ConvertUpperCase(users , "name"))

// (ii) Get the initials of all users. (e.g. "Owais Nadeem" → "O.N.")

// const getInitialsOfUsers = (usersArray) => {
//   return usersArray.map(item => item.name.split(" ").map(word => word[0]).join(".") + "." )
// }

// console.log(getInitialsOfUsers(users))

// (iii) Find all users whose names include the letter "a" (case-insensitive)

// const findUsersHavingCharA = (array , key) => {
//   return array.filter((item) => item[key].toLowerCase().includes("a")).map(item => item?.name)
// }

// console.log(findUsersHavingCharA(users , "name" ))

// ------------------------------------------------------------------------- 

// Use of find method of array in JavaScript  

// console.log(users.map((item) => item?.skills.find((item) => item.level.toLowerCase() == "intermediate") ))