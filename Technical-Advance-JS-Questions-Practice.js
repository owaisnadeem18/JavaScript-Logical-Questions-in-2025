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

// ---------------------------------------------------------------------------- 

// Difference between let , var & const

// 1. Scope:

// var: Available throughout the entire function where it’s declared. Ignores block {} boundaries.
// let:	(Block-scoped) => Accessible only within the block {} it’s declared in.
// const (Block-scoped) => Same as let, but value cannot be reassigned.

// 2. Hoisting: 

// All three (var, let, const) are hoisted — but initialized differently.

// Keyword	Hoisted?	Initialized?	Result
// var	✅ Yes	✅ Initialized with undefined	Accessible before declaration (undefined).
// let	✅ Yes	❌ Not initialized	Accessing before declaration → ❌ Temporal Dead Zone (TDZ)
// const	✅ Yes	❌ Not initialized	Same TDZ behavior as let.

// Reassignment: 

// var: Reassignment ->(Yes) Yes -> Redeclaration (Yes)
// let: Reassignment ->(Yes) & Redeclaration ->(No)
// const: Reassignment ->(No) & Redeclaration ->(No) -------------> Even Redeclaration is also not allowed. 

// -------------------------------------------------------------------------------------- 

// ⚡ JavaScript Scope & Hoisting Questions (Interview Practice) 

// 🧩 Question 1 — Basic Block Scope 

// if (true) {
//   var x = 10;
//   let y = 20;
//   const z = 30;
// }

// console.log(x);
// console.log(y);
// console.log(z);

// Output: 
// 10 
// can not access 'y' before initialization => Refrence Error 
// can not access 'z' before initialization => Refrence Error

// 🧩 Question 2 — Function vs Block Scope

// function test() {
//   if (true) {
//     let a = 1;
//     var b = 2;
//   }
//   console.log(a);
//   console.log(b);
// }

// test();

// Output: 
// can not access 'a' before initialization => Refrence Error
// 2

// 🧩 Question 3 — Hoisting Behavior

// console.log(x);
// console.log(y);

// var x = 5;
// let y = 10;

// Output: 
// undefined
// can not access 'y' before initialization => Refrence Error

// 🧩 Question 4 — Temporal Dead Zone (TDZ)

// {
//   console.log(a); // ?
//   let a = 10;
// }

// Output: 
// can not access 'a' before initialization => Refrence Error

// 🧩 Question 5 — Redeclaration

// var a = 1;
// var a = 2;


// let b = 3;
// let b = 4;

// Will throw an error , because the blocked scope variable can not be redeclared

// ------------------------------------------------------------------------------------------ 

// 🧩 1. Function Hoisting
// ❓Question:

// greet();

// function greet() {
//   console.log("Hello World!");
// }

// Output: 
// Hello World 

// 🧩 2. Function Expression Hoisting
// ❓Question:

// sayHi();

// var sayHi = function () {
//   console.log("Hi!");
// };

// Output: 
// Type Error (is not a function)