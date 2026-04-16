// Question #04 (VERY IMPORTANT - Asked a lot)
// 🔍 Group Anagrams

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagrams = (arr) => {

    let obj = {}
    

    for (let i = 0 ; i< arr.length ; i++) {
        
        let word = arr[i] // "eat"

        let key = arr[i].split("").sort().join("") // "aet"

        if (obj[key]) { // condition fails in the first iteration
            obj[key].push(word)
        }
        else {
            obj[key] = [word] 
        }

    }

    return Object.values(obj)

}

console.log(groupAnagrams(arr))



// Output:
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

// 👉 Concept:

// Sorting + HashMap