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

let obj1 = { name: "Ali" };
let obj2 = { ...obj1 };
obj2.name = "Ahmed";

console.log(obj1.name);

// Output: Ali