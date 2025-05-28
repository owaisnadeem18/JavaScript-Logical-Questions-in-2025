// Find the total number of occurences of alphabets in a string

let str = "owais Nadeem"

findOcc = string => {
    let AllStrings = string.toLowerCase()
    let splitted_str = AllStrings.split("")
    
    let obj = {
    
    }

    splitted_str.forEach((item) => {

        if (obj.hasOwnProperty(item)) {
            obj[item]++
        }
        
        else {
            obj[item] = 1
        }

    })

    return obj

}

console.log(findOcc(str))