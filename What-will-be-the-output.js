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

var a = 33
console.log(a)

// Output: 
// undefined (Because only variable hoisted not the value of the variable)


console.log(b)
let b = 45