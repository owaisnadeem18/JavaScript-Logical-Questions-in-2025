let a = 56;
let b = 42;

console.log("Before Swap =>", "a:", a, "b:", b);

[a, b] = [b, a];  // ✅ Destructuring to swap

console.log("After Swap =>", "a:", a, "b:", b);