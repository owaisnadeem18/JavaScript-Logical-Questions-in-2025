function postIncrementReturn() {
  let count = 5;
  return count++; // returns 5, then increments count to 6 (but function already returned)
}

function postIncrementSeparateReturn() {
  let count = 5;
  count++;       // increments count to 6
  return count;  // returns 6
}

console.log(postIncrementReturn());        // Output: 5
console.log(postIncrementSeparateReturn()); // Output: 6
