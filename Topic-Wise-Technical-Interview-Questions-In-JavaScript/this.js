// 🔸 6. this Keyword (Inside Object)

// const user = {
//   name: "Ali",
//   getName: function () {
//     return this.name;
//   }
// };

// const getUser = user.getName;

// console.log(getUser()); // "this" becomes a global object because of calling the function by wrapping in another variable that's why we have this result as undefined state.

// Output: undefined (Because the function was not called independently , not directly the function was called)

// ⚠️ In JavaScript this depends on how the function is called, not where it was defined.

// function show() {
//   console.log(this);
// }

// show(); // 🟢 Non-strict: prints `window`

// "use strict";
// function showStrict() {
//   console.log(this);
// }

// showStrict(); // 🔴 Strict: prints `undefined`


// const user = {
//   name: "Ali",
//   getName: function () {
//     return this.name;
//   }
// };

// const getUser = user.getName; 
// console.log(getUser()) // (this is called as standalone function and in this case strict mode will be activated automatically that's why the result is undefined as "this" is undefined in strict mode of JavaScript)

// Note: 
// getUser() is called without an object context. In strict mode, this means this is undefined, so the function returns undefined


// "use strict"

// console.log(this) // window object

// "use strict"

// function test(){
//     console.log(this) 
// }

// test() // undefined (because of strict mode)