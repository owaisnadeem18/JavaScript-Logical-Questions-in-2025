let studentData = [
  {
    id: 1,
    name: "Ayesha Khan",
    age: 22,
    marks: [85, 90, 78],
    isGraduated: true,
    address: {
      city: "Lahore",
      country: "Pakistan"
    }
  },
  {
    id: 2,
    name: "Zaid Ahmed",
    age: 20,
    marks: [75, 65, 70],
    isGraduated: false,
    address: {
      city: "Karachi",
      country: "Pakistan"
    }
  },
  {
    id: 3,
    name: "Fatima Ali",
    age: 23,
    marks: [92, 88, 95],
    isGraduated: true,
    address: {
      city: "Islamabad",
      country: "Pakistan"
    }
  },
  {
    id: 4,
    name: "Usman Riaz",
    age: 21,
    marks: [45, 55, 60],
    isGraduated: false,
    address: {
      city: "Peshawar",
      country: "Pakistan"
    }
  }
];

// Task # 01 Find the marks Average of the students from this above array of the object


// Now show the results on UI 
document.querySelector("#entire-array").innerText = JSON.stringify( studentData , null ,2)  

const FindAverage = (Array_Of_Object) => {
    let Students_Average_Array = []
    
    Array_Of_Object.map((item) => {
        let one_Student_Total_marks = item.marks.reduce( (a , b) => a+b )
        let average = (one_Student_Total_marks * 100)/300
        Students_Average_Array.push({[item.name] : average.toFixed(2)})
    })
    
    document.getElementById("marks-avg-array").innerText = JSON.stringify(  Students_Average_Array)
    return Students_Average_Array

}

console.log(FindAverage(studentData))
