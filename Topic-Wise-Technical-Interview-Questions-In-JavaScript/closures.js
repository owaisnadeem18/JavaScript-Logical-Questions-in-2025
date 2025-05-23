// 🔸 5. Closures

function outer() {
  let count = 10;
  return function () {
    count++;
    return count;
  };
}

let counter = outer();
console.log(counter()); // Output: 11 (Returned incremented value , because the count++ was not directly returned here)
console.log(counter()); // Output: 12 (Returned incremented value , because the count++ was not directly returned here)

// Explanation: This is post increment it will print first , then will do the increment 
