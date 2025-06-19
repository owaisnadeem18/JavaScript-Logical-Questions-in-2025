let studentData = [
  {
    id: 1,
    name: "Ayesha Khan",
    age: 22,
    marks: [85, 90, 78],
    isGraduated: true,
    address: {
      city: "Lahore",
      country: "Pakistan",
    },
  },
  {
    id: 2,
    name: "Zaid Ahmed",
    age: 20,
    marks: [75, 65, 70],
    isGraduated: false,
    address: {
      city: "Karachi",
      country: "Pakistan",
    },
  },
  {
    id: 3,
    name: "Fatima Ali",
    age: 23,
    marks: [92, 88, 95],
    isGraduated: true,
    address: {
      city: "Islamabad",
      country: "Pakistan",
    },
  },
  {
    id: 4,
    name: "Usman Riaz",
    age: 21,
    marks: [45, 55, 60],
    isGraduated: false,
    address: {
      city: "Peshawar",
      country: "Pakistan",
    },
  },
];

// Task # 01 Find the marks Average of the students from this above array of the object

// Now show the results on UI

// const FindAverage = (Array_Of_Object) => {
//     let Students_Average_Array = []

//     Array_Of_Object.map((item) => {
//         let one_Student_Total_marks = item.marks.reduce( (a , b) => a+b )
//         let average = (one_Student_Total_marks * 100)/300
//         Students_Average_Array.push({[item.name] : average.toFixed(2)})
//     })

//     return Students_Average_Array

// }

// console.log(FindAverage(studentData))

function getPassedStudents(studentData) {
  let passed_students = []
  let students_Avg = [];
  studentData.map(item => {
    let obtained_Marks =  item.marks.reduce((a, b) => a + b)
    let students_percentage = (obtained_Marks * 100)/300
    students_Avg.push({[item.name] : students_percentage.toFixed(2)})
}
);

    passed_students = (students_Avg.filter(item => parseFloat(Object.values(item)[0]) > 80  ))
    
    return passed_students

}

console.log(getPassedStudents(studentData));
