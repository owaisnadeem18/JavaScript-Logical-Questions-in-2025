// Problem: Longest Substring Without Repeating Characters

// For example: 

// abcbbaac

let string = "abcbbaac"


let FindLongestSubString = (a) => {
    let longest = ""
    let current = ""

    for (let char of a) {
        if (current.includes(char)) {
            current = current.slice(current.indexOf(char) +1)
        }

        current += char 

        if (current.length > longest.length) {
            longest = current
        }

    }

    return longest

} 

console.log(FindLongestSubString(string))