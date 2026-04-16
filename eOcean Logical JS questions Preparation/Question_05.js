// Question #05 (VERY IMPORTANT - Frequency + Logic)
// 🔍 Find most frequent element in array

const arr = [1, 2, 2, 3, 3, 3, 4]

const findMostFrequentElem = (arr) => {

    const obj = {}

    let count = 0
    result = null;

    for (let i = 0 ; i < arr.length ; i++) {

        let key = arr[i]

        if (obj[key]) {
            obj[key]++
        }
        else {
            obj[key] = 1
        }

    }

    for (let key in obj) {
        if (obj[key] > count) {
            count = obj[key]
            result = key
        }
            
    }

    return `The most frequent element is ${result} and it appears ${count} times`


}

console.log(findMostFrequentElem(arr))


// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: 3