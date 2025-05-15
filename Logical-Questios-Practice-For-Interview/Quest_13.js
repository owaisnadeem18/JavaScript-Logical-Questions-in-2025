// Write a JavaScript function to count the occurences of any specified character in a word

const countOcc = (str) => {

    let occurences = {}

    str.trim().split("").forEach(function(a) {
        if (a===" ") return
        if (occurences.hasOwnProperty(a)) {
            occurences[a]++
        }
        else {
            occurences[a] = 1
        }
    })

    return occurences

}

console.log(countOcc("Owais Nadeem"))