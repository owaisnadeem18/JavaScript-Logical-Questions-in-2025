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

// 3. Async + await + setTimeout combo

// async function test() {
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
//   await Promise.resolve();
//   console.log("3");
// }

// test();
// console.log("4");

// Output: 
// 1 
// 4 
// 3 
// 2 

// ⚙️ Event Loop – Advanced Practice Set #2

// Q.1

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// queueMicrotask(() => console.log("D"));

// console.log("E");

// Output: 

// A 
// E 
// C 
// D 
// B 

// Q.2

// async function one() {
//   console.log(1);
//   await two();
//   console.log(2);
// }

// async function two() {
//   console.log(3);
// }

// one();
// console.log(4);

// Output: 

// 1 
// 3 
// 2 
// 4 

// Q.3 

async function foo() {
  console.log("start");
  setTimeout(() => console.log("timeout"), 0);
  await Promise.reject("error").catch(() => console.log("caught"));
  console.log("end");
}

foo();
console.log("after");

// Output:

// start
// after
// caught
// end
// timeout