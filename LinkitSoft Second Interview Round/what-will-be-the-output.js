// const arr = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25},
//     {name: "Doe", age: 35}
// ];

// // for map: 

// const mapping_arr = arr.map(item => item.age < 30)

// const filtering_arr = arr.filter(item => item.age > 30)

// console.log(mapping_arr) // will print (either true or not in a new array)

// console.log(filtering_arr) // will return the objects , which meet the condition.

// ------- *** ------

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();
// fn();
// fn();
// fn();

// output: 1 , 2 , 3 

// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => {
//     console.log(x);
//     return x + 1;
//   })
//   .then(console.log);

// Output: 2 , 3

// Explanation: 
// The first .then() receives the resolved value 1 and adds 1 to it, resulting in 2. The second .then() receives this value (2), logs it to the console, and then returns 3. The final .then() receives the value 3 and logs it to the console.

// const arr = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];

// const [a, b, ...rest] = arr;

// const sum = arr.reduce((acc, val) => acc + val, 0);

// console.log(sum)

const arr1 = [1, 2, 3];

const arr2 = [...arr1]

// console.log(arr1 == arr2) // Output: false because both of them are stored at different memory locations

// // Reason: 
// // Spread Operator creates a new memory location for the new array and it copies all the elements of the original array into the new one. So, both "arr1" and "arr2" are stored at different memory locations and they are not equal to each other because Objects/arrays are compared by reference, not by value. (shallow copy)

// console.log(arr1 === arr2) // reference check
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2)) // value check

// console.log(JSON.stringify(arr1)) // Output: [1,2,3]
// console.log(JSON.stringify(arr2)) // Output: [1,2,3]

const obj = { name: "Ali", age: 25 };

console.log(typeof obj) // Output: object
console.log(typeof JSON.stringify(obj)); // Output: string