// Function Hoisting: 

foo();
bar();

function foo() {
  console.log("foo called");
}

var bar = function() {
  console.log("bar called");
}

