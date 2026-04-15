// 🔥 1. Array / Object Logic (VERY IMPORTANT):

// ✅ Q1: Find first non-repeating element:

// [4,5,1,2,0,4]

const array = [4,5,1,2,0,4]

const firstNonRepeatingElement = (a) => {

    let counts = {}

    for (let r = 0 ; r < a.length ; r++) {
        let element = a[r]

        if (counts[element]) {
            counts[element]++
        }

        else {
            counts[element] = 1
        }

    }

    for (let i = 0 ; i < a.length ; i++) {
        let element = a[i]

        if (counts[element] === 1) {
            return element
        }

    }

}

console.log(firstNonRepeatingElement(array))


// Expected Output: 5