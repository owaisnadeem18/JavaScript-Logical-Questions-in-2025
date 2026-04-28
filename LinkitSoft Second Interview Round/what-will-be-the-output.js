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

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then(console.log);

// Output: 2 , 3

// Explanation: 
// The first .then() receives the resolved value 1 and adds 1 to it, resulting in 2. The second .then() receives this value (2), logs it to the console, and then returns 3. The final .then() receives the value 3 and logs it to the console.
