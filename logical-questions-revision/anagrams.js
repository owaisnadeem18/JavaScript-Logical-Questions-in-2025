// 7. Check if two strings are anagrams 

// Example: "listen" & "silent"

let str1 = "silent"
let str2 = "listen"

const checkAnagrams = (string1 , string2) => {
    
    if (string1.length !== string2.length) {
        return "Non Anagrams"

    }
        
    let sorted_str1 = string1.split("").sort().join("")
    let sorted_str2 = string2.split("").sort().join("")
    
    return sorted_str1 == sorted_str2 ? "Anagrams" : "Non Anagrams"
         
}

console.log(checkAnagrams(str1 , str2))