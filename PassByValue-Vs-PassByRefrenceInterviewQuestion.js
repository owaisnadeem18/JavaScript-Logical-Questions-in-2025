let obj1 = { name: "Owais" };
let obj2 = obj1;

obj2.name = "Ali";
obj2 = { name: "Ahmed" };

console.log(obj1.name); // ?
// Output: Ali

console.log(obj2.name);
// Output: Ahmed
