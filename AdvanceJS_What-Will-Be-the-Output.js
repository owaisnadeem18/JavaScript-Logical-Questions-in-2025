// ⚙️ Advanced JavaScript “What will be the output?” Questions

// 1. Closures + var/let confusion:

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// ❓ What will be the output?

// Output:
// 3 
// 3 
// 3 

// Explanation: 
// var is function-scoped, not block-scoped.
// This means there is only one i variable shared across the whole loop — not a new i for each iteration.

// 2. Using let instead of var

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// ❓ What will be the output?

// Output:
// 0 
// 1 
// 2 
