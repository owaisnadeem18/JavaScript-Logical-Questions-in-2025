// 1. --------------------------------

// let a = [1, 2, 3];
// let b = [1, 2, 3];

// console.log(a == b);

// Output => false (Because the memory refrence would not be same for object and array and JavaScript only checks this memory reference)

// 2. --------------------------------

// let x = [1, 2, 3];
// let y = x;

// console.log(x == y); // true (Necause the memory refrence is same , both elements are pointing at the same memory location in memory)


// 3. --------------------------------

// 🔸 1. Arrays (Reference vs Value)
// javascript

// let a = [1];
// let b = a;
// a.push(2);

// console.log(b);

// Output: [1 , 2] (because b is not a new array , it copies the refrence of array "a" from the memory location) 


// 4. --------------------------------

// let a = [1];
// let b = [...a];
// a.push(2);

// console.log(b);

// Output: [1] because it only saves the value of a (not refrence from the memory)


// 5. --------------------------------

// 🔸 2. Objects (Shallow Copy Confusion)

// let obj1 = { name: "Ali" };
// let obj2 = { ...obj1 };
// obj2.name = "Ahmed";

// console.log(obj1.name);

// Output: Ali (Because shallow copy created in this case and obj2 is another object , copied the primitive values only , but in case of modify it will not modify the original one )

// 🔸 3. Objects (Shallow Copy Drawback)

// let obj1 = { person: { name: "Ali" } };
// let obj2 = { ...obj1 };

// obj2.person.name = "Ahmed";

// console.log(obj1.person.name); 

// Output: Ahmed (It modified the original one , because of nested object , it copied the refrence of it in memory)

// 🔸 5. Hoisting (Function vs Variable)

// console.log(myVar);
// var myVar = 5;

// Output: undefined (Because the value has not been initialized but the variable has been declared because of var , it has been hoisted)

// 🔸 5. Hoisting (Function vs Variable)

// console.log(myVar);
// let myVar = 5;

// Output: Error (Because the value has not been hoisted , because of let variable and it will give value error , it does not know who actually is myVar , this is not defined)

// Output:
// ❌ ReferenceError: Cannot access 'myVar' before initialization

// let myVar;
// console.log(myVar);

// Output: undefined

// ------------------------------------------- Mcq's related to const: -------------------------------------------

// 3. Which statement about const is TRUE?
// A. const variables can be reassigned.
// B. const variables must be initialized at declaration.
// C. const is function scoped.
// D. const is hoisted and initialized with undefined.

// ✅ Answer: B
// Explanation: const variables must be initialized at

// ------------------------------------------- Logical and blocked scope Output questions -------------------------------------------

// 1.

// {
//   let x = 5;
// }
// console.log(x);

// output: Refrence Error => not defined (Explanation: let is block-scoped. Outside block, it's not accessible.)

// 2. 

// {
//   var x = 5;
// }
// console.log(x);

// output: 5 (Because of var) Explanation: var is function-scoped, not block-scoped, so x is accessible outside the block.

// 3. 

const a = 10;
a = 2
console.log(a); // ❌ ReferenceError