// Question 1 — Chained Closures

// function outer(a) {
//   return function(b) {
//     return function(c) {
//       console.log(a + b + c);
//     };
//   };
// }

// outer(1)(2)(3);

// 💡 Concept: Nested closures, each preserving its own lexical scope

// Output:
// 6 

// — Function Hoisting & Overriding

// function test() {
//   console.log(foo);
//   var foo = "Hello";
//   console.log(foo);
//   function foo() {}
//   console.log(foo);
// }
// test();

// Output:

// [Function: foo]
// Hello
// Hello

// ------------------------------------ 

// ⚡ — this + setTimeout Trap

// const obj = {
//   name: "Owais",
//   greet() {
//     setTimeout(function() {
//       console.log(this.name);
//     }, 0);
//   }
// };

// obj.greet();

// The Concept of "this": 

// In JavaScript, this is a special keyword that refers to the object that is currently executing the function. 

// this refers to who is calling the function. 

// 🧩 1️⃣ Global Context 
// console.log(this)

// ✅ In Browser:
// this refers to the window object.

// ✅ In Node.js:
// this refers to the global object (or {} in modules).

// 🧩 2️⃣ Inside a Function (Regular Function) 

"use strict"

// function showThis() {
//   console.log(this);
// }

// showThis(); // undefined

// -------------- 

// function showThis() {
//   console.log(this);
// }

// showThis(); // window object if there is non-strict means normal mode 

// 🧩 3️⃣ Inside a Method (Function inside an Object)

const person = {
  name: "Owais",
  greet() {
    console.log(this.name);
  },
};

person.greet(); // "Owais"