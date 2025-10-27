// Question 1 — Chained Closures

function outer(a) {
  return function(b) {
    return function(c) {
      console.log(a + b + c);
    };
  };
}

outer(1)(2)(3);

// 💡 Concept: Nested closures, each preserving its own lexical scope

// Output:
// 6 