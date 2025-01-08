// Problem: Anagram Checker

// Write a JavaScript function that takes two strings as inputs and determines if they are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency, but the order of characters can differ.

const AnagramChecker = (x , y) => {

     if (x.split("").length == y.split("").length) {
        let splitted_a = x.toLowerCase().split("").sort().join("")
        let splitted_b = y.toLowerCase().split("").reverse().sort().join("")

        if (splitted_a == splitted_b) {
            return `These words "${x.toLowerCase()}" & "${y.toLowerCase()}" are anagrams`
        }
        else {
            return "These are non anagrams"
        }

        return result
     }
     else {
        alert('Both of the words are non anagrams')
     }

}

console.log(AnagramChecker(a = "Listen" , b = "silent"))