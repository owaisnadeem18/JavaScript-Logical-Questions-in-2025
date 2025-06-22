let a = 5;

function addTen(x) {
  x = x + 10;
  console.log("Inside function:", x); // 15
}

addTen(a);
console.log("Outside function:", a); // 5
