// Technical Interview Question – Practice

// ---------------------------- Question # 02 ---------------------------- 

// 🔍 Problem Statement:

// You are given an array of integers.
// Your task is to find all the elements that appear more than once in the array.

// 👉 Each repeated element should appear only once in the output.

// 📌 Example:

// Input:
// [3, 4, 5, 63, 4, 5, 3, 1]

// Output:
// [3, 4, 5]

const array = [3, 4, 5, 63, 4, 5, 3, 1]

const showRepeatedElements = (arr) => {

    const count = {}
    let result = []

    for (let i = 0 ; i < arr.length ; i++) {
        
        if (count[arr[i]]) {
            count[arr[i]]++
        }
        else {
            count[arr[i]] = 1    
        }



    }   

    for (let key in count) {
        if (count[key] > 1) {
            result.push(Number(key))
        }

    }

    return result
 
}

console.log(showRepeatedElements(array))