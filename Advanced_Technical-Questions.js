// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// My Output: 
// 0
// 1
// 2 

// Correct Answer: 

// 3 
// 3 
// 3 

// Explanation: Because setTimeOut is an async function , it will run after 1000 mil sec and the loop will turn it's value to 3 and will print 3 in each call.

// for (var i = 0; i < 3; i++) {
//   function log() {
//     console.log(i);
//   }
//   log();
// }

// My Output: 

// 0 
// 1 
// 2

// Above is Corrected Answer Output 


// 🔹 Q: Closure with setTimeout inside for loop using var

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// My Output:

// 3
// 3
// 3

