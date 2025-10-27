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

// async function foo() {
//   console.log("start");
//   setTimeout(() => console.log("timeout"), 0);
//   await Promise.reject("error").catch(() => console.log("caught"));
//   console.log("end");
// }

// foo();
// console.log("after");

// Output:

// start
// after
// caught
// end
// timeout

// Q.4 

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// Output: 
// A
// D
// C
// B

// Q.5 

// async function test() {
//   console.log("1");
//   await console.log("2");
//   console.log("3");
// }

// test();
// console.log("4");

// Explanation : 

// await stops the code and in the backend event loop will run the console.log(4) before running console.log(3)

// Q.6 

// Promise.resolve()
//   .then(() => {
//     console.log("1");
//     return Promise.resolve("2");
//   })
//   .then((res) => console.log(res));

// console.log("3");

// Output: 
// 3
// 1
// 2
// 2
// 3

// ---------------------------------------------------- Advanced Technical & Logical Interview Questions of JavaScript ----------------------------------------------------- 

// 1. 

// function counter() {
  //   let count = 0;
  //   return function() {
    //     return count++; // will do increament , but return the same number i.e count 0 in the initial function call 
    //   };
    // }
    
    // const c = counter();
// console.log(c()); // 0
// console.log(c()); // 1
// console.log(c()); // 2

// 2. 

// function counter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const c = counter();
// console.log(c()); // 1
// console.log(c()); // 2
// console.log(c()); // 3

// function makeCounters() {
//   let count = 5;

//   return {
//     inc: () => count++,
//     preInc: () => ++count
//   };
// }

// const obj = makeCounters();

// console.log(obj.inc());   // 5
// console.log(obj.preInc()); // 7
// console.log(obj.inc());   // 7
// console.log(obj.preInc()); // 9

// 3.

// Pre/Post Mix Inside One Closure

// function tricky() {
//   let num = 1;
//   return function() {
//     return num++ + ++num;
//   };
// }

// const t = tricky();
// console.log(t()); // 4
// console.log(t()); // 8

// 4.

// function counter() {
//   let x = 1;
//   return function inner() {
//     return function deeper() {
//       return x++ + ++x + x++;
      
//       // --------- first iteration ---------
//       // 1 + 3 + 3
//       // => result => 7 
      
//       // --------- second iteration ---------
//       // 4 + 6 + 6 
//       // => result => 16 
      
//     };
//   };
// }

// const c = counter();
// const d = c();
// console.log(d()); // 7
// console.log(d()); // 16

// 5. 

// {
//   console.log(foo);
//   function foo() { return 1; }
// }

// console.log(foo());

// Output:
// [Function: foo]
// 1

// Async/Await Order Puzzle

// async function run() {
//   console.log('1');
//   await Promise.resolve(console.log('2'));
//   console.log('3');
// }

// run();

// console.log('4');

// Output:
// 1
// 2
// 4
// 3

// --------------------------------------------- Async Chain Mix ---------------------------------------------

// console.log('A');

// setTimeout(() => console.log('B'), 0);

// await Promise.resolve().then(() => {
//   console.log('C');
//   setTimeout(() => console.log('D'), 0);
// });

// console.log('E');

// Output: 
// A 
// C
// E
// B
// D

// console.log('A');

// setTimeout(() => console.log('B'), 0);

// // If we have a promose without (await)

// Promise.resolve().then(() => {
//   console.log('C');
//   setTimeout(() => console.log('D'), 0);
// });

// console.log('E');

// Output: 
// A 
// E
// C
// B
// D

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = outer();
// counter1();
// counter1();

// const counter2 = outer();
// counter2();


// Output : 
// 1 
// 2
// 1 

// Another Question 

// let name = "Global";

// function outer() {
//   let name = "Outer";
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }

// const fn = outer();
// fn();

// Output: 
// Outer

// Another Question 

// function makeCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const c1 = makeCounter();
// const c2 = makeCounter();

// console.log(c1());
// console.log(c1());
// console.log(c2());

// Output: 
// 1 
// 2 
// 1 

// Another Question

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//     x++;
//   }

//   return inner;
// }

// const fn1 = outer();
// const fn2 = fn1;

// fn1(); // 10
// fn2(); // 11

// -------------------------------------- 

// — Independent Closures

function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const x = createCounter();
const y = createCounter();

x(); // 1
y(); // 1
x(); // 2
y(); // 2