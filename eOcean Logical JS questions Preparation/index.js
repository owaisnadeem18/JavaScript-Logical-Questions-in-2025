// 🔥 1. Array / Object Logic (VERY IMPORTANT):

// ✅ Q1: Find first non-repeating element:

// [4,5,1,2,0,4]

const array = [4,5,1,2,0,4]

const firstNonRepeatingElement = (arr) => {

    let count = {}

    for (let i = 0 ; i < arr.length ; i++) {

        if (count[arr[i]]) {
            count[arr[i]]++
        } else {
            count[arr[i]] = 1
        }

    }

    for (let i = 0 ; i < arr.length ; i++) {
        let element = arr[i]

        if (count[element] === 1) {
            return element
        }

    }

    return -1

}

console.log(firstNonRepeatingElement(array))

// Expected Output: 5