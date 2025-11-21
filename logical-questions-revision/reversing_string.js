// 1. Reverse a string without using reverse() 

let str = "Owais Nadeem"

function reversingString (string) {
    let splitted_str = string.split("")

    let reversed_string_arr = []

    for (let i = splitted_str.length -1 ; i >= 0 ; i--) {
        reversed_string_arr.push(splitted_str[i])
    }

    return reversed_string_arr.join("")
    
} 

console.log(reversingString(str))