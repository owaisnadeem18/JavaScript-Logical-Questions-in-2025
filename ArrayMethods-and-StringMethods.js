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

const companies = [
  {
    id: 1,
    name: "TechVerse",
    location: "Karachi",
    employees: [
      {
        id: 101,
        name: "Owais Nadeem",
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        salary: 95000,
        email: "owais@techverse.com",
      },
      {
        id: 102,
        name: "Ayesha Khan",
        role: "UI/UX Designer",
        skills: ["Figma", "Adobe XD", "Photoshop"],
        salary: 85000,
        email: "ayesha@techverse.com",
      },
    ],
  },
  {
    id: 2,
    name: "DataNinjas",
    location: "Lahore",
    employees: [
      {
        id: 201,
        name: "Ali Raza",
        role: "Backend Developer",
        skills: ["Node.js", "Express", "MongoDB", "REST API"],
        salary: 110000,
        email: "ali@dataninjas.com",
      },
      {
        id: 202,
        name: "Sara Ahmed",
        role: "Data Analyst",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
        salary: 105000,
        email: "sara@dataninjas.com",
      },
    ],
  },
  {
    id: 3,
    name: "AIVision",
    location: "Islamabad",
    employees: [
      {
        id: 301,
        name: "Hassan Javed",
        role: "Machine Learning Engineer",
        skills: ["Python", "TensorFlow", "Scikit-learn"],
        salary: 130000,
        email: "hassan@aivision.com",
      },
    ],
  },
];

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

