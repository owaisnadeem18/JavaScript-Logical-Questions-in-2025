// Here’s our first advanced batch (Level 1 – Async & Execution Order) 👇 

// 🧩 Question # 01

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// Output: 
// A 
// D 
// C 
// B 

// 🧩 Question # 02

// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }
// test();
// console.log("3");

// Output: 
// 1 
// 3 
// 2 

// 🧩 Question #3
// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.reject("error")
//   .catch(() => console.log("caught"))
//   .then(() => console.log("then after catch"));

// console.log("end");

// Output: 
// start
// end
// caught
// then after catch
// timeout

// 🧩 Question # 04

// function foo() {
//   console.log(a);
//   var a = 5;
//   console.log(a);
// }

// foo();

// 🧠 What is the output?
// (Hint: Think hoisting.)

// Output:

// undefined 
// 5 

// 🧩 Question # 05 

// let a = 10;

// {
//   console.log(a);
//   let a = 20;
// }

// 🧠 What will happen here — output or error? Why?

// Output: 
// "Error can not use variable 'a' before initialization" (because variable 'a' has data type 'let' which is of block scope)