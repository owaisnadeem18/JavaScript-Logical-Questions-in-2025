// const string = "Owais Nadeem"

// const countOcc = (str) => {
    
//     const obj = {}

//     let trimmed_str = str.split(" ").join("")

//     for (let char of trimmed_str) {
//         obj[char] = (obj[char] || 0) + 1
//     }

//     return obj

// }

// console.log(countOcc(string))

// -------------- Find the most frequent elements in the array ----------- 

const string = "Owais Nadeem"

const countOcc = (str) => {
    
    const obj = {}
    let max_count = 0
    let most_freq_elem = []

    let trimmed_str = str.toLowerCase().split(" ").join("")

    for (let char of trimmed_str) {
        obj[char] = (obj[char] || 0) + 1
        
        if (obj[char] > max_count) {
            max_count = obj[char]
            most_freq_elem = [char]
        } else if (obj[char] == max_count) {
            most_freq_elem.push(char)
        }

    }

    return [obj , most_freq_elem , max_count]

}

console.log(countOcc(string))



