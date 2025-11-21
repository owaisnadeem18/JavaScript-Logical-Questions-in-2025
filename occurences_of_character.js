// ⭐ 5. Count how many times each character appears 

let str= "owais Nadeem"
let wordsArr = []

const countOccurences = (string) => {

    let case_sensitiveness = string.toLowerCase()

    let string_arr = case_sensitiveness.split("")
    
    let freq = {}

    for (let char of string_arr) {
        if (freq[char]) {
            freq[char]++        
        } 
        else {
            freq[char] = 1 
        }
    }

    return freq

}

console.log(countOccurences(str))