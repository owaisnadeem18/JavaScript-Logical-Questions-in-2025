// ***************************************************** // Function Hoisting: *****************************************************  

// ----------------------------------------------------------------------------------- 

// foo();
// bar();

// function foo() {
//     console.log("foo called");
// }

// var bar = function() {
//     console.log("bar called");
// }

// output: 
// foo called 
// TypeError: bar is not a function

// Reason:
// foo(); works → function declaration hoisted
// bar(); ❌ fails → only variable hoisted, not function body

// ----------------------------------------------------------------------------------- 

// Scope of variables:

// console.log(x);
// var x = 5; // undefined


// console.log(y); // Refrence Error , nor the variable nor the value hoisted in "let"
// let y = 10;

// console.log(z); // Refrence Error , nor the variable nor the value hoisted in "const" 
// const z = 20;

// ----------------------------------------------------------------------------------- 

// console.log(typeof NaN); // Number
// console.log(NaN === NaN); // false

// Hoisting of variables declared with var, let, and const:

// var a = 33
// console.log(a)

// Output: 
// undefined (Because only variable hoisted not the value of the variable)


// console.log(b)
// let b = 45

// if (true) {
//   var x = 5;
//   let y = 10;
// }

// console.log(x); // 5
// console.log(y); // Not Defined

// 🧩 Shadowing (Tricky One 😎)

// let count = 10;
// {
//   let count = 20;
//   console.log(count); // 20
// }
// console.log(count); // 10

// Output: 
// 20 
// 10 

// 🧩 Illegal Shadowing (Advanced)

// let a = 10;

// {
//   var a = 20; // SyntaxError: Identifier 'a' has already been declared
// }

// 🧩 Function Declaration vs let Variable

// greet(); // Hello
// function greet() {
//   console.log("Hello");
// }

// sayHi(); // TypeError: sayHi is not a function (if we init) 
// var sayHi = function() {
//   console.log("Hi");
// };

// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization . 
// let sayHi = function() {
//   console.log("Hi");
// };

