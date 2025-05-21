const students = [
  {id: 101,name: "ali Raza",course: "Web Development",semester: "5th"},
  {id: 102,name: "sara Khan",course: "Mobile App Development",semester: "4th"},
  {id: 103,name: "Usman Ahmed",course: "Data Science",semester: "6th"},
  {id: 104,name: "hira Sheikh",course: "Artificial Intelligence",semester: "7th"},
  {id: 105,name: "Bilal Aslam",course: "Cyber Security",semester: "3rd"}
];

// Separate the names of all the students in an array:

// const pushIntoArray = (AllStudents) => {

//     let newArr 
//     newArr = AllStudents.map((obj) => obj.name)

//     return newArr

// }

// console.log(pushIntoArray(students))

// More Shorter Way: 

// let PushIntoArray = AllStudents => AllStudents.map(obj => obj.name)

// console.log(PushIntoArray(students))

// ----------------------------- Question 02 ------------------------

const capitalizeName = (studentsArr) => {
  return studentsArr.map((obj) => obj.name[0].toUpperCase() + obj.name.slice(1))
}

console.log(capitalizeName(students))