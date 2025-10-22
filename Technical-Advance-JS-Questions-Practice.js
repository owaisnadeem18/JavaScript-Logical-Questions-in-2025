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

// 🧩 3. this inside a Function
// ❓Question:

// const obj = {
//   name: "Owais",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// const fn = obj.getName;
// fn();

// Output: 
// undefined

// obj.getName()

// Output: 
// Owais

// Closures
// function outer() {
//   let count = 0;
//   return function() {
//     count++; // inner function updates the outer variable
//     console.log(count); // it prints (1) and it will remember this variable
//   }
// }

// const inner = outer();
// inner(); the count was 1 because the run as outer()
// inner(); now we passed 1 as count (when the function run it will print 2)

// Ouput: 
// 1
// 2 

// Explanation: 

// First call inner() → count becomes 1 → prints 1.

// Second call inner() → the same count variable is incremented → becomes 2 → prints 2.

// Key Rule:
// (i) Variables declared inside the inner function → reset on every call.
// (ii) Variables declared inside the outer function → remembered by the closure.

// ⚙️ Closures and Function Scope

// function makeCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// Output: 
// 1
// 2
// 1

// Why not 1, 2, 3?

// Because closures are independent.
// Each time you call makeCounter(), a new environment is created with its own count.
// So counter1 and counter2 don’t share state — they each remember their own copy.

// – The Tricky Loop + Closure Combo

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Output:
// 3
// 3
// 3

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Output:
// 0
// 1
// 2

// for (const i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Assignment to constant variable is not possible (will throw an error here)

// for (let i = 0; i < 3; i++) {
//    console.log(i);
// }

// 🧩 2. Closures + var vs let

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 100);
// }

// ❓ Why are the two loops different?

// In the case of var , redeclaration and reassignment of the variable is possible , so that's why when there is a timeout of 1 second , then the loop will run and the value of var will get 3 which will print , while in the case of 'let' we will see that let is Block Scoped let creates a new variable for each iteration of the loop (due to block scoping). So each callback "remembers" its own value of j via closure.

// Output: 

// 3
// 3
// 3
// 0
// 1
// 2