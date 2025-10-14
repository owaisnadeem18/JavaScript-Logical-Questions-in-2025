// Here , we have to solve logical questions of JavaScript with array iteration loop and strings;

// 1. Write a function to extract all palindromic words from a sentence.

const sentence = "madam and racecar are level words but apple is not"

const FindPalindromic = (sent) => {

    const wordsArray = sent.split(" ")

    const filteredWords = wordsArray.filter((word) => {
        const reversedWord = word.split("").reverse().join("")
        return reversedWord == word
    })

    return filteredWords

}

console.log(FindPalindromic(sentence))