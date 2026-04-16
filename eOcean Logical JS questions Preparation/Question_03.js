// 🔍 Find first non-repeating element
// // Input: [3, 4, 5, 3, 4, 6]
// // Output: 5

const arr = [3, 4, 5, 3, 4, 6];

const findFirstNonRepeatingElem = (array) => {
  const count = {};

  for (let i = 0; i < array.length; i++) {
    let elem = array[i];

    if (count[elem]) {
      count[elem]++;
    } else {
      count[elem] = 1;
    }
  }

  for (let i = 0 ; i < array.length ; i++) {
        if (count[array[i]] === 1) {
            return array[i]
        }
    }

};

console.log(findFirstNonRepeatingElem(arr));
