// 🧠 Problem Statement:
// Write a function in JavaScript that takes a string as input and returns the number of vowels (a, e, i, o, u) in that string.

function CountVowels (str) {

    let count_of_vowel_words = 0

    let vowelsArr = ["a" , "e", "i" , "o" , "u"]

    let splitted_str = str.toLowerCase().split("")

    for (let char of splitted_str) {
        if (vowelsArr.includes(char)) {
            count_of_vowel_words += 1
        }
    }

    return count_of_vowel_words

}

console.log(CountVowels("Owais"))